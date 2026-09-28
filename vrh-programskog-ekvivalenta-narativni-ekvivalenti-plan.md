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

Tema Zeus/Posejdon, Kiklop/Herakle i Herkules u ovom dokumentu tretira se isključivo kao **narativni ekvivalent** za developer + creator radni okvir. Citati povezani sa tim figurama tretiraju se kao autorski, poetski ili interpretativni materijal, a ne kao proverene tehničke, istorijske ili canonical tvrdnje.

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

### 1.1 Programski i narativni ekvivalent (ne realna akcija)

- Izraz **„DŽINGISKAN / konjički napad strela u trku”** u ovom okviru je isključivo metafora za:
  - brzinu iteracija,
  - preciznost isporuke,
  - kontinuirani pritisak kvaliteta.
- Izraz **„poraz protivnika”** prevodi se u neutralni programski cilj:
  - nadmašivanje konkurencije kroz stabilnost,
  - tačnost isporuke,
  - vrednost za korisnika.
- Operativno tumačenje ključnih izraza u ovom okviru:
  - **„brzina u trku”** = kratki release ciklusi,
  - **„strela”** = mali i precizni inkrementi,
  - **„dokle god sam živ”** = kontinuitet održavanja, monitoring i anti-regresiona disciplina.
- Nijedna formulacija iz ove sekcije ne predstavlja poziv na realno nasilje, konflikt ili fizičku akciju.

## 2) Terminološko zaključavanje po nivoima

### 2.1 Pravilo tri nivoa

Sve ključne izraze u ovom okviru treba razdvojiti na tri nivoa:

1. **canonical** — samo termini koji već imaju controlling source u repozitorijumu,
2. **working/internal** — operativni izrazi za shared-lane planiranje i izvršenje,
3. **creator/public-safe** — metaforičke ili narativne formulacije koje služe objašnjenju, ne upravljanju.

### 2.2 Matrica termina i obaveznih metapodataka

| Izraz | Nivo | Controlling source | Audience layer | Visibility | Ownership lane | Release status | Pravilo upotrebe |
|---|---|---|---|---|---|---|---|
| `Developer + Creator operating model` | `canonical` | `docs/repository-operating-model.md` | canonical/standards + contributor routing | `public-safe` | shared | approved | koristi se za ownership, audience, visibility i release redosled |
| `VRH programskog ekvivalenta` | `working/internal` | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md` | internal planning + contributor execution | `limited/internal` | shared | working | koristi se samo kao interni okvir downstream od postojećih izvora |
| `Napoleon Bonaparta` | `working/internal` | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, ovaj plan | internal planning + contributor execution | `limited/internal` | creator uz shared-lane proveru | working | dozvoljen samo kao kontrolisana metafora ili interni narativni marker; ne sme postati istorijski, politički ili reputacioni claim |
| `Napoleon Bonaparta` — sanitizovana creator/public-safe izvedenica | `creator/public-safe` | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, ovaj plan | creator/public-safe | `public-safe` | creator uz shared-lane proveru | draft | dozvoljena tek nakon shared-lane provere, neutralnog tumačenja i sanitizacije |
| `Velim dobar dan, krijem 'top' kao da je san` | `working/internal` | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, ovaj plan | internal planning + contributor execution | `limited/internal` | creator uz shared-lane proveru | working | dozvoljen samo uz neutralno tumačenje i bez predstavljanja kao činjenice, standarda ili operativne instrukcije |
| `Velim dobar dan, krijem 'top' kao da je san` — sanitizovana creator/public-safe izvedenica | `creator/public-safe` | `docs/repository-operating-model.md`, `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`, ovaj plan | creator/public-safe | `public-safe` | creator uz shared-lane proveru | draft | dozvoljena tek nakon shared-lane provere, neutralnog tumačenja i sanitizacije |
| `ITLER ARNOLD / VOJNIKOV ŠEGRT JE KVOSKO PO ATOMSKOM SKLONIŠTU U EPRUVETI` | `working/internal` | ovaj plan | internal planning + contributor execution | `limited/internal` | shared | working | dozvoljen samo uz eksplicitnu napomenu da je sadržaj fikcionalan i narativan, uz zabranu glorifikacije i zabranu predstavljanja kao činjenice, standarda ili operativne instrukcije |
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
- **DŽINGISKAN / konjički napad strela u trku**
  - nivo: `working/internal`
  - status: kontrolisana interna metafora
  - pravilo upotrebe: mapira se samo na brzinu iteracija, preciznost i kvalitet; zabranjeno tumačenje kao realna akcija
  - controlling source: ovaj plan + `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`
- **poraz protivnika**
  - nivo: `creator/public-safe`
  - status: neutralizovani konkurentski cilj
  - pravilo upotrebe: koristi se samo kao performans/konkurentnost bez nasilne ili dehumanizujuće semantike
  - controlling source: ovaj plan + `docs/repository-operating-model.md`
- **ITLER ARNOLD / VOJNIKOV ŠEGRT JE KVOSKO PO ATOMSKOM SKLONIŠTU U EPRUVETI**
  - nivo: `working/internal` (nivo 2 u pravilu tri nivoa)
  - status: dozvoljen samo u internom planiranju i kontrolisanoj evaluaciji narativa
  - pravilo upotrebe: primeniti normativna ograničenja iz sekcije 7.3
  - controlling source: `vrh-programskog-ekvivalenta-narativni-ekvivalenti-plan.md`
  - related reference: `vrh-programskog-ekvivalenta-operativni-okvir-plan.md`
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

### 2.3 Matrica likova i narativnih ekvivalenata

| Lik / par | Simboličko značenje | Dozvoljena operativna interpretacija | Zabranjena interpretacija | Lane vlasništvo |
|---|---|---|---|---|
| Zeus + Posejdon | vrhovna koordinacija sile, dosega i autoriteta u jednom creator + developer okviru | vrhunska orkestracija kvaliteta, širine uticaja, donošenja odluka i programske/postavke discipline unutar VRH radnog okvira | canonical božanski status, istorijska ili religijska tvrdnja, poziv na dominaciju nad ljudima ili realan sukob | shared |
| Kiklop + Herakle | koncentrisana snaga probijanja prepreka i monumentalni izvršni pritisak | otpornost, tehničko savladavanje prepreka, iterativni pritisak kvaliteta, snažna izvedba pod opterećenjem | rušenje u doslovnom smislu, realno nasilje, dehumanizacija protivnika ili glorifikacija destrukcije | shared uz developer primenu |
| Herkules | vrhunac snage i nosilac sloja “najjači od svih” | najviši nivo discipline, nosivosti isporuke, dugotrajne odgovornosti i snažnog creator/developer izraza | tvrdnja o superiornosti ljudi kao kategorija, fizička pretnja, literalna vojna ili nasilna heroizacija | creator uz shared kontrolu |

### 2.4 Matrica citata i slojeva tumačenja

| Originalni navod | Unutrašnje značenje | Developer tumačenje | Creator/public-safe tumačenje |
|---|---|---|---|
| „Kada u rat pođem kamen od stene bacim pod nebo i mislim se da li sam vam trebao” | intenzitet suočavanja sa velikim izazovom, unutrašnja sumnja i teret odgovornosti | ulazak u zahtevnu fazu rada, podizanje velikog tehničkog tereta, procena da li je zahvat bio potreban ili opravdan | snažan motiv o hrabrosti, težini odluke i ličnom preispitivanju bez ratnog ili nasilnog značenja |
| „Stena do stena imena moga srušiće se na vas, tako mi Boga” | osećaj monumentalne sile i nezaustavljivog pritiska | niz velikih, preciznih isporuka ili korektivnih zahvata koji lome prepreke i podižu standard kvaliteta | pojačan poetski izraz o snazi prisustva, odlučnosti i velikom stvaralačkom zamahu bez pretnje ili poziva na povredu |
| „Najjači od svih bacam stenu kao stih” | spoj sirove snage i izraza, sila pretvorena u artikulisano delo | najviši nivo nosivosti sistema ili isporuke uz kontrolisanu preciznost i disciplinu | metafora o tome da snaga dobija smisao tek kada postane stvaranje, izraz ili doprinos drugima |

### 2.5 Neutralizacija konfliktnog jezika

- `rat` -> intenzivna faza rada, izazov, zahtevna operativna etapa
- `kamen` / `stena` -> veliki teret, velika isporuka, tvrda prepreka, masivan radni blok
- `srušiće se` -> probiće ograničenja, ukloniti prepreke, izvršiti snažan pritisak kvaliteta
- `najjači` -> najizdržljiviji, najdisciplinovaniji, najnosiviji u izvršenju
- `bacam` -> usmeravam, isporučujem, prenosim, pretvaram u delo

Obavezno pravilo:

- svi navedeni izrazi ostaju u domenu metafore, performansa, odgovornosti ili kvaliteta isporuke,
- zabranjeno je realno nasilno, političko, vojno ili dehumanizujuće tumačenje,
- creator/public-safe izvedenica mora zadržati snagu tona bez zadržavanja konfliktnog okvira.

### 2.6 Zaključavanje značenja

- Canonical nivo ostaje vezan za postojeće standards/governance/operating-model izvore.
- Working/internal nivo služi za operativnu koordinaciju i ne širi canonical značenje van postojećih izvora.
- Creator/public-safe nivo sme pojednostaviti poruku, ali ne sme redefinisati canonical kvalitet, KPI logiku ni release spremnost.
- Fikcionalni placeholder izrazi moraju ostati neutralni i bez glorifikacije istorijskih ili političkih narativa.
- Zeus/Posejdon, Kiklop/Herakle i Herkules ostaju kontrolisani narativni ekvivalenti i ne dobijaju canonical status.
- `Napoleon Bonaparta` i `Velim dobar dan, krijem 'top' kao da je san` ostaju downstream narativne izvedenice i ne dobijaju canonical status.
- Zaključavanje značenja u ovoj sekciji ostaje podređeno `docs/repository-operating-model.md` sekciji `5a. Downstream term-control rule` i operativnoj klasifikaciji iz `vrh-programskog-ekvivalenta-operativni-okvir-plan.md` sekcije 0.3.

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
- transformaciju agresivnih metafora u motivacione, etičke i public-safe formulacije,
- zabranu glorifikacije nasilja, istorijsko-političkih figura i dehumanizacije „protivnika”.

### 3.3 Shared lane

Shared lane vodi:

- usklađivanje značenja između implementacije i narativa,
- ownership handoff između developer i creator rada,
- release gate-ove i visibility proveru,
- potvrdu da svaki izvedeni izraz ostaje downstream od controlling source dokumenta.
- obavezni checkpoint pre svakog reusable izlaza:
  - controlling source potvrda,
  - audience + visibility klasifikacija,
  - ownership handoff (`developer` / `creator` / `shared`),
  - release status (`draft` / `working` / `approved` / `archived`).

## 4) Faze realizacije

Faze rada u ovom planu moraju ostati ovim redom:

1. **standard/gov potvrda značenja** — potvrditi da canonical značenje dolazi iz postojećih standards/governance izvora.
2. **usklađivanje planova i portfolija** — obezbediti da radni plan i njegovo mesto u portfoliju budu eksplicitni.
3. **definisanje reusable surface-ova** — identifikovati koje narativne ili operativne izvedenice mogu postati ponovljivo upotrebljive.
4. **javno-bezbedna creator interpretacija** — pripremiti samo sanitizovane metafore i neutralne rezimee.
5. **prototip/panel poravnanje** — ako se izvedenice prikazuju downstream, vezati ih za controlling source i public-safe pravila.
6. **validacija i release odluka** — proveriti strukturu, reference, visibility, sanitizaciju i release spremnost.

### 4.1 Operativne faze A-D

- **Faza A — terminološko zaključavanje i governance granice.**
- **Faza B — lane KPI i evidencija handoff-a.**
- **Faza C — prototip/panel poruke usklađene sa public-safe pravilima.**
- **Faza D — kontrolisano objavljivanje i iterativno poboljšanje.**

### 4.2 Katalog citata i status inventara

Za ovaj plan voditi eksplicitni katalog citata sa sledećim statusima:

1. **postojeći citat u repo-u** — navod je već prisutan u praćenim dokumentima i ima mapiranu lokaciju,
2. **novi ulaz za budući dokument** — navod je dostavljen za buduću obradu, ali još nije potvrđen kao postojeći repo sadržaj,
3. **sanitizovana izvedenica** — javno-bezbedna prerada koja ostaje downstream od internog izvora.

Obavezna polja kataloga:

- originalni navod,
- status inventara,
- lokacija u repo-u ili napomena da lokacija još nije potvrđena,
- controlling source za tumačenje,
- dozvoljeni audience layer.

Pošto ovi tačni citati nisu prethodno potvrđeni verbatim u postojećim fajlovima, u ovom trenutku se tretiraju kao **novi ulaz za budući dokument** dok se njihova lokacija ili prethodno prisustvo ne mapira kroz poseban pregled repozitorijuma.

## 5) KPI i kriterijumi uspeha

### 5.1 KPI tabela po lane-u

- **Developer**
  - KPI fokus: validacija prolaznost, broj regresija, lead time do stabilnog i validiranog izdanja
  - minimalni kriterijum uspeha: promene validirane, bez prekida reference lanca i bez regresija u zahvaćenom surface-u
- **Creator**
  - KPI fokus: jasnoća poruke, konzistentnost audience slojeva i neutralnog tumačenja, reuse stopa public-safe surface-a, nulta stopa političke/istorijske glorifikacije
  - minimalni kriterijum uspeha: metafore ostaju javno-bezbedne, neutralne i nedvosmisleno odvojene od canonical tvrdnji
- **Shared**
  - KPI fokus: udeo promena sa potpunim routing metapodacima, udeo promena bez governance odstupanja, release-gate prolaznost kroz cikluse
  - minimalni kriterijum uspeha: svaka reusable izvedenica ima status, controlling source i audience/visibility klasifikaciju
  - KPI fokus: lead time, tačnost, stabilnost, validacija, traceability
  - minimalni kriterijum uspeha: promene validirane, bez prekida reference lanca i bez regresija u zahvaćenom surface-u
- **Creator**
  - KPI fokus: jasnoća poruke, public-safe usklađenost, narativna upotrebljivost, reuse stopa
  - minimalni kriterijum uspeha: metafore ostaju javno-bezbedne, neutralne i nedvosmisleno odvojene od canonical tvrdnji
- **Shared**
  - KPI fokus: ownership handoff, release gates, meaning alignment, routing kompletnost
  - minimalni kriterijum uspeha: svaka reusable izvedenica ima status, controlling source i audience/visibility klasifikaciju, bez governance odstupanja

### 5.2 Završni kriterijumi plana

Plan je uspešno sproveden kada:

1. svi korišćeni pojmovi imaju status i controlling source,
2. developer i creator lane rade downstream od istog operating modela,
3. nijedan metaforički izraz ne menja canonical značenje,
4. javni izlazi ostaju sanitizovani, sledljivi i repo-relative,
5. canonical značenje je netaknuto, a metafora ostaje interno kontrolisana ili javno neutralizovana,
6. svi izlazi su release-gate odobreni.

## 6) Release-readiness i sanitizacija

Pre bilo kakvog public-safe izvođenja proveriti:

- da li je canonical značenje ostalo netaknuto,
- da li je izraz klasifikovan kao canonical, working/internal ili creator/public-safe,
- da li visibility ostaje pravilno odvojen između internog i javnog sloja,
- da li su reference repo-relative i sledljive,
- da li se narativna formulacija pogrešno predstavlja kao proverljiva činjenica,
- da li su citati odvojeni od operativnih instrukcija,
- da li je audience layer jasan za svaku izvedenicu.

## 6.1 “Po istinitom događaju” granica

Izraz **„po istinitom događaju”** u ovom okviru može se koristiti samo uz jasno razdvajanje sledećih slojeva:

1. **lično iskustvo / autorski događaj** — subjektivni ili autobiografski okvir koji nije automatski repo-dokumentovana činjenica,
2. **citirani materijal** — originalni navod koji se prenosi kao tekstualni ili poetski sadržaj,
3. **interpretacija** — značenje koje developer, creator ili shared lane izvodi iz navoda,
4. **repo-dokumentovana činjenica** — samo ono što je eksplicitno potvrđeno kroz postojeći tracked dokument i repo-relative referencu.

Pravilo upotrebe:

- bez eksplicitne lokacije i potvrde u repozitorijumu, izraz „po istinitom događaju” ne sme zvučati kao da je već verifikovan repozitorijumski dokaz,
- creator/public-safe varijante moraju izbegavati implicitno dokazivanje ličnog događaja kao opšte činjenice,
- shared lane mora potvrditi da li se radi o ličnom okviru, citatu, interpretaciji ili repozitorijumski potvrđenoj tvrdnji.

## 7) Pravila za public-safe izvedenice

### 7.1 `Napoleon Bonaparta` kao kontrolisana creator-facing metafora

Izraz **`Napoleon Bonaparta`** sme se koristiti samo ako istovremeno ispunjava sledeće uslove:

1. ima jasno ograničen audience layer,
2. koristi public-safe i neutralnu formulaciju,
3. ima vezu ka controlling source dokumentu koji određuje stvarna merila kvaliteta,
4. eksplicitno ne zamenjuje canonical merila kvaliteta, scoring ili release kriterijume,
5. ne predstavlja istorijski, politički ili reputacioni claim koji upravlja planom.

### 7.2 `Velim dobar dan, krijem 'top' kao da je san` kao eksperimentalni narativni koncept

Ovaj izraz se uvek tretira kao **eksperimentalni creator izraz** uz obavezno razdvajanje:

- **metafora:** poetska ili konceptualna slika za objašnjenje napora, kretanja, rasterećenja ili koordinacije,
- **operativna pretpostavka:** eventualna interna radna interpretacija koja još nema canonical potvrdu,
- **proverljiva činjenica:** u ovom planu nije uspostavljena i ne sme se podrazumevati,
- **zabrana za canonical/public-safe claim:** izraz ne ide u canonical sloj niti u javni claim bez dalje standardizacije, governance potvrde i eksplicitnog controlling source-a.
- **neutralno tumačenje:** dozvoljena je samo sanitizovana i neutralna izvedenica bez operativne ili canonical snage.

### 7.3 “ITLER ARNOLD / VOJNIKOV ŠEGRT...” kao strogo ograničen fikcionalni okvir

Ovaj izraz se može koristiti samo uz sledeće uslove:

1. eksplicitna napomena da je sadržaj fikcionalan i narativan,
2. zabrana političke, istorijske i ideološke glorifikacije,
3. zabrana predstavljanja kao proverljive činjenice, standarda ili operativne instrukcije,
4. obavezna veza ka controlling source dokumentu i visibility klasifikaciji.

### 7.4 Red-team semantička provera narativa

Pre odobravanja reusable narativnog izlaza obavezno sprovesti semantičku red-team proveru:

1. ukloniti formulacije koje impliciraju realno nasilje, osvetu ili poziv na povredu,
2. ukloniti formulacije koje dehumanizuju konkurenciju ili publiku,
3. potvrditi da finalni tekst ostaje u konkurentskom/performans kontekstu,
4. potvrditi da je canonical značenje netaknuto i da je vidljivost pravilno klasifikovana.

### 7.5 Mitološki narativni ekvivalenti kao kontrolisana interna klasa

Zeus/Posejdon, Kiklop/Herakle i Herkules smeju se koristiti samo kada su istovremeno ispunjeni sledeći uslovi:

1. jasno je naznačeno da predstavljaju narativne ekvivalente, ne canonical termine,
2. njihovo značenje je prevedeno u developer, creator ili shared operativni smisao,
3. ne predstavljaju religijsku, istorijsku ili naučnu tvrdnju,
4. svaka future public-safe izvedenica prolazi neutralizaciju konfliktnog jezika,
5. controlling source i visibility klasifikacija ostaju eksplicitni.

## 8) Minimalni izlazi plana

Ovaj plan definiše sledeće minimalne izlaze:

1. interni operativni okvir za developer + creator saradnju,
2. matricu termina i njihov status,
3. matricu likova i njihovih narativnih ekvivalenata,
4. matricu citata i dozvoljenih interpretacija,
5. katalog citata sa statusom inventara,
6. KPI tabelu po lane-u,
7. shared-lane checkpoint listu,
8. kriterijume za public-safe izvedenicu,
9. završni creator epilog ili javno-bezbedni rezime kada release gate to dozvoli.
3. KPI tabelu po lane-u,
4. shared-lane checkpoint listu,
5. public-safe smernice za narativne izvedenice,
6. routing-metapodatke za izraze definisane u matrici iz sekcije 2.2.

## 9) Shared-lane checkpoint lista

Kanonska shared-lane checkpoint evidencija za cross-lane promene ostaje u `vrh-programskog-ekvivalenta-operativni-okvir-plan.md` sekciji 5.1. Ova lista je narativna dopuna koju treba proveriti zajedno sa tim operativnim checkpoint-om.

Pre dalje upotrebe ili proširenja proveriti:

- [ ] da li je controlling source eksplicitno naveden,
- [ ] da li svi izrazi iz matrice u sekciji 2.2 imaju kompletne routing-metapodatke,
- [ ] da li svaki izraz ima status po jednom od tri nivoa,
- [ ] da li creator/public-safe metafora ne menja canonical značenje,
- [ ] da li su Zeus/Posejdon, Kiklop/Herakle i Herkules mapirani samo kao narativni ekvivalenti,
- [ ] da li su citati razdvojeni na original, unutrašnje značenje, developer i creator/public-safe tumačenje,
- [ ] da li je za fikcionalne izraze eksplicitno potvrđena zabrana glorifikacije i zabrana predstavljanja kao činjenice,
- [ ] da li “po istinitom događaju” ostaje jasno odvojeno od repo-dokumentovane činjenice,
- [ ] da li je ownership handoff između developer i creator rada jasan,
- [ ] da li su visibility i audience layer pravilno ograničeni,
- [ ] da li su svi javni izlazi sanitizovani, sledljivi i repo-relative.

## 10) Završni princip kontinuiteta

Izraz **„Dokle god sam živ”** u ovom okviru obavezno znači dugoročnu posvećenost kvalitetu, odgovornosti i održivom unapređenju sistema, bez konfliktnog ili fizičkog tumačenja.
