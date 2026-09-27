import csv
from datetime import date, datetime
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
REQUIRED_FILES = [
    'README.md',
    'index.html',
    'styles.css',
    'script.js',
    'docs/document-portfolio.md',
    'docs/future-data-model.md',
    'docs/repository-operating-model.md',
    'docs/repository-roadmap.md',
    'governance/repo-charter.md',
    'governance/document-lifecycle.md',
    'standards/indekurilanc-standard.md',
    'standards/glossary.md',
    'config/sensitive-content-review-checklist.md',
    'business/README.md',
    'business/fakture-registar-template.csv',
    'business/ugovori-registar-template.csv',
    'business/evidencija-operativnih-dokaza-template.csv',
    'business/revizijski-trag-template.csv',
    'business/nedeljni-operativni-ciklus-template.md',
]
FORBIDDEN_PATH_SNIPPET = '/'.join([
    '',
    'home',
    'runner',
    'work',
    'Ai-Iq-World-Bank',
    'Ai-Iq-World-Bank',
])
CONTENT_GLOBS = ('*.md', '*.html', '*.css', '*.js', '*.py', '*.yml', '*.yaml')
README_LINK_PATTERN = re.compile(r'`([^`\s]+\.(?:md|html|css|js|py|yml))`')
HTML_IDS = [
    'indekurilanc-form',
    'indekurilanc-feedback',
    'indekurilanc-score',
    'indekurilanc-status',
    'indekurilanc-summary',
    'indekurilanc-priority',
    'indekurilanc-next-step',
    'indekurilanc-standard',
    'indekurilanc-contributions',
    'indekurilanc-reset',
    'narrative-lanes',
    'repository-work-cycle',
    'public-output-flow',
    'approval-flow',
    'release-gates',
    'module-boundaries',
    'developer-creator-checkpoints',
    'change-impact-matrix',
    'success-criteria',
    'concept-surface-inventory',
    'public-output-catalog',
]
OPERATING_MODEL_REQUIRED_MARKERS = [
    '<!-- operating-model:execution-order -->',
    '<!-- operating-model:work-cycle -->',
    '<!-- operating-model:pillar-routing -->',
    '<!-- operating-model:success-criteria -->',
]
DOC_CONTROL_KEYS = [
    'Category',
    'Type',
    'Status',
    'Visibility',
    'Purpose',
    'Depends on',
]
ALLOWED_STATUSES = {'draft', 'working', 'approved', 'archived'}
ALLOWED_VISIBILITY = {
    'public-safe',
    'limited/internal',
    'canonical/internal standard',
}
STRUCTURED_MD_EXCLUDES = {'.github/PULL_REQUEST_TEMPLATE.md'}
STRUCTURED_MD_DIRECTORIES = {'docs', 'governance', 'standards'}
STRUCTURED_MD_FILES = {
    'config/sensitive-content-review-checklist.md',
}
ROUTING_BLOCK_REQUIRED_CATEGORIES = {
    'Templates',
    'Public Output',
    'Support',
}
ROUTING_BLOCK_REQUIRED_SNIPPETS = [
    'Audience layer:',
    'Visibility handling:',
    'Shared-lane checkpoint:',
    'Release status:',
]
META_MONETIZATION_PLAYBOOK_REQUIRED_MARKERS = [
    '<!-- meta-monetization:official-term -->',
    '<!-- meta-monetization:global-compatibility -->',
    '<!-- meta-monetization:level-transition-check -->',
]
LICENSING_META_MONETIZATION_REQUIRED_MARKERS = [
    '<!-- licensing:meta-monetization-link -->',
    '<!-- licensing:meta-monetization-classification -->',
]
CSV_TEMPLATE_HEADERS = {
    'business/fakture-registar-template.csv': [
        'id',
        'dobavljac_partner',
        'iznos',
        'valuta',
        'datum',
        'status',
        'dokaz_attachment',
        'odobrenje',
        'referenca',
    ],
    'business/ugovori-registar-template.csv': [
        'id',
        'partner',
        'tip_ugovora',
        'datum_potpisivanja',
        'status',
        'odgovorno_lice',
        'referenca',
    ],
    'business/evidencija-operativnih-dokaza-template.csv': [
        'id',
        'kategorija',
        'datum',
        'opis',
        'dokaz_attachment',
        'status',
        'referenca',
    ],
    'business/revizijski-trag-template.csv': [
        'id',
        'datum',
        'oblast',
        'promena',
        'vlasnik',
        'odobrenje',
        'referenca',
    ],
}
INVOICE_HEADERS = CSV_TEMPLATE_HEADERS['business/fakture-registar-template.csv']
INVOICE_ALLOWED_STATUSES = {
    'u-pripremi',
    'na-proveri',
    'na-odobrenju',
    'odobreno',
    'placeno',
    'odbijeno',
    'stornirano',
}
INVOICE_STALE_STATUSES = {'na-proveri', 'na-odobrenju'}
INVOICE_STALE_DAYS = 30
OPTIONAL_RUNTIME_INVOICE_REGISTRY = 'business/fakture-registar.csv'


def fail(message: str) -> None:
    print(f'ERROR: {message}')
    sys.exit(1)


def parse_document_control_values(relative_path: Path, text: str) -> dict[str, str]:
    if relative_path.as_posix() in STRUCTURED_MD_EXCLUDES:
        return {}

    lines = text.splitlines()
    if not lines or not lines[0].startswith('# '):
        fail(f'{relative_path} must start with a level-1 title')

    document_control_index = None
    for index, line in enumerate(lines[1:], start=1):
        if line == '## Document Control':
            document_control_index = index
            break
        if line.startswith('## '):
            break

    if document_control_index is None:
        fail(f'{relative_path} is missing a top-level Document Control block')

    control_lines = []
    for line in lines[document_control_index + 1:]:
        if line.startswith('## '):
            break
        control_lines.append(line)
    control_text = '\n'.join(control_lines)

    values = {}
    pattern = re.compile(r'- \*\*(.+?):\*\* (.+)')
    for line in control_lines:
        match = pattern.fullmatch(line)
        if not match:
            continue
        key = match.group(1).strip()
        value = match.group(2).strip()
        if key in values:
            fail(f'{relative_path} has duplicate Document Control field: {key}')
        values[key] = value

    for key in DOC_CONTROL_KEYS:
        if key not in values:
            fail(f'{relative_path} is missing Document Control field: {key}')

    if values['Status'] not in ALLOWED_STATUSES:
        fail(f'{relative_path} has invalid status: {values["Status"]}')

    if values['Visibility'] not in ALLOWED_VISIBILITY:
        fail(f'{relative_path} has invalid visibility: {values["Visibility"]}')

    dependency_matches = re.findall(r'`([^`]+)`', values['Depends on'])
    if not dependency_matches:
        fail(f'{relative_path} must use repository-relative backticked references in Depends on')

    normalized_dependencies = ', '.join(f'`{dependency}`' for dependency in dependency_matches)
    if normalized_dependencies != values['Depends on']:
        fail(f'{relative_path} must list only repository-relative backticked references in Depends on')

    for dependency in dependency_matches:
        dependency_path = Path(dependency)
        if dependency_path.is_absolute() or '..' in dependency_path.parts:
            fail(f'{relative_path} has non-repository-relative dependency: {dependency}')
        if not (ROOT / dependency_path).exists():
            fail(f'{relative_path} depends on missing file: {dependency}')

    return values


def validate_document_control(relative_path: Path, text: str) -> dict[str, str]:
    return parse_document_control_values(relative_path, text)


def is_structured_markdown(relative_path: Path) -> bool:
    relative_name = relative_path.as_posix()
    if relative_name in STRUCTURED_MD_EXCLUDES:
        return False
    if len(relative_path.parts) == 1 and relative_path.suffix == '.md':
        return True
    if relative_name in STRUCTURED_MD_FILES:
        return True
    return relative_path.parts[0] in STRUCTURED_MD_DIRECTORIES


def validate_routing_block(relative_path: Path, text: str, document_control_values: dict[str, str]) -> None:
    if document_control_values.get('Category') not in ROUTING_BLOCK_REQUIRED_CATEGORIES:
        return

    sections = []
    current_section_lines = []
    seen_section_heading = False
    for line in text.splitlines():
        if line.startswith('## '):
            if current_section_lines:
                sections.append('\n'.join(current_section_lines))
            current_section_lines = [line]
            seen_section_heading = True
            continue
        if current_section_lines or not seen_section_heading:
            current_section_lines.append(line)

    if current_section_lines:
        sections.append('\n'.join(current_section_lines))

    best_section_text = ''
    best_match_count = 0
    for section in sections:
        match_count = sum(1 for snippet in ROUTING_BLOCK_REQUIRED_SNIPPETS if snippet in section)
        if match_count > best_match_count:
            best_section_text = section
            best_match_count = match_count

    if best_match_count == 0:
        fail(f'{relative_path} is missing a routing section for reusable document metadata')

    for snippet in ROUTING_BLOCK_REQUIRED_SNIPPETS:
        if snippet not in best_section_text:
            fail(f'{relative_path} is missing required routing-block field: {snippet}')


def validate_required_markers(relative_path: str, markers: list[str], label: str) -> None:
    text = (ROOT / relative_path).read_text(encoding='utf-8')
    for marker in markers:
        if marker not in text:
            fail(f'{relative_path} is missing required {label} marker: {marker}')


def normalize_csv_value(value: str | None) -> str:
    return (value or '').strip()


def validate_csv_template_headers(relative_path: str, required_headers: list[str]) -> list[dict[str, str]]:
    with (ROOT / relative_path).open(encoding='utf-8', newline='') as csv_file:
        reader = csv.DictReader(csv_file)
        headers = [header.strip() for header in (reader.fieldnames or [])]
        if headers != required_headers:
            fail(f'{relative_path} must use exact headers: {", ".join(required_headers)}')
        return list(reader)


def validate_repository_relative_reference(relative_path: str, reference_value: str, row_number: int) -> None:
    if not reference_value:
        return
    if reference_value.startswith('/') or FORBIDDEN_PATH_SNIPPET in reference_value:
        fail(f'{relative_path} row {row_number} has non-repository-relative reference: {reference_value}')
    if '..' in Path(reference_value).parts:
        fail(f'{relative_path} row {row_number} has non-repository-relative reference: {reference_value}')


def validate_invoice_rows(
    relative_path: str,
    rows: list[dict[str, str]],
    enforce_temporal_controls: bool,
) -> None:
    seen_invoice_ids = set()
    today = date.today()
    for row_number, row in enumerate(rows, start=2):
        values = {key: normalize_csv_value(row.get(key)) for key in INVOICE_HEADERS}
        if not any(values.values()):
            continue

        invoice_id = values['id']
        if not invoice_id:
            fail(f'{relative_path} row {row_number} must include id')
        if invoice_id in seen_invoice_ids:
            fail(f'{relative_path} row {row_number} has duplicate id: {invoice_id}')
        seen_invoice_ids.add(invoice_id)

        for required_key in ['dobavljac_partner', 'iznos', 'valuta', 'datum', 'status', 'odobrenje']:
            if not values[required_key]:
                fail(f'{relative_path} row {row_number} is missing required value: {required_key}')

        status = values['status']
        if status not in INVOICE_ALLOWED_STATUSES:
            fail(f'{relative_path} row {row_number} has invalid status: {status}')

        try:
            invoice_date = datetime.strptime(values['datum'], '%Y-%m-%d').date()
        except ValueError:
            fail(f'{relative_path} row {row_number} must use YYYY-MM-DD date format')
        if enforce_temporal_controls:
            if invoice_date > today:
                fail(f'{relative_path} row {row_number} has future date: {values["datum"]}')
            if status in INVOICE_STALE_STATUSES and (today - invoice_date).days > INVOICE_STALE_DAYS:
                fail(
                    f'{relative_path} row {row_number} has stale status "{status}" '
                    f'older than {INVOICE_STALE_DAYS} days'
                )

        validate_repository_relative_reference(relative_path, values['referenca'], row_number)
        validate_repository_relative_reference(relative_path, values['dokaz_attachment'], row_number)


def validate_invoice_registry_template() -> None:
    relative_path = 'business/fakture-registar-template.csv'
    rows = validate_csv_template_headers(relative_path, INVOICE_HEADERS)
    validate_invoice_rows(relative_path, rows, enforce_temporal_controls=False)


def validate_runtime_invoice_registry_if_present() -> None:
    registry_path = ROOT / OPTIONAL_RUNTIME_INVOICE_REGISTRY
    if not registry_path.exists():
        return
    rows = validate_csv_template_headers(OPTIONAL_RUNTIME_INVOICE_REGISTRY, INVOICE_HEADERS)
    validate_invoice_rows(OPTIONAL_RUNTIME_INVOICE_REGISTRY, rows, enforce_temporal_controls=True)


def validate_business_templates() -> None:
    for relative_path, headers in CSV_TEMPLATE_HEADERS.items():
        if relative_path == 'business/fakture-registar-template.csv':
            continue
        rows = validate_csv_template_headers(relative_path, headers)
        for row_number, row in enumerate(rows, start=2):
            values = {key: normalize_csv_value(row.get(key)) for key in headers}
            if not any(values.values()):
                continue
            validate_repository_relative_reference(relative_path, values.get('referenca', ''), row_number)
            if 'dokaz_attachment' in values:
                validate_repository_relative_reference(relative_path, values['dokaz_attachment'], row_number)


for relative_path in REQUIRED_FILES:
    if not (ROOT / relative_path).exists():
        fail(f'Missing required file: {relative_path}')

for pattern in CONTENT_GLOBS:
    for path in ROOT.rglob(pattern):
        if '.git' in path.parts:
            continue
        text = path.read_text(encoding='utf-8')
        if FORBIDDEN_PATH_SNIPPET in text:
            fail(f'Forbidden absolute checkout path found in {path.relative_to(ROOT)}')
        if path.suffix == '.md' and is_structured_markdown(path.relative_to(ROOT)):
            document_control_values = validate_document_control(path.relative_to(ROOT), text)
            validate_routing_block(path.relative_to(ROOT), text, document_control_values)

readme_text = (ROOT / 'README.md').read_text(encoding='utf-8')
for linked_path in README_LINK_PATTERN.findall(readme_text):
    if linked_path.startswith('http'):
        continue
    if '*' in linked_path:
        continue
    if not (ROOT / linked_path).exists():
        fail(f'README references missing file: {linked_path}')

index_text = (ROOT / 'index.html').read_text(encoding='utf-8')
for element_id in HTML_IDS:
    if f'id="{element_id}"' not in index_text:
        fail(f'index.html is missing required id: {element_id}')

script_text = (ROOT / 'script.js').read_text(encoding='utf-8')
if 'INDEKURILANC-STD-V1' not in script_text:
    fail('script.js must expose the active INDEKURILANC standard version')

operating_model_text = (ROOT / 'docs/repository-operating-model.md').read_text(encoding='utf-8')
for marker in OPERATING_MODEL_REQUIRED_MARKERS:
    if marker not in operating_model_text:
        fail(f'docs/repository-operating-model.md is missing required operating-model marker: {marker}')

validate_required_markers(
    'developer-creator-monetization-playbook-plan.md',
    META_MONETIZATION_PLAYBOOK_REQUIRED_MARKERS,
    'meta-monetization',
)
validate_required_markers(
    'globalni-licencni-okvir-i-delatnosti-plan.md',
    LICENSING_META_MONETIZATION_REQUIRED_MARKERS,
    'meta-monetization',
)
validate_invoice_registry_template()
validate_runtime_invoice_registry_if_present()
validate_business_templates()

print('Repository validation passed.')
