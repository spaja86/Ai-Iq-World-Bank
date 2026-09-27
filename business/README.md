# Business Operations Segment

## Scope

This folder standardizes business-operational records for the developer + creator program equivalent.

Tracked files are templates and sanitized examples only.

## Included templates

- `fakture-registar-template.csv` - invoice register schema
- `fakture-registar.csv` (optional, gitignored) - local/internal working register used for periodic stale-status and date controls during validation
- `ugovori-registar-template.csv` - contract register schema
- `evidencija-operativnih-dokaza-template.csv` - operational evidence register schema
- `revizijski-trag-template.csv` - audit trail schema
- `nedeljni-operativni-ciklus-template.md` - weekly operating rhythm and role ownership

## Sensitive content policy

- Do not commit real invoices, contracts, banking details, personal data, or raw attachments.
- Keep sensitive source artifacts outside this repository.
- Only include sanitized references that are repository-relative.

## Governance linkage

This business segment is downstream from:

- `docs/repository-operating-model.md`
- `governance/document-lifecycle.md`
- `config/sensitive-content-review-checklist.md`
