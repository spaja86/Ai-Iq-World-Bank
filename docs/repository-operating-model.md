# Repository Operating Model

## Document Control

- **Category:** Architecture
- **Type:** operating model
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Defines the developer and creator operating lanes, public-safe output flow, approvals, ownership model, and release-readiness gates for repository growth.
- **Depends on:** `governance/repo-charter.md`, `governance/document-lifecycle.md`, `docs/document-portfolio.md`, `docs/future-data-model.md`, `config/sensitive-content-review-checklist.md`

## Purpose

This repository operates as one controlled system rather than a loose collection of prototype files and planning documents.

The operating model connects developer work, creator/public messaging, standards, governance review, and future platform growth into one sequence.

This file is the primary coordination reference for the repository-wide developer + creator program equivalent. Other repository files should stay downstream from this operating model when they define approvals, routing, reusable surfaces, release gates, or repository-wide execution order.

<!-- operating-model:execution-order -->
## Repository-wide execution order

Every non-trivial repository change should follow one shared order everywhere in the repository:

1. standards first
2. governance second
3. portfolio and roadmap third
4. plans and support templates fourth
5. public output and prototype surfaces last

Do not invert this order when the change affects more than one repository pillar. If a downstream file implies a new rule, update the controlling standard or governance source first.

<!-- operating-model:work-cycle -->
## Repository work cycle (radni takt)

Use one consistent work cycle for cross-repository changes:

1. identify the controlling source
2. classify audience layer and visibility
3. update the governing standard, governance rule, or approved routing document
4. align portfolio, roadmap, and dependent plans
5. update public-safe prototype or other downstream surfaces only after upstream alignment
6. validate structure, repository-relative references, required anchors, and exposed standard/version signals
7. confirm sanitization, release readiness, and reusable-surface traceability

## Core operating lanes

### 1a. Prototype lane

- Owns `index.html`, `styles.css`, and `script.js`.
- Makes the active standard visible through public-safe interfaces.
- Must not become the source of truth for scoring, governance, or licensing rules.
- Must route every non-trivial UI or output change through standard -> governance -> docs -> implementation.
- Must keep concept surfaces, score logic, narrative panels, and future data hooks separable as growth continues.

### 1b. Developer lane execution rules

- Treat the prototype lane as the developer lane for day-to-day implementation work.
- Limit direct developer authority to implementation, rendering, frontend structure, and technical validation.
- Before changing any public-facing concept, confirm the controlling source in `standards/` or `governance/`.
- Do not introduce a new public concept surface in the UI unless the same concept already has a controlling document or an approved repository reference block.
- Keep the frontend public-safe, standard-aligned, and ready for later modular extraction.
- Preserve traceability between implementation details, required prototype anchors, validation checks, and the controlling source reference.

### 1c. Creator lane execution rules

- Treat public explanation, demo framing, external storytelling, and shareable narrative as creator-lane work.
- Creator outputs may simplify presentation but must not redefine standards, governance rules, or internal planning facts.
- Every creator-facing output should declare or inherit a clear audience layer and visibility intent.
- Reusable creator messaging should map back to an existing plan, public-safe document, or approved support template.
- Public storytelling must stay sanitized, aggregated, and free from sensitive operational detail.

### 1d. Shared lane execution rules

- Use the shared lane whenever work crosses developer, creator, governance, standards, or domain-plan responsibilities.
- Confirm the controlling source, target audience layer, and visibility before editing a reusable surface.
- Keep release-readiness checks, concept-surface mapping, and public-safe catalog membership explicit.
- Require cross-lane changes to preserve source meaning even when wording, presentation, or channel changes.
- Record new reusable surfaces before they are treated as stable repository outputs.

### 1e. Developer + creator shared execution checkpoints

- Confirm the controlling standard, governance rule, or approved plan before changing a reusable surface.
- Classify the target audience layer and visibility before drafting new copy or panels.
- Keep source logic, public-safe narrative, and release-readiness checks separable.
- Update concept-surface mapping when a reusable panel, narrative block, or cataloged output changes.
- Keep multilingual or channel-specific variants downstream from canonical wording.
- Confirm whether the work stays in one lane or requires a shared-lane handoff before release.

### 2. Standards lane

- Owns scoring rules, glossary terms, DINAR context, and other canonical definitions.
- Must be updated before related implementation is treated as normative.
- Controls terminology reused by roadmap, plans, UI, and future data models.

### 3. Governance lane

- Owns lifecycle, visibility, publication, approval, and sanitization rules.
- Decides how working content becomes shareable public-safe output.
- Defines release gates for documents and public prototype updates.

### 4. Portfolio and architecture lane

- Owns the mapping between repository files, dependencies, statuses, and future entities.
- Keeps `docs/document-portfolio.md`, `docs/repository-roadmap.md`, and `docs/future-data-model.md` aligned.
- Prevents untracked document growth.

### 5. Domain-plan lane

- Owns business, asset, public-policy, legal, licensing, and support templates.
- Keeps scenario, internal, and public-safe variants clearly separated.
- Supplies structured inputs for future reporting and platformization.

<!-- operating-model:pillar-routing -->
## Repository pillar routing

Apply the operating model to every repository pillar:

| Pillar | Main paths/files | Primary lane | Required downstream rule |
|---|---|---|---|
| Standards | `standards/`, `dinar-standard-plan.md` | standards lane | define canonical meaning, active terms, and standard/version-controlled outputs before downstream changes |
| Governance | `governance/`, `config/sensitive-content-review-checklist.md` | governance lane | define what is allowed, visible, reviewable, publishable, and release-ready |
| Portfolio / architecture | `docs/document-portfolio.md`, `docs/repository-roadmap.md`, `docs/future-data-model.md`, this file | portfolio lane | route work, sequence change rollout, catalog outputs, and keep ownership explicit |
| Root plans and support templates | root `*.md` plan/support files | domain or support lane | separate structured internal inputs from public-safe outputs and declare lane usage |
| Prototype | `index.html`, `styles.css`, `script.js` | developer + creator shared output | expose only approved public-safe surfaces tied to controlling sources |
| Validation and CI | `config/validate_repository.py`, `.github/workflows/validate.yml` | developer / governance shared enforcement | enforce documented rules only after the rule exists in standards or governance |

## Handoffs and cross-lane boundaries

Use these handoffs when work moves between repository layers:

1. **Standards -> Governance** when a canonical rule needs lifecycle, visibility, or publication enforcement.
2. **Governance -> Portfolio** when the rule changes ownership mapping, routing, output catalog membership, or review sequence.
3. **Portfolio -> Domain or Support plans** when reusable working inputs must adopt the new routing or control pattern.
4. **Plans -> Prototype/Public output** when sanitized, approved, public-safe meaning is ready for display.
5. **Developer -> Creator** when implementation surfaces need public-safe narrative framing.
6. **Creator -> Developer** when public-safe messaging needs synchronized UI anchors or validation coverage.

## Narrative and audience layers

Use the same repository facts through distinct communication layers:

| Layer | Primary audience | Main purpose | Content rule |
|---|---|---|---|
| Demonstration / creator-public | Broad public, partners, general viewers | Show the concept and controlled prototype | Use public-safe wording only |
| Standards / canonical | Contributors and maintainers | Define repository rules and controlled terms | State the active source of truth explicitly |
| Internal planning | Operators and planners | Explore scenarios, assets, and business structure | Keep sensitive detail limited/internal unless sanitized |
| Regulatory / legal | Reviewers, counsel, jurisdiction planning | Frame approval, licensing, and compliance logic | Avoid promotional language and preserve traceability |
| Support / operational communication | Platform support teams and operators | Handle billing, incidents, follow-up, and closure | Use issue-specific evidence and neutral wording |

## Public-safe output flow

1. Canonical standard or governance rule defines the allowed interpretation.
2. Working plans and internal analysis gather scenario or operational context.
3. Sensitive content is reduced, aggregated, or sanitized using repository controls.
4. Public-safe documents and prototype surfaces reuse only approved, non-sensitive outputs.
5. Future dashboards and APIs should consume the same public-safe or role-appropriate layers instead of bypassing governance.

## Public-safe output catalog model

Treat the repository as maintaining one logical public-safe output catalog even when the outputs remain distributed across files.

- `README.md` provides the top-level public-safe framing and navigation.
- `index.html`, `styles.css`, and `script.js` expose the controlled public prototype.
- `docs/repository-operating-model.md` defines the routing and release constraints for public-safe outputs.
- `javni-prikaz-emisija-i-kamatna-politika-plan.md` provides the public-policy and transparency-oriented output structure.
- `covecnost-narativni-epilog-plan.md` provides a controlled creator/public-safe narrative epilog structure for human-potential messaging.
- Future dashboard cards, summaries, multilingual variants, and creator-facing overview panels should be added only as cataloged public-safe outputs derived from controlled sources.

## Concept surface inventory

Use this inventory to keep reusable surfaces tied to a controlling source:

| Surface | Channel | Owner lane | Controlling source | Visibility | Release expectation |
|---|---|---|---|---|---|
| Repository overview and pillar framing | `README.md` + prototype overview panels | creator + prototype | `governance/repo-charter.md`, `README.md` | public-safe | navigation and public framing remain aligned |
| Source-of-truth, visibility, and future-module panels | prototype architecture section | developer/prototype | `governance/repo-charter.md`, `governance/document-lifecycle.md`, `docs/future-data-model.md` | public-safe | source references remain explicit |
| Developer/creator operating model panels | `docs/repository-operating-model.md` + prototype operating-model section | creator + portfolio | `docs/repository-operating-model.md`, `governance/document-lifecycle.md` | public-safe | ownership, audience, and release gates stay synchronized |
| INDEKURILANC calculator outputs | prototype scoring module | developer/prototype | `standards/indekurilanc-standard.md` | public-safe | active standard version exposed in UI |
| Standards, governance, and portfolio reference cards | prototype reference sections | developer/prototype | `README.md`, `docs/document-portfolio.md` | public-safe | public references remain repo-relative and curated |
| Public transparency and policy outputs | `javni-prikaz-emisija-i-kamatna-politika-plan.md` and future summaries | creator + domain | `javni-prikaz-emisija-i-kamatna-politika-plan.md`, `dinar-standard-plan.md` | public-safe | sanitization and policy controls checked |
| Narrative epilog for “Čovečnost” | `covecnost-narativni-epilog-plan.md` and future creator-facing summary blocks | creator + domain | `covecnost-narativni-epilog-plan.md`, `governance/document-lifecycle.md` | public-safe | metaphor, tone, and controlling-source checks remain explicit |

## Document ownership model

Ownership is by role group, not by one individual file editor:

| Repository area | Ownership role | Primary responsibility |
|---|---|---|
| `README.md` | Navigation owner | Entry-point clarity and contributor guidance |
| `governance/` | Governance owner | Lifecycle, visibility, approval, and review rules |
| `standards/` and `dinar-standard-plan.md` | Standards owner | Canonical definitions, terms, and scoring alignment |
| `docs/` | Portfolio owner | Architecture map, roadmap, and future entity alignment |
| Root domain plans | Domain owner | Reusable operational templates and scenario boundaries |
| Support plans | Support owner | Structured incident, billing, escalation, and follow-up communication |
| Prototype files | Product owner | Public-safe UI clarity and standard-aligned output rendering |

## Accountable lane map

Use these accountable paths as the default ownership model for repository work:

| Repository area | Accountable owner | Primary execution lane |
|---|---|---|
| `README.md` | Navigation owner | creator + shared lane |
| `standards/` and `dinar-standard-plan.md` | Standards owner | standards lane |
| `governance/` and lifecycle/review rules | Governance owner | governance + shared lane |
| `docs/document-portfolio.md`, `docs/repository-roadmap.md`, `docs/repository-operating-model.md`, `docs/future-data-model.md` | Portfolio owner | portfolio lane |
| Root planning templates | Domain owner | domain + creator-aware lane |
| Support communication plans | Support owner | support + creator-aware lane |
| `index.html`, `styles.css`, `script.js` | Product owner | developer lane with creator coordination for reusable public-safe surfaces |

## RACI-style lane matrix

Use this matrix when a change crosses developer, creator, standards, and governance work:

| Change area | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Prototype implementation and UI structure | Product owner | Standards owner when behavior changes, otherwise Product owner | Governance owner, Portfolio owner | Domain owner, Support owner |
| Creator/public-safe messaging | Navigation owner or Product owner | Governance owner | Standards owner, Portfolio owner | Domain owner, Support owner |
| Standards and controlled terminology | Standards owner | Standards owner | Governance owner, Product owner | Portfolio owner, Domain owner |
| Lifecycle, visibility, and publication rules | Governance owner | Governance owner | Standards owner, Portfolio owner | Product owner, Domain owner, Support owner |
| Portfolio, roadmap, and future-model alignment | Portfolio owner | Portfolio owner | Standards owner, Governance owner | Product owner, Domain owner, Support owner |
| Domain plan evolution | Domain owner | Domain owner | Governance owner, Standards owner | Portfolio owner, Product owner |
| Support workflow content | Support owner | Support owner | Governance owner, Portfolio owner | Product owner, Domain owner |

## Approval flow by change type

| Change type | Controlling source first | Required follow-up | Release gate |
|---|---|---|---|
| Scoring or output changes | `standards/indekurilanc-standard.md` | Prototype alignment and roadmap note if scope expands | Validation + public wording check |
| New terminology | `standards/glossary.md` | Update affected docs and UI labels | Terminology consistency check |
| Lifecycle or publication rule changes | `governance/document-lifecycle.md` | Portfolio, README, validator alignment | Governance + validation check |
| New structured document | `docs/document-portfolio.md` | Lifecycle compliance and README discoverability | Document Control + dependency check |
| Public messaging changes | `README.md` or public-safe docs | Cross-check against standards and governance | Visibility + sanitization review |
| Support workflow changes | Support plan file | README/portfolio sync if shared workflow changes | Evidence and escalation readiness check |
| New public concept surface | controlling standard, governance rule, or approved reference document | Portfolio note, creator/developer alignment, prototype update if needed, concept-surface inventory update | Standard/version reference exposure check |

## Change sequence

Every non-trivial repository change should follow this order:

1. Standard and governance decision
2. Portfolio and roadmap alignment
3. Domain-plan and support-template alignment
4. Prototype/public-surface update
5. Concept-surface mapping and public-safe catalog review
6. Validation, sanitization, and release-readiness review

The repository-wide default principle is:

1. standard first
2. governance second
3. portfolio third
4. plans fourth
5. public output last

## Change impact matrix

| Impact level | Typical trigger | Minimum required updates |
|---|---|---|
| Low | Clarity, cleanup, non-normative presentation, small UI wording refinement | Validate affected files, preserve references, and confirm no source meaning changed |
| Medium | New working document, new public-safe panel, support workflow change, lane-routing update in templates | Update portfolio/routing docs, confirm audience layer, and review dependent public-safe surfaces |
| High | Standard change, governance rule change, new reusable concept surface, visibility-boundary change, future platform entity change | Update controlling source first, align dependent docs and prototype, update validator/catalog traces, and complete release-readiness review |

## Concept-surface gate

When introducing a new concept surface in a public prototype or shareable document:

1. identify the controlling standard, governance rule, or approved planning reference,
2. expose the relevant standard/version or repository reference in the output,
3. classify the audience layer and visibility before publication,
4. update roadmap or portfolio references if the concept becomes a reusable repository surface,
5. update the concept-surface inventory or equivalent source map.

<!-- operating-model:success-criteria -->
## Success criteria and end-state

Treat the rollout as complete only when:

1. every non-trivial change has a visible controlling source,
2. every structured document preserves valid `Document Control`,
3. every reusable public-safe surface is cataloged and traceable,
4. developer and creator responsibilities remain separated but coordinated through the shared lane,
5. standards, governance, docs, plans, prototype, and validation all express the same operating logic.

Practical end-state:

- the repository behaves as one controlled system,
- the developer lane builds, structures, and validates,
- the creator lane explains and frames approved public-safe meaning,
- standards define canonical meaning,
- governance controls publication and release,
- portfolio artifacts route and sequence work,
- plans hold structured inputs,
- prototype surfaces expose only approved public-safe outputs.

## Release-readiness checklist

Before treating a change as ready:

1. Confirm the controlling source is updated first.
2. Confirm every structured document still has valid `Document Control`.
3. Confirm all dependencies are repository-relative and valid.
4. Confirm scenario assumptions are separate from verified or public-safe statements.
5. Confirm the prototype exposes the active standard/version where required.
6. Confirm sensitive details and credentials are absent.
7. Confirm roadmap, portfolio, and future-model references still match the repository structure.
8. Confirm developer-lane and creator-lane responsibilities stayed within the intended ownership path.
9. Confirm reusable public-safe outputs still fit the repository's logical public-safe output catalog.
10. Confirm reusable concept-surface mappings still point to the intended controlling sources.

## Future growth path

- Keep metadata and ownership structures ready for later managed entities.
- Add new calculators only under standards control.
- Introduce dashboard/API layers only after public-safe output flows and release gates are stable.
- Use multilingual support only as a structured layer above existing canonical and governance sources.
- Add read-only dashboard surfaces before any managed operational data flows.
