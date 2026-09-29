# AI IQ World Bank — Standard za “Dinar (srbski)” / “DINAR”

## Document Control

- **Category:** Standards
- **Type:** value-system framework
- **Status:** working
- **Visibility:** canonical/internal standard
- **Purpose:** Defines DINAR usage boundaries, scenario controls, and contextual labeling requirements.
- **Depends on:** `governance/document-lifecycle.md`, `standards/glossary.md`, `README.md`


Ovaj dokument je **normativni standard/framework** za uvođenje i upravljanje internom jedinicom **Dinar (srbski)** sa sistemskim nazivom **DINAR** u okviru AI IQ World Bank.

## 1) Svrha i status standarda

- Cilj standarda je da DINAR bude kontrolisana jedinica sa jasno definisanim:
  - parametrima vrednosti
  - pravilima obračuna
  - izvorima verifikacije
  - statusom važenja
  - audit tragom i istorijom revizija
- Ovaj standard uvodi DINAR prvo kao:
  - **internu obračunsku i scenario jedinicu**
  - sa opcijom kasnijeg javnog prikaza i buduće sistemske logike nakon posebnog odobrenja

## 2) Zvanična identifikacija DINAR-a

- **Puni naziv:** Dinar (srbski)
- **Sistemski naziv:** DINAR
- **Preporučeni prikaz u dokumentima:** `DINAR`
- **Tip jedinice u ovoj fazi:** interna standardizovana jedinica sa privremenom verifikacijom
- **Početni status:** `privremena procena / scenario parametar`

## 3) Početna referentna vrednost

Početna radna vrednost za ovaj standard je:

`1 DINAR = 15000 EURO`

Pravilo upotrebe ove vrednosti:
- ova vrednost se tretira kao **Version 0 / Initial Estimate**
- nije automatski produkciona, pravna niti javno potvrđena istina
- može se koristiti za:
  - interno modeliranje
  - scenario analizu
  - procenu poslovnog uticaja
- ne može se koristiti kao “verifikovana zvanična vrednost” bez formalne revizije i odobrenja

## 4) Nivoi istine i dozvoljena upotreba

Za DINAR su obavezna tri odvojena nivoa istine:

### 4.1 Scenario vrednost
- koristi se za modeliranje, simulacije i procene
- dozvoljena je viša fleksibilnost parametara
- obavezno označiti kao `scenario`

### 4.2 Operativna vrednost
- koristi se za interne obračune i upravljačke izveštaje
- zahteva internu verifikaciju i odobrenje
- ne objavljuje se javno bez dodatne kontrole

### 4.3 Javna vrednost
- koristi se samo u javnim dokumentima i javnom prikazu
- zahteva formalno odobrenje, datum važenja i pravnu napomenu
- ne sme biti izvedena direktno iz scenario vrednosti bez posebne odluke

## 5) Obavezna struktura parametara

Svaka aktivna DINAR vrednost mora sadržati najmanje sledeća polja:

- ID verzije
- puni naziv jedinice
- sistemski naziv
- osnovna referentna vrednost
- referentna valuta poređenja
- datum početka važenja
- datum planirane revizije
- datum isteka (ako postoji)
- tip kursa (`fiksni / upravljani / scenario`)
- nivo javnosti (`interno / ograničeno / javno`)
- metod obračuna
- metod pokrića
- limit promene po reviziji
- status odobrenja
- razlog izmene
- vlasnik parametra
- odobravalac
- izvor odluke
- povezani dokazi/napomene

Obavezno razdvajanje zapisa:
- **master vrednost** — trenutno važeća centralna vrednost
- **izvedene vrednosti** — preračunate vrednosti po drugim valutama ili klasama aktive
- **istorijske verzije** — svi prethodni odobreni ili povučeni parametri

## 6) Metodologija vrednovanja

U ovoj fazi standard definiše da je DINAR:
- nominalno vezan za **EUR** kao referentnu valutu poređenja
- otvoren za kasnije dopune kroz:
  - pokriće zlatom
  - pokriće mešovitom aktivom
  - kombinovani interni model

Dok ne postoji odobrena metodologija pokrića, početna vrednost `1 DINAR = 15000 EURO` mora se tretirati kao:
- ciljana radna vrednost
- ne kao dokazani tržišni kurs
- parametar podložan reviziji

Za svaku buduću reviziju obavezno dokumentovati:
- zašto je odnos promenjen ili potvrđen
- da li je nominalan, ciljani ili pokrićem podržan
- da li promena utiče samo na prikaz ili i na poslovnu logiku

## 7) Usklađenost sa AI IQ World Bank pravilima

DINAR mora pratiti postojeće principe repozitorijuma:
- verifikovan parametar
- datum važenja
- audit trag promene
- razdvajanje javne i interne verzije
- scenario analiza odvojena od produkcionog limita

Ako DINAR utiče na javni prikaz, emisiju, kamatne limite ili obračunske modele, mora imati isti nivo kontrole kao ostali osetljivi parametri.

## 8) Pravila promene kursa

Promena DINAR vrednosti je dozvoljena samo kroz kontrolisanu reviziju.

Svaka izmena mora sadržati:
- staru vrednost
- novu vrednost
- datum izmene
- obrazloženje
- status promene
- vlasnika izmene
- odobravaoca
- procenjeni efekat na druge izračune

Dozvoljeni okidači revizije:
- periodična revizija
- vanredna promena metodologije
- promena statusa pokrića
- odluka upravljačkog tela
- pravna ili regulatorna potreba

## 9) Hijerarhija pravila i rešavanje konflikta

Ako postoje konfliktni izvori ili modeli za DINAR, važi sledeći redosled:
1. pravno i formalno odobreno pravilo
2. operativno interno pravilo
3. scenario pravilo

Pravila:
- scenario vrednost ne sme automatski postati operativna ili javna vrednost
- ekstremna procena ne sme postati produkciona bez approval logike
- svaki konflikt mora imati centralni zapis i privremeni status

## 10) Standard prikaza vrednosti

Preporučeni prikaz DINAR vrednosti u dokumentima:
- primarni naziv: `DINAR`
- puni naziv u prvom pojavljivanju: `Dinar (srbski)`
- referentna vrednost prikazivati uz EUR
- obavezno navesti status vrednosti i datum važenja

Pravila formatiranja:
- decimalni zapis: 2 decimale kada je potreban
- veliki brojevi: prikaz sa separatorima radi čitljivosti
- obavezna oznaka statusa uz vrednost:
  - `scenario`
  - `operativno odobreno`
  - `javno verifikovano`

Primer obaveznog sadržaja prikaza:
- naziv jedinice
- aktuelna vrednost
- referentna valuta
- datum važenja
- status
- verzija standarda

## 11) Mapa uticaja kroz sistem

DINAR se u ovoj fazi mapira na sledeće oblasti:
- prikaz vrednosti aktive
- poslovni izveštaji i scenario analiza
- javni dashboard i javne napomene
- pravila emisije i pokrića, ako budu povezani
- buduće KPI i strateške projekcije

Kontrolno pitanje za svaku integraciju:
- da li DINAR menja samo prikaz
- ili menja i poslovnu logiku/obračun

Bez posebnog odobrenja DINAR se uvodi samo kao dokumentovani standard i okvir za buduću integraciju.

## 12) Poslovni uticaj i scenariji

Procena `1 DINAR = 15000 EURO` mora se testirati kroz najmanje tri scenarija:

### 12.1 Neutralni scenario
- koristi se kao bazna radna procena
- cilj je procena uticaja na interne prikaze i planiranje

### 12.2 Optimistični scenario
- testira rast vrednosti, percepcije i šire prihvaćenosti
- procenjuje efekat na bilans i javni narativ

### 12.3 Konzervativni scenario
- testira pad poverenja, regulatorni pritisak ili potrebu za korekcijom
- procenjuje efekat na kredibilitet, pokriće i ograničenja objave

Obavezno procenjivati:
- uticaj na bilans
- uticaj na prikaz pokrića
- reputacioni rizik
- regulatorni i pravni rizik
- posledice po ostale interne modele

## 13) Pravni i reputacioni filter

DINAR vrednost, naročito kada je izrazito visoka, ne sme se predstavljati kao automatski dokaziva činjenica bez:
- pravnog tumačenja
- ekonomske metodologije
- internog odobrenja
- verzionisane napomene

Za javne dokumente obavezna je neutralna formulacija:
- `radna vrednost`
- `procena`
- `privremeno verifikovan parametar`

Termin `verifikovana zvanična vrednost` dozvoljen je tek nakon formalne potvrde.

## 14) Audit trag i istorija verzija

Svaka DINAR verzija mora imati:
- ID verzije
- status
- datum važenja
- datum revizije
- razlog izmene
- povezane odluke/dokaze

### 14.1 Registar verzija

| Verzija | Vrednost | Referentna valuta | Status | Datum važenja | Datum revizije | Napomena |
|---|---:|---|---|---|---|---|
| DINAR-STD-V0 | 15000 | EURO | privremena procena / scenario | 2026-09-14 |  | Initial Estimate |

## 15) Operativni minimum za buduću implementaciju

Pre uvođenja DINAR-a u UI ili poslovnu logiku obavezno obezbediti:
- odobrenu metodologiju vrednovanja
- potvrđen datum važenja
- definisan režim javnog i internog prikaza
- popunjenu istoriju verzija
- mapirane zavisnosti po dokumentima i budućim kalkulacijama

## 16) Otvorena pitanja

- Da li DINAR ostaje samo interna obračunska jedinica ili postaje i javna referentna jedinica?
- Da li buduća vrednost mora imati pokriće u zlatu, mešovitoj aktivi ili posebnom modelu?
- Ko je formalni vlasnik parametra i finalni odobravalac?
- Da li DINAR u sledećoj fazi utiče samo na prikaz ili i na sistemsku računsku logiku?
