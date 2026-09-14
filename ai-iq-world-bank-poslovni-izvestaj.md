# AI IQ World Bank — Ekstremno detaljan okvir poslovne analize

Ovaj dokument implementira traženi plan za: opis poslovanja, kvartalni promet, bilansno stanje, dužinu rada, napredak i tržišna usmerenja.

## 1) Cilj analize

- Glavni cilj: kompletna poslovna dijagnostika + definisanje strateških pravaca rasta.
- Obavezni period analize: poslednjih 8 kvartala + tekuća godina (YTD).
- Odluka menadžmenta koju analiza treba da podrži: prioriteti za naredni kvartal i srednjoročno usmerenje.

## 2) Okvir finalnog izveštaja (jedan dokument)

Finalni izveštaj mora sadržati:

- **Sekcija A:** Profil poslovanja
- **Sekcija B:** Finansije (kvartalni promet + bilans)
- **Sekcija C:** Operativna stabilnost i istorijat
- **Sekcija D:** Napredak kroz KPI-jeve
- **Sekcija E:** Tržišna usmerenja i preporuke

## 3) Sekcija A — Profil poslovanja

### 3.1 Model prihoda
- Glavni izvori prihoda:
- Sporedni izvori prihoda:
- Udeo po izvorima (%):
- Nivo ponovljivosti prihoda (Recurring vs jednokratni):

### 3.2 Ključni proizvodi/usluge
- Primarni portfolio:
- Dodatni portfolio:
- Proizvodi u razvoju:

### 3.3 Ciljna grupa kupaca
- Segment: B2B / B2C / hibrid
- Geografija:
- Industrije/vertikale:
- Veličina klijenata (SMB/Mid/Enterprise):

### 3.4 Lanac vrednosti i partnerstva
- Ključne interne funkcije:
- Kritični eksterni partneri:
- Zavisnosti koje nose operativni rizik:

## 4) Sekcija B — Kvartalni promet

### 4.1 Tabela prihoda (8 kvartala + YTD)

| Period | Ukupan prihod | Q/Q promena % | Y/Y promena % | Napomena |
|---|---:|---:|---:|---|
| Q1 |  |  |  |  |
| Q2 |  |  |  |  |
| Q3 |  |  |  |  |
| Q4 |  |  |  |  |
| Q5 |  |  |  |  |
| Q6 |  |  |  |  |
| Q7 |  |  |  |  |
| Q8 |  |  |  |  |
| YTD |  |  |  |  |

### 4.2 Segmentacija prometa
- Po proizvodu:
- Po tržištu:
- Po kanalu (direktno/partneri/digital):

### 4.3 Sezonalnost i trend
- Identifikovan obrazac sezonalnosti:
- Trend rasta/pada:
- Potencijalni uzroci trenda:

### 4.4 Jednokratni efekti
- Vanredni uticaji (ako postoje):
- Korigovani pogled na trend bez jednokratnih efekata:

## 5) Sekcija B.2 — Stanje bilansa

### 5.1 Struktura aktive/pasive po kvartalima

| Period | Kratkoročna aktiva | Dugoročna aktiva | Kratkoročne obaveze | Dugoročne obaveze | Kapital |
|---|---:|---:|---:|---:|---:|
| Q1 |  |  |  |  |  |
| Q2 |  |  |  |  |  |
| Q3 |  |  |  |  |  |
| Q4 |  |  |  |  |  |
| Q5 |  |  |  |  |  |
| Q6 |  |  |  |  |  |
| Q7 |  |  |  |  |  |
| Q8 |  |  |  |  |  |

### 5.2 Likvidnost
- Ocena kratkoročne pokrivenosti obaveza:
- Kritične tačke naplate/potraživanja:

### 5.3 Zaduženost i kapitalna stabilnost
- Trend zaduženosti:
- Trend kapitala:
- Nivo finansijske otpornosti:

### 5.4 Kvalitet bilansa
- Održivost strukture:
- Koncentracija rizika:
- Zaključak kvaliteta bilansa:

## 6) Sekcija C — Dužina rada i stabilnost kroz vreme

- Datum osnivanja / početka operacija:
- Faza 1 (start):
- Faza 2 (konsolidacija):
- Faza 3 (skaliranje):
- Ključne prekretnice (nova tržišta, novi proizvodi, organizacione promene):

## 7) Sekcija D — Napredak kroz multidimenzionalne KPI-jeve

### 7.1 Finansijski KPI
- Rast prihoda: `% promena prihoda (Q/Q i Y/Y)`.
- Marža: `bruto marža %` i/ili `EBITDA marža %`.
- Profitabilnost: `neto dobit / prihod × 100`.
- Novčani tok: `operativni novčani tok` i njegov Q/Q trend.

### 7.2 Komercijalni KPI
- Broj kupaca: `broj aktivnih kupaca po kvartalu`.
- Retention/Churn: `retention %` i `churn %` na kvartalnom nivou.
- LTV/CAC: `odnos LTV prema CAC` po glavnom segmentu.

### 7.3 Operativni KPI
- Brzina isporuke: `prosečno vreme od zahteva do isporuke`.
- Kvalitet isporuke: `stopa grešaka/reklamacija` i `first-pass success`.
- Efikasnost procesa: `output po zaposlenom` ili `trošak po isporuci`.

### 7.4 Organizacijski KPI
- Razvoj tima: `rast tima`, `fluktuacija %`, `stabilnost ključnih uloga`.
- Kompetencije: `broj obuka/sertifikata` i procena primene znanja.
- Governance napredak: `broj usvojenih politika`, `nivo usklađenosti`, `audit nalaz`.

### 7.5 AI zrelost KPI (INDEKURILANC model)
- Infrastructure:
- Skills:
- Governance:
- Ukupni trend indeksa po kvartalima:

Napomena: INDEKURILANC je interni indeks AI zrelosti koji meri spremnost kroz tri dimenzije (infrastructure, skills, governance).
Formula obračuna: `INDEKURILANC = (Infrastructure × 0.40) + (Skills × 0.35) + (Governance × 0.25)`.
Model u ovom repozitorijumu koristi fiksne težine:
- Infrastructure 40%
- Skills 35%
- Governance 25%

Izvor težina i namena:
- Težine su preuzete iz postojeće implementacije i dokumentacije u ovom repozitorijumu (trenutni standard prototipa).
- U ovom okviru tretiraju se kao **normativni podrazumevani model** za poređenje kroz kvartale u okviru AI IQ World Bank.
- Ako se težine menjaju, rezultate pre i posle promene ne porediti direktno bez rekalkulacije istorijskih perioda.

Standard skale i interpretacije:
- Svaka dimenzija (Infrastructure, Skills, Governance) ocenjuje se u rasponu **0–100**.
- Rezultat indeksa je u rasponu **0–100** (težinski zbir tri dimenzije).
- Preporučena interpretacija rezultata:
  - **0–39.99:** Early Stage
  - **40–69.99:** Emerging
  - **70–100:** Advanced

Fiksni kriterijumi ocenjivanja dimenzija (za konzistentan obračun):
- **Infrastructure (0–100):** (1) dostupnost podataka, (2) kvalitet podataka, (3) integracije sistema, (4) sigurnost infrastrukture, (5) skalabilnost platforme.
- **Skills (0–100):** (1) AI/data kompetencije tima, (2) obuke i sertifikacije, (3) primena AI znanja u projektima, (4) brzina usvajanja alata, (5) pokrivenost ključnih AI uloga.
- **Governance (0–100):** (1) politike i procedure za AI, (2) upravljanje rizicima/usklađenošću, (3) vlasništvo nad odlukama, (4) monitoring performansi i rizika, (5) audit tragovi i kontrola promena.

Metod bodovanja:
- Svaki od 5 pod-kriterijuma oceniti u rasponu 0–100.
- Vrednost dimenzije je aritmetička sredina 5 pod-kriterijuma.
- Poređenja kroz kvartale su validna samo ako kriterijumi i način ocenjivanja ostanu nepromenjeni.

## 8) Sekcija E — Tržišna usmerenja

- Primarna tržišta:
- Sekundarna tržišta:
- Pozicioniranje prema konkurenciji (cena/kvalitet/brzina/inovacija):
- Kanali rasta (direktna prodaja, partneri, digital):
- Rizici po tržištima:
- Prilike po tržištima:

## 9) Analiza rizika i scenarija

### 9.1 Bazni scenario
- Pretpostavke:
- Efekat na promet:
- Efekat na bilans:
- Efekat na tržišni fokus:

### 9.2 Optimistični scenario
- Pretpostavke:
- Efekat na promet:
- Efekat na bilans:
- Efekat na tržišni fokus:

### 9.3 Konzervativni scenario
- Pretpostavke:
- Efekat na promet:
- Efekat na bilans:
- Efekat na tržišni fokus:

## 10) Zaključak i odluka menadžmenta

- Ocena napretka: **DA / DELIMIČNO / NE**
- Dokazi za ocenu po KPI:
- Top 3 snage poslovanja:
1.
2.
3.
- Top 3 kritične tačke za ispravku:
1.
2.
3.
- Prioriteti za naredni kvartal (fokus, resursi, očekivani efekat):

## 11) Struktura finalnog outputa

Finalni dokument obavezno ima:
- Executive summary (1 strana)
- Detaljna analiza po sekcijama A–E
- KPI tabela i trend tabela po kvartalima
- Akcioni plan po prioritetima

## 12) Minimalni podaci za trenutnu operativnost

Da bi analiza bila odmah operativna, potrebno je dostaviti:
- Prihode po kvartalima
- Bilans stanja po kvartalima
- Datum početka poslovanja + važne događaje
- KPI podatke po funkcijama (prodaja, operativa, organizacija, AI zrelost)
- Listu tržišta/segmenata i rezultate po njima
