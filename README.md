# AI IQ World Bank

## Document Control

- **Category:** Documentation
- **Type:** repository guide
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Describes the public website structure, local use, and repository references.
- **Depends on:** `governance/document-lifecycle.md`, `docs/document-portfolio.md`

**Demonstracioni softver u razvoju** — AI IQ World Bank je radni naziv softverskog projekta, bez dozvole NBS za rad banke.

Ovaj sajt ne pruža bankarske usluge: ne otvara račune, ne prima depozite, ne izdaje kartice i ne izvršava uplate. Dostupni su edukativni kalkulatori, informativni sadržaji i probni prikazi. Poslovna vizija razvoja AI i finansijskih tehnologija predstavlja budući pravac, a ne postojeću regulisanu uslugu.

NBS razdvaja preliminarno odobrenje, dozvolu za rad, saglasnost na akta osnivačke skupštine i registraciju. Član 6 Zakona o bankama ograničava upotrebu reči „banka” i izvedenica. Zadržavanje radnog naziva ne potvrđuje pravnu dozvoljenost njegove poslovne upotrebe; potrebna je posebna pravna provera.

Izvori: [NBS — osnivanje i saglasnosti](https://www.nbs.rs/sr/finansijske-institucije/banke/osnivanje-i-saglasnosti/) i [Zakon o bankama sa izmenama iz 2025](https://www.nbs.rs/export/sites/NBS_site/documents/propisi/zakoni/kpb_banke_2025.pdf), provereni 26. oktobra 2026. Nalazi, izmene i otvorene stavke: `docs/public-presentation-review-2026-10-26.md`.

[![Softverski prototip](https://img.shields.io/badge/Softverski-prototip-gold?style=for-the-badge)](https://github.com/spaja86/Ai-Iq-World-Bank)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 O Projektu

AI IQ World Bank je višestranični javni sajt sa interaktivnim JavaScript funkcijama, edukativnim kalkulatorom, informativnim sadržajem i povezanim digitalnim platformama.

**Karakteristike:**
- edukativni anuitetski kalkulator
- informativni sadržaj o riziku i diversifikaciji
- javni kontakt kanal bez slanja osetljivih podataka
- linkovi ka povezanim digitalnim platformama
- responsivni HTML/CSS/JavaScript interfejs

---

## 📁 Struktura Projekta

```
Ai-Iq-World-Bank/
├── index.html          ← Naslovna strana (status, alati, probni prikazi, platforme)
├── about.html          ← O projektu (misija, regulatorni status, autor)
├── services.html       ← Digitalne platforme i alati
├── loans.html          ← Edukativni anuitetski kalkulator
├── investments.html    ← Informativni sadržaj o riziku
├── contact.html        ← Kontakt forma sa validacijom
├── styles.css          ← Kompletan profesionalni CSS (dark blue + gold tema)
├── js/
│   ├── main.js         ← Navigacija, sticky header, IntersectionObserver
│   ├── calculator.js   ← Kreditni kalkulator (M = P[r(1+r)^n]/[(1+r)^n-1])
│   ├── charts.js       ← Pomoćne Canvas funkcije
│   └── ticker.js       ← Status platforme animacija
├── README.md
└── SECURITY.md
```

---

## ✨ Funkcionalnosti

### Dizajn
- tamno plava, zlatna i bela tema
- sticky glassmorphism header
- status platforme umesto tržišnih podataka
- responsive mobile-first dizajn

### Edukativni kalkulator (`loans.html`)
Kalkulator koristi anuitetsku formulu isključivo za ilustrativne scenarije i ne predstavlja finansijsku ponudu ili savet.

### Informativni sadržaj (`investments.html`)
Sadržaj objašnjava rizik, diversifikaciju i proveru izvora bez grafikona stvarne aktive, fondova ili prinosa.

### Kontakt
Kontakt forma proverava unos, zatim otvara korisnikov email klijent. Ne prikuplja kartične podatke, pristupne kodove ni druge osetljive podatke.

---

## 🚀 Kako Pokrenuti Lokalno

Nema build koraka — čist HTML/CSS/JS:

```bash
# Klonirajte repozitorijum
git clone https://github.com/spaja86/Ai-Iq-World-Bank.git
cd Ai-Iq-World-Bank

# Pokrenite sa VS Code Live Server ili bilo kojim HTTP serverom
python3 -m http.server 8000
# → Otvorite http://localhost:8000
```

---

## 🔗 Ekosistem Kompanija SPAJA

Linkovi ka povezanim SPAJA softverskim projektima. Link nije dokaz bankarskog partnerstva, zajedničkog finansijskog sistema ili regulatornog odobrenja:

| Platforma | Opis | Link |
|-----------|------|------|
| 🏦 **AI IQ World Bank** | Demonstracioni softver u razvoju; bez dozvole NBS za rad banke | *Ova platforma* |
| 🌐 **IO-OPENUI-AO** | Saradnja, igrice, WebRTC | [io-openui-ao.vercel.app](https://io-openui-ao.vercel.app) |
| 💱 **Ai-Iq-Menjačnica** | Povezani softverski projekat | [GitHub](https://github.com/spaja86/Ai-Iq-Menja-nica) |
| 🏢 **Kompanija SPAJA** | Matična IT kompanija | [GitHub](https://github.com/spaja86/Kompanija-SPAJA) |

---

## 👤 Vlasnik i Kontakt

**Nikola Spajić**
Autor i developer softverskog projekta — Smederevo, Srbija

| Kontakt | Link |
|---------|------|
| 📧 Email | [spajicn@yahoo.com](mailto:spajicn@yahoo.com) |
| 📧 Email | [spajicn@gmail.com](mailto:spajicn@gmail.com) |
| 📘 Facebook | [facebook.com/Spaja86](https://www.facebook.com/Spaja86) |
| 📘 Facebook (projekat) | [facebook.com/profile](https://www.facebook.com/profile.php?id=61583240952997) |
| 📷 Instagram | [instagram.com/spaja.1986](https://www.instagram.com/spaja.1986) |
| 🎵 TikTok | [tiktok.com/@spaja.1986](https://www.tiktok.com/@spaja.1986) |
| ▶️ YouTube | [youtube.com/@spajanikopenevolution](https://www.youtube.com/@spajanikopenevolution) |

---

## 📄 Autorska prava

© 2026 AI IQ World Bank. Sva prava zadržana.  
Vlasnik: **Nikola Spajić** | Smederevo, Srbija

## Demonstracioni finansijski interfejs — implementacija

Naslovna sada sadrži vidljivu INDEKURILANC formu i javne governance prikaze povezane sa postojećim `script.js`. Edukativni rezultat nije kreditni rejting, saldo ili novac.

Veza ka povezanom probnom interfejsu je https://ai-iq-super-platforma.com/bank-prototype. Njegova dostupnost i autentifikacija nisu potvrđene ovom proverom; potrebne backend izmene prate se u spaja86/AI-IQ-SUPER-PLATFORMA. Statički frontend ne prikuplja tokene, bankovne brojeve ili podatke kartica; prijava i API provera ostaju na istom domenu platforme.

Provere: `python -m unittest discover -s config -p 'test_*.py'` i `python config/validate_repository.py`. Backend CLI: `npm run digitalni-kompjuter -- bank-status` (read-only, bez uplate).

Promene javnog predstavljanja pripremljene su za pregled u zasebnoj grani. Stvarni računi, kartice i platne operacije nisu funkcije ovog sajta. Njihovo eventualno uvođenje zahteva zaseban pravni model, odgovarajuća odobrenja, proveru ovlašćenih pružalaca i posebnu tehničku validaciju. Prolazak testova ne potvrđuje regulatornu usklađenost.
