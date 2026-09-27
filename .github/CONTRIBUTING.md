# Contributing Guidelines

## Core contribution flow

1. Confirm controlling source (`standards/` or `governance/`) before changing downstream files.
2. Keep `Document Control` valid for structured repository documents.
3. Keep references repository-relative.
4. Separate public-safe content from limited/internal operational details.
5. Run validation before opening or updating a pull request:
   - `python3 config/validate_repository.py`
   - `python3 -m unittest config/test_validate_repository.py`
   - `node --check script.js`

## Developer + creator coordination

- Developer lane owns implementation, validation, and structural integrity.
- Creator lane owns public-safe framing and narrative consistency.
- Shared lane checkpoints are mandatory for cross-lane changes.

## Business records policy

- Use templates in `business/` only as sanitized structure.
- Do not commit real invoices, contracts, or sensitive attachments.
- Use repository-relative references to sanitized artifacts only.
