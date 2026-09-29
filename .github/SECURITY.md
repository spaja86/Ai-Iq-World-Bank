# Security Policy

## Supported scope

This repository contains public-safe prototype and governance artifacts. Sensitive operational data, invoices, and raw business evidence must stay outside source control unless sanitized.

## Reporting a vulnerability

If you discover a security issue, report it privately:

- Email: spajicn@yahoo.com
- Email: spajicn@gmail.com

Please include:

1. Affected file(s) or workflow
2. Reproduction steps
3. Potential impact
4. Suggested mitigation (if available)

Do not open public issues for exploitable vulnerabilities or leaked credentials.

## Handling leaked secrets

1. Revoke and rotate the exposed credential immediately.
2. Remove the secret from tracked files.
3. Re-run repository validation and secret scanning.
4. Document the remediation in the business audit trail without exposing the secret value.
