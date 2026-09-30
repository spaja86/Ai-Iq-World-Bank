# Centralni registar ideja

## Document Control

- **Category:** Roadmap
- **Type:** idea portfolio
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Defines a controlled intake and prioritization framework for future AI IQ World Bank and connected-platform ideas.
- **Depends on:** `docs/repository-roadmap.md`, `docs/repository-operating-model.md`, `governance/document-lifecycle.md`, `docs/future-data-model.md`

## Svrha

Registar pretvara ideje u male, proverljive korake. Ne potvrđuje poslovni, finansijski, regulatorni ili tehnički status nijedne ideje dok ne postoji dokaz i odgovarajuća provera.

## Triage pravila

Svaka nova ideja dobija:

- **Kategoriju:** javni sajt, korisnički portal, Digitalni Kompjuter, AI alat, sadržaj, sigurnost ili operacije.
- **Status:** ideja, istraživanje, spremno za izradu, u izradi, provereno ili pauzirano.
- **Prioritet:** P0 bezbednost i greške, P1 korisničko iskustvo, P2 razvoj proizvoda, P3 eksperiment.
- **Vlasnika:** developer, creator, domain/legal ili shared lane.
- **Dokaz:** link ka kodu, testu, ugovoru, javnom izvoru ili jasno označena napomena da dokaz još ne postoji.
- **Granice:** podaci koji se ne prikupljaju, regulisane funkcije koje se ne aktiviraju i potrebna ljudska potvrda.

## Početni portfolio

| Ideja | Kategorija | Prioritet | Status | Vlasnik | Sledeći proverljiv korak |
| --- | --- | --- | --- | --- | --- |
| Javni AI IQ World Bank sajt | javni sajt | P1 | u izradi | shared lane | pregledati objedinjeni preview pre objave |
| Kontakt kanal bez osetljivih podataka | javni sajt | P1 | spremno za izradu | developer | testirati email-handoff u previewu |
| Korisnički portal | korisnički portal | P1 | istraživanje | developer | potvrditi autentifikaciju i bazu pre aktivacije |
| Digitalni Kompjuter | digitalni alat | P2 | istraživanje | developer | definisati stvarne funkcije, pristup i merljive statuse |
| Nadzor deploymenta | operacije | P1 | ideja | developer | definisati status izvore i upozorenja sa ljudskom potvrdom |
| Edukativni kalkulatori | sadržaj | P2 | spremno za izradu | shared lane | dodati jasne izvore, ograničenja i testove formule |
| Stripe pretplate za digitalne proizvode | korisnički portal | P1 | istraživanje | developer + domain/legal | koristiti test-mode tek nakon konfiguracije i test plana |
| Licencirane finansijske usluge | regulisani domen | P0 | pauzirano | domain/legal | evidentirati javno proverljivog partnera i odobrenja pre implementacije |

## Predloženi tok rada

1. Zapišite ideju jednom rečenicom, bez obećanja rezultata.
2. Odredite korisnika i merljivu korist.
3. Dodajte dokaz ili označite da je potrebna provera.
4. Izaberite najmanji sledeći korak koji se može testirati.
5. Otvorite mali pull request sa validacijom i planom povlačenja izmene.
6. Tek nakon pregleda prebacite status u narednu fazu.

## Granice automatizacije

Automatizacija može pratiti status, greške, sadržaj i obaveštenja. Ne sme samostalno pokretati plaćanja, prebacivati novac, odobravati kredite, otvarati račune niti donositi regulisane finansijske odluke.

## Nedeljni pregled

- izabrati najviše tri aktivne ideje,
- zatvoriti ili pauzirati ideje bez dokaza ili narednog koraka,
- pregledati rizik, trošak i privatnost,
- objaviti samo sadržaj koji je proverljiv i javno bezbedan.
