# Document Lifecycle Rules

## Document Control

- **Category:** Governance
- **Type:** rules
- **Status:** approved
- **Visibility:** canonical/internal standard
- **Purpose:** Defines document metadata, statuses, visibility classes, review checkpoints, and publication rules.
- **Depends on:** `governance/repo-charter.md`, `config/sensitive-content-review-checklist.md`, `README.md`

## Document control block

Every structured repository document should start with a `## Document Control` section directly under the title and include at least:

- **Category**
- **Type**
- **Status**
- **Visibility**
- **Purpose**
- **Depends on**

This keeps the lifecycle model inside the document instead of relying only on the portfolio map.

## Document types

Use the following categories consistently:

- **Standard** - normative rule set or canonical definition.
- **Governance** - approval, review, publication, or handling rules.
- **Template** - fill-in document meant to be populated per case.
- **Working Plan** - operational planning document under active refinement.
- **Public Output** - sanitized content prepared for wider sharing.
- **Support** - structured communication template for billing or operational requests.
- **Architecture / Roadmap** - repository planning references for future structure.

## Status model

Every newly added structured document should fit one of these statuses:

- `draft`
- `working`
- `approved`
- `archived`

## Visibility model

Use one explicit visibility class in the control block:

- `public-safe`
- `limited/internal`
- `canonical/internal standard`

If a document has both internal and public variants, the tracked template should describe the split and the populated internal version should remain outside source control unless sanitized.

## Lifecycle expectations

### Draft
- Used for initial structure and open questions.
- Not relied on as a canonical source.

### Working
- Actively used, but still subject to change.
- Must avoid presenting scenario content as final fact.
- Should still identify its execution lane and controlling source whenever it routes reusable repository work.

### Approved
- Considered stable for repository use.
- Should be referenced when other documents need a source of truth.

### Archived
- Retained for history or traceability.
- Not used as the active source unless explicitly reactivated.

## Naming and reference rules

- Use descriptive kebab-case filenames.
- Reference sibling repository documents by filename or repository-relative path in backticks, for example `README.md` or `docs/document-portfolio.md`.
- Do not embed checkout-specific absolute filesystem paths in tracked content.
- When a document depends on another standard, name that dependency explicitly in `Document Control`.
- New root files must be justified in the portfolio and should not bypass existing folder structure.
- Reusable public-facing concept surfaces should declare or inherit a controlling source reference before they are treated as shareable outputs.

## Required content separation

Where relevant, documents should explicitly separate:

- scenario assumptions,
- verified facts,
- limited/internal detail,
- public-safe outputs.

## Audience and wording layers

When a repository concept appears in more than one context, keep the wording aligned with the target layer:

- **creator / public-safe** - broad concept explanation and sanitized public outputs,
- **canonical / standards** - normative definitions and controlled terminology,
- **internal planning** - scenario and operational working material,
- **regulatory / legal** - compliance, jurisdiction, evidence, and reputational handling,
- **support / operational** - neutral case communication for billing, incidents, escalation, and closure.

Do not let public-facing wording silently overwrite canonical rules or internal review constraints.

Creator-facing or prototype-facing wording should be treated as a downstream layer, never as a replacement for the controlling standard or governance rule.

## Concept surface inventory expectations

When a reusable public-safe surface is introduced or materially changed, record enough information to keep it traceable:

- surface name or panel name,
- channel such as README, prototype, plan, or future dashboard,
- controlling source reference,
- intended audience layer,
- visibility class,
- owning lane or role,
- release-readiness expectation.

This inventory may live inside an operating-model, portfolio, or future-model artifact as long as the mapping remains explicit and repository-relative.

## Document ownership expectations

Each structured change should have a clear ownership lane even if multiple contributors edit the files:

- navigation,
- governance,
- standards,
- portfolio / architecture,
- domain planning,
- support workflows,
- prototype / product surface.

When a change crosses lanes, the controlling source should still be updated first.

Where useful, also identify whether the work is primarily developer-lane or creator-lane execution so that presentation changes do not silently alter canonical meaning.

Use a shared lane classification when the work exists mainly to coordinate source confirmation, visibility, release-readiness, or reusable-surface traceability across multiple owners.

## Publication and sanitization rules

Before sharing a document outside the narrow working context:

- remove exact sensitive locations or facility identifiers,
- avoid exact per-site asset quantities unless publication is explicitly approved,
- label scenario values and internal-only assumptions,
- confirm whether the output is internal, limited, or public,
- verify that DINAR usage includes status, version, and effective-date context.

## Approval flow

Use this order when a non-trivial change affects multiple repository layers:

1. Update the controlling standard or governance rule.
2. Update portfolio and roadmap references if structure, ownership, or scope changed.
3. Update working plans or support templates that depend on the new rule.
4. Update public prototype or public-safe outputs last.
5. Record or update the concept-surface mapping and public-safe output catalog status where relevant.
6. Run validation and re-check visibility, references, and sanitization.

Any new reusable public concept surface should also expose or inherit a standard/version reference or controlling repository document reference before publication.

For non-trivial cross-lane work, `docs/repository-operating-model.md` is the primary coordination reference for ownership routing, handoffs, checkpoints, and repository-wide execution order.

## Repository work cycle

Use the canonical repository work cycle from `docs/repository-operating-model.md` for non-trivial repository changes. This governance file adopts that cycle as the release-control sequence and does not redefine it independently.

## Change impact matrix

Classify non-trivial changes before merge:

| Impact level | Typical examples | Minimum review expectation |
|---|---|---|
| Low | wording clarity, cleanup, non-normative presentation, small UI clarity changes | validate files, keep references accurate, and confirm no controlling meaning changed |
| Medium | new working docs, public-safe panels, support workflow changes, lane-routing updates in plans | portfolio and ownership alignment review plus audience-layer and shared-lane checkpoint confirmation |
| High | standard changes, governance changes, visibility-boundary changes, future managed-entity changes, new reusable concept surfaces | controlling-source review plus dependent document, prototype alignment, concept-surface trace, validation alignment, and release-readiness trace |

## Review checkpoints

Review these questions before merge:

1. Is the document control block present and complete?
2. Is the document type clear?
3. Is the document status clear?
4. Is the visibility class clear?
5. Are scenario and verified statements separated?
6. Are linked files valid and repository-relative?
7. Does the content expose sensitive operational detail?
8. If DINAR is used, are version and status stated?
9. If a standard is affected, was the controlling standard updated first?
10. Is the audience layer clear?
11. Is the ownership lane clear?
12. Is the shared-lane coordination requirement clear when the change crosses roles?
13. Is the change impact level understood?
14. If a new public concept surface was added, does it expose a controlling source reference?
15. If the content is reusable public-safe output, does it fit the repository's public-safe output catalog?
16. If a reusable concept surface changed, is the surface inventory or mapping still accurate?

## Release/checklist procedure for major changes

For major repository changes, complete this order:

1. Update the controlling standard or governance file.
2. Update affected plans, portfolio references, and roadmap notes.
3. Update prototype implementation if public behavior changes.
4. Run validation and syntax checks.
5. Re-check sensitive content before sharing or merging.
6. Confirm release readiness for standard version exposure, public-safe wording, and ownership routing.
7. Record whether the change introduced or modified a reusable public-safe output or concept surface.
8. Confirm the controlling-source map for reusable surfaces still matches the repository output catalog.

## Release readiness minimum

Before treating a structured document or prototype change as ready:

- confirm the controlling source was updated first,
- confirm `Document Control` remains complete,
- confirm repository-relative dependencies still resolve,
- confirm public-safe versus limited/internal intent is explicit,
- confirm scenario and verified statements remain separated,
- confirm validation passed,
- confirm no secrets or sensitive operational identifiers remain,
- confirm new public concept surfaces still point back to a controlling source,
- confirm cross-lane changes followed the standard -> governance -> portfolio -> plans -> public-output sequence,
- confirm creator-lane outputs remain downstream from standards and governance,
- confirm reusable-surface inventory or mapping remains accurate where applicable.
