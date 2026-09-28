# VRH programskog ekvivalenta — operativni okvir plan

## Document Control

- **Category:** Working Plan
- **Type:** program-equivalent execution framework
- **Status:** working
- **Visibility:** limited/internal
- **Purpose:** Implements the repository-wide VRH program-equivalent specification through quality standards, lane KPI controls, release criteria, phased rollout, and shared governance routing.
- **Depends on:** `docs/repository-operating-model.md`, `governance/document-lifecycle.md`, `docs/document-portfolio.md`, `docs/repository-roadmap.md`, `standards/indekurilanc-standard.md`, `config/sensitive-content-review-checklist.md`

Ovaj plan operacionalizuje “VRH programskog ekvivalenta” za AI IQ World Bank kao jedinstven developer + creator okvir koji ostaje potpuno downstream od postojećih standards, governance i operating-model pravila. **MARKAN** je dozvoljen samo kao aditivni alias za ovaj Developer + Creator VRH kontekst; ne zamenjuje canonical terminologiju, controlling source, ownership routing ni release kontrole.

## 0) Routing i lane napomena

- **Primarni lane:** shared execution lane (developer + creator + governance usklađivanje).
- **Creator lane upotreba:** javno-bezbedna narativna obrada i reusable public-safe surface priprema bez menjanja canonical pravila.
- **Developer lane upotreba:** tehnička implementacija, stabilnost, traceability i validaciona disciplina.
- **Kontrolni koordinacioni dokument:** `docs/repository-operating-model.md`.
- **Audience layer:** internal planning + contributor execution; creator/public-safe samo za sanitizovane izlaze.
- **Visibility handling:** radni detalji ostaju `limited/internal`; deljive verzije prikazuju agregate i odobrene javno-bezbedne formulacije.
- **Shared-lane checkpoint:** pre svake reusable promene potvrditi controlling source, audience/visibility, ownership i release status.
- **Release status:** working okvir; nije canonical standard niti automatski public-safe output bez sanitizacije i release-gate potvrde.

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

## 4) Creator lane — narativni i javni stub

Creator lane je odgovoran za:

- javno-bezbedno objašnjenje bez redefinisanja canonical/standard pravila,
- konzistentan ton po audience slojevima uz kontrolisanu terminologiju,
- katalog reusable concept surfaces koji je sledljiv do controlling source-a,
- sanitizaciju sadržaja pre javnog sloja.

## 5) Shared lane — usklađivanje Developer + Creator tokova

Shared lane obezbeđuje:

- obavezne checkpoint-e: source potvrda, audience/visibility klasifikacija i release status,
- handoff pravila za promene koje prelaze lane granice,
- mapiranje svakog reusable outputa na standard ili governance dokument,
- potvrdu da narativ, implementacija i governance značenje ostaju usklađeni.

## 6) Program ekvivalenta po fazama

### Faza A — standardizacija i governance zaključavanje
- Potvrditi controlling source i terminološku usklađenost.
- Zaključati lifecycle, visibility i release-control pravila.

### Faza B — poravnanje plan-dokumenata i kataloga izlaza
- Uskladiti root planove, support površine i portfolio mapiranje.
- Potvrditi da svaki reusable surface ima routing metapodatke.

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
- validacija prolaznost,
- broj regresija,
- vreme do stabilnog izdanja.

### Creator KPI
- jasnoća poruke,
- konzistentnost audience slojeva,
- reuse stopa public-safe surface-a.

### Shared KPI
- broj promena sa potpunim routing metapodacima,
- broj promena bez governance odstupanja,
- release-gate prolaznost kroz cikluse.

## 10) Definicija “spremno za VRH nivo”

Promena ili programski talas je spreman kada su istovremeno ispunjeni sledeći uslovi:

1. svi lane-ovi rade po istom operativnom modelu,
2. svaka javna površina je sledljiva do controlling source-a,
3. release odluke su dokazive, ponovljive i bezbedne za javnu upotrebu.
