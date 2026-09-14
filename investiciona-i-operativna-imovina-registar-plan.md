# AI IQ World Bank — Detaljan plan/registar za investicionu i operativnu imovinu

Ovaj dokument je **fill-in template/framework** za evidenciju i analizu:
- Investicionih dijamanata (koliko tona i gde)
- Investicionog zlata (koliko tona i gde)
- Mašina za novac (koliko imamo i gde)

## Bezbednosna napomena (obavezno)

- Popunjene verzije ovog dokumenta tretirati kao **poverljive**.
- Za deljenje van usko ovlašćenog kruga koristiti samo sanitizovanu verziju.
- U deljenim izveštajima ne objavljivati tačne adrese, tačne količine po objektu, niti operativne detalje koji mogu povećati fizički ili bezbednosni rizik.

## 1) Scope i definicije

### 1.1 Kategorije imovine
- **Investicioni dijamanti:** fizički dijamanti namenjeni čuvanju vrednosti i/ili trgovanju.
- **Investiciono zlato:** fizičko zlato investicionog kvaliteta (poluge/kovanice) prema internim pravilima.
- **Mašine za novac:** oprema za gotovinske operacije (npr. ATM, cash-handling, trezorska i povezana oprema).

### 1.2 Merne jedinice (standard)
- Primarno: **tona (t)**
- Pomoćno:
  - Dijamanti: kg i/ili karat
  - Zlato: kg
  - Mašine: komad

### 1.3 Obavezna normalizacija
- Sve fizičke količine u finalnom izveštaju moraju imati prikaz i u tonama.
- Za mašine obavezno prikazati broj komada i status operativnosti.
- Za polje lokacija koristiti kontrolisanu granularnost:
  - **Interna poverljiva verzija:** objekat/site ID + grad + država.
  - **Deljena/sanitizovana verzija:** region + država (bez tačne adrese i bez detalja objekta).

### 1.4 Zašto su mašine uključene u isti registar
- Mašine za novac nisu investiciona imovina kao zlato/dijamanti, ali jesu kritična operativna sredstva koja utiču na bezbednost, raspoloživost i kontinuitet gotovinskih procesa.
- U ovom okviru vode se zajedno radi jedinstvenog pregleda „imovina + operativna podrška“, uz jasno odvojeno izveštavanje:
  - **Investiciona imovina (dijamanti/zlato):** količine (t/kg/karat), pravni status, lokacija čuvanja.
  - **Operativna oprema (mašine):** broj komada, operativni status, kapacitet, kritičnost i rizik prekida.

## 2) Period i referentni datum

- **Datum preseka (as-of):**
- **Period trenda:** poslednjih 8 kvartala + YTD.
- **Frekvencija osvežavanja:** kvartalno (minimum).

## 3) Standard registra imovine

Za svaku stavku koristiti sledeća obavezna polja:
- Jedinstveni ID stavke
- Kategorija imovine
- Podtip
- Količina (primarna + pomoćna jedinica)
- Lokacija (objekat, grad, država, jurisdikcija)
- Tip čuvanja/skladištenja
- Vlasništvo i pravni status
- Operativni status (za mašine)
- Datum poslednje verifikacije
- Izvor verifikacije (interni/eksterni)
- Napomena o riziku

## 4) Inventar — Investicioni dijamanti

### 4.1 Agregat količine

| Period | Količina (t) | Količina (kg) | Količina (karat) | Napomena |
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

### 4.2 Lokacije i status

| Lokacija | Država/Jurisdikcija | Tip skladištenja | Slobodno (t) | Založeno (t) | Rezervisano (t) |
|---|---|---|---:|---:|---:|
|  |  |  |  |  |  |

Napomena za objavu: u deljenim verzijama polje „Lokacija“ prikazati kao region + država, bez pune adrese.

## 5) Inventar — Investiciono zlato

### 5.1 Agregat količine

| Period | Količina (t) | Količina (kg) | Q/Q promena % | Y/Y promena % |
|---|---:|---:|---:|---:|
| Q1 |  |  |  |  |
| Q2 |  |  |  |  |
| Q3 |  |  |  |  |
| Q4 |  |  |  |  |
| Q5 |  |  |  |  |
| Q6 |  |  |  |  |
| Q7 |  |  |  |  |
| Q8 |  |  |  |  |
| YTD |  |  |  |  |

### 5.2 Lokacije, vlasništvo i pravni status

| Lokacija/Trezor | Država/Jurisdikcija | Slobodno (t) | Opterećeno (t) | Tip opterećenja | Napomena |
|---|---|---:|---:|---|---|
|  |  |  |  |  |  |

Napomena za objavu: u deljenim verzijama koristiti agregiran nivo lokacije (region + država), bez identifikacije tačnog trezora.

## 6) Inventar — Mašine za novac

### 6.1 Broj mašina po tipu i lokaciji

| Tip mašine | Lokacija | Broj komada | Aktivno | Servis | Van upotrebe |
|---|---|---:|---:|---:|---:|
|  |  |  |  |  |  |

### 6.2 Kapacitet i kritičnost

| Lokacija | Procena kapaciteta | Kritičnost (N/S/V) | Ključna zavisnost | Rizik prekida |
|---|---|---|---|---|
|  |  |  |  |  |

Napomena za objavu: za mašine koristiti lokacione kodove ili regione; ne objavljivati detalje fizičkog rasporeda.

## 7) Verifikacija podataka

- Ukrsna provera između:
  1. Internog registra
  2. Fizičkog popisa
  3. Eksternih potvrda (depozitari/revizori/partneri)
- Evidentirati svako odstupanje:
  - opis
  - uticaj (količina/vrednost)
  - uzrok
  - korektivna akcija
- Potvrditi finalni „single source of truth“ datum i verziju.

## 8) Kontrole, rizici i usklađenost

### 8.1 Kontrolna checklista po lokaciji
- Fizička bezbednost
- Osiguranje i pokriće
- Regulatorna usklađenost
- Pristup i ovlašćenja
- Evidencija promena i audit trag

### 8.2 Ključni rizici
- Koncentracioni rizik po lokaciji/jurisdikciji
- Operativni rizik (posebno za mašine)
- Pravni rizik vlasništva/opterećenja
- Kontinuitet poslovanja kod poremećaja pristupa

## 9) KPI okvir za praćenje

- **Pokrivenost verifikacijom (%):** `verifikovana imovina / ukupna imovina × 100`.
- **Geografska diversifikacija (%):** udeo imovine po regionu/državi.
- **Dostupnost mašina (% uptime):** `aktivno vreme / ukupno planirano vreme × 100`.
- **Odstupanja inventara:** broj slučajeva i procenjena vrednost po kvartalu.

## 10) Scenario analiza

### 10.1 Bazni scenario
- Pretpostavka: stabilan režim i redovno održavanje.
- Uticaj: očekivano stabilna raspodela i kontrolisan rizik.

### 10.2 Stres scenario
- Pretpostavka: ograničen pristup jednoj kritičnoj lokaciji.
- Uticaj: potreba za relokacijom, aktivacija rezervnih procesa.

### 10.3 Rast scenario
- Pretpostavka: povećanje alokacije na prioritetnim lokacijama.
- Uticaj: rast kapaciteta uz obaveznu dodatnu kontrolu rizika.

## 11) Finalni izveštaj (jedan dokument)

Finalni output obavezno uključuje:
- Executive summary
- Tabelu ukupnih količina po kategoriji
- Mapu „koliko i gde“ po lokacijama:
  - **Interna poverljiva verzija:** site-level prikaz (site ID/objekat) za ovlašćene korisnike.
  - **Deljena sanitizovana verzija:** isključivo agregirano na nivou region + država, bez tačnih lokacija.
- Rizike, kontrole i preporuke za relokaciju/diversifikaciju
- Akcioni plan sa prioritetima (kvartalni)

## 12) Minimalni ulazni podaci za operativan start

- Poslednji popis dijamanata, zlata i mašina
- Lista svih lokacija i jurisdikcija
- Status vlasništva/opterećenja po stavkama
- Servisni i operativni status mašina
- Dokazi verifikacije (interni i eksterni)

## Dodatak A — Jedinstvena tabela registra (master format)

| Asset ID | Kategorija | Podtip | Količina (t) | Pomoćna jedinica | Lokacija | Jurisdikcija | Vlasništvo/Status | Datum verifikacije | Izvor verifikacije |
|---|---|---|---:|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |
