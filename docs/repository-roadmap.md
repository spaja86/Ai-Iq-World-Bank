# Repository Roadmap

## Document Control

- **Category:** Roadmap
- **Type:** delivery plan
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Sequences repository stabilization, documentation alignment, frontend growth, and platformization.
- **Depends on:** `docs/document-portfolio.md`, `governance/repo-charter.md`, `config/validate_repository.py`

## Priority order

1. Standards + governance alignment
2. Portfolio and operating-model routing
3. Plan and support-template alignment
4. Public-safe prototype synchronization
5. Validation and release-readiness enforcement
6. Modular growth and future data model
7. Dashboard/API/platform layer

## Phase A - Operating model and ownership rules

- Treat `docs/repository-operating-model.md` as the primary coordination document for the repository-wide developer + creator program equivalent.
- Keep one shared non-trivial change order everywhere: standards first, governance second, portfolio/roadmap third, plans fourth, public output last.
- Keep developer lane, creator lane, and shared-lane checkpoints explicit in routing, approvals, and reusable-surface expectations.
- Extend accountable ownership across navigation, standards, governance, portfolio, domain, support, and product areas.

## Phase B - Governance and lifecycle enforcement

- Require `governance/document-lifecycle.md` to describe the shared repository work cycle and cross-lane release expectations.
- Require every structured document to follow the same metadata, visibility, and controlling-source rules.
- Require low/medium/high change classification before merge when a change is non-trivial.
- Record whether high-impact work creates new reusable public-safe outputs or concept surfaces.

## Phase C - Portfolio, roadmap, and file catalog alignment

- Use `docs/document-portfolio.md` as the master map of file ownership lanes, audience layers, dependencies, and public-safe output roles.
- Keep `README.md` and portfolio references aligned with the operating-model routing language.
- Keep `docs/future-data-model.md` aligned with real document, release, and reusable-surface controls.
- Prevent untracked structural growth by requiring portfolio and lifecycle updates for new document classes.

## Phase D - Root plan and support-template alignment

- Route domain plans through the same standards -> governance -> portfolio -> plans -> public-output sequence.
- Add explicit lane usage and public/internal separation guidance to reusable root templates.
- Keep legal, licensing, business, asset, and support plans explicit about controlling sources and sanitization requirements.
- Keep support communication templates evidence-driven and downstream from governance and sensitive-content controls.

## Phase E - Prototype and public-safe output synchronization

- Preserve `index.html`, `styles.css`, and `script.js` as the public-safe prototype baseline.
- Keep INDEKURILANC as the central interactive module with active standard/version exposure.
- Keep the operating-model section synchronized with repository lanes, work cycle, change classes, checkpoints, and success criteria.
- Do not introduce new reusable concept surfaces in the prototype without an upstream standard or governance reference path.

## Phase F - Validation and release-readiness gates

- Maintain `config/validate_repository.py` and `.github/workflows/validate.yml` as the enforcement path for required files, repository-relative references, structured metadata, and frontend anchors.
- Expand validation only after the corresponding governance or operating-model rule is documented.
- Validate required structure, prototype anchors, and exposed standard/version signals before merge.
- Re-check sanitization, visibility, and reusable-surface traceability before release.

## Phase G - Security and sanitization

- Do not commit populated sensitive planning files unless sanitized.
- Remove checkout-specific absolute paths.
- Remove sensitive locations, per-site quantities, credentials, or access details.
- Keep public outputs aggregated when that is enough.
- Ensure DINAR usage always carries status, version, and context.

## Phase H - Validation and automation

- Maintain `config/validate_repository.py` as the repository validator.
- Maintain `.github/workflows/validate.yml` for automatic checks.
- Validate required files, repository-relative references, structured document control blocks, forbidden checkout paths, and frontend syntax.
- Keep required operating-model files, shared-lane routing anchors, and key prototype rendering anchors under validation.
- Expand checks gradually when portfolio and lifecycle rules become more precise.
- Keep validation aligned with any future enforcement of public-surface routing or reference exposure rules.

## Phase I - Creator and communication alignment

- Define what is demonstration/public-safe, canonical, internal planning, regulatory, and support wording.
- Keep repository storytelling aligned with standards and governance boundaries.
- Preserve reusable support-message structures for billing, escalation, follow-up, and closure.
- Keep creator-lane outputs cataloged as public-safe surfaces instead of isolated ad-hoc messages.
- Treat future multilingual output as a downstream layer sourced from canonical and governance-controlled wording.

## Phase J - Modular growth

- Prepare the frontend for clearer modules when growth justifies the split.
- Keep the future model centered on score profiles, document records, asset summaries, governance decisions, jurisdiction/license entries, and KPI metrics.
- Introduce metadata and read-only layers before any sensitive operational data layer.
- Keep future modularization ready for distinct score logic, narrative panels, reference blocks, and data hooks.
- Prepare a read-only dashboard surface only after concept-source mapping and release gates are stable.

## Phase K - Public and internal layering

- Define which assets are public-safe, limited/internal, or canonical/internal standards.
- Require future modules to declare their target audience and visibility.
- Avoid mixing demo/prototype surfaces with sensitive operational detail.

## Phase L - Platformization

- Add dashboard-style views only after document and governance controls are stable.
- Introduce managed data or API flows only after metadata structures and approval rules are mature.
- Preserve the repository’s role as a controlled system, not just a loose file collection.
- Start with read-only public-safe dashboards before any operational workflow backend is considered.

## Maturity milestone tracks

Track future work across four explicit maturity branches:

### Standards maturity
- glossary completeness for reusable terms
- score-model and standard-version clarity
- source-reference coverage for public-facing surfaces

### Governance maturity
- lifecycle rule completeness
- concept-surface gate enforcement
- sanitization and release-readiness traceability

### Prototype maturity
- UI surface modularity
- validation anchor coverage
- controlled display of source references and standard versions

### Creator maturity
- public-safe narrative consistency
- reusable output catalog coverage
- multilingual downstream readiness without creating a new source of truth

## Success criteria

- every non-trivial change has a visible controlling source,
- every structured document has valid control metadata,
- every reusable public-safe surface is cataloged and traceable,
- developer and creator responsibilities stay separated but coordinated,
- standards, governance, portfolio, plans, prototype, and validation keep the same operating logic.
