# Repository Charter

## Document Control

- **Category:** Governance
- **Type:** charter
- **Status:** approved
- **Visibility:** canonical/internal standard
- **Purpose:** Defines repository mission, four pillars, source-of-truth hierarchy, and extension rules.
- **Depends on:** `standards/indekurilanc-standard.md`, `standards/glossary.md`

## Purpose

AI IQ World Bank exists to maintain one controlled repository that can support:

- a public-facing prototype,
- canonical internal standards,
- reusable planning templates,
- governance controls for sensitive and scenario-driven content.

## Four repository pillars

1. **Product / Prototype** - user-facing static experience and future application modules.
2. **Standards** - controlled terminology, scoring logic, value-system rules, and canonical baselines.
3. **Operational Plans** - structured fill-in templates for analysis, assets, licensing, reporting, and support workflows.
4. **Governance and Protection** - lifecycle, sanitization, review, publication, and approval controls.

## Source-of-truth hierarchy

When documents overlap, use this order:

1. Approved repository standards in `standards/` and active normative root standards such as `dinar-standard-plan.md`
2. Governance rules in `governance/`
3. The current `README.md` for repository navigation and contributor workflow
4. Architecture and portfolio references in `docs/`
5. Operational planning templates and support-message plans
6. Prototype implementation details in `index.html`, `styles.css`, and `script.js`

## Operating principles

- Preserve a clear distinction between prototype behavior, scenario assumptions, and verified facts.
- Treat planning templates as reusable frameworks, not as public evidence on their own.
- Prefer repository-relative references between documents.
- Keep public-safe content separable from internal or sensitive variants.
- Extend the repository by adding structured modules and standards, not ad-hoc files.
- Update canonical standards before treating related implementation changes as normative.

## Locked repository structure

The repository is organized intentionally around stable top-level groups:

- `docs/`
- `governance/`
- `standards/`
- `config/`
- root structured planning and standards files
- static prototype files in the repository root

Contributors should not introduce new ad-hoc root areas without documenting the reason in `docs/document-portfolio.md` and aligning lifecycle rules.

## Visibility model

Use these visibility classes consistently:

- **public-safe**
- **limited/internal**
- **canonical/internal standard**

Every change that touches public wording, sensitive planning, or normative rules must make the target visibility explicit.

## Approval matrix

| Change type | Minimum controlling source | Required review expectation |
|---|---|---|
| Scoring logic, maturity bands, output rules | `standards/indekurilanc-standard.md` | Standard updated before or with implementation |
| DINAR usage, scenario/public separation | `dinar-standard-plan.md` | Standard context checked for status/version |
| Document lifecycle, metadata, publication rules | `governance/document-lifecycle.md` | Governance review and validator alignment |
| Sensitive-content handling | `config/sensitive-content-review-checklist.md` | Sanitization review before merge |
| New structured planning document | `docs/document-portfolio.md` + lifecycle rules | Portfolio registration and metadata block required |

## Contribution expectations

- Small changes should preserve the existing prototype while improving clarity or structure.
- New logic that affects scoring or public interpretation must update the relevant standard.
- New planning documents should declare their control metadata, type, status, and visibility.
- Sensitive details must be sanitized before any shared or public commit.
- Repository-level structure changes should include portfolio and validation updates.
