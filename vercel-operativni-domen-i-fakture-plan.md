# Vercel — operativni domen, fakture i ekosistemska saradnja

## Document Control

- **Category:** Templates
- **Type:** Vercel operational domain plan
- **Status:** working
- **Visibility:** limited/internal
- **Purpose:** Structured operating plan for the Vercel domain covering billing, invoices, incidents, lane ownership, KPI tracking, and ecosystem collaboration.
- **Depends on:** `docs/repository-operating-model.md`, `governance/document-lifecycle.md`, `docs/document-portfolio.md`, `developer-creator-monetization-playbook-plan.md`, `config/sensitive-content-review-checklist.md`

Ovaj dokument zaključava Vercel kao poseban operativni domen unutar Developer + Creator program-equivalent okvira i povezuje billing, support, fakture, kontinuitet usluge i partnersku saradnju sa širim monetizacionim sistemom.

## 0) Routing i lane napomena

- **Primarni lane:** domain/shared Vercel operations lane.
- **Creator lane upotreba:** neutralno, profesionalno i javno-bezbedno formulisanje poruka, sažetaka i partner-facing rezimea.
- **Developer lane upotreba:** tehnička evidencija projekata, deployment kritičnosti, zavisnosti i kontinuiteta usluge.
- **Kontrolni koordinacioni dokument:** `docs/repository-operating-model.md`.
- **Audience layer:** internal planning + support/operational communication; creator/public-safe samo za sanitizovane rezimee i partner-context sažetke.
- **Visibility handling:** billing, fakture, incident identifikatori, account detalji i operativni tragovi ostaju `limited/internal`; deljene verzije prikazuju samo neutralne statuse, agregate i sanitizovane ishode.
- **Shared-lane checkpoint:** pre reusable outputa potvrditi controlling source, audience layer, visibility, ownership lane, shared-lane handoff i release readiness.
- **Release status:** working operational framework; nije canonical standard niti public-safe output bez sanitizacije, KPI potvrde i shared-lane odobrenja.
- Svi Vercel surface-i ostaju downstream u odnosu na `docs/repository-operating-model.md`, `governance/document-lifecycle.md` i operativni monetizacioni okvir iz `developer-creator-monetization-playbook-plan.md`.

## 1) Operativni cilj i program-equivalent uloga

- Vercel domen se tretira kao infrastrukturno-operativni sloj koji štiti kontinuitet proizvoda, prihoda i poverenja korisnika.
- U okviru “vrha programskog ekvivalenta” Vercel nije samo hosting vendor, već kontrolisani operativni čvor za support, billing, deployment stabilnost i ekosistemsku saradnju.
- Njegova uloga je da podrži orkestraciju:
  1. proizvoda i deployment tokova,
  2. distribucije i public-safe izlaza,
  3. billing i support rezolucije,
  4. monetizacionih i retention signala,
  5. partnerskog i ekosistemskog rasta.

## 2) Controlling source i scope zaključavanje

### 2.1 Glavni controlling source lanac

1. `docs/repository-operating-model.md` - koordinacioni i routing source
2. `governance/document-lifecycle.md` - lifecycle, visibility i release-control source
3. `developer-creator-monetization-playbook-plan.md` - poslovni i program-equivalent monetizacioni source
4. `vercel-operativni-domen-i-fakture-plan.md` - operativni source za Vercel domenski model, registre i KPI
5. `vercel-naplata-poruka-plan.md` - izvršni support/billing komunikacioni source

### 2.2 Zaključani scope

Ovaj plan pokriva sledeće oblasti:

- developer lane izvršenje,
- creator lane izvršenje,
- shared-lane monetization koordinaciju,
- Vercel billing i operations tokove,
- incident-to-resolution lifecycle,
- evidenciju faktura i transakcija,
- ekosistemsku i partnersku saradnju vezanu za Vercel.

## 3) Vercel kao poseban operativni domen

Vercel domen mora se voditi kao poseban poslovni i support sloj sa sledećim obaveznim entitetima:

| Entitet | Opis | Minimalni interni status |
|---|---|---|
| Nalog | osnovni Vercel account kontekst | active, review, suspended |
| Tim | team/workspace kontekst za ownership | active, review |
| Projekat | projekat koji zavisi od Vercel infrastrukture | active, degraded, blocked |
| Deployment | pojedinačni release ili runtime surface | healthy, degraded, failed |
| Pretplata | plan i status aktivacije usluge | active, pending, suspended, restored |
| Faktura | invoice zapis vezan za naplatu | active, under_review, disputed, suspended, resolved |
| Transakcija | pokušaj ili izvršena naplata | pending, completed, failed, refunded |
| Incident | tehnički ili billing problem | open, investigating, escalated, resolved |
| Support zahtev | komunikacioni predmet sa Vercel podrškom | draft, sent, awaiting_response, escalated, closed |
| Reaktivacija | slučaj vraćanja pune usluge | requested, in_progress, restored, blocked |

## 4) Razdvajanje internog i deljivog sloja

### 4.1 Interni operativni sloj

Interni sloj može sadržati:

- account identifikatore,
- team nazive,
- invoice i transaction identifikatore,
- iznose, metode plaćanja i detalje neuspele naplate,
- tehničku kritičnost deployment-a,
- poslovni uticaj po projektu,
- interni ownership i incident beleške.

### 4.2 Deljivi javno-bezbedni ili partnerski sloj

Deljive verzije smeju sadržati samo:

- neutralan status slučaja,
- agregirani broj pogođenih projekata,
- sanitizovan opis poslovnog uticaja,
- potvrdu da je support proces aktivan,
- rezime narednih koraka bez otkrivanja poverljivih billing detalja.

## 5) Registar faktura i Vercel poslovanja

### 5.1 Jedinstveni registar

Za svaku fakturu ili naplatni slučaj voditi najmanje:

| Polje | Obavezno | Svrha |
|---|---|---|
| Invoice ID | da | primarni billing trag |
| Datum | da | vremensko praćenje |
| Iznos | da | finansijski signal |
| Valuta | da | finansijska tačnost |
| Status naplate | da | lifecycle praćenje |
| Metod plaćanja | da | operativna klasifikacija |
| Pogođeni projekat | da | mapiranje poslovnog uticaja |
| Odgovorno lice | da | ownership |
| Vezani support slučaj | da | incident veza |
| Pretplata / plan | preporučeno | commercial context |
| Transakcioni ID | preporučeno | dodatni dokaz |
| Deployment kritičnost | preporučeno | prioritet eskalacije |
| Zaštićeni prihod / tok | preporučeno | monetizaciona veza |
| Rizik prekida | da | release i continuity procena |

### 5.2 Statusna logika

- **aktivno** - naplata i usluga funkcionišu bez blokade
- **na proveri** - postoje signali ili otvoreno pitanje koje traži proveru
- **sporno** - faktura ili transakcija je predmet neslaganja, dupliranja ili greške
- **suspendovano** - usluga ili billing status ugrožava kontinuitet
- **rešeno** - uzrok je utvrđen, status potvrđen i operativni tok vraćen

### 5.3 Poslovni uticaj

Svaka faktura mora biti povezana sa:

1. projektom koji podržava,
2. prihodom ili korisničkim toku koji štiti,
3. rizikom prekida ako ostane nerešena,
4. potrebnim nivoom eskalacije.

## 6) Lane odgovornosti

### 6.1 Developer lane

- vodi tehničku evidenciju projekata, deployment kritičnosti i zavisnosti,
- meri tehnički uticaj billing i subscription problema,
- prioritizuje `critical` slučajeve sa punim prekidom ključnog toka,
- potvrđuje continuity status pre i posle reaktivacije,
- ne menja poslovna, pravna ili partnerska tumačenja bez shared-lane potvrde.

### 6.2 Creator lane

- oblikuje neutralne, profesionalne i javno-bezbedne poruke prema Vercel-u i partnerima,
- priprema sažetke vrednosti ekosistema i uticaja prekida,
- održava reputacionu jasnoću i ton komunikacije,
- ne iznosi neproverene finansijske, pravne ili partnerske tvrdnje.

### 6.3 Shared lane

- povezuje billing, support, reputaciju, monetizaciju i partnerstvo,
- potvrđuje controlling source, audience layer, visibility, ownership i release status za svaki važan slučaj,
- odlučuje da li predmet ostaje interni operativni slučaj ili prelazi u partner/ekosistem temu,
- odobrava reusable izlaze i sanitizovane rezimee.

## 7) Incident-to-resolution tok

1. **Identifikacija problema** - klasifikovati da li je problem billing, subscription, deployment continuity ili kombinovani incident.
2. **Prikupljanje dokaza i faktura** - prikupiti invoice, transaction, screenshot i ownership trag.
3. **Formalna support komunikacija** - koristiti `vercel-naplata-poruka-plan.md` kao izvršni šablon.
4. **Follow-up i eskalacija** - pratiti odgovor, eskalirati po hitnosti i evidentirati sledeće korake.
5. **Zatvaranje slučaja i lessons learned** - potvrditi oporavak, ažurirati finansijsku evidenciju i zabeležiti operativnu pouku.

Za svaki slučaj obavezno pratiti:

- vreme reakcije,
- vreme razrešenja,
- poslovni uticaj,
- deployment kontinuitet,
- status reaktivacije.

## 8) Model saradnje sa Vercel-om

### 8.1 Support odnos

- fokus na rešavanje billing, subscription i incident slučajeva,
- koristi neutralnu evidencijski podržanu komunikaciju,
- prvi cilj je stabilizacija usluge i potvrda statusa.

### 8.2 Operativni odnos

- definiše koje projekte i use-case-ove ekosistema Vercel podržava,
- povezuje deployment stabilnost sa poslovnim kontinuitetom,
- održava pregled kritičnih zavisnosti i readiness signala.

### 8.3 Partnerski odnos

- otvara se tek posle stabilizacije support i operativnog sloja,
- fokusira se na dugoročnu saradnju, reputacionu pouzdanost i podršku rastu,
- ne predstavlja formalno partnerstvo bez shared-lane i governance provere.

## 9) Veza sa monetizacionim modelom

Vercel domen je deo šireg Developer + Creator monetization playbook-a jer:

- štiti retention i continuity signale,
- čuva poverenje korisnika u aktivne projekte,
- smanjuje rizik gubitka prihoda zbog prekida usluge,
- podržava enterprise/program-equivalent spremnost,
- povezuje infrastrukturu sa support resolution i ownership disciplinom.

Billing i support tokovi treba da se tumače kao incident-to-revenue zaštitni sloj unutar monetizacionog sistema.

## 10) KPI okvir

### 10.1 Operativni KPI

- broj otvorenih slučajeva,
- vreme odgovora,
- vreme razrešenja,
- broj reaktivacija,
- broj eskaliranih slučajeva.

### 10.2 Finansijski KPI

- broj aktivnih pretplata,
- vrednost obrađenih faktura,
- sprečen gubitak prihoda,
- broj spornih ili suspendovanih naplata.

### 10.3 Ekosistem KPI

- broj projekata oslonjenih na Vercel,
- broj stabilizovanih poslovnih tokova,
- broj aktivnih saradničkih tačaka sa platformom,
- broj partner-context slučajeva spremnih za shared-lane review.

## 11) Release i visibility pravila

- svi billing, fakture, account identifikatori i incident detalji ostaju `limited/internal`,
- javni ili partnerski deljivi izlazi smeju sadržati samo sanitizovane statuse, agregate i neutralne rezimee,
- nijedan reusable output ne objavljivati bez sanitizacije i shared-lane odobrenja,
- creator/public-safe formulacije ne smeju sugerisati potvrđeno partnerstvo, finansijski ishod ili regulatorni status bez dokaza,
- svaki deljivi surface mora ostati downstream od controlling source lanca iz ovog plana.

## 12) Završni operativni cilj

Ovim planom Vercel se formalizuje kao:

- stabilan Developer + Creator program-equivalent operativni domen,
- jedinstveni okvir za evidenciju faktura i operativnih slučajeva,
- standardizovan support i eskalacioni tok,
- kontrolisana saradnička komponenta ekosistema, a ne samo pasivni vendor layer.
