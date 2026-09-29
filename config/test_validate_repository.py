import shutil
import subprocess
import sys
import tempfile
import unittest
import os
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class ValidateRepositoryTests(unittest.TestCase):
    def copy_repo(self) -> Path:
        temp_dir = Path(tempfile.mkdtemp(prefix='validate-repo-'))
        self.addCleanup(lambda: shutil.rmtree(temp_dir, ignore_errors=True))
        target = temp_dir / 'repo'
        shutil.copytree(REPO_ROOT, target, ignore=shutil.ignore_patterns('.git', '__pycache__', '*.pyc'))
        return target

    def run_validator(self, repo_root: Path, validate_runtime_business: bool = False) -> subprocess.CompletedProcess[str]:
        env = os.environ.copy()
        if validate_runtime_business:
            env['AIIQ_VALIDATE_RUNTIME_BUSINESS'] = '1'
        return subprocess.run(
            [sys.executable, 'config/validate_repository.py'],
            cwd=repo_root,
            capture_output=True,
            text=True,
            env=env,
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

    def test_validator_requires_root_routing_block_metadata(self) -> None:
        repo_root = self.copy_repo()
        template_path = repo_root / 'template-plan.md'
        template_text = template_path.read_text(encoding='utf-8')
        template_path.write_text(template_text.replace('**Release status:**', '**Status for release:**', 1), encoding='utf-8')

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('template-plan.md is missing required routing-block field: Release status:', result.stdout)

    def test_validator_requires_support_routing_block_metadata(self) -> None:
        repo_root = self.copy_repo()
        support_path = repo_root / 'github-naplata-poruka-plan.md'
        support_text = support_path.read_text(encoding='utf-8')
        support_path.write_text(support_text.replace('**Audience layer:**', '**Audience lane:**', 1), encoding='utf-8')

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('github-naplata-poruka-plan.md is missing required routing-block field: Audience layer:', result.stdout)

    def test_validator_accepts_top_of_file_routing_metadata(self) -> None:
        repo_root = self.copy_repo()
        template_path = repo_root / 'template-plan.md'
        template_text = template_path.read_text(encoding='utf-8')
        routing_block = '\n'.join([
            '- **Audience layer:** contributor planning first; creator/public-safe reuse only through sanitized downstream summaries.',
            '- **Visibility handling:** keep repository-facing structure public-safe, but do not treat filled-in sensitive variants as source-control-ready outputs.',
            '- **Shared-lane checkpoint:** confirm controlling source, audience layer, visibility, and release-readiness whenever the template output becomes a reusable repository surface.',
            '- **Release status:** working routing template only; not a canonical rule or release-ready public output by itself.',
        ])
        template_path.write_text(
            template_text.replace('## Document Control', f'{routing_block}\n\n## Document Control', 1),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_validator_rejects_stale_invoice_pending_status(self) -> None:
        repo_root = self.copy_repo()
        invoices_path = repo_root / 'business/fakture-registar.csv'
        invoices_path.write_text(
            '\n'.join([
                'id,dobavljac_partner,iznos,valuta,datum,status,status_azuriran_datum,dokaz_attachment,odobrenje,referenca',
                'INV-001,partner,1000.00,RSD,2020-01-01,na-proveri,2020-01-01,business/sanitized/dokaz.txt,na-cekanju,business/sanitized/ref.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root, validate_runtime_business=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('has stale status', result.stdout)

    def test_validator_rejects_invalid_business_csv_headers(self) -> None:
        repo_root = self.copy_repo()
        contracts_path = repo_root / 'business/ugovori-registar-template.csv'
        contracts_path.write_text(
            '\n'.join([
                'id,partner,tip_ugovora,datum_potpisivanja,status,odgovorno_lice',
                'UG-001,partner,okvirni,2099-01-01,u-pripremi,owner',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('must use exact headers', result.stdout)

    def test_validator_rejects_padded_business_csv_headers(self) -> None:
        repo_root = self.copy_repo()
        contracts_path = repo_root / 'business/ugovori-registar-template.csv'
        contracts_path.write_text(
            '\n'.join([
                'id,partner ,tip_ugovora,datum_potpisivanja,status,odgovorno_lice,referenca',
                'UG-001,partner,okvirni,2099-01-01,u-pripremi,owner,business/sanitized/contract.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('must not use padded header names', result.stdout)

    def test_validator_rejects_future_status_update_date(self) -> None:
        repo_root = self.copy_repo()
        invoices_path = repo_root / 'business/fakture-registar.csv'
        invoices_path.write_text(
            '\n'.join([
                'id,dobavljac_partner,iznos,valuta,datum,status,status_azuriran_datum,dokaz_attachment,odobrenje,referenca',
                'INV-002,partner,1000.00,RSD,2026-01-01,u-pripremi,2999-01-01,business/sanitized/dokaz.txt,na-cekanju,business/sanitized/ref.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root, validate_runtime_business=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('has future status update date', result.stdout)

    def test_validator_accepts_future_invoice_date_with_current_status_update(self) -> None:
        repo_root = self.copy_repo()
        invoices_path = repo_root / 'business/fakture-registar.csv'
        invoices_path.write_text(
            '\n'.join([
                'id,dobavljac_partner,iznos,valuta,datum,status,status_azuriran_datum,dokaz_attachment,odobrenje,referenca',
                'INV-003,partner,1000.00,RSD,2999-01-01,u-pripremi,2026-01-01,business/sanitized/dokaz.txt,na-cekanju,business/sanitized/ref.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root, validate_runtime_business=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_validator_rejects_duplicate_invoice_ids(self) -> None:
        repo_root = self.copy_repo()
        invoices_path = repo_root / 'business/fakture-registar-template.csv'
        invoices_path.write_text(
            '\n'.join([
                'id,dobavljac_partner,iznos,valuta,datum,status,status_azuriran_datum,dokaz_attachment,odobrenje,referenca',
                'INV-001,partner-a,1000.00,RSD,2026-01-01,u-pripremi,2026-01-01,business/sanitized/a.txt,na-cekanju,business/sanitized/a-ref.txt',
                'INV-001,partner-b,2000.00,RSD,2026-01-02,na-proveri,2026-01-02,business/sanitized/b.txt,na-cekanju,business/sanitized/b-ref.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('has duplicate id', result.stdout)

    def test_validator_rejects_non_repository_relative_invoice_reference(self) -> None:
        repo_root = self.copy_repo()
        invoices_path = repo_root / 'business/fakture-registar-template.csv'
        invoices_path.write_text(
            '\n'.join([
                'id,dobavljac_partner,iznos,valuta,datum,status,status_azuriran_datum,dokaz_attachment,odobrenje,referenca',
                'INV-009,partner,1000.00,RSD,2026-01-01,u-pripremi,2026-01-01,/tmp/dokaz.txt,na-cekanju,business/sanitized/ref.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('non-repository-relative reference', result.stdout)

    def test_validator_rejects_url_invoice_reference(self) -> None:
        repo_root = self.copy_repo()
        invoices_path = repo_root / 'business/fakture-registar-template.csv'
        invoices_path.write_text(
            '\n'.join([
                'id,dobavljac_partner,iznos,valuta,datum,status,status_azuriran_datum,dokaz_attachment,odobrenje,referenca',
                'INV-010,partner,1000.00,RSD,2026-01-01,u-pripremi,2026-01-01,https://example.com/dokaz.pdf,na-cekanju,business/sanitized/ref.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('non-repository-relative reference', result.stdout)

    def test_validator_rejects_scheme_only_invoice_reference(self) -> None:
        repo_root = self.copy_repo()
        invoices_path = repo_root / 'business/fakture-registar-template.csv'
        invoices_path.write_text(
            '\n'.join([
                'id,dobavljac_partner,iznos,valuta,datum,status,status_azuriran_datum,dokaz_attachment,odobrenje,referenca',
                'INV-011,partner,1000.00,RSD,2026-01-01,u-pripremi,2026-01-01,mailto:ops@example.com,na-cekanju,business/sanitized/ref.txt',
            ]),
            encoding='utf-8',
        )

        result = self.run_validator(repo_root)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('non-repository-relative reference', result.stdout)

    def test_validator_rejects_runtime_invoice_registry_directory(self) -> None:
        repo_root = self.copy_repo()
        runtime_registry_path = repo_root / 'business/fakture-registar.csv'
        runtime_registry_path.mkdir(parents=True, exist_ok=True)

        result = self.run_validator(repo_root, validate_runtime_business=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('must be a file', result.stdout)


if __name__ == '__main__':
    unittest.main()
