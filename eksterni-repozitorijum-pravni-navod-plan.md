# AI IQ World Bank — Plan za obradu pravno osetljivih navoda iz eksternog repozitorijuma

## Document Control

- **Category:** Templates
- **Type:** legal/reputational handling
- **Status:** working
- **Visibility:** limited/internal
- **Purpose:** Framework for handling external legal or political claims without treating them as verified fact.
- **Depends on:** `governance/document-lifecycle.md`, `config/sensitive-content-review-checklist.md`, `standards/glossary.md`


Ovaj dokument je **fill-in template/framework** za slučajeve kada eksterni repozitorijum sadrži pravno/politički osetljivu tvrdnju (npr. navod o državnom uređenju).

## 1) Definisanje cilja

- Evidentirati da postoji eksterni repozitorijum sa konkretnim navodom.
- Definisati kako se taj navod koristi u okviru projekta.
- Sprečiti da se neproveren navod automatski tretira kao potvrđena činjenica.

## 2) Scope i granice

- Odvojiti:
  - **tehnički deo:** povezivanje i referenciranje repozitorijuma
  - **sadržajni/pravni deo:** status i validnost tvrdnje
- Svaku spornu tvrdnju voditi kao:
  - izvorni navod
  - status verifikacije
  - datum poslednje provere

## 3) Identifikacija repozitorijuma

Obavezna polja:
- Naziv repozitorijuma:
- Vlasnik:
- URL:
- Grana:
- Relevantni fajl(ovi):
- Relevantna sekcija/redovi:
- Datum pristupa:
- Verzija/commit:

## 4) Evidencija izvora

| Dokument/Fajl | Lokacija u dokumentu | Citat (verbatim) | Datum pristupa | Verzija/commit |
|---|---|---|---|---|
|  |  |  |  |  |

Pravilo:
- Citat mora biti doslovan i vezan za tačnu lokaciju.
- Bez reference i verzije navod se ne koristi u javnom outputu.

## 5) Pravilo citiranja u projektu

- Svaka tvrdnja mora imati:
  - izvor
  - lokaciju
  - datum pristupa
  - verziju/commit
- Preporučena formulacija:
  - „Prema navodu iz repozitorijuma X (verzija Y), …”

## 6) Pravna/regulatorna verifikacija

Pre javne objave obavezno:
- pravno mišljenje (interno ili eksterno)
- evidentiran status: `nepotvrđeno / u proveri / potvrđeno / osporeno`
- datum važenja pravnog stava
- odgovorno lice za verifikaciju

## 7) Pravilo prikaza u javnim dokumentima

- Neutralna formulacija je obavezna:
  - „prema navodu iz repozitorijuma X”
- Zabranjeno:
  - prikazivanje navoda kao potvrđene činjenice bez formalne pravne verifikacije
- U javnom dokumentu obavezno prikazati i status tvrdnje.

## 8) Upravljanje konfliktima izvora

Ako postoje suprotni izvori:
- voditi centralni zapis konflikta
- upisati svaki izvor i njegov status pouzdanosti
- zaključiti privremeni status tvrdnje do finalne pravne odluke

Tabela konflikta:

| Tvrdnja | Izvor A | Izvor B | Trenutni status | Sledeći korak |
|---|---|---|---|---|
|  |  |  |  |  |

## 9) Governance i odobravanje

- Uloge:
  - Editor sadržaja
  - Pravna revizija
  - Finalni odobravalac objave
- Svaka izmena navoda mora imati audit trag:
  - ko je izmenio
  - šta je izmenjeno
  - kada
  - zašto

## 10) Finalni output

Jedan dokument mora sadržati:
- opis eksternog izvora
- evidenciju citata i verzija
- status tvrdnje
- pravila upotrebe u projektu
- procenu rizika pogrešnog tumačenja
- odluku o načinu javnog prikaza

## Dodatak A — Kontrolna lista pre objave

- [ ] Repozitorijum i tačan URL su verifikovani.
- [ ] Unet je commit/verzija izvora.
- [ ] Citat je doslovno prenet sa tačnom lokacijom.
- [ ] Pravni status tvrdnje je evidentiran.
- [ ] Javni tekst koristi neutralnu formulaciju.
- [ ] Tvrdnja nije predstavljena kao činjenica bez verifikacije.
