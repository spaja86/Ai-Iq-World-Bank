# Repository Roadmap

## Document Control

- **Category:** Roadmap
- **Type:** delivery plan
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Sequences repository stabilization, documentation alignment, frontend growth, and platformization.
- **Depends on:** `docs/document-portfolio.md`, `governance/repo-charter.md`, `config/validate_repository.py`

## Priority order

1. Standards + governance + validation
2. Frontend clarity and stability
3. Alignment of plans and cross-references
4. Modular growth and future data model
5. Dashboard/API/platform layer

## Phase 1 - Foundation stabilization

- Lock the core repository structure around `README.md`, `docs/`, `governance/`, `standards/`, and `config/`.
- Keep `README.md` as the main navigation entry.
- Maintain the source-of-truth hierarchy from standards to governance to guide documents and implementation.
- Prevent ad-hoc structural growth by requiring portfolio and lifecycle updates for new document classes.

## Phase 2 - Product strengthening

- Preserve `index.html`, `styles.css`, and `script.js` as the public prototype baseline.
- Keep INDEKURILANC as the central interactive module.
- Ensure the public interface shows result, interpretation, priority focus, and standard version clearly.
- Add clearer breakdown panels for score drivers, operating lanes, and public-safe output routes.
- Prepare space for future dashboards, reference panels, and additional calculators.
- Keep standard values, display data, and logic separated for easier growth.

## Phase 3 - Core standardization

- Maintain `standards/indekurilanc-standard.md` as the canonical scoring source.
- Maintain `standards/glossary.md` as the controlled terminology source.
- Maintain `dinar-standard-plan.md` as the dedicated DINAR framework.
- Require standard updates before related logic changes become canonical.
- Require new cross-repository terminology to enter the glossary before broad reuse.

## Phase 4 - Portfolio alignment

- Use `docs/document-portfolio.md` as the master map of files, status, dependencies, and visibility.
- Use `docs/repository-operating-model.md` as the routing layer for ownership, approvals, and release readiness.
- Keep `docs/future-data-model.md` aligned with real document and governance entities.
- Require every structured document to declare type, status, purpose, dependencies, and visibility.
- Keep portfolio status, risk level, and dependency registry synchronized with repository growth.

## Phase 5 - Domain-plan alignment

- Use `ai-iq-world-bank-poslovni-izvestaj.md` for business analysis and KPI framing.
- Use `investiciona-i-operativna-imovina-registar-plan.md` for internal asset tracking.
- Use `javni-prikaz-emisija-i-kamatna-politika-plan.md` for public display and policy outputs.
- Use `eksterni-repozitorijum-pravni-navod-plan.md` for external-claim handling.
- Use `globalni-licencni-okvir-i-delatnosti-plan.md` for jurisdiction and licensing expansion.
- Use `vercel-naplata-poruka-plan.md` and `github-naplata-poruka-plan.md` for support communication.

## Phase 6 - Lifecycle and review enforcement

- Require every new document to follow `governance/document-lifecycle.md`.
- Require statuses `draft`, `working`, `approved`, or `archived`.
- Make scenario, verified, internal, and public-safe boundaries explicit.
- Use review checkpoints before merge for standards, visibility, references, and sensitive content.
- Require ownership routing, change impact review, and release-readiness checks for non-trivial work.

## Phase 7 - Security and sanitization

- Do not commit populated sensitive planning files unless sanitized.
- Remove checkout-specific absolute paths.
- Remove sensitive locations, per-site quantities, credentials, or access details.
- Keep public outputs aggregated when that is enough.
- Ensure DINAR usage always carries status, version, and context.

## Phase 8 - Validation and automation

- Maintain `config/validate_repository.py` as the repository validator.
- Maintain `.github/workflows/validate.yml` for automatic checks.
- Validate required files, repository-relative references, structured document control blocks, forbidden checkout paths, and frontend syntax.
- Keep required operating-model files and key prototype rendering anchors under validation.
- Expand checks gradually when portfolio and lifecycle rules become more precise.

## Phase 9 - Creator and communication alignment

- Define what is demonstration/public-safe, canonical, internal planning, regulatory, and support wording.
- Keep repository storytelling aligned with standards and governance boundaries.
- Preserve reusable support-message structures for billing, escalation, follow-up, and closure.

## Phase 10 - Modular growth

- Prepare the frontend for clearer modules when growth justifies the split.
- Keep the future model centered on score profiles, document records, asset summaries, governance decisions, jurisdiction/license entries, and KPI metrics.
- Introduce metadata and read-only layers before any sensitive operational data layer.

## Phase 11 - Public and internal layering

- Define which assets are public-safe, limited/internal, or canonical/internal standards.
- Require future modules to declare their target audience and visibility.
- Avoid mixing demo/prototype surfaces with sensitive operational detail.

## Phase 12 - Platformization

- Add dashboard-style views only after document and governance controls are stable.
- Introduce managed data or API flows only after metadata structures and approval rules are mature.
- Preserve the repository’s role as a controlled system, not just a loose file collection.
