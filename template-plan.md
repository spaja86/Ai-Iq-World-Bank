# Template Plan for Existing INDEKURILANC Assets

## Document Control

- **Category:** Templates
- **Type:** mapping template
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Reusable template for mapping existing repository assets, gaps, and normalization decisions.
- **Depends on:** `README.md`, `governance/document-lifecycle.md`, `standards/glossary.md`

## 1) Scope Clarification

Use this template when a task asks for an extreme or structured plan around assets that already exist in the repository.

This document is a reusable planning framework, not a canonical product or governance standard on its own.

## 2) Current Repository Baseline

### Existing templates and standards
- The repository already contains operational templates, governance documents, standards, and a static prototype.
- The authoritative navigation entry is `README.md`.
- The portfolio map is `docs/document-portfolio.md`.

### Existing workflows/automation
- `.github/workflows/validate.yml` provides baseline repository validation.
- `config/validate_repository.py` checks required files, repository-relative references, document control blocks, and forbidden checkout-specific paths.

### Existing implementation artifacts
- `index.html` (public repository interface)
- `script.js` (INDEKURILANC logic and data-driven repository panels)
- `styles.css` (layout and visual system)

## 3) Standard Output Format (Reusable)

Use this section structure for future “existing asset template plans”:

1. **Scope Clarification**
2. **Current Baseline Inventory**
3. **Target Structure / Format Definition**
4. **Mapping of Existing Items to Template**
5. **Dependencies and Governance Controls**
6. **Gaps / Exceptions**
7. **Stakeholder Review Notes**
8. **Finalized Working Standard**

## 4) Mapping Existing Items to the Template

| Template Section | Existing Item(s) | Status | Notes |
|---|---|---|---|
| Scope Clarification | Planning request / problem statement | Complete | Normalize ambiguous wording before execution. |
| Current Baseline Inventory | `README.md`, `docs/document-portfolio.md`, `governance/`, `standards/`, frontend files | Complete | Core assets identified. |
| Target Structure / Format Definition | This document section 3 | Complete | Reusable format defined. |
| Mapping of Existing Items to Template | This document section 4 | Complete | Baseline mapped with status. |
| Dependencies and Governance Controls | Section 5 below | Complete | Links planning to standards, governance, and validation. |
| Gaps / Exceptions | Section 6 below | Complete | Captures open structural or policy gaps. |
| Stakeholder Review Notes | Section 7 below | Working | Open for clarification when ambiguous input exists. |
| Finalized Working Standard | Section 8 below | Working | Usable now and revisable later. |

## 5) Dependencies and Governance Controls

- Check `governance/repo-charter.md` for repository pillars and hierarchy.
- Check `governance/document-lifecycle.md` for required document metadata and status rules.
- Check `standards/glossary.md` before introducing new normalized terminology.
- Check `config/sensitive-content-review-checklist.md` when the output may expose sensitive operational details.

## 6) Gaps / Exceptions

- A planning request may still be ambiguous even when the repository structure is clear.
- Some domain templates may need both internal and sanitized public variants outside source control.
- Future APIs or dashboards should wait until document metadata and governance controls are stable.

## 7) Stakeholder Review Notes

Review and confirm:

- whether the normalized interpretation of the request is correct,
- whether a new standard or only a working plan is needed,
- whether the output is public-safe or limited/internal,
- whether any new term belongs in `standards/glossary.md`.

## 8) Finalized Working Standard

Until superseded, this file is the repository’s reusable template for mapping existing assets, dependencies, and gaps into one controlled plan.
