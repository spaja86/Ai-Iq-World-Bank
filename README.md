# AI IQ World Bank

## Document Control

- **Category:** Navigation
- **Type:** repository guide
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Primary navigation entry for repository structure, standards, governance, and validation workflow.
- **Depends on:** `docs/repository-operating-model.md`, `governance/repo-charter.md`, `governance/document-lifecycle.md`, `standards/indekurilanc-standard.md`

AI IQ World Bank is one repository built around one controlled system with four connected pillars: product/prototype, standards, operational plans, and governance/protection.

## Repository pillars

1. **Product / prototype** - the static website and the active INDEKURILANC calculator.
2. **Standards** - canonical definitions for scoring, terminology, value-system usage, and future change control.
3. **Operational plans** - fill-in templates for business analysis, assets, public outputs, licensing, and support communication.
4. **Governance and protection** - lifecycle rules, sanitization, review checkpoints, and publication controls.

## Source-of-truth hierarchy

When repository content overlaps, use this order:

1. Approved standards in `standards/` and active normative root standards such as `dinar-standard-plan.md`
2. Governance rules in `governance/`
3. `README.md` for contributor navigation and allowed structure
4. Portfolio, roadmap, and future-model documents in `docs/`
5. Domain-specific templates and support-message plans
6. Prototype implementation in `index.html`, `styles.css`, and `script.js`

## Locked structure and extension rules

Core repository structure is intentionally stable:

- `README.md` remains the main entry point for contributors.
- `docs/` holds portfolio, roadmap, and future architecture planning.
- `governance/` holds lifecycle and charter rules.
- `standards/` holds canonical definitions and controlled terminology.
- `config/` holds validation and sensitive-content review controls.
- Root `*.md` files remain reserved for active standards and reusable fill-in plans already mapped in the portfolio.

Do not add ad-hoc top-level files or new document groups without also updating:

- `docs/document-portfolio.md`
- `governance/document-lifecycle.md`
- `config/validate_repository.py` when new required structure must be enforced

## Structured document minimum

Every structured repository document should declare a top-level `Document Control` block with at least:

- category
- type
- status
- visibility
- purpose
- dependencies

Use repository-relative references such as `README.md` or `docs/document-portfolio.md`. Never commit checkout-specific absolute filesystem paths.

## Visibility model

Use these visibility classes consistently:

- **public-safe** - suitable for broad sharing without sensitive operational detail
- **limited/internal** - restricted working material that may contain non-public operational context
- **canonical/internal standard** - normative repository guidance that controls other documents and implementations

Separate scenario assumptions, verified facts, internal detail, and public output in every affected document.

## Current structure

- `index.html` - static public entrypoint
- `styles.css` - public prototype styling
- `script.js` - frontend scoring and repository module rendering
- `docs/` - document portfolio, roadmap, and future data model
- `docs/repository-operating-model.md` - developer/creator operating lanes, approvals, ownership, and release gates
- `governance/` - repository charter and lifecycle rules
- `standards/` - INDEKURILANC and glossary standards
- `config/` - validation and sensitive-content review controls
- Root `*.md` planning files - reusable templates and active root standards

## Product baseline: INDEKURILANC

INDEKURILANC is the active scoring prototype.

- Infrastructure: 40%
- Skills: 35%
- Governance: 25%
- Current maturity bands:
  - `0-39.99` -> Early Stage
  - `40-69.99` -> Emerging
  - `70-100` -> Advanced
- Active standard reference: `standards/indekurilanc-standard.md`

The interface must show numeric score, maturity status, operational interpretation, priority focus, and standard/version reference.

## Canonical standards and governance

- `standards/indekurilanc-standard.md` - scoring baseline, maturity bands, outputs, and change-control rules
- `standards/glossary.md` - controlled repository terminology and visibility vocabulary
- `dinar-standard-plan.md` - DINAR framework with scenario/operational/public usage separation
- `governance/repo-charter.md` - repository mission, pillars, and source-of-truth hierarchy
- `governance/document-lifecycle.md` - document types, statuses, metadata rules, and review checkpoints
- `config/sensitive-content-review-checklist.md` - pre-commit and pre-publication safety checklist

## Document portfolio

### Operational templates and plans

- `template-plan.md` - reusable baseline template for repository asset mapping
- `ai-iq-world-bank-poslovni-izvestaj.md` - business analysis template with KPI and INDEKURILANC framing
- `investiciona-i-operativna-imovina-registar-plan.md` - asset registry template with sanitization rules
- `javni-prikaz-emisija-i-kamatna-politika-plan.md` - public transparency, emission, and interest-policy template
- `eksterni-repozitorijum-pravni-navod-plan.md` - legal and reputational handling template for external claims
- `globalni-licencni-okvir-i-delatnosti-plan.md` - master licensing and activity-expansion template
- `vercel-naplata-poruka-plan.md` - Vercel billing support template
- `github-naplata-poruka-plan.md` - GitHub billing and subscription support template

### Portfolio and roadmap references

- `docs/document-portfolio.md` - master map of repository documents, status, dependencies, visibility, and usage order
- `docs/repository-roadmap.md` - implementation sequence across standards, governance, frontend, and platform growth
- `docs/repository-operating-model.md` - developer and creator operating model, output flow, ownership lanes, and release readiness
- `docs/future-data-model.md` - future entity model for scores, documents, governance, assets, and licensing

## Governance and protection rules

- Planning documents are fill-in templates; populated versions with sensitive business or asset details must stay out of source control unless sanitized.
- Public-facing content must clearly separate scenario assumptions from verified facts.
- DINAR values must always carry status, version, and effective-date context.
- Repository documents should reference sibling files with repository-relative paths.
- New standard changes should update the relevant standard before implementation is treated as canonical.

## Operating model

The repository now uses one explicit operating model across developer and creator work:

- standards and governance define what can be stated,
- portfolio and roadmap define where it belongs,
- plans and support templates hold structured working content,
- the public prototype exposes only public-safe, standard-aligned outputs.

Use `docs/repository-operating-model.md` when a change needs ownership routing, approval sequence, audience/language separation, or release-readiness guidance.

Treat `docs/repository-operating-model.md` as the primary coordination document for the repository-wide developer + creator program equivalent. Other routing, lane, handoff, execution-order, or reusable-surface rules should stay aligned to that file.

For non-trivial work, follow the canonical execution order and repository work cycle defined in `docs/repository-operating-model.md`.

Every reusable public-facing surface should also:

- identify or inherit a controlling source reference,
- fit the repository's logical public-safe output catalog,
- preserve audience-layer and visibility separation,
- remain downstream from standards and governance.

## Communication layers

Keep wording aligned with the intended audience:

- **creator / public-safe** - concept explanation, prototype framing, and sanitized outputs
- **canonical / standards** - normative definitions and controlled terminology
- **internal planning** - scenario, operational, and business working material
- **regulatory / legal** - approval, compliance, jurisdiction, and reputational framing
- **support / operations** - incident, billing, escalation, follow-up, and closure messaging

## Public-safe output route

Use this flow when turning internal work into shareable material:

1. Start from the controlling standard or governance rule.
2. Confirm the relevant plan or analysis template.
3. Remove or aggregate sensitive details.
4. Publish only the sanitized/public-safe variant in documents or prototype surfaces.
5. Re-run validation before merge.

Treat `README.md`, the public prototype, `docs/repository-operating-model.md`, and explicitly public-safe planning outputs as one logical public-safe output catalog for the repository.

## Developer and creator lane guardrails

- Developer-lane work should stay focused on implementation, rendering, structure, and validation.
- Creator-lane work should stay focused on public-safe framing, explanation, and reusable narrative.
- Shared-lane work should handle source confirmation, visibility classification, release-readiness checks, and concept-surface mapping when a change crosses roles.
- Neither lane should bypass `standards/` or `governance/` when introducing a new reusable public concept surface.
- New public-facing concept surfaces should expose or inherit a standard/version reference or controlling repository document reference.
- Future multilingual or dashboard outputs should be layered on top of canonical and governance sources, not invented independently.
- Reusable public-safe surfaces should remain cataloged and traceable to their controlling sources as the prototype grows.

## Validation workflow

Validate locally with:

- `python3 config/validate_repository.py`
- `node --check script.js`

The repository workflow in `.github/workflows/validate.yml` currently runs:

- `python3 config/validate_repository.py` for required core files, structured document control blocks, allowed status/visibility values, dependency existence, repository-relative references, required frontend ids, and active standard version exposure in `script.js`
- `node --check script.js` for frontend syntax validation

## Development priorities

1. Standards + governance + validation
2. README + portfolio + operating model + roadmap alignment
3. Frontend clarity and stability
4. Domain-plan alignment and support workflow standardization
5. Modular frontend/data-model growth
6. Public/internal output layering
7. Dashboard/API/platform expansion when repository controls are mature
8. Standards, governance, prototype, and creator maturity-track alignment

## Owner information

**Name:** Nikola Spajić  
**Contact Emails:**  
- spajicn@yahoo.com  
- spajicn@gmail.com  

**Social Media Links:**  
- [Facebook Page 1](https://www.facebook.com/Spaja86)  
- [Facebook Page 2](https://www.facebook.com/profile.php?id=61583240952997)  
- [Instagram](https://www.instagram.com/spaja.1986)  
- [TikTok](https://www.tiktok.com/@spaja.1986)  
- [YouTube](https://www.youtube.com/@spajanikopenevolution?si=9JIUkOKsxLcRn)  

**Date Created:** 2026-02-17 06:46:06 (UTC)
