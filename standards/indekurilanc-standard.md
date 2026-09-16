# INDEKURILANC Standard

## Standard ID

- **Identifier:** `INDEKURILANC-STD-V1`
- **Status:** `approved baseline for current prototype`
- **Current implementation source:** `script.js`

## Purpose

INDEKURILANC is the repository's active readiness index for estimating AI capability maturity through weighted scoring.

## Active score dimensions

| Dimension | Weight | Meaning |
|---|---:|---|
| Infrastructure | 0.40 | Technical base, systems, tooling, and operational readiness |
| Skills | 0.35 | Human capability, delivery skill, and organizational know-how |
| Governance | 0.25 | Rules, controls, oversight, and operating discipline |

## Score calculation rule

Total score is the weighted sum of infrastructure, skills, and governance inputs after each value is normalized to the `0-100` range.

## Active maturity bands

| Score range | Status | Interpretation |
|---|---|---|
| `0-39.99` | Early Stage | Foundation work is still the main priority |
| `40-69.99` | Emerging | Core capability exists, but it is not yet consistently institutionalized |
| `70-100` | Advanced | Capability is comparatively mature and can support structured scale-up |

## Required output fields

Any interface or document that displays an INDEKURILANC result should include:

- numeric score,
- maturity status,
- short operational interpretation,
- priority focus,
- standard/version reference.

## Future model rules

- New dimensions may be proposed, but the active three-dimension model remains the canonical baseline until a new standard version is approved.
- Experimental variants should be labeled separately from the baseline model.
- If weights change, update this standard before treating the change as canonical.

## Mapping expectations

INDEKURILANC results should be explainable against repository documents, especially:

- business analysis planning,
- governance maturity,
- licensing/operational expansion readiness,
- public transparency and asset control practices.
