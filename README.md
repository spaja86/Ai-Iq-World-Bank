# 🏦 AI IQ World Bank
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
- `.github/` holds repository governance assets (workflow, ownership, contribution/security, issue/PR templates).
- `business/` holds sanitized business-operations templates (invoices, contracts, evidence, audit trail, weekly rhythm).
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
- `.github/` - workflow and collaboration governance
- `business/` - controlled business template segment
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
- `covecnost-narativni-epilog-plan.md` - creator/public-safe narrative epilog framework for courage, learning, innovation, and human potential
- `eksterni-repozitorijum-pravni-navod-plan.md` - legal and reputational handling template for external claims
- `globalni-licencni-okvir-i-delatnosti-plan.md` - master licensing and activity-expansion template
- `developer-creator-monetization-playbook-plan.md` - developer + creator monetization playbook for offer tiers, shared-lane meta-monetization, KPI governance, and release-gate control
- `vrh-programskog-ekvivalenta-operativni-okvir-plan.md` - shared execution framework for VRH program-equivalent quality standard, lane KPI model, phased rollout, release-readiness criteria, and the non-controlling MARKAN additive alias
- `vrh-programskog-ekvivalenta-narativni-ekvivalenti-plan.md` - working internal plan for term-tier separation, shared-lane meaning control, quote classification, and creator/public-safe handling of narrative metaphors around the VRH program-equivalent framework
- `github-vercel-ekosistemski-operativni-okvir-plan.md` - shared GitHub + Vercel ecosystem operations framework for conditional ecosystem positioning, onboarding phases, decision gates, and KPI control
- `vercel-operativni-domen-i-fakture-plan.md` - Vercel operational-domain plan for invoices, incidents, KPI, ecosystem collaboration, and a €100,000 monthly internal budget-control policy requiring human approval for payment or plan commitments
- `vercel-naplata-poruka-plan.md` - Vercel billing support template
- `github-naplata-poruka-plan.md` - GitHub billing and subscription support template
- `business/README.md` - controlled business-operations template segment and sensitive-content boundary
- `business/fakture-registar-template.csv` - invoice register template (sanitized structure only)
- `business/ugovori-registar-template.csv` - contract register template (sanitized structure only)
- `business/evidencija-operativnih-dokaza-template.csv` - operational evidence register template (sanitized structure only)
- `business/revizijski-trag-template.csv` - audit-trail template (sanitized structure only)
- `business/nedeljni-operativni-ciklus-template.md` - weekly operating rhythm template with owner-lane responsibilities

### Portfolio and roadmap references

- `docs/document-portfolio.md` - master map of repository documents, status, dependencies, visibility, and usage order
- `docs/repository-roadmap.md` - implementation sequence across standards, governance, frontend, and platform growth
- `docs/repository-operating-model.md` - developer and creator operating model, output flow, ownership lanes, and release readiness
- `docs/future-data-model.md` - future entity model for scores, documents, governance, assets, and licensing

## Governance and protection rules

- Planning documents are fill-in templates; populated versions with sensitive business or asset details must stay out of source control unless sanitized.
- Business registry templates in `business/` are schema-only; real invoices/contracts/attachments stay outside source control unless sanitized.
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

For every non-trivial change, keep these routing fields explicit somewhere in the affected working surface or routing document:

- controlling source
- audience layer
- visibility
- ownership lane and any shared-lane handoff
- release status

Root plans, support templates, and reusable public-output frameworks should expose this through a routing block with primary lane, controlling coordination source, audience layer, visibility handling, shared-lane checkpoint, and release status.

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
- `python3 config/validate_repository.py` also checks that core root planning/support surfaces keep the shared routing-block metadata used by the operating model
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

**Profesionalna Svetska Banka Budućnosti** — izgrađena na AI tehnologijama sa globalnom pokrivenošću u 190+ zemalja.

[![Live Demo](https://img.shields.io/badge/Live-Demo-gold?style=for-the-badge)](https://github.com/spaja86/Ai-Iq-World-Bank)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 O Projektu

AI IQ World Bank je profesionalni višestraničan bankarski sajt sa interaktivnim JavaScript funkcijama, Canvas grafovima, animiranim counter-ima, kreditnim kalkulatorom i live ticker bar-om.

**Karakteristike:**
- 🌍 Pokrivenost u **190+ zemalja** širom sveta
- 💰 **$50B+** ukupna aktiva
- 👥 **10M+** zadovoljnih klijenata
- ⏰ **24/7** korisnička podrška
- 🤖 AI-potpomognuto bankarstvo naredne generacije

---

## 📁 Struktura Projekta

```
Ai-Iq-World-Bank/
├── index.html          ← Naslovna strana (hero, stats, usluge, platforme)
├── about.html          ← O banci (misija, vrednosti, osnivač)
├── services.html       ← Bankarske usluge (kartice, krediti, FX...)
├── loans.html          ← Krediti sa interaktivnim kalkulatorom
├── investments.html    ← Investicije sa Canvas grafovima
├── contact.html        ← Kontakt forma sa validacijom
├── styles.css          ← Kompletan profesionalni CSS (dark blue + gold tema)
├── js/
│   ├── main.js         ← Navigacija, sticky header, counters, IntersectionObserver
│   ├── calculator.js   ← Kreditni kalkulator (M = P[r(1+r)^n]/[(1+r)^n-1])
│   ├── charts.js       ← Canvas grafovi (linijski + stupičasti)
│   └── ticker.js       ← Live ticker bar animacija
├── README.md
└── SECURITY.md
```

---

## ✨ Funkcionalnosti

### �� Dizajn
- **Profesionalna bankarska tema**: tamno plava (`#0a1628`), zlatna (`#c9a84c`), bela
- **Sticky glassmorphism header** sa efektom zamućenja
- **Animirani ticker bar**: BTC, ETH, EUR/USD, USD/RSD, GOLD i još...
- **Hover efekti** na karticama sa zlatnom gornjom linijom
- **Responsive mobile-first** dizajn
- CSS varijable za konzistentnu temu

### 🧮 Kreditni Kalkulator (`loans.html`)
Interaktivni kalkulator sa formulom:
```
M = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]
```
- **P** = iznos kredita | **r** = mesečna kamatna stopa | **n** = broj rata
- Range slideri + number inputi sinhronizovani
- Canvas pita grafikon: Glavnica vs. Kamata

### 📊 Canvas Grafovi (`investments.html`)
- **Linijski grafikon** rasta aktive 2020–2026 ($30B → $50B) sa gradijentom
- **Stupičasti grafikon** godišnjih prinosa po fondovima
- Animirani, responzivni, redraw pri resize

### 📡 Ticker Bar
- `BTC: $67,420 ▲2.3% | ETH: $3,840 ▲1.7% | EUR/USD: 1.0842 | USD/RSD: 109.50 | GOLD: $2,340/oz`
- CSS animacija beskonačnog scrolling-a

### �� Counter Animacije
- Animate on scroll koristeći `IntersectionObserver`
- 190+ Zemalja | $50B+ Aktiva | 10M+ Klijenata | 24/7 Podrška

---

## 🚀 Kako Pokrenuti Lokalno

Nema build koraka — čist HTML/CSS/JS:

```bash
# Klonirajte repozitorijum
git clone https://github.com/spaja86/Ai-Iq-World-Bank.git
cd Ai-Iq-World-Bank

# Pokrenite sa VS Code Live Server ili bilo kojim HTTP serverom
python3 -m http.server 8000
# → Otvorite http://localhost:8000
```

---

## 🔗 Ekosistem Kompanija SPAJA

Sve platforme sarađuju međusobno:

| Platforma | Opis | Link |
|-----------|------|------|
| 🏦 **AI IQ World Bank** | Profesionalna svetska banka | *Ova platforma* |
| 🌐 **IO-OPENUI-AO** | Saradnja, igrice, WebRTC | [io-openui-ao.vercel.app](https://io-openui-ao.vercel.app) |
| 💱 **Ai-Iq-Menjačnica** | Kripto menjačnica | [GitHub](https://github.com/spaja86/Ai-Iq-Menja-nica) |
| 🏢 **Kompanija SPAJA** | Matična IT kompanija | [GitHub](https://github.com/spaja86/Kompanija-SPAJA) |

---

## 👤 Vlasnik i Kontakt

**Nikola Spajić**
Osnivač & CEO — Smederevo, Srbija

| Kontakt | Link |
|---------|------|
| 📧 Email | [spajicn@yahoo.com](mailto:spajicn@yahoo.com) |
| 📧 Email | [spajicn@gmail.com](mailto:spajicn@gmail.com) |
| 📘 Facebook | [facebook.com/Spaja86](https://www.facebook.com/Spaja86) |
| 📘 Facebook (Banka) | [facebook.com/profile](https://www.facebook.com/profile.php?id=61583240952997) |
| 📷 Instagram | [instagram.com/spaja.1986](https://www.instagram.com/spaja.1986) |
| 🎵 TikTok | [tiktok.com/@spaja.1986](https://www.tiktok.com/@spaja.1986) |
| ▶️ YouTube | [youtube.com/@spajanikopenevolution](https://www.youtube.com/@spajanikopenevolution) |

---

## 📄 Licenca

© 2026 AI IQ World Bank. Sva prava zadržana.  
Vlasnik: **Nikola Spajić** | Smederevo, Srbija
**Date Created:** 2026-02-17 06:46:06 (UTC)
