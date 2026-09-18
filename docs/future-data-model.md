# Future Data Model

## Document Control

- **Category:** Architecture
- **Type:** planning reference
- **Status:** draft
- **Visibility:** limited/internal
- **Purpose:** Defines future structured entities for scores, documents, governance, assets, and licensing.
- **Depends on:** `docs/document-portfolio.md`, `standards/indekurilanc-standard.md`, `governance/document-lifecycle.md`

## Goal

Define a future-ready data model that can support the current prototype, document governance, and later API-backed extensions without mixing public-safe content with sensitive operational detail.

## Cross-cutting control fields

When entities are introduced, prefer shared control fields where relevant:

- `status`
- `visibility`
- `source_of_truth`
- `standard_version`
- `source_reference`
- `audience_layer`
- `owner_lane`
- `review_state`
- `effective_date`
- `last_reviewed_at`

## Core entities

### 1. Score Profile

Represents one INDEKURILANC calculation context.

Suggested fields:
- `profile_id`
- `name`
- `scope`
- `visibility`
- `infrastructure_score`
- `skills_score`
- `governance_score`
- `total_score`
- `maturity_status`
- `standard_version`
- `created_at`
- `effective_date`

### 2. Document Record

Represents a repository document or future managed content item.

Suggested fields:
- `document_id`
- `title`
- `file_path`
- `category`
- `document_type`
- `status`
- `visibility`
- `purpose`
- `depends_on`
- `risk_level`
- `source_of_truth`
- `owner_role`
- `owner_lane`
- `last_reviewed_at`

### 3. Asset Summary

Represents aggregated asset reporting for sanitized or internal use.

Suggested fields:
- `asset_record_id`
- `asset_type`
- `unit`
- `aggregate_quantity`
- `region`
- `country`
- `visibility_level`
- `reporting_date`
- `source_document`

### 4. Governance Decision

Represents a review, approval, or publication gate.

Suggested fields:
- `decision_id`
- `decision_type`
- `subject_type`
- `subject_id`
- `decision_status`
- `approver_role`
- `decision_date`
- `notes`

### 5. Jurisdiction / License Entry

Represents future licensing and market-entry tracking.

Suggested fields:
- `entry_id`
- `jurisdiction`
- `activity_type`
- `license_level`
- `priority_wave`
- `status`
- `local_partner_required`
- `visibility`
- `notes`

### 6. KPI Metric

Represents tracked performance or governance indicators.

Suggested fields:
- `metric_id`
- `metric_name`
- `metric_category`
- `value`
- `unit`
- `period`
- `source_document`
- `visibility`

### 7. Public Output Record

Represents a sanitized document, dashboard card, or public-facing summary derived from controlled sources.

Suggested fields:
- `output_id`
- `title`
- `output_type`
- `source_document_ids`
- `source_standard_version`
- `source_reference`
- `visibility`
- `sanitization_status`
- `approved_for_publication`
- `audience_layer`
- `catalog_status`
- `published_at`

### 8. Support Workflow Case

Represents a structured operational communication flow such as billing, escalation, incident follow-up, or closure.

Suggested fields:
- `case_id`
- `platform`
- `case_type`
- `severity`
- `status`
- `related_document`
- `evidence_location`
- `next_action`
- `last_contact_at`
- `visibility`

### 9. Release Readiness Record

Represents the repository gate review for a document, UI, or cross-cutting change.

Suggested fields:
- `release_id`
- `subject_type`
- `subject_id`
- `impact_level`
- `standard_checked`
- `governance_checked`
- `validation_passed`
- `sanitization_checked`
- `source_reference_checked`
- `public_surface_cataloged`
- `approver_role`
- `release_date`

### 10. Language Variant

Represents multilingual or audience-specific text variants linked back to one canonical source.

Suggested fields:
- `variant_id`
- `source_type`
- `source_id`
- `language_code`
- `audience_layer`
- `visibility`
- `translation_status`
- `approved_copy`
- `last_reviewed_at`

### 11. Concept Surface Record

Represents a reusable UI panel, creator-facing explanation block, or public-safe narrative surface that must stay linked to a controlling source.

Suggested fields:
- `surface_id`
- `surface_name`
- `surface_type`
- `channel`
- `owner_lane`
- `source_reference`
- `standard_version`
- `audience_layer`
- `visibility`
- `release_record_id`
- `active`

## Visibility alignment

Use repository visibility classes when possible:

- `public-safe`
- `limited/internal`
- `canonical/internal standard`

A future system should also preserve the distinction between scenario assumptions and verified facts where those concepts apply.

## Separation rules

- Keep canonical standards separate from transactional records.
- Keep public-safe aggregates separate from sensitive raw operational detail.
- Keep scenario values separate from verified public values.
- Keep UI display configuration separate from scoring logic and content data.
- Keep document metadata reusable across frontend, validation, and future APIs.
- Keep creator/public wording variants separate from regulatory, governance, and support wording.
- Keep reusable public concept surfaces separate from canonical sources while preserving explicit source links.

## Implementation direction

If a backend is introduced later:

1. Start with read-only reference entities for standards and document metadata.
2. Add governance decision tracking next.
3. Add sanitized public summaries and release-readiness tracking before managed operational workflows.
4. Add support workflow records and language variants only after canonical-source links are stable.
5. Introduce sensitive operational data only after access boundaries and approval controls exist.
6. Add concept-surface records before allowing dynamic public-safe dashboard composition.
