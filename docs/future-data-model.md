# Future Data Model

## Goal

Define a future-ready data model that can support the current prototype, document governance, and later API-backed extensions.

## Core entities

### 1. Score Profile

Represents one INDEKURILANC calculation context.

Suggested fields:
- `profile_id`
- `name`
- `scope`
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
- `owner`
- `depends_on`
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
- `approver`
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

## Separation rules

- Keep canonical standards separate from transactional records.
- Keep public-safe aggregates separate from sensitive raw operational detail.
- Keep scenario values separate from verified public values.
- Keep UI display configuration separate from scoring logic and content data.

## Implementation direction

If a backend is introduced later, start with read-only reference entities for standards and document metadata before adding sensitive operational data.
