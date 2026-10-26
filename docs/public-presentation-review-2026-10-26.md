# Provera javnog predstavljanja — 26. oktobar 2026.

## Document Control

- **Category:** Documentation
- **Type:** public presentation review
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Records verified public-copy issues, textual corrections, NBS sources, regression coverage, and remaining publication work.
- **Depends on:** `governance/repo-charter.md`, `standards/glossary.md`, `governance/document-lifecycle.md`, `docs/repository-operating-model.md`, `config/sensitive-content-review-checklist.md`

## Obuhvat i potvrđeni status

Polazna revizija: `88b49dffe7521c395b0b225895edbaa2055cb455` na glavnoj grani spaja86/Ai-Iq-World-Bank. Pregledani su README, svih šest HTML stranica, JavaScript prikazi, planska dokumentacija, GitHub opis i povezani prikazi pronađeni u SPAJA repozitorijumima.

AI IQ World Bank ostaje radni naziv softverskog projekta bez dozvole NBS za rad banke. Potvrda autora iz korespondencije od 15. i 23. oktobra 2026. pregledana je u okviru zadatka. Ona opisuje informativni upit, ne formalno odobrenje, podnet zahtev za preliminarno odobrenje niti uspostavljeno partnerstvo sa NBS. Privatna prepiska, identifikatori poruka i sadržaj email zaglavlja nisu objavljeni u repozitorijumu. Ovo nije nezavisna potvrda regulatora o projektu.

Pregledani kod implementira statički HTML/CSS/JavaScript sajt, edukativni anuitetski kalkulator, lokalnu INDEKURILANC procenu, informativne tekstove i kontakt formu koja otvara korisnikov email klijent. Sajt nema implementaciju bankarskih računa, prijema depozita, izdavanja kartica ili izvršavanja uplata. Veza ka drugom prototipu ne potvrđuje dostupnost njegovog backenda ili autentifikacije.

## Izmene javnih površina

| Površina | Zatečeni problem | Korekcija |
|---|---|---|
| README | Opis profesionalne svetske banke u tabeli; oznake O banci, Facebook (Banka), neodređeno bankarsko pozicioniranje | Radni naziv demonstracionog softvera, izričit status bez dozvole NBS, granice funkcija, očuvana razvojna vizija |
| Svih šest stranica | Posetilac može doći direktno na unutrašnju stranicu bez objašnjenja statusa | Statična, vidljiva napomena pre glavnog naslova; navod o nedostupnim bankarskim operacijama; veza ka detaljnom statusu |
| Naslovi, navigacija, footer i SEO | O Banci/Usluge i nedosledna deskripcija | O projektu/Digitalni alati; softverski prototip u naslovu, meta i Open Graph opisu |
| O projektu | Tvrdnje o postojećim bankarskim uslugama, globalnim partnerima, zaštiti sredstava i transakcijama | Edukativne funkcije, planirani pravci AI razvoja i buduća partnerstva; nema tvrdnje o postojećim bankarskim partnerima |
| Početna | Bezbedni bankarski prototip, neproverena autentifikacija povezane platforme, 24/7, neproveren datum početka | Demonstracioni interfejs i zaseban status povezane platforme; razvojni i informativni opisi |
| Kontakt | Digitalna filijala, garantovan odgovor u 24 sata, 24/7 podrška | Lokacija autora projekta i email kanal bez nepotvrđene garancije odgovora |
| Kalkulator | Iznos/stopa i Ukupno plaćeno mogu izgledati kao ponuda ili izvršeno plaćanje | Pretpostavljeni parametri i modelirani ukupan iznos; matematička logika očuvana |
| Povezane platforme | Tvrdnja o najvećem broju valuta u povezanoj menjačnici; linkovi predstavljeni kao operativna saradnja | Neutralni opisi povezanih softverskih projekata; linkovi nisu dokaz partnerstva ili zajedničkog finansijskog sistema |

Naziv i poslovna vizija nisu uklonjeni. Nisu dodate finansijske operacije, mrežni pozivi za plaćanje, autentifikacija, naplata ili novi backend. Planovi ostaju planovi; prazni poslovni šabloni nisu predstavljeni kao dokaz operative.

## Zvanični NBS izvori

Provereno 26. oktobra 2026:

1. [Osnivanje banke, dozvole za rad i saglasnosti](https://www.nbs.rs/sr/finansijske-institucije/banke/osnivanje-i-saglasnosti/) i [uputstvo za osnivanje](https://www.nbs.rs/export/sites/NBS_site/documents/kontrola-banaka/licenciranje/uputstvo_osnivanje.pdf), prva strana: postupak razdvaja preliminarno odobrenje, dozvolu za rad, osnivačku skupštinu/saglasnost na akta i registraciju. Prototip nije nijedno od tih odobrenja.
2. [Aktuelni NBS spisak zakona](https://www.nbs.rs/sr/drugi-nivo-navigacije/propisi/zakoni/) upućuje na [prečišćeni Zakon o bankama sa izmenama 19/2025](https://www.nbs.rs/export/sites/NBS_site/documents/propisi/zakoni/kpb_banke_2025.pdf). Član 2 vezuje status banke za dozvolu NBS. Članovi 5 i 6 uređuju rezervisane poslove i upotrebu naziva, a članovi 15–20 korake osnivanja. Opšta stranica/priručnik i dalje navode starije izmene; zato nisu korišćeni kao jedini izvor važećeg zakona.

Član 6 je bitan i za zadržani naziv. Oznaka demonstracionog softvera sama ne utvrđuje dozvoljenost poslovne upotrebe reči „Bank”. Potrebna je posebna pravna provera pre komercijalnog korišćenja; ova izmena nije pravno mišljenje, licenca ili potvrda usklađenosti. Nije utvrđeno postojanje odobrenja za buduće regulisane funkcije.

## Povezani prikazi i otvorene stavke

| Mesto | Nalaz i postupanje |
|---|---|
| GitHub About za ovaj repozitorijum | Opis tvrdi da je projekat najbolja banka i sarađuje sa svim bankama. Predlog: „AI IQ World Bank — demonstracioni softver u razvoju, bez dozvole NBS za rad banke. Edukativni alati i probni prikazi.” Ovo polje nije datoteka u grani; odvojeno je od ovog diff-a. |
| Otvoreni PR-ovi #1 i #2 | Stariji predlozi sadrže tvrdnje o bankarskim uslugama, klijentima, aktivi i partnerima. Nisu spojeni, prepisani niti zatvoreni. Pre razmatranja moraju preuzeti ove korekcije i proći nove provere. |
| IO-OPENUI-AO | `src/constants/index.ts` i aktivni `src/utils/constants.ts`, početna, footer i chatbot sadrže bankarsko/licencno pozicioniranje. Povezana korekcija prati se odvojeno u tom repozitorijumu. |
| Kompanija-SPAJA | `app/ecosystem/page.tsx` sadrži tvrdnju o profesionalnoj svetskoj banci. `app/bank/page.tsx` prikazuje buduće delatnosti i licencnu matricu čiji statusi nisu dokaz stvarnih prijava ili dozvola. Povezana korekcija prati se odvojeno. |
| Javne instalacije | Alat za čitanje javnih stranica nije mogao da otvori homepage naveden u GitHub metapodacima niti povezani `/bank-prototype`. Provera izvornog koda i lokalnog prikaza nije potvrda već objavljenog sadržaja. |
| Društveni profili i drugi spoljašnji kanali | Ispravljene su njihove oznake u ovom repozitorijumu. Sadržaj profila nije ovim pregledom verifikovan niti izmenjen. |

## Kontrole i validacija

- Postojeće provere pre promene: 19/19 Python testova, validator i sintaksna provera `script.js` prolaze.
- Dodato je devet regresionih testova u `config/test_public_presentation.py`: status na direktno otvorenim stranicama i bez JavaScript-a, SEO/OG opisi, povratak spornih tvrdnji, README tabela, izvorni linkovi, kontakt, kalkulator, granice formulara i pokretanje svih provera u CI.
- CI sada koristi `python3 -m unittest discover -s config -p 'test_*.py'`, čime uključuje i ranije izostavljene provere prototipa.
- Komande za ponavljanje: `python3 config/validate_repository.py`, `python3 -m unittest discover -s config -p 'test_*.py'`, `node --check script.js`; proveriti i svaki postojeći JS fajl u direktorijumu `js`.
- Konačno: 28/28 Python testova prolazi; validator, `node --check` za svih pet JS datoteka i `git diff --check` prolaze. Novi testovi odbacuju početnu reviziju (36 neuspešnih tvrdnji, bez greške testnog okruženja).
- Stvarni browser prikaz nije potvrđen: Playwright nije imao instaliran kompatibilan Chromium, a pronađeni lokalni executable nije uspeo da pokrene sesiju. HTML provere obuhvataju statički tekst bez JavaScript-a, ali nisu zamena za vizuelnu desktop/mobilnu proveru. Nema fizičkog telefonskog testa. Lokalni rezultat nije udaljeni CI rezultat ili pravna potvrda.

## Praćenje javnih površina

- **Kontrolni izvori:** `standards/glossary.md`, `governance/repo-charter.md`, `governance/document-lifecycle.md` i `docs/repository-operating-model.md`.
- **Površine:** README; šest HTML stranica; njihovi naslovi, navigacija, metapodaci, napomena statusa, footer i kartice povezanih projekata.
- **Publika/vidljivost:** posetioci i saradnici; public-safe.
- **Odgovornost:** developer + creator; zajednička provera značenja i granica pre spajanja.
- **Status izdanja:** promene za pregled u zasebnoj grani; bez spajanja ili produkcione objave. Ljudska provera i odluka o nazivu ostaju odvojene od tehničkih testova.
