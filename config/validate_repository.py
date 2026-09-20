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
OPERATING_MODEL_REQUIRED_HEADINGS = [
    '## Repository-wide execution order',
    '## Repository work cycle (radni takt)',
    '## Repository pillar routing',
    '## Success criteria and end-state',
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


def fail(message: str) -> None:
    print(f'ERROR: {message}')
    sys.exit(1)


def validate_document_control(relative_path: Path, text: str) -> None:
    if relative_path.as_posix() in STRUCTURED_MD_EXCLUDES:
        return

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


def is_structured_markdown(relative_path: Path) -> bool:
    relative_name = relative_path.as_posix()
    if relative_name in STRUCTURED_MD_EXCLUDES:
        return False
    if len(relative_path.parts) == 1 and relative_path.suffix == '.md':
        return True
    if relative_name in STRUCTURED_MD_FILES:
        return True
    return relative_path.parts[0] in STRUCTURED_MD_DIRECTORIES


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
            validate_document_control(path.relative_to(ROOT), text)

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
for heading in OPERATING_MODEL_REQUIRED_HEADINGS:
    if heading not in operating_model_text:
        fail(f'docs/repository-operating-model.md is missing required heading: {heading}')

print('Repository validation passed.')
