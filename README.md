# AI IQ World Bank

AI IQ World Bank is a repository that combines a static prototype, repository standards, governance rules, and Serbian-language planning templates.

## Repository pillars

1. **Product / prototype** - the static website and INDEKURILANC calculator.
2. **Standards** - canonical definitions for scoring, terminology, and controlled value systems.
3. **Operational plans** - fill-in planning templates for analysis, assets, public disclosures, licensing, and support communication.
4. **Governance and protection** - sanitization, review, lifecycle, and publication controls.

## Current structure

- `index.html` - static entrypoint for the repository website.
- `styles.css` - current website styles.
- `script.js` - current frontend logic for INDEKURILANC.
- `docs/` - portfolio maps, roadmap, and future integration references.
- `governance/` - charter and document lifecycle rules.
- `standards/` - canonical repository standards and glossary.
- `config/` - repository validation and sensitive-content review guidance.
- Root `*.md` planning files - current fill-in templates and standards already used by the repository.

## Quick start

### View the prototype

1. Open `index.html` in a browser.
2. Navigate to the `INDEKURILANC` section.
3. Enter scores for infrastructure, skills, and governance.
4. Review the score, status, and operational interpretation.

### Validate locally

- Run `python3 config/validate_repository.py`
- Run `node --check script.js`

## Product baseline: INDEKURILANC

INDEKURILANC is the repository's active scoring prototype.

- Infrastructure: 40%
- Skills: 35%
- Governance: 25%
- Current maturity bands:
  - `0-39.99` -> Early Stage
  - `40-69.99` -> Emerging
  - `70-100` -> Advanced
- Active standard reference: `standards/indekurilanc-standard.md`

## Canonical standards and governance

- `standards/indekurilanc-standard.md` - scoring baseline, maturity bands, required interpretation fields, and future model rules.
- `standards/glossary.md` - controlled repository terminology.
- `dinar-standard-plan.md` - DINAR framework with scenario/operational/public usage separation.
- `governance/repo-charter.md` - purpose, repository pillars, and source-of-truth hierarchy.
- `governance/document-lifecycle.md` - document types, statuses, review rules, and naming/linking conventions.
- `config/sensitive-content-review-checklist.md` - pre-commit and publication safety checklist.

## Document portfolio

### Operational templates and plans

- `template-plan.md` - reusable baseline template for existing repository assets.
- `ai-iq-world-bank-poslovni-izvestaj.md` - business analysis template with KPI and INDEKURILANC rubric.
- `investiciona-i-operativna-imovina-registar-plan.md` - asset registry template with sanitization rules.
- `javni-prikaz-emisija-i-kamatna-politika-plan.md` - public transparency, emission, and interest-policy template.
- `eksterni-repozitorijum-pravni-navod-plan.md` - legal/reputational handling template for external claims.
- `globalni-licencni-okvir-i-delatnosti-plan.md` - master licensing and activity-expansion template.
- `vercel-naplata-poruka-plan.md` - Vercel billing support message template.
- `github-naplata-poruka-plan.md` - GitHub billing and business subscription template.

### Portfolio and roadmap references

- `docs/document-portfolio.md` - master map of repository documents, purpose, status, and usage order.
- `docs/repository-roadmap.md` - phased development roadmap for product, docs, and governance.
- `docs/future-data-model.md` - future entity model for scoring, assets, governance, and licensing.

## Governance rules

- Planning documents are fill-in templates; populated versions with sensitive business or asset details must stay out of source control unless sanitized.
- Public-facing content must clearly separate scenario assumptions from verified facts.
- DINAR values must always carry status, version, and effective-date context.
- Repository documents should reference sibling files with repository-relative filenames.

## CI and repository validation

The repository now includes `.github/workflows/validate.yml` for basic checks:

- `node --check script.js`
- repository structure validation through `config/validate_repository.py`
- protection against accidental checkout-specific absolute path references

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
