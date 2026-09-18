# Sensitive Content Review Checklist

## Document Control

- **Category:** Controls
- **Type:** checklist
- **Status:** approved
- **Visibility:** canonical/internal standard
- **Purpose:** Operational checklist for sanitization, visibility, and publication safety before commits or sharing.
- **Depends on:** `governance/document-lifecycle.md`, `README.md`

Use this checklist before committing or sharing documentation updates.

## Pre-commit review

- Confirm whether the file is a standard, governance document, template, support plan, or public output.
- Confirm that the `Document Control` block declares status, visibility, purpose, and dependencies.
- Confirm whether the work belongs primarily to the developer lane, creator lane, or another ownership lane.
- Confirm the controlling source path for any new public-facing concept or message.
- Remove checkout-specific absolute filesystem paths.
- Remove secrets, tokens, credentials, or private access information.
- Check whether the content contains exact sensitive locations or per-site quantities.
- Label scenario assumptions clearly.
- If DINAR appears, include status and version context.

## Before wider sharing

- Verify that public-facing wording does not turn scenario content into asserted fact.
- Aggregate sensitive operational data when a public-safe summary is enough.
- Confirm that the intended visibility is `public-safe`, `limited/internal`, or `canonical/internal standard`.
- Confirm that reusable public-safe output still fits the repository's logical public-safe output catalog.
- Confirm that any new public concept surface exposes or inherits a standard/version or controlling document reference.
- Re-check linked references so the shared version still points to valid repository documents.
- Confirm that any populated template variant has been sanitized before publication.
