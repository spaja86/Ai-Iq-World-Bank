# Nedeljni operativni ciklus (template)

## Cilj

Definisati ponovljiv nedeljni ritam za unos, proveru, odobrenje i objavu javno-bezbednih izlaza.

## Vlasništvo

- Finansije: ažurira registre faktura i ugovora
- Pravno/usaglašenost: proverava status i reference
- Developer lane: održava validaciju i strukturnu usklađenost
- Creator lane: priprema javno-bezbedan izlaz
- Finalna kontrola: potvrđuje release-gate

## Nedeljni tok

1. Ponedeljak: unos i ažuriranje poslovnih evidencija
2. Utorak: provera nedostajućih faktura i nevalidnih referenci
3. Sreda: statusna revizija (na-proveri / na-odobrenju)
4. Četvrtak: release-gate provera (standard + dokument-control + bezbednost)
5. Petak: objava javno-bezbednih izlaza i revizijski zapis

## Obavezne kontrole

- Nedostajuće fakture (ID ili obavezna polja)
- Neažurni statusi duže od definisanog praga
- Nevalidne ili ne-repozitorijumske reference
- Prisustvo osetljivih podataka u javnim fajlovima
