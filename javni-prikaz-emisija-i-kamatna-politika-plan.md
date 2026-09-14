# AI IQ World Bank — Plan za javni prikaz stanja, emisiju digitalnih jedinica i kamatnu politiku

Ovaj dokument je **fill-in template/framework** za javnu transparentnost podataka o imovini, kontrolisanu emisiju digitalnih jedinica i upravljanje kamatnom politikom.

## Bezbednosna i javna napomena

- Popunjena verzija mora postojati u dve forme:
  - **Interna poverljiva verzija** (detaljni podaci).
  - **Javna sanitizovana verzija** (agregirani podaci).
- U javnoj verziji zabranjeno je objavljivanje tačnih adresa, tačnih količina po objektu i operativno osetljivih detalja.

## 1) Definisanje javnog cilja

- Cilj: da bude javno dostupno „koliko čega ima“ kroz agregirani prikaz po kategorijama i regionima/državama.
- Obavezno razdvajanje:
  - interni detaljni prikaz
  - javni sanitizovani prikaz

## 2) Struktura imovine za objavu

Kategorije:
- Investiciono zlato
- Investicioni dijamanti
- Mašine za novac

Za svaku kategoriju prikazati:
- ukupnu količinu/stanje
- trend po periodima
- geografski prikaz (agregirano)

## 3) Standard podataka i jedinica

- Autoritativne jedinice:
  - Plemenite aktive: **tona (t)**
  - Mašine: **komad**
- Pomoćne jedinice (kg/karat) su izvedene/reference vrednosti.

## 4) Pravilo „koliko čega ima“ (public dashboard)

Javni prikaz mora imati:
- tabelu ukupnog stanja po kategoriji
- Q/Q i Y/Y promene
- mapu samo na nivou **region + država**
- obavezan datum preseka (as-of date)

## 5) Pravilo emisije digitalnih jedinica na osnovu zlata

Definisana formula:

`Mesečni maksimum digitalnih jedinica = količina zlata (kg) × 783000 RSD`

Kontrole primene:
- dokaz stanja zlata za period
- zaključavanje perioda pre obračuna
- audit trag svake emisije (ko, kada, na osnovu kog podatka)

## 6) Upravljanje pokrićem i rezervama

- Evidentirati:
  - slobodno zlato
  - opterećeno zlato
- Emisija dozvoljena samo iz slobodnog pokrića.
- Definisati i zaključati rezervni buffer koji se ne emituje.

## 7) Kamatna politika za dijamante i korisnike

- Razdvojiti:
  - efekat na prihod banke
  - efekat na prinose korisnika/privrede
- Definisati:
  - maksimalne dozvoljene stope
  - uslove i rokove primene
- Uvesti automatsko ograničenje isplate prema važećem javnom limitu.

## 8) Rešavanje konflikta pravila (kritično)

Ako postoje nesaglasni zahtevi (npr. 300%/24h naspram maksimalnog limita 40%):
- važeći javni limit je **hard cap** za produkcionu isplatu
- vrednosti iznad hard cap-a mogu biti samo:
  - simulacija
  - scenario analiza
  - ne i stvarna produkciona isplata

## 9) Pravna i regulatorna sekcija

- Tvrdnje o državnom/ustavnom okviru voditi kao **pravni input za verifikaciju**, ne kao automatski sistemski fakt.
- Pre javne objave obavezno:
  - pravno tumačenje
  - verzionisana pravna napomena
  - datum važenja pravnog stava

## 10) Verifikacija i audit

Mesečno sprovesti ukrsnu proveru:
1. registar
2. fizički popis
3. eksterni dokaz

Za odstupanja evidentirati:
- opis
- uzrok
- uticaj
- korektivnu akciju
- odgovorno lice

## 11) Finalni javni i interni izlaz

### 11.1 Javni izlaz (sanitizovan)
- agregirano stanje po kategorijama
- trendovi
- mapa region + država
- pravila emisije i kamatni limiti

### 11.2 Interni izlaz (poverljiv)
- detaljne lokacije
- operativni status
- kontrole rizika
- incidenti i korektivne aktivnosti

## 12) Minimalni podaci za operativan start

- potvrđene količine zlata/dijamanata + status opterećenja
- broj i status mašina po lokaciji
- definisan jedinstveni pravni limit kamate
- verifikovan parametar 783000 RSD/kg + datum važenja
- pravila sanitizacije za javnu objavu

## Dodatak A — Javna tabela (primer strukture)

| Kategorija | Ukupno stanje | Jedinica | Q/Q % | Y/Y % | Regioni (agregirano) | As-of datum |
|---|---:|---|---:|---:|---|---|
| Investiciono zlato |  | t |  |  |  |  |
| Investicioni dijamanti |  | t |  |  |  |  |
| Mašine za novac |  | kom |  |  |  |  |

## Dodatak B — Kontrolna lista pre objave

- [ ] Podaci su potvrđeni kroz 3 izvora verifikacije.
- [ ] Javni prikaz sadrži samo agregirane lokacije (region + država).
- [ ] Tačne adrese i tačne količine po objektu nisu objavljene.
- [ ] Primenjen hard cap za kamatne stope u produkciji.
- [ ] Pravna napomena je ažurirana i verzionisana.
