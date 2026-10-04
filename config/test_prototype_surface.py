from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parent.parent


class SurfaceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.inputs = []
        self.scripts = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'input':
            self.inputs.append(attrs)
        if tag == 'script':
            self.scripts.append(attrs.get('src'))
        if tag == 'a':
            self.links.append(attrs.get('href'))


class PrototypeSurfaceTests(unittest.TestCase):
    def setUp(self):
        self.text = (ROOT / 'index.html').read_text(encoding='utf-8')
        self.surface = SurfaceParser()
        self.surface.feed(self.text)

    def test_unique_ids(self):
        self.assertEqual(len(self.surface.ids), len(set(self.surface.ids)))

    def test_calculator_script_and_bounded_inputs(self):
        self.assertEqual(self.surface.scripts.count('script.js'), 1)
        for name in ['infrastructure', 'skills', 'governance']:
            field = next(v for v in self.surface.inputs if v.get('name') == name)
            self.assertEqual(field.get('type'), 'number')
            self.assertEqual(field.get('min'), '0')
            self.assertEqual(field.get('max'), '100')
            self.assertIn('required', field)

    def test_platform_handoff_without_credentials(self):
        self.assertIn('https://ai-iq-super-platforma.com/bank-prototype', self.surface.links)
        self.assertIn('Simulacija:', self.text)
        self.assertNotIn('type="password"', self.text)
        self.assertNotIn('name="token"', self.text)


if __name__ == '__main__':
    unittest.main()
