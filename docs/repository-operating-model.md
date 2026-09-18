# Repository Operating Model

## Document Control

- **Category:** Architecture
- **Type:** operating model
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Defines the developer and creator operating lanes, public-safe output flow, approvals, ownership model, and release-readiness gates for repository growth.
- **Depends on:** `README.md`, `governance/repo-charter.md`, `governance/document-lifecycle.md`, `docs/document-portfolio.md`, `docs/repository-roadmap.md`, `docs/future-data-model.md`, `config/sensitive-content-review-checklist.md`

## Purpose

This repository operates as one controlled system rather than a loose collection of prototype files and planning documents.

The operating model connects developer work, creator/public messaging, standards, governance review, and future platform growth into one sequence.

## Core operating lanes

### 1. Prototype lane

- Owns `index.html`, `styles.css`, and `script.js`.
- Makes the active standard visible through public-safe interfaces.
- Must not become the source of truth for scoring, governance, or licensing rules.

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

## Approval flow by change type

| Change type | Controlling source first | Required follow-up | Release gate |
|---|---|---|---|
| Scoring or output changes | `standards/indekurilanc-standard.md` | Prototype alignment and roadmap note if scope expands | Validation + public wording check |
| New terminology | `standards/glossary.md` | Update affected docs and UI labels | Terminology consistency check |
| Lifecycle or publication rule changes | `governance/document-lifecycle.md` | Portfolio, README, validator alignment | Governance + validation check |
| New structured document | `docs/document-portfolio.md` | Lifecycle compliance and README discoverability | Document Control + dependency check |
| Public messaging changes | `README.md` or public-safe docs | Cross-check against standards and governance | Visibility + sanitization review |
| Support workflow changes | Support plan file | README/portfolio sync if shared workflow changes | Evidence and escalation readiness check |

## Change sequence

Every non-trivial repository change should follow this order:

1. Standard and governance decision
2. Portfolio and roadmap alignment
3. Domain-plan and support-template alignment
4. Prototype/public-surface update
5. Validation, sanitization, and release-readiness review

## Change impact matrix

| Impact level | Typical trigger | Minimum required updates |
|---|---|---|
| Low | Copy clarification, small UI clarity improvement, non-normative structure cleanup | Validate affected files and keep references correct |
| Medium | New working document, expanded roadmap, new public-safe panel, support workflow changes | Update portfolio, README references, and validation if structure changes |
| High | Standard change, governance rule change, new sensitive-content boundary, future platform entity changes | Update controlling source, dependent docs, prototype messaging, and validator |

## Release-readiness checklist

Before treating a change as ready:

1. Confirm the controlling source is updated first.
2. Confirm every structured document still has valid `Document Control`.
3. Confirm all dependencies are repository-relative and valid.
4. Confirm scenario assumptions are separate from verified or public-safe statements.
5. Confirm the prototype exposes the active standard/version where required.
6. Confirm sensitive details and credentials are absent.
7. Confirm roadmap, portfolio, and future-model references still match the repository structure.

## Future growth path

- Keep metadata and ownership structures ready for later managed entities.
- Add new calculators only under standards control.
- Introduce dashboard/API layers only after public-safe output flows and release gates are stable.
- Use multilingual support only as a structured layer above existing canonical and governance sources.
