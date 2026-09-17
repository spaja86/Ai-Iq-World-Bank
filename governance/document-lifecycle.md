# Document Lifecycle Rules

## Document Control

- **Category:** Governance
- **Type:** rules
- **Status:** approved
- **Visibility:** canonical/internal standard
- **Purpose:** Defines document metadata, statuses, visibility classes, review checkpoints, and publication rules.
- **Depends on:** `governance/repo-charter.md`, `config/sensitive-content-review-checklist.md`, `README.md`

## Document control block

Every structured repository document should start with a `## Document Control` section directly under the title and include at least:

- **Category**
- **Type**
- **Status**
- **Visibility**
- **Purpose**
- **Depends on**

This keeps the lifecycle model inside the document instead of relying only on the portfolio map.

## Document types

Use the following categories consistently:

- **Standard** - normative rule set or canonical definition.
- **Governance** - approval, review, publication, or handling rules.
- **Template** - fill-in document meant to be populated per case.
- **Working Plan** - operational planning document under active refinement.
- **Public Output** - sanitized content prepared for wider sharing.
- **Support** - structured communication template for billing or operational requests.
- **Architecture / Roadmap** - repository planning references for future structure.

## Status model

Every newly added structured document should fit one of these statuses:

- `draft`
- `working`
- `approved`
- `archived`

## Visibility model

Use one explicit visibility class in the control block:

- `public-safe`
- `limited/internal`
- `canonical/internal standard`

If a document has both internal and public variants, the tracked template should describe the split and the populated internal version should remain outside source control unless sanitized.

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

## Naming and reference rules

- Use descriptive kebab-case filenames.
- Reference sibling repository documents by filename or repository-relative path in backticks, for example `README.md` or `docs/document-portfolio.md`.
- Do not embed checkout-specific absolute filesystem paths in tracked content.
- When a document depends on another standard, name that dependency explicitly in `Document Control`.
- New root files must be justified in the portfolio and should not bypass existing folder structure.

## Required content separation

Where relevant, documents should explicitly separate:

- scenario assumptions,
- verified facts,
- limited/internal detail,
- public-safe outputs.

## Publication and sanitization rules

Before sharing a document outside the narrow working context:

- remove exact sensitive locations or facility identifiers,
- avoid exact per-site asset quantities unless publication is explicitly approved,
- label scenario values and internal-only assumptions,
- confirm whether the output is internal, limited, or public,
- verify that DINAR usage includes status, version, and effective-date context.

## Review checkpoints

Review these questions before merge:

1. Is the document control block present and complete?
2. Is the document type clear?
3. Is the document status clear?
4. Is the visibility class clear?
5. Are scenario and verified statements separated?
6. Are linked files valid and repository-relative?
7. Does the content expose sensitive operational detail?
8. If DINAR is used, are version and status stated?
9. If a standard is affected, was the controlling standard updated first?

## Release/checklist procedure for major changes

For major repository changes, complete this order:

1. Update the controlling standard or governance file.
2. Update affected plans, portfolio references, and roadmap notes.
3. Update prototype implementation if public behavior changes.
4. Run validation and syntax checks.
5. Re-check sensitive content before sharing or merging.
