# GitHub + Vercel — ekosistemski operativni okvir

## Document Control

- **Category:** Working Plan
- **Type:** ecosystem integration framework
- **Status:** working
- **Visibility:** limited/internal
- **Purpose:** Formalizes the shared Developer + Creator framework that conditionally places GitHub and Vercel inside the repository ecosystem as controlled operational and support domains.
- **Depends on:** `docs/repository-operating-model.md`, `governance/document-lifecycle.md`, `developer-creator-monetization-playbook-plan.md`, `vercel-operativni-domen-i-fakture-plan.md`, `vercel-naplata-poruka-plan.md`, `github-naplata-poruka-plan.md`, `config/sensitive-content-review-checklist.md`

Ovaj dokument implementira zajednički Vercel + GitHub okvir za “vrh programskog ekvivalenta” kao shared-lane operativni plan downstream od `docs/repository-operating-model.md` i postojećih monetizacionih, support i governance izvora.

## 0) Routing i lane napomena

- **Primarni lane:** shared ecosystem operations lane.
- **Creator lane upotreba:** javno-bezbedni, neutralni i partner-facing sažeci tek posle shared-lane potvrde.
- **Developer lane upotreba:** tehnička stabilnost, continuity mapiranje, deployment i collaboration evidencija, validacija i uticaj na aktivne tokove.
- **Kontrolni koordinacioni dokument:** `docs/repository-operating-model.md`.
- **Audience layer:** internal planning + support/operational communication; creator/public-safe samo za sanitizovane i odobrene rezimee.
- **Visibility handling:** billing, account, transaction, collaboration i continuity detalji ostaju `limited/internal`; deljive verzije sadrže samo neutralne statuse, agregate i potvrđene naredne korake.
- **Shared-lane checkpoint:** pre reusable outputa potvrditi controlling source, audience layer, visibility, ownership lane, shared-lane handoff i release readiness.
- **Release status:** working shared-lane framework; nije canonical standard niti potvrđeni partnerski model bez dodatne shared-lane, support i release provere.

## 1) Cilj i controlling source lanac

### 1.1 Operativni cilj

- napraviti jedinstven Developer + Creator program-equivalent okvir,
- formalno mapirati Vercel i GitHub kao kontrolisane operativne i support domene,
- zadržati sve odluke downstream od redosleda standards -> governance -> docs -> plans/support -> public output,
- dozvoliti ekosistemsko pozicioniranje samo kada su support, billing, continuity i release usklađenost potvrđeni.

### 1.2 Controlling source hijerarhija

1. `docs/repository-operating-model.md` - koordinacioni i routing source
2. `governance/document-lifecycle.md` - lifecycle, visibility i release-control source
3. `developer-creator-monetization-playbook-plan.md` - program-equivalent i monetizacioni source
4. `vercel-operativni-domen-i-fakture-plan.md` - Vercel operativni domen, fakture, KPI i continuity source
5. `vercel-naplata-poruka-plan.md` - Vercel support/billing izvršni source
6. `github-naplata-poruka-plan.md` - GitHub support/subscription izvršni source

## 2) Uloge u ekosistemu

### 2.1 Developer lane

- vodi tehničku stabilnost, deployment kontinuitet i validaciju,
- evidentira koji projekti, repozitorijumi ili tokovi zavise od GitHub-a i Vercel-a,
- mapira poslovni uticaj, rizik prekida i operativne blokade,
- ne potvrđuje partnerstvo, licensing status ili public-safe claim bez shared-lane potvrde.

### 2.2 Creator lane

- priprema neutralne i javno-bezbedne narative i partner-facing sažetke,
- drži ton profesionalnim i faktografski kontrolisanim,
- ne meša marketinšku formulaciju sa internim operational/billing činjenicama,
- ne predstavlja Vercel ili GitHub kao potvrđene ekosistemske partnere bez odobrenja.

### 2.3 Shared lane

- potvrđuje controlling source, audience layer i visibility,
- vodi handoff između developer, creator, support, governance i monetization tokova,
- odlučuje da li predmet ostaje interni operativni slučaj ili postaje reusable output,
- odobrava ecosystem-positioning tek kada su billing/support činjenice, continuity status i release readiness potvrđeni.

## 3) Vercel kao operativni domen

Vercel se u ovom okviru tretira kao:

- infrastrukturni continuity čvor,
- billing i reactivation domen,
- support i incident-to-resolution kanal,
- potencijalni ekosistemski saradnički sloj tek posle potvrde shared-lane.

### 3.1 Obavezno mapiranje za Vercel slučajeve

Za svaki Vercel slučaj potvrditi ili evidentirati najmanje:

- nalog ili team kontekst,
- pogođeni projekat i deployment,
- pretplatu, fakturu ili transakciju,
- incident ili support zahtev,
- poslovni uticaj,
- rizik prekida,
- ownership i sledeći korak.

### 3.2 Pravilo deljivosti

- Interni sloj zadržava billing, account i incident detalje.
- Creator/public-safe sloj prikazuje samo sanitizovan status, agregirani uticaj i potvrđene naredne korake.
- Bez shared-lane odobrenja Vercel ostaje kritični operativni servis, ne potvrđeni partner ekosistema.

## 4) GitHub kao razvojno-poslovni domen

GitHub se u ovom okviru tretira kao:

- kodni i collaboration domen,
- subscription i billing domen,
- business continuity sloj za razvojni rad,
- ownership i governance disciplinski kanal,
- potencijalni ekosistemski saradnički sloj tek posle potvrde shared-lane.

### 4.1 Obavezno mapiranje za GitHub slučajeve

Za svaki GitHub slučaj potvrditi ili evidentirati najmanje:

- nalog ili organization kontekst,
- billing status i subscription stanje,
- support tok i hronologiju obraćanja,
- preporučeni dugoročni poslovni plan,
- razvojni ili operativni uticaj na aktivni rad,
- ownership i sledeći korak.

### 4.2 Razdvajanje dva pitanja

GitHub domen mora eksplicitno razdvajati:

1. kratkoročni billing/support problem,
2. dugoročni business subscription model i plan za stabilan rast kroz GitHub ekosistem.

## 5) Zajednički Vercel + GitHub onboarding okvir

### Faza 1 — stabilizacija billing i support slučajeva

- evidentirati otvorene slučajeve,
- prikupiti dokaze, invoice/transaction tragove i status komunikacije,
- potvrditi da su korišćeni odgovarajući support šabloni.

### Faza 2 — continuity potvrda za aktivne projekte

- mapirati koji aktivni projekti ili tokovi zavise od GitHub-a i Vercel-a,
- potvrditi status kontinuiteta, degradacije ili blokade,
- prioritet dati critical slučajevima.

### Faza 3 — dugoročni subscription model

- definisati stabilniji subscription pristup po platformi,
- proceniti koji planovi najbolje podržavaju poslovni kontinuitet i program-equivalent rast,
- zadržati odluke vezane za planove u internom sloju dok ne budu potvrđene.

### Faza 4 — shared-lane odluka o ecosystem statusu

- proceniti da li GitHub i Vercel ostaju vendor layer,
- ili prelaze u kontrolisani ekosistemski saradnički sloj,
- uz obaveznu proveru reputacionog, operativnog i governance uticaja.

### Faza 5 — reusable output i partner-context sažeci

- pripremiti samo sanitizovane sažetke,
- ukloniti billing, account i transaction detalje,
- objaviti tek kada shared lane potvrdi release readiness.

## 6) Uslov “ako se slažu”

- Uključivanje GitHub-a i Vercel-a u “naš ekosistem” ne tretira se kao unapred potvrđeno partnerstvo.
- Prvo mora postojati potvrda operativne saradnje, billing stabilnosti i podrške za kontinuitet rada.
- Tek nakon toga shared lane može odobriti interno ekosistemsko pozicioniranje ili sanitizovani public-safe rezime.
- Ako potvrda izostane, GitHub i Vercel ostaju kritični operativni servisi bez formalnog ekosistemskog statusa.

## 7) Decision gates

1. **Gate 1 — controlling source**
   - pitanje potvrde: da li je controlling source potvrđen
   - minimalni dokaz: reference ka `docs/repository-operating-model.md` i relevantnim downstream planovima
2. **Gate 2 — audience/visibility**
   - pitanje potvrde: da li su audience layer i visibility klasifikovani
   - minimalni dokaz: eksplicitan routing blok i separation pravila
3. **Gate 3 — billing/support facts**
   - pitanje potvrde: da li su billing i support činjenice potvrđene
   - minimalni dokaz: invoice/transaction trag, trag support slučaja ili potvrđen status
4. **Gate 4 — continuity mapping**
   - pitanje potvrde: da li su continuity i poslovni uticaj mapirani
   - minimalni dokaz: veza ka projektu, toku, repozitorijumu ili deployment-u
5. **Gate 5 — creator/developer sync**
   - pitanje potvrde: da li su creator poruka i developer evidencija usklađeni
   - minimalni dokaz: shared-lane pregled poruke, statusa i tehničkog uticaja
6. **Gate 6 — reusable output approval**
   - pitanje potvrde: da li shared lane odobrava reusable output
   - minimalni dokaz: potvrđen visibility handling i release readiness
7. **Gate 7 — governance/licensing review**
   - pitanje potvrde: da li je potreban širi governance ili licensing pregled
   - minimalni dokaz: dodatna procena za partnerski, enterprise ili cross-jurisdiction kontekst

## 8) KPI okvir

### 8.1 Operativni KPI

- vreme odgovora,
- vreme razrešenja,
- broj eskalacija,
- broj reaktivacija,
- broj otvorenih continuity blokada.

### 8.2 Finansijski KPI

- broj aktivnih pretplata,
- broj spornih billing slučajeva,
- broj suspendovanih ili blokiranih slučajeva,
- sprečen gubitak prihoda.

### 8.3 Ekosistemski KPI

- broj stabilizovanih tokova,
- broj projekata oslonjenih na GitHub i Vercel,
- broj shared-lane odobrenih saradničkih tačaka,
- broj partner-context sažetaka spremnih za deljenje.

### 8.4 Monetizacioni KPI

- retention zaštita,
- continuity zaštita,
- support-to-revenue efekat,
- readiness za enterprise/program-equivalent modele.

## 9) Rizici i zaštitna pravila

- ne potvrđivati partnerstvo bez dokaza,
- ne objavljivati billing, account i transaction detalje,
- ne mešati public-safe narativ sa internim operativnim činjenicama,
- ne uvoditi nove javne surface-e bez controlling source reference,
- ne tretirati “vrh programskog ekvivalenta” kao canonical termin; ostaje opisni radni izraz downstream od postojećeg controlling source lanca.

## 10) Očekivani izlaz

Ovaj okvir je uspešno implementiran kada postoji:

- jedinstven Developer + Creator okvir za GitHub i Vercel,
- stabilan incident-to-resolution model za obe platforme,
- jasna granica između internog operativnog i public-safe sloja,
- osnova za dugoročni subscription, support i ekosistemski rast,
- uslovno uključivanje GitHub-a i Vercel-a u ekosistem samo uz potvrđenu operativnu saradnju i shared-lane odobrenje.

## 11) Preporučeni redosled realizacije

1. zaključati routing i ownership,
2. stabilizovati Vercel i GitHub billing/support tokove,
3. mapirati continuity i monetizacioni uticaj,
4. definisati zajednički ecosystem status,
5. pripremiti samo sanitizovane public-safe izlaze.
