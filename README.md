# 🏦 AI IQ World Bank

**Profesionalna Svetska Banka Budućnosti** — izgrađena na AI tehnologijama sa globalnom pokrivenošću u 190+ zemalja.

[![Live Demo](https://img.shields.io/badge/Live-Demo-gold?style=for-the-badge)](https://github.com/spaja86/Ai-Iq-World-Bank)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 O Projektu

AI IQ World Bank je profesionalni višestraničan bankarski sajt sa interaktivnim JavaScript funkcijama, Canvas grafovima, animiranim counter-ima, kreditnim kalkulatorom i live ticker bar-om.

**Karakteristike:**
- 🌍 Pokrivenost u **190+ zemalja** širom sveta
- 💰 **$50B+** ukupna aktiva
- 👥 **10M+** zadovoljnih klijenata
- ⏰ **24/7** korisnička podrška
- 🤖 AI-potpomognuto bankarstvo naredne generacije

---

## 📁 Struktura Projekta

```
Ai-Iq-World-Bank/
├── index.html          ← Naslovna strana (hero, stats, usluge, platforme)
├── about.html          ← O banci (misija, vrednosti, osnivač)
├── services.html       ← Bankarske usluge (kartice, krediti, FX...)
├── loans.html          ← Krediti sa interaktivnim kalkulatorom
├── investments.html    ← Investicije sa Canvas grafovima
├── contact.html        ← Kontakt forma sa validacijom
├── styles.css          ← Kompletan profesionalni CSS (dark blue + gold tema)
├── js/
│   ├── main.js         ← Navigacija, sticky header, counters, IntersectionObserver
│   ├── calculator.js   ← Kreditni kalkulator (M = P[r(1+r)^n]/[(1+r)^n-1])
│   ├── charts.js       ← Canvas grafovi (linijski + stupičasti)
│   └── ticker.js       ← Live ticker bar animacija
├── README.md
└── SECURITY.md
```

---

## ✨ Funkcionalnosti

### �� Dizajn
- **Profesionalna bankarska tema**: tamno plava (`#0a1628`), zlatna (`#c9a84c`), bela
- **Sticky glassmorphism header** sa efektom zamućenja
- **Animirani ticker bar**: BTC, ETH, EUR/USD, USD/RSD, GOLD i još...
- **Hover efekti** na karticama sa zlatnom gornjom linijom
- **Responsive mobile-first** dizajn
- CSS varijable za konzistentnu temu

### 🧮 Kreditni Kalkulator (`loans.html`)
Interaktivni kalkulator sa formulom:
```
M = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]
```
- **P** = iznos kredita | **r** = mesečna kamatna stopa | **n** = broj rata
- Range slideri + number inputi sinhronizovani
- Canvas pita grafikon: Glavnica vs. Kamata

### 📊 Canvas Grafovi (`investments.html`)
- **Linijski grafikon** rasta aktive 2020–2026 ($30B → $50B) sa gradijentom
- **Stupičasti grafikon** godišnjih prinosa po fondovima
- Animirani, responzivni, redraw pri resize

### 📡 Ticker Bar
- `BTC: $67,420 ▲2.3% | ETH: $3,840 ▲1.7% | EUR/USD: 1.0842 | USD/RSD: 109.50 | GOLD: $2,340/oz`
- CSS animacija beskonačnog scrolling-a

### �� Counter Animacije
- Animate on scroll koristeći `IntersectionObserver`
- 190+ Zemalja | $50B+ Aktiva | 10M+ Klijenata | 24/7 Podrška

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
