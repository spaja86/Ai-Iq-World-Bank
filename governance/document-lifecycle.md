# Document Lifecycle Rules

## Document types

Use the following categories consistently:

- **Standard** - normative rule set or canonical definition.
- **Governance** - approval, review, publication, or handling rules.
- **Template** - fill-in document meant to be populated per case.
- **Working Plan** - operational planning document under active refinement.
- **Public Output** - sanitized content prepared for wider sharing.

## Status model

Every newly added structured document should fit one of these statuses:

- `draft`
- `working`
- `approved`
- `archived`

## Lifecycle expectations

### Draft
- Used for initial structure and open questions.
- Not relied on as a canonical source.

### Working
- Actively used, but still subject to change.
- Must avoid presenting scenario content as final fact.

### Approved
- Considered stable for repository use.
- Should be referenced when other documents need a source of truth.

### Archived
- Retained for history or traceability.
- Not used as the active source unless explicitly reactivated.

## Naming and linking rules

- Use descriptive kebab-case filenames.
- Reference sibling repository documents by filename or repository-relative path.
- Do not embed checkout-specific absolute filesystem paths in tracked content.
- When a document depends on another standard, name that dependency explicitly.

## Publication and sanitization rules

Before sharing a document outside the narrow working context:

- remove exact sensitive locations or facility identifiers,
- avoid exact per-site asset quantities unless publication is explicitly approved,
- label scenario values and internal-only assumptions,
- confirm whether the output is internal, limited, or public.

## Review checkpoints

Review these questions before merge:

1. Is the document type clear?
2. Is the document status clear?
3. Are scenario and verified statements separated?
4. Are linked files valid and repository-relative?
5. Does the content expose sensitive operational detail?
6. If DINAR is used, are version and status stated?
