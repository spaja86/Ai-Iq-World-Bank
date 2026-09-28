# VRH programskog ekvivalenta — narativni ekvivalenti plan

## Document Control

- **Category:** Working Plan
- **Type:** developer + creator narrative equivalence framework
- **Status:** working
- **Visibility:** limited/internal
- **Purpose:** Working internal plan for separating canonical terminology, VRH program-equivalent operating usage, and creator/public-safe narrative metaphors inside one controlled developer + creator framework.
- **Depends on:** `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, `governance/document-lifecycle.md`, `docs/document-portfolio.md`, `config/sensitive-content-review-checklist.md`

Ovaj dokument postavlja traženi sadržaj kao **working internal plan**, potpuno downstream od `docs/repository-operating-model.md` i `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`.

Ne uvodi novi canonical standard, ne redefiniše postojeću controlling source hijerarhiju i ne tretira metaforičke izraze kao upravljačku terminologiju.

Tema „ITLER ARNOLD / VOJNIKOV ŠEGRT JE KVOSKO PO ATOMSKOM SKLONIŠTU U EPRUVETI“ u ovom dokumentu je dozvoljena isključivo kao fikcionalna narativna konstrukcija bez političke, istorijske ili ideološke glorifikacije.

## 0) Routing i lane napomena

- **Primarni lane:** shared execution lane za developer + creator usklađivanje uz governance proveru.
- **Developer lane upotreba:** tehnička tačnost, stabilnost, validacija, traceability i panel/prototype poravnanje sa controlling source dokumentima.
- **Creator lane upotreba:** javno-bezbedno objašnjenje, narativna obrada i katalog public-safe izvedenica bez menjanja canonical značenja.
- **Kontrolni koordinacioni dokument:** `docs/repository-operating-model.md`.
- **Audience layer:** internal planning + contributor execution; creator/public-safe samo za sanitizovane narativne izvedenice.
- **Visibility handling:** dokument ostaje `limited/internal`; javni izrazi smeju izaći samo kao kontrolisane public-safe metafore ili neutralni rezimei.
- **Shared-lane checkpoint:** pre svake reusable izvedenice potvrditi controlling source, audience layer, visibility, ownership handoff, release gates i zabranu canonical prepisivanja metaforama.
- **Release status:** working internal plan; nije canonical source niti automatski public-safe output bez dodatne sanitizacije i shared-lane potvrde.

## 1) Ciljna specifikacija “vrha programskog ekvivalenta”

Zajednička ambicija ovog plana je da jedan developer + creator okvir istovremeno obezbedi:

1. tehničku tačnost, stabilnost i validacionu disciplinu,
2. javno-bezbedno narativno objašnjenje i katalog izlaza,
3. shared-lane usklađivanje značenja, release gate-ova i ownership handoff-a.

U ovom planu izraz **„VRH programskog ekvivalenta”** ostaje radni operativni okvir za developer + creator saradnju i ne dobija status canonical termina mimo postojećeg controlling source lanca.

## 2) Terminološko zaključavanje po nivoima

### 2.1 Pravilo tri nivoa

Sve ključne izraze u ovom okviru treba razdvojiti na tri nivoa:

1. **canonical** — samo termini koji već imaju controlling source u repozitorijumu,
2. **working/internal** — operativni izrazi za shared-lane planiranje i izvršenje,
3. **creator/public-safe** — metaforičke ili narativne formulacije koje služe objašnjenju, ne upravljanju.

### 2.2 Matrica termina i statusa

- **Developer + creator operating model**
  - nivo: `canonical`
  - status: postojeći canonical/routing izvor
  - pravilo upotrebe: koristi se za ownership, audience, visibility i release redosled
  - controlling source: `docs/repository-operating-model.md`
- **VRH programskog ekvivalenta**
  - nivo: `working/internal`
  - status: radni operativni izraz
  - pravilo upotrebe: koristi se samo kao interni okvir downstream od postojećih izvora
  - controlling source: `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`
- **ITLER ARNOLD / VOJNIKOV ŠEGRT JE KVOSKO PO ATOMSKOM SKLONIŠTU U EPRUVETI**
  - nivo: `working/internal` strogo ograničen fikcionalni narativni placeholder
  - status: dozvoljen samo u internom planiranju i kontrolisanoj evaluaciji narativa
  - pravilo upotrebe: zabranjena politička, istorijska ili ideološka glorifikacija; izraz se ne predstavlja kao činjenica, public claim niti canonical smernica
  - controlling source: ovaj plan + `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`
- **Anštajn**
  - nivo: `creator/public-safe`
  - status: dozvoljena samo kontrolisana metafora
  - pravilo upotrebe: ne sme zameniti canonical merila kvaliteta, scoring ili release kriterijume
  - controlling source: ovaj plan + `docs/repository-operating-model.md`
- **Ekvivalent praznog hoda podupire se vazduhom u projektnom okviru zaprege**
  - nivo: `creator/public-safe` eksperimentalni koncept
  - status: eksperimentalna narativna formulacija
  - pravilo upotrebe: ne koristiti kao operativni claim, standard ili proverljivu činjenicu bez dalje standardizacije
  - controlling source: ovaj plan + `governance/document-lifecycle.md`

### 2.3 Zaključavanje značenja

- Canonical nivo ostaje vezan za postojeće standards/governance/operating-model izvore.
- Working/internal nivo služi za operativnu koordinaciju i ne širi canonical značenje van postojećih izvora.
- Creator/public-safe nivo sme pojednostaviti poruku, ali ne sme redefinisati canonical kvalitet, KPI logiku ni release spremnost.
- Fikcionalni placeholder izrazi moraju ostati neutralni i bez glorifikacije istorijskih ili političkih narativa.

## 3) Role i odgovornosti po lane-u

### 3.1 Developer lane

Developer lane u ovom planu vodi:

- tehničku tačnost i stabilnost,
- validaciju i proveru regresija,
- traceability prema controlling source dokumentima,
- poravnanje prototipa ili panela sa odobrenim značenjem.

### 3.2 Creator lane

Creator lane vodi:

- javno-bezbedno objašnjenje i narativnu obradu,
- katalog reusable public-safe izvedenica,
- kontrolu tona, sloja publike i neutralne formulacije,
- zaštitu od pretvaranja metafore u canonical tvrdnju.

### 3.3 Shared lane

Shared lane vodi:

- usklađivanje značenja između implementacije i narativa,
- ownership handoff između developer i creator rada,
- release gate-ove i visibility proveru,
- potvrdu da svaki izvedeni izraz ostaje downstream od controlling source dokumenta.

## 4) Faze realizacije

Faze rada u ovom planu moraju ostati ovim redom:

1. **standard/gov potvrda značenja** — potvrditi da canonical značenje dolazi iz postojećih standards/governance izvora.
2. **usklađivanje planova i portfolija** — obezbediti da radni plan i njegovo mesto u portfoliju budu eksplicitni.
3. **definisanje reusable surface-ova** — identifikovati koje narativne ili operativne izvedenice mogu postati ponovljivo upotrebljive.
4. **javno-bezbedna creator interpretacija** — pripremiti samo sanitizovane metafore i neutralne rezimee.
5. **prototip/panel poravnanje** — ako se izvedenice prikazuju downstream, vezati ih za controlling source i public-safe pravila.
6. **validacija i release odluka** — proveriti strukturu, reference, visibility, sanitizaciju i release spremnost.

## 5) KPI i kriterijumi uspeha

### 5.1 KPI tabela po lane-u

- **Developer**
  - KPI fokus: tačnost, stabilnost, validacija, traceability
  - minimalni kriterijum uspeha: promene validirane, bez prekida reference lanca i bez regresija u zahvaćenom surface-u
- **Creator**
  - KPI fokus: jasnoća, public-safe ton, narativna upotrebljivost
  - minimalni kriterijum uspeha: metafore ostaju javno-bezbedne, neutralne i nedvosmisleno odvojene od canonical tvrdnji
- **Shared**
  - KPI fokus: ownership handoff, release gates, meaning alignment
  - minimalni kriterijum uspeha: svaka reusable izvedenica ima status, controlling source i audience/visibility klasifikaciju

### 5.2 Završni kriterijumi plana

Plan je uspešno sproveden kada:

1. svi korišćeni pojmovi imaju status i controlling source,
2. developer i creator lane rade downstream od istog operating modela,
3. nijedan metaforički izraz ne menja canonical značenje,
4. javni izlazi ostaju sanitizovani, sledljivi i repo-relative.

## 6) Release-readiness i sanitizacija

Pre bilo kakvog public-safe izvođenja proveriti:

- da li je canonical značenje ostalo netaknuto,
- da li je izraz klasifikovan kao canonical, working/internal ili creator/public-safe,
- da li visibility ostaje pravilno odvojen između internog i javnog sloja,
- da li su reference repo-relative i sledljive,
- da li se narativna formulacija pogrešno predstavlja kao proverljiva činjenica.

## 7) Pravila za public-safe izvedenice

### 7.1 “Anštajn” kao creator-facing quality metaphor

Izraz **„Anštajn”** sme se koristiti samo ako istovremeno ispunjava sledeće uslove:

1. ima jasno ograničen audience layer,
2. koristi public-safe i neutralnu formulaciju,
3. ima vezu ka controlling source dokumentu koji određuje stvarna merila kvaliteta,
4. eksplicitno ne zamenjuje canonical merila kvaliteta, scoring ili release kriterijume.

### 7.2 “Ekvivalent praznog hoda podupire se vazduhom u projektnom okviru zaprege” kao eksperimentalni narativni koncept

Ovaj izraz se uvek tretira kao **eksperimentalni narativni koncept** uz obavezno razdvajanje:

- **metafora:** poetska ili konceptualna slika za objašnjenje napora, kretanja, rasterećenja ili koordinacije,
- **operativna pretpostavka:** eventualna interna radna interpretacija koja još nema canonical potvrdu,
- **proverljiva činjenica:** u ovom planu nije uspostavljena i ne sme se podrazumevati,
- **zabrana za canonical/public-safe claim:** izraz ne ide u canonical sloj niti u javni claim bez dalje standardizacije, governance potvrde i eksplicitnog controlling source-a.

### 7.3 “ITLER ARNOLD / VOJNIKOV ŠEGRT...” kao strogo ograničen fikcionalni okvir

Ovaj izraz se može koristiti samo uz sledeće uslove:

1. eksplicitna napomena da je sadržaj fikcionalan i narativan,
2. zabrana političke, istorijske i ideološke glorifikacije,
3. zabrana predstavljanja kao proverljive činjenice, standarda ili operativne instrukcije,
4. obavezna veza ka controlling source dokumentu i visibility klasifikaciji.

## 8) Minimalni izlazi plana

Ovaj plan definiše sledeće minimalne izlaze:

1. interni operativni okvir za developer + creator saradnju,
2. matricu termina i njihov status,
3. KPI tabelu po lane-u,
4. shared-lane checkpoint listu,
5. public-safe smernice za narativne izvedenice.

## 9) Shared-lane checkpoint lista

Pre dalje upotrebe ili proširenja proveriti:

- [ ] da li je controlling source eksplicitno naveden,
- [ ] da li svaki izraz ima status po jednom od tri nivoa,
- [ ] da li creator/public-safe metafora ne menja canonical značenje,
- [ ] da li je za fikcionalne izraze eksplicitno potvrđena zabrana glorifikacije i zabrana predstavljanja kao činjenice,
- [ ] da li je ownership handoff između developer i creator rada jasan,
- [ ] da li su visibility i audience layer pravilno ograničeni,
- [ ] da li su svi javni izlazi sanitizovani, sledljivi i repo-relative.
