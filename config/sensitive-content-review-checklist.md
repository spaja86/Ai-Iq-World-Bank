# Sensitive Content Review Checklist

Use this checklist before committing or sharing documentation updates.

## Pre-commit review

- Confirm whether the file is a standard, governance document, template, or public output.
- Remove checkout-specific absolute filesystem paths.
- Remove secrets, tokens, credentials, or private access information.
- Check whether the content contains exact sensitive locations or per-site quantities.
- Label scenario assumptions clearly.
- If DINAR appears, include status and version context.

## Before wider sharing

- Verify that public-facing wording does not turn scenario content into asserted fact.
- Aggregate sensitive operational data when a public-safe summary is enough.
- Confirm that the intended visibility is internal, limited, or public.
- Re-check linked references so the shared version still points to valid repository documents.
