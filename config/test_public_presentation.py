"""Guard the public demo boundary in source HTML, metadata, and documentation.

These checks prevent known misleading claims from returning. They do not certify
legal compliance or verify the content of externally deployed websites.
"""
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parent.parent
NBS_LAW = 'https://www.nbs.rs/export/sites/NBS_site/documents/propisi/zakoni/kpb_banke_2025.pdf'
NBS_GUIDE = 'https://www.nbs.rs/sr/finansijske-institucije/banke/osnivanje-i-saglasnosti/'
STATUS = 'bez dozvole nbs za rad banke'
PROHIBITED = (
    r'profesionaln\w* svetsk\w* bank\w*',
    r'sara[đd]ujemo sa svim',
    r'saradnj[au] (?:ima )?sa svim bankama',
    r'vaša sredstva i podaci su zaštićeni',
    r'digitalna filijala',
    r'\bo banci\b',
    r'\b(?:190\+ zemalja|50b\+|10m\+ klijenata|5m\+ klijenata)\b',
    r'\b(?:otvori(?:te)? ra[čc]un|open account|uplati(?:te)? sada)\b',
    r'kripto menjačnica sa najviše valuta',
)


def normalize(text):
    return ' '.join(text.casefold().split())


class PublicHTML(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.meta = {}
        self.ids = []
        self.tags = []
        self.notice = []
        self.notice_attrs = None
        self.notice_depth = 0
        self.suppressed = 0
        self.links = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag in ('script', 'style'):
            self.suppressed += 1
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content', '')
        if tag == 'a':
            self.links.append(attrs.get('href', ''))
        if self.notice_depth:
            if tag not in ('br', 'hr', 'img', 'input', 'meta', 'link'):
                self.notice_depth += 1
        elif attrs.get('id') == 'project-status':
            self.notice_attrs = attrs
            self.notice_depth = 1

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.suppressed -= 1
        if self.notice_depth:
            self.notice_depth -= 1

    def handle_data(self, data):
        if not self.suppressed:
            self.parts.append(data)
            if self.notice_depth:
                self.notice.append(data)

    @property
    def public_text(self):
        return normalize(' '.join(self.parts) + ' ' + ' '.join(self.meta.values()))


class PublicPresentationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.pages = {p.name: p.read_text(encoding='utf-8') for p in ROOT.glob('*.html')}
        cls.parsed = {name: PublicHTML(text) for name, text in cls.pages.items()}
        cls.readme = (ROOT / 'README.md').read_text(encoding='utf-8')

    def test_every_page_discloses_demo_and_non_bank_status_without_javascript(self):
        self.assertTrue(self.pages)
        for name, page in self.parsed.items():
            with self.subTest(page=name):
                self.assertEqual(page.ids.count('project-status'), 1)
                notice = normalize(' '.join(page.notice))
                for phrase in ('demonstracioni softver', 'radni naziv softverskog projekta', STATUS,
                               'ne otvara račune', 'ne prima depozite', 'ne izdaje kartice',
                               'ne izvršava uplate'):
                    self.assertIn(phrase, notice)
                self.assertNotIn('hidden', page.notice_attrs)
                self.assertNotEqual(page.notice_attrs.get('aria-hidden'), 'true')
                self.assertNotIn('animate-hidden', page.notice_attrs.get('class', ''))
                self.assertNotIn('display:none', page.notice_attrs.get('style', '').replace(' ', ''))
                self.assertLess(self.pages[name].index('id="project-status"'), self.pages[name].index('<h1'))

    def test_search_and_social_descriptions_disclose_status(self):
        for name, page in self.parsed.items():
            for key in ('description', 'og:description'):
                with self.subTest(page=name, meta=key):
                    text = normalize(page.meta.get(key, ''))
                    self.assertIn('demonstracioni softver', text)
                    self.assertIn(STATUS, text)

    def test_known_bank_service_and_partnership_claims_do_not_return(self):
        surfaces = {name: p.public_text for name, p in self.parsed.items()}
        surfaces['README.md'] = normalize(self.readme)
        surfaces.update({str(p.relative_to(ROOT)): normalize(p.read_text(encoding='utf-8'))
                         for p in ROOT.glob('js/*.js')})
        for name, text in surfaces.items():
            for phrase in PROHIBITED:
                with self.subTest(surface=name, phrase=phrase):
                    self.assertIsNone(re.search(phrase, text), f'Misleading claim in {name}: {phrase}')

    def test_readme_ecosystem_row_has_its_own_demo_boundary(self):
        row = next(line for line in self.readme.splitlines()
                   if line.startswith('|') and '**AI IQ World Bank**' in line)
        self.assertIn('demonstracioni softver', normalize(row))
        self.assertIn(STATUS, normalize(row))
        self.assertIn('radni naziv softverskog projekta', normalize(self.readme))

    def test_status_links_resolve_and_naming_limit_is_explained(self):
        about = self.parsed['about.html']
        self.assertIn('regulatorni-status', about.ids)
        for name, page in self.parsed.items():
            with self.subTest(page=name):
                self.assertIn('about.html#regulatorni-status', page.links)
        for source in (NBS_GUIDE, NBS_LAW):
            self.assertIn(source, about.links)
            self.assertIn(source, self.readme)
        self.assertIn('član 6', about.public_text)
        self.assertIn('posebnu pravnu proveru', about.public_text)

    def test_contact_is_project_contact_without_branch_or_service_guarantees(self):
        contact = self.parsed['contact.html'].public_text
        self.assertIn('lokacija autora softverskog projekta', contact)
        self.assertNotIn('digitalna filijala', contact)
        self.assertNotIn('24/7', contact)
        self.assertNotIn('odgovaramo u roku od 24 sata', contact)
        self.assertIn('sami je pošaljite', self.pages['contact.html'])

    def test_calculator_and_investment_content_remain_educational(self):
        loans = self.parsed['loans.html'].public_text
        self.assertIn('ovo nije ponuda kredita', loans)
        self.assertIn('pretpostavljena godišnja kamatna stopa', loans)
        self.assertIn('modelirani ukupan iznos', loans)
        self.assertIn('ne predstavlja preporuku za ulaganje niti obećanje prinosa',
                      self.parsed['investments.html'].public_text)

    def test_no_financial_submission_forms_are_introduced(self):
        fields = {'infrastructure', 'skills', 'governance', 'name', 'email', 'subject', 'message'}
        for name, page in self.parsed.items():
            for tag, attrs in page.tags:
                with self.subTest(page=name, tag=tag):
                    if tag == 'form':
                        self.assertFalse(attrs.get('action'), 'Unexpected server submission')
                    if tag in ('input', 'select', 'textarea') and attrs.get('name'):
                        self.assertIn(attrs['name'], fields)
                    if tag == 'input':
                        self.assertNotEqual(attrs.get('type'), 'password')

    def test_ci_runs_the_full_regression_suite(self):
        workflow = (ROOT / '.github/workflows/validate.yml').read_text(encoding='utf-8')
        self.assertIn("python3 -m unittest discover -s config -p 'test_*.py'", workflow)


if __name__ == '__main__':
    unittest.main()
