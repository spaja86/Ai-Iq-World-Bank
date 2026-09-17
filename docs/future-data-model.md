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

## Implementation direction

If a backend is introduced later:

1. Start with read-only reference entities for standards and document metadata.
2. Add governance decision tracking next.
3. Add sanitized public summaries before detailed internal operational records.
4. Introduce sensitive operational data only after access boundaries and approval controls exist.
