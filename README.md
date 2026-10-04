# AI IQ World Bank

## Document Control

- **Category:** Documentation
- **Type:** repository guide
- **Status:** working
- **Visibility:** public-safe
- **Purpose:** Describes the public website structure, local use, and repository references.
- **Depends on:** `governance/document-lifecycle.md`, `docs/document-portfolio.md`

**Digitalna platforma u razvoju** — javni prikaz alata, sadržaja i razvojnih inicijativa.

[![Live Demo](https://img.shields.io/badge/Live-Demo-gold?style=for-the-badge)](https://github.com/spaja86/Ai-Iq-World-Bank)
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
├── index.html          ← Naslovna strana (hero, stats, usluge, platforme)
├── about.html          ← O banci (misija, vrednosti, osnivač)
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

Sve platforme sarađuju međusobno:

| Platforma | Opis | Link |
|-----------|------|------|
| 🏦 **AI IQ World Bank** | Profesionalna svetska banka | *Ova platforma* |
| 🌐 **IO-OPENUI-AO** | Saradnja, igrice, WebRTC | [io-openui-ao.vercel.app](https://io-openui-ao.vercel.app) |
| 💱 **Ai-Iq-Menjačnica** | Kripto menjačnica | [GitHub](https://github.com/spaja86/Ai-Iq-Menja-nica) |
| 🏢 **Kompanija SPAJA** | Matična IT kompanija | [GitHub](https://github.com/spaja86/Kompanija-SPAJA) |

---

## 👤 Vlasnik i Kontakt

**Nikola Spajić**
Osnivač & CEO — Smederevo, Srbija

| Kontakt | Link |
|---------|------|
| 📧 Email | [spajicn@yahoo.com](mailto:spajicn@yahoo.com) |
| 📧 Email | [spajicn@gmail.com](mailto:spajicn@gmail.com) |
| 📘 Facebook | [facebook.com/Spaja86](https://www.facebook.com/Spaja86) |
| 📘 Facebook (Banka) | [facebook.com/profile](https://www.facebook.com/profile.php?id=61583240952997) |
| 📷 Instagram | [instagram.com/spaja.1986](https://www.instagram.com/spaja.1986) |
| 🎵 TikTok | [tiktok.com/@spaja.1986](https://www.tiktok.com/@spaja.1986) |
| ▶️ YouTube | [youtube.com/@spajanikopenevolution](https://www.youtube.com/@spajanikopenevolution) |

---

## 📄 Licenca

© 2026 AI IQ World Bank. Sva prava zadržana.  
Vlasnik: **Nikola Spajić** | Smederevo, Srbija

## Bezbedni bankarski prototip — implementacija

Naslovna sada sadrži vidljivu INDEKURILANC formu i javne governance prikaze povezane sa postojećim `script.js`. Edukativni rezultat nije kreditni rejting, saldo ili novac.

Autentifikovani read-only prototip je na https://ai-iq-super-platforma.com/bank-prototype — backend mora prvo dobiti odgovarajuću izmenu iz spaja86/AI-IQ-SUPER-PLATFORMA. Statički frontend ne prikuplja tokene, bankovne brojeve ili podatke kartica; prijava i API provera ostaju na istom domenu platforme.

Provere: `python -m unittest discover -s config -p 'test_*.py'` i `python config/validate_repository.py`. Backend CLI: `npm run digitalni-kompjuter -- bank-status` (read-only, bez uplate).

Razlog promene: odobren nastavak pregleda bankarskog prototipa. Potrebna je ljudska provera pre spajanja. Stvarni računi, kartice, IPS, pravni/compliance model, pouzdano knjiženje i usaglašavanje zahtevaju naredne faze i ovlašćenog partnera. Vercel dug se potvrđuje stvarnim fakturama, ne podacima prototipa.
