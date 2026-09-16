# Repository Charter

## Purpose

AI IQ World Bank exists to maintain one repository that can support:

- a public-facing prototype,
- canonical internal standards,
- reusable planning templates,
- governance controls for sensitive and scenario-driven content.

## Repository pillars

1. **Product / Prototype** - user-facing static experience and future application modules.
2. **Standards** - controlled terminology, scoring logic, and value-system rules.
3. **Operational Plans** - structured fill-in templates for analysis, assets, licensing, reporting, and support workflows.
4. **Governance and Protection** - lifecycle, sanitization, review, and publication controls.

## Source-of-truth hierarchy

When documents overlap, use this order:

1. Approved repository standards in `standards/` and active normative root standards such as `dinar-standard-plan.md`
2. Governance rules in `governance/`
3. The current `README.md` for repository navigation and contributor workflow
4. Operational planning templates and support-message plans
5. Prototype implementation details in `index.html`, `styles.css`, and `script.js`

## Operating principles

- Preserve a clear distinction between prototype behavior, scenario assumptions, and verified facts.
- Treat planning templates as reusable frameworks, not as public evidence on their own.
- Prefer repository-relative references between documents.
- Keep public-safe content separable from internal or sensitive variants.
- Extend the repository by adding structured modules and standards, not ad-hoc files.

## Contribution expectations

- Small changes should preserve the existing prototype while improving clarity or structure.
- New logic that affects scoring or public interpretation must update the relevant standard.
- New planning documents should declare their type and intended usage.
- Sensitive details must be sanitized before any shared or public commit.
