# VRH programskog ekvivalenta — operativni okvir plan

## Document Control

- **Category:** Working Plan
- **Type:** program-equivalent execution framework
- **Status:** working
- **Visibility:** limited/internal
- **Purpose:** Implements the repository-wide VRH program-equivalent specification through quality standards, lane KPI controls, release criteria, phased rollout, and shared governance routing.
- **Depends on:** `docs/repository-operating-model.md`, `governance/document-lifecycle.md`, `docs/document-portfolio.md`, `docs/repository-roadmap.md`, `standards/indekurilanc-standard.md`, `config/sensitive-content-review-checklist.md`

Ovaj plan operacionalizuje “VRH programskog ekvivalenta” za AI IQ World Bank kao jedinstven developer + creator okvir koji ostaje potpuno downstream od postojećih standards, governance i operating-model pravila. **MARKAN** je dozvoljen samo kao aditivni alias za ovaj Developer + Creator VRH kontekst; ne zamenjuje canonical terminologiju, controlling source, ownership routing ni release kontrole.

Tema „ITLER ARNOLD / VOJNIKOV ŠEGRT JE KVOSKO PO ATOMSKOM SKLONIŠTU U EPRUVETI“ tretira se isključivo kao fikcionalni narativni okvir bez političke ili istorijske glorifikacije i bez predstavljanja kao činjenice.

## 0) Routing i lane napomena

- **Primarni lane:** shared execution lane (developer + creator + governance usklađivanje).
- **Creator lane upotreba:** javno-bezbedna narativna obrada i reusable public-safe surface priprema bez menjanja canonical pravila.
- **Developer lane upotreba:** tehnička implementacija, stabilnost, traceability i validaciona disciplina.
- **Kontrolni koordinacioni dokument:** `docs/repository-operating-model.md`.
- **Audience layer:** internal planning + contributor execution; creator/public-safe samo za sanitizovane izlaze.
- **Visibility handling:** radni detalji ostaju `limited/internal`; deljive verzije prikazuju agregate i odobrene javno-bezbedne formulacije.
- **Shared-lane checkpoint:** pre svake reusable promene potvrditi controlling source, audience/visibility, ownership i release status.
- **Release status:** working okvir; nije canonical standard niti automatski public-safe output bez sanitizacije i release-gate potvrde.

## 0.1) Zvanična formulacija naziva i svrhe

- **Zvanični naziv okvira:** „VRH programskog ekvivalenta“.
- **Zvanična svrha okvira:** zajednički developer + creator operativni kvalitetni okvir za tačnost, stabilnost, javno-bezbednu komunikaciju i release spremnost.
- **Pravilo zaključavanja:** svi izvedeni nazivi, metafore i varijante ostaju podređeni ovom zvaničnom nazivu i svrsi i ne dobijaju canonical status.
- **Granica upotrebe:** „ITLER“ je u ovom kontekstu isključivo fikcionalna oznaka i ne sme se koristiti za političku, istorijsku ili ideološku interpretaciju.

## 0.2) Jedinstvena struktura metapodataka

Svaka netrivijalna promena ili reusable surface mora eksplicitno sadržati sledeća polja:

1. controlling source,
2. audience layer,
3. visibility,
4. ownership lane (uz shared-lane handoff kada je potrebno),
5. release status.

Pravilo obaveznosti:

- Za netrivijalne promene svih reusable surface-ova svih 5 polja su obavezna.
- Samo privremene lokalne beleške koje nisu release kandidati i ne ulaze u reusable tok mogu ostati bez pune šeme.

Dozvoljene vrednosti i izvor:

- **controlling source:** repo-relative referenca ka dokumentu koji upravlja značenjem/promenom (hijerarhija iz `README.md` i `docs/repository-operating-model.md`).
- **audience layer:** creator/public-safe, internal planning, canonical/standards, regulatory/legal, support/operations (slojna podela iz `README.md` i `docs/repository-operating-model.md`).
- **visibility:** `public-safe`, `limited/internal`, `canonical/internal standard` (kontrolisane klase vidljivosti iz `README.md` i `governance/document-lifecycle.md`).
- **ownership lane:** developer, creator, shared (lane model iz `docs/repository-operating-model.md`).
- **release status:** `draft`, `working`, `approved`, `archived` (status model usklađen sa `governance/document-lifecycle.md` i validacijom u `config/validate_repository.py`).

Normativno pravilo vrednosti:

- Navedene liste su iscrpne za ovaj VRH okvir.
- Vrednosti se koriste u istom zapisu (bez alias varijanti) radi konzistentnog review tumačenja.

Validaciona napomena:

- **Machine-validated (postojeće i neizmenjeno validator ponašanje u `config/validate_repository.py`):** Document Control struktura, status/visibility skupovi, zavisnosti i routing-block zahtevi za obuhvaćene dokumente.
- **Review-only (shared-lane checkpoint):** audience layer, ownership lane/handoff detalj, i potpuna cross-lane evidencija za svaku netrivijalnu reusable promenu.
- **Combined control:** release status mora biti eksplicitan u evidenciji; validan status skup ostaje `draft`, `working`, `approved`, `archived`.
- Automatska validacija primarno pokriva strukturisane `.md` surface-e (`docs/`, `governance/`, `standards/`, root `.md` planove i `config/sensitive-content-review-checklist.md`), dok se kompletna VRH cross-lane evidencija proverava kroz shared-lane review checkpoint.
- Polja audience layer i ownership lane se obavezno evidentiraju u šemi iz sekcije 5.1 i proveravaju kroz shared-lane checkpoint listu.
- Autoritativna lokacija metapodataka: za plan dokumente polja se vode u routing sekciji dokumenta; za operativni audit trag vode se u evidenciji po šemi iz sekcije 5.1.

## 0.3) Klasifikacija ključnih izraza u okviru

| Izraz | Klasifikacija | Controlling source | Audience layer | Visibility | Ownership lane | Release status |
|---|---|---|---|---|---|---|
| `Developer + Creator operating model` | canonical | `docs/repository-operating-model.md` | canonical/standards + contributor routing | `public-safe` | shared | approved |
| `VRH programskog ekvivalenta` | working/internal | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md` | internal planning + contributor execution | `limited/internal` | shared | working |
| `Napoleon Bonaparta` | working/internal | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, `vrh-programskog-ekvivalenta-narativni-ekvivalenti-plan.md` | internal planning + contributor execution | `limited/internal` | creator uz shared-lane proveru | working |
| `Napoleon Bonaparta` — sanitizovana creator/public-safe izvedenica | creator/public-safe | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, `vrh-programskog-ekvivalenta-narativni-ekvivalenti-plan.md` | creator/public-safe | `public-safe` | creator uz shared-lane proveru | draft |
| `Velim dobar dan, krijem 'top' kao da je san` | working/internal | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, `vrh-programskog-ekvivalenta-narativni-ekvivalenti-plan.md` | internal planning + contributor execution | `limited/internal` | creator uz shared-lane proveru | working |
| `Velim dobar dan, krijem 'top' kao da je san` — sanitizovana creator/public-safe izvedenica | creator/public-safe | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, `vrh-programskog-ekvivalenta-narativni-ekvivalenti-plan.md` | creator/public-safe | `public-safe` | creator uz shared-lane proveru | draft |

Normativna pravila:

- samo `Developer + Creator operating model` zadržava canonical ulogu za routing i ownership značenje,
- `VRH programskog ekvivalenta` ostaje working/internal koordinacioni izraz downstream od operating modela,
- `Napoleon Bonaparta` ostaje kontrolisana metafora ili interni narativni marker i ne sme postati istorijski, politički ili reputacioni claim,
- `Velim dobar dan, krijem 'top' kao da je san` ostaje eksperimentalna creator formulacija bez operativne ili canonical snage.

Ova pravila se tumače isključivo downstream od `docs/repository-operating-model.md` sekcije `5a. Downstream term-control rule`, koja ostaje glavni controlling source za repository-wide Developer + Creator terminološki režim.

## 1) Ciljna specifikacija “VRH programskog ekvivalenta”

Jedinstvena ciljna specifikacija zahteva:

1. standard kvaliteta kroz tačnost, stabilnost, bezbednost i javno-bezbednu komunikaciju,
2. merljive KPI ciljeve po lane-u (Developer, Creator i Shared lane),
3. dokazive release kriterijume za AI IQ World Bank nivo spremnosti.

## 2) Upravljački okvir (controlling source)

Svaka netrivijalna promena prati obavezni redosled:

1. standards,
2. governance,
3. docs/portfolio,
4. planovi i support površine,
5. javni/prototip sloj.

Svi novi zahtevi moraju imati:

- eksplicitnu controlling source referencu,
- audience layer i visibility klasifikaciju,
- ownership lane i shared-lane handoff,
- release status za površinu koja se menja.

## 3) Developer lane — izvršni tehnički stub

Developer lane je odgovoran za:

- modularizaciju prototipa i jasno odvajanje komponenti/surface granica,
- obaveznu validaciju kao release kapiju (`python3 config/validate_repository.py`, `node --check script.js`, security provere),
- stabilnost score logike i očuvanje traceability veze prema controlling source-u,
- ekspoziciju aktivnog standard/version signala na izlaznim površinama.
- tehničku tačnost svih downstream surface-ova koji se pozivaju na VRH okvir,
- usklađivanje eventualnih panela ili drugih surface-ova sa postojećim controlling source pravilima.

### 3.1) Mapa tehničkih površina (dokumenti, prototip, reference)

- **Primarni plan dokumenti:** `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, `vrh-programskog-ekvivalenta-narativni-ekvivalenti-plan.md`
- **Kontrolni routing dokument:** `docs/repository-operating-model.md`
- **Portfolio i lifecycle reference:** `docs/document-portfolio.md`, `governance/document-lifecycle.md`
- **Prototip prikaz (struktura):** `index.html` sekcije `#operating-model` i `#control-map`
- **Prototip prikaz (dinamički sadržaj):** `script.js` površine `NARRATIVE_LANES`, `DEVELOPER_CREATOR_CHECKPOINTS`, `CONCEPT_SURFACE_INVENTORY`, `PUBLIC_OUTPUT_CATALOG`
- **Validaciona reference tačka:** `config/validate_repository.py`

## 4) Creator lane — narativni i javni stub

Creator lane je odgovoran za:

- javno-bezbedno objašnjenje bez redefinisanja canonical/standard pravila,
- konzistentan ton po audience slojevima uz kontrolisanu terminologiju,
- katalog reusable concept surfaces koji je sledljiv do controlling source-a,
- sanitizaciju sadržaja pre javnog sloja.
- narativno pakovanje bez menjanja canonical značenja,
- samo neutralne i sanitizovane izvedenice metaforičkih izraza,
- jasno razdvajanje metafore od činjenice, standarda i operativne instrukcije.

## 5) Shared lane — usklađivanje Developer + Creator tokova

Shared lane obezbeđuje:

- obavezne checkpoint-e: source potvrda, audience/visibility klasifikacija i release status,
- handoff pravila za promene koje prelaze lane granice,
- mapiranje svakog reusable outputa na standard ili governance dokument,
- potvrdu da narativ, implementacija i governance značenje ostaju usklađeni.
- potvrdu da izvedeni izraz ne menja canonical značenje,
- potvrdu ownership handoff-a između developer i creator rada,
- potvrdu da reusable narativ ostaje public-safe i repo-relative pre dalje upotrebe.

### 5.1) Evidencija promena koje prelaze Developer ↔ Creator granicu

Za svaku veću cross-lane promenu voditi minimalni zapis:

| Datum | Promena surface-a | Controlling source potvrda | Audience layer | Visibility klasifikacija | Ownership lane | Handoff odluka | Release status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD | naziv dokumenta/panela | potvrđeno / na proveri | creator/public-safe / internal planning / canonical/standards / regulatory/legal / support/operations | public-safe / limited/internal / canonical/internal standard | developer / creator / shared | developer->creator / creator->developer / shared | draft / working / approved / archived |

Napomena: audience layer se vodi kao zasebno polje, dok kolona visibility koristi isključivo visibility klase definisane u odeljku 0.2.
Kada je surface canonical, koristi se visibility `canonical/internal standard` uz isti šablon evidencije.
Ova sekcija definiše šemu; operativna evidencija se vodi u namenskom review/audit artefaktu (npr. zapis zasnovan na `business/revizijski-trag-template.csv`) i po potrebi se referencira iz povezanog radnog plana.

## 6) Program ekvivalenta po fazama

### Faza A — standardizacija i governance zaključavanje
- Potvrditi controlling source i terminološku usklađenost.
- Zaključati lifecycle, visibility i release-control pravila.
- Potvrditi fikcionalnu granicu i zabranu političke/istorijske glorifikacije za narativne izraze.

### Faza B — poravnanje plan-dokumenata i kataloga izlaza
- Uskladiti root planove, support površine i portfolio mapiranje.
- Potvrditi da svaki reusable surface ima routing metapodatke.
- Potvrditi klasifikaciju izraza `Developer + Creator operating model`, `VRH programskog ekvivalenta`, `Napoleon Bonaparta` i `Velim dobar dan, krijem 'top' kao da je san`.

### Faza C — prototip/panel usklađivanje
- Uskladiti javne panele i prototip sa operating model pravilima.
- Obezbediti traceability i standard-version signal na izlazu.

### Faza D — kontrolisano javno lansiranje i iterativna poboljšanja
- Objavljivati samo sanitizovane i odobrene public-safe varijante.
- Voditi iteracije kroz KPI rezultate i release-gate evidenciju.

## 7) Kvalitet i sigurnost

Obavezni minimum pre finalizacije većih promena:

1. pre-merge provera reference integriteta i strukture dokumenata,
2. sanitizacija osetljivog sadržaja pre javnog sloja,
3. security i code-review gate pre release odluke,
4. potvrda da promene ne uvode regresije ni nove ranjivosti.

## 8) Operativni ritam

- **Nedeljni ciklus:** plan -> izvršenje -> verifikacija -> release-ready odluka.
- **Mesečni ciklus:** KPI revizija, prioriteti i korekcije roadmap-a.
- **Kvartalni ciklus:** procena zrelosti modela i proširenje output kataloga.

## 9) Merenje uspeha (KPI)

### Developer KPI
1. validacija prolaznost,
2. broj regresija,
3. lead time do stabilnog i validiranog izdanja.

### Creator KPI
1. jasnoća poruke,
2. konzistentnost audience slojeva i neutralnog tumačenja,
3. reuse stopa public-safe surface-a,
4. nulta stopa političke/istorijske glorifikacije u public-safe narativima.

### Shared KPI
1. udeo promena sa potpunim routing metapodacima,
2. udeo promena bez governance odstupanja,
3. release-gate prolaznost kroz cikluse.

## 10) Definicija “spremno za VRH nivo”

Promena ili programski talas je spreman kada su istovremeno ispunjeni sledeći uslovi:

1. svi lane-ovi rade po istom operativnom modelu,
2. svaka javna površina je sledljiva do controlling source-a,
3. canonical značenje ostaje netaknuto i svi downstream surface-ovi ostaju usklađeni sa controlling source pravilima,
4. release odluke su dokazive, ponovljive i bezbedne za javnu upotrebu.
