# Document Portfolio Map

## Document Control

- **Category:** Architecture
- **Type:** portfolio map
- **Status:** approved
- **Visibility:** public-safe
- **Purpose:** Master index of repository documents, dependencies, visibility, and recommended usage order.
- **Depends on:** `README.md`, `governance/document-lifecycle.md`, `governance/repo-charter.md`

## Purpose

This file is the master portfolio map for repository documents, their category, current role, dependencies, risk level, and recommended order of use.

## Portfolio status matrix

| File | Category | Type | Status | Visibility | Depends on | Risk | Primary use |
|---|---|---|---|---|---|---|---|
| `README.md` | Navigation | repository guide | working | public-safe | `governance/repo-charter.md`, `governance/document-lifecycle.md`, `standards/indekurilanc-standard.md` | medium | Start here for structure and workflow |
| `governance/repo-charter.md` | Governance | charter | approved | canonical/internal standard | `standards/indekurilanc-standard.md`, `README.md` | high | Understand repository purpose and hierarchy |
| `governance/document-lifecycle.md` | Governance | rules | approved | canonical/internal standard | `governance/repo-charter.md`, `config/sensitive-content-review-checklist.md` | high | Review metadata, status, and publication rules |
| `standards/glossary.md` | Standards | glossary | approved | canonical/internal standard | `governance/repo-charter.md`, `governance/document-lifecycle.md` | medium | Resolve terminology before editing linked materials |
| `standards/indekurilanc-standard.md` | Standards | scoring standard | approved | canonical/internal standard | `script.js`, `standards/glossary.md`, `governance/repo-charter.md` | high | Canonical source for INDEKURILANC behavior |
| `dinar-standard-plan.md` | Standards | value-system framework | working | canonical/internal standard | `governance/document-lifecycle.md`, `standards/glossary.md` | high | DINAR status, usage, and controls |
| `template-plan.md` | Templates | mapping template | working | public-safe | `README.md`, `governance/document-lifecycle.md`, `standards/glossary.md` | low | Reusable structure for baseline mapping |
| `ai-iq-world-bank-poslovni-izvestaj.md` | Templates | business analysis | working | limited/internal | `standards/indekurilanc-standard.md`, `template-plan.md` | medium | Business review, KPI, and performance framing |
| `investiciona-i-operativna-imovina-registar-plan.md` | Templates | asset registry | working | limited/internal | `governance/document-lifecycle.md`, `config/sensitive-content-review-checklist.md` | high | Sensitive asset inventory and sanitization logic |
| `javni-prikaz-emisija-i-kamatna-politika-plan.md` | Templates | public policy/display | working | public-safe | `dinar-standard-plan.md`, `investiciona-i-operativna-imovina-registar-plan.md` | high | Public asset/policy framing and publication constraints |
| `eksterni-repozitorijum-pravni-navod-plan.md` | Templates | legal/reputational handling | working | limited/internal | `governance/document-lifecycle.md`, `standards/glossary.md` | high | External-claim handling and evidence workflow |
| `globalni-licencni-okvir-i-delatnosti-plan.md` | Templates | licensing/master operations | working | limited/internal | `governance/document-lifecycle.md`, `docs/future-data-model.md` | high | Activity expansion, approvals, and licensing scope |
| `vercel-naplata-poruka-plan.md` | Support | billing communication template | working | limited/internal | `config/sensitive-content-review-checklist.md`, `governance/document-lifecycle.md` | medium | Vercel support workflow |
| `github-naplata-poruka-plan.md` | Support | billing communication template | working | limited/internal | `config/sensitive-content-review-checklist.md`, `governance/document-lifecycle.md` | medium | GitHub support workflow |
| `docs/repository-operating-model.md` | Architecture | operating model | working | public-safe | `README.md`, `governance/repo-charter.md`, `governance/document-lifecycle.md`, `docs/document-portfolio.md`, `docs/repository-roadmap.md`, `docs/future-data-model.md`, `config/sensitive-content-review-checklist.md` | medium | Route developer/creator work through ownership, approvals, and release gates |
| `docs/future-data-model.md` | Architecture | planning reference | draft | limited/internal | `docs/document-portfolio.md`, `standards/indekurilanc-standard.md`, `governance/document-lifecycle.md` | medium | Future entities and integration boundaries |
| `docs/repository-roadmap.md` | Roadmap | delivery plan | working | public-safe | `docs/document-portfolio.md`, `governance/repo-charter.md`, `config/validate_repository.py` | medium | Delivery sequencing across product and docs |
| `config/sensitive-content-review-checklist.md` | Controls | checklist | approved | canonical/internal standard | `governance/document-lifecycle.md`, `README.md` | high | Pre-commit and pre-publication review |

## Portfolio snapshot

- **Approved:** governance core, glossary, INDEKURILANC standard, sensitive-content checklist, portfolio map
- **Working:** README, DINAR framework, reusable templates, roadmap, domain plans, support plans
- **Draft:** future data model
- **Archived:** none currently tracked

## Recommended usage order

1. `README.md`
2. `governance/repo-charter.md`
3. `governance/document-lifecycle.md`
4. `standards/glossary.md`
5. `standards/indekurilanc-standard.md` and `dinar-standard-plan.md` as needed
6. Domain-specific planning or support template
7. `docs/document-portfolio.md` and `docs/repository-roadmap.md` for sequencing and dependencies
8. `docs/repository-operating-model.md` for ownership, approvals, and release gates
9. `docs/future-data-model.md` for later platform work

This usage order is also the preferred execution order for non-trivial repository changes: standard/governance direction first, then portfolio and roadmap alignment, then plan updates, then public-safe surfaces.

## Master dependency view

- **Repository control core:** `README.md` depends on `governance/repo-charter.md` and `governance/document-lifecycle.md`
- **Governance sequence:** `governance/document-lifecycle.md` builds on `governance/repo-charter.md`
- **Scoring core:** `standards/indekurilanc-standard.md` -> `script.js` -> `ai-iq-world-bank-poslovni-izvestaj.md`
- **Value-system core:** `dinar-standard-plan.md` -> `javni-prikaz-emisija-i-kamatna-politika-plan.md`
- **Sensitive asset/public split:** `investiciona-i-operativna-imovina-registar-plan.md` -> `javni-prikaz-emisija-i-kamatna-politika-plan.md` -> `config/sensitive-content-review-checklist.md`
- **Expansion and licensing:** `globalni-licencni-okvir-i-delatnosti-plan.md` -> `docs/future-data-model.md` -> governance controls
- **Support communication:** `vercel-naplata-poruka-plan.md` and `github-naplata-poruka-plan.md` -> `config/sensitive-content-review-checklist.md`
- **Operating sequence:** `governance/document-lifecycle.md` + `docs/repository-operating-model.md` -> `docs/repository-roadmap.md` -> prototype/public-safe outputs

## Ownership lanes

| Lane | Main files | Ownership role |
|---|---|---|
| Navigation | `README.md` | Navigation owner |
| Governance | `governance/`, `config/sensitive-content-review-checklist.md` | Governance owner |
| Standards | `standards/`, `dinar-standard-plan.md` | Standards owner |
| Portfolio / architecture | `docs/document-portfolio.md`, `docs/repository-roadmap.md`, `docs/repository-operating-model.md`, `docs/future-data-model.md` | Portfolio owner |
| Domain plans | Root planning templates | Domain owner |
| Support workflows | `vercel-naplata-poruka-plan.md`, `github-naplata-poruka-plan.md` | Support owner |
| Prototype | `index.html`, `styles.css`, `script.js` | Product owner |

## Audience and public-surface map

| Repository area | Primary audience layer | Public-surface role |
|---|---|---|
| `README.md` | creator / public-safe + contributor navigation | top-level public-safe framing and entry point |
| `docs/repository-operating-model.md` | creator / public-safe + contributor routing | operating rules for reusable public-safe outputs |
| `docs/document-portfolio.md` | contributor / architecture | structure map and cross-document routing |
| `docs/repository-roadmap.md` | contributor / architecture | priority and sequencing reference |
| `standards/` and `governance/` | canonical / standards | controlling source layer, not promotional output |
| Root planning templates | internal planning, regulatory, or support depending on file | structured inputs that may later produce sanitized outputs |
| `index.html`, `styles.css`, `script.js` | demonstration / creator-public | controlled prototype surfaces that must expose source-aligned meaning |

## Public-safe output route

Use canonical or governance sources first, route through the relevant working plan, sanitize the output, then expose the approved public-safe result through shared documents or the prototype.

The repository's logical public-safe output catalog currently consists of `README.md`, the prototype files, `docs/repository-operating-model.md`, and any explicitly public-safe root plan such as `javni-prikaz-emisija-i-kamatna-politika-plan.md`.

## When to use which plan

- Use `ai-iq-world-bank-poslovni-izvestaj.md` for business performance analysis.
- Use `investiciona-i-operativna-imovina-registar-plan.md` for internal asset registry planning.
- Use `javni-prikaz-emisija-i-kamatna-politika-plan.md` for public-facing transparency and policy outputs.
- Use `eksterni-repozitorijum-pravni-navod-plan.md` for handling claims originating outside this repository.
- Use `globalni-licencni-okvir-i-delatnosti-plan.md` for activity expansion, jurisdiction planning, and approvals.
- Use `vercel-naplata-poruka-plan.md` or `github-naplata-poruka-plan.md` when preparing billing support communication.
