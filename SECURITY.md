# Security Policy — AI IQ World Bank

## Podrska Verzija / Supported Versions

| Verzija | Podrska |
|---|---|
| Najnovija | Da |

## Prijavljivanje Bezbednosnih Problema

Ako otkrijete bezbednosnu ranjivost, molimo vas da je prijavite direktno vlasniiku:

- **Email:** spajicn@yahoo.com
- **Email:** spajicn@gmail.com
- **Vlasnik:** Nikola Spajic

Molimo vas da NE objavljujete bezbednosne probleme javno (GitHub Issues) pre nego sto ih prijavite.

## Implementirane Zastite

### HTTP Security Headers (meta tagovi)

```html
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
```

### Zastite u Kodu

- Svi eksterni linkovi koriste `rel="noopener noreferrer"` + `target="_blank"`
- Kontakt forma ima `novalidate` + server-side validacija pre slanja
- Nema evauacije `eval()` ili dinamickog koda
- Nema inline event handlera (`onclick=""`)

## Bankarska Bezbednost (Platforma)

- AES-256 enkripcija svih korisnickih podataka
- Dvofaktorska autentifikacija (2FA) za sve transakcije
- Biometrijska zaštita (otisak prsta, prepoznavanje lica)
- 24/7 fraud monitoring i detekcija anomalija
- PCI DSS Level 1 sertifikacija

---

**Copyright 2026 Nikola Spajic / AI IQ World Bank**
