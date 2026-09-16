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
README_LINK_PATTERN = re.compile(r'`([^`]+\.(?:md|html|css|js|py|yml))`')
HTML_IDS = [
    'indekurilanc-form',
    'indekurilanc-feedback',
    'indekurilanc-score',
    'indekurilanc-status',
    'indekurilanc-summary',
    'indekurilanc-priority',
    'indekurilanc-standard',
    'indekurilanc-reset',
]


def fail(message: str) -> None:
    print(f'ERROR: {message}')
    sys.exit(1)


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

readme_text = (ROOT / 'README.md').read_text(encoding='utf-8')
for linked_path in README_LINK_PATTERN.findall(readme_text):
    if linked_path.startswith('http'):
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

print('Repository validation passed.')
