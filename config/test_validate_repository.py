import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class ValidateRepositoryTests(unittest.TestCase):
    def copy_repo(self) -> Path:
        temp_dir = Path(tempfile.mkdtemp(prefix='validate-repo-'))
        self.addCleanup(lambda: shutil.rmtree(temp_dir, ignore_errors=True))
        target = temp_dir / 'repo'
        shutil.copytree(REPO_ROOT, target, ignore=shutil.ignore_patterns('.git', '__pycache__', '*.pyc'))
        return target

    def run_validator(self, repo_root: Path) -> subprocess.CompletedProcess[str]:
        return subprocess.run(
            [sys.executable, 'config/validate_repository.py'],
            cwd=repo_root,
            capture_output=True,
            text=True,
            check=False,
        )

    def test_validator_passes_on_repository_copy(self) -> None:
        repo_root = self.copy_repo()
        result = self.run_validator(repo_root)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertIn('Repository validation passed.', result.stdout)

    def test_validator_requires_operating_model_marker(self) -> None:
        repo_root = self.copy_repo()
        operating_model_path = repo_root / 'docs/repository-operating-model.md'
        operating_model_text = operating_model_path.read_text(encoding='utf-8')
        operating_model_path.write_text(
            operating_model_text.replace('<!-- operating-model:work-cycle -->\n', '', 1),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('missing required operating-model marker', result.stdout)

    def test_validator_requires_new_operating_model_html_anchor(self) -> None:
        repo_root = self.copy_repo()
        index_path = repo_root / 'index.html'
        index_text = index_path.read_text(encoding='utf-8')
        index_path.write_text(index_text.replace('id="repository-work-cycle"', 'id="work-cycle-missing"', 1), encoding='utf-8')

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('index.html is missing required id: repository-work-cycle', result.stdout)


if __name__ == '__main__':
    unittest.main()
