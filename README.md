# ALGECO ltd. — Website

A complete from-scratch rebuild of [algecoltd.com](https://www.algecoltd.com) for
**ALGECO ltd.** — *Aluminium · Glass · Steel · Engineering & Contracting* — a leader
in façade contracting based in Roumieh, Lebanon.

The original Mobirise-built site's content and strategy were preserved, while the
design, structure and front-end were rebuilt from the ground up with a modern,
editorial aesthetic inspired by leading façade engineers (Permasteelisa, Josef Gartner).

## Stack

Hand-built static site — **no build step, no dependencies**. Plain HTML5, modern CSS
(custom properties, grid, scroll-driven reveals) and vanilla JavaScript. Hosts on any
static host (GitHub Pages, Netlify, Vercel, S3, classic shared hosting).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, stats, capabilities, products, featured projects, partners, CTA |
| `about.html` | Company story, stats, director's message, vision |
| `products.html` | Full product catalogue + system & material providers |
| `services.html` | Engineering → Fabrication → Installation → Testing & Commissioning |
| `projects.html` | Featured project grid + full project index |
| `contact.html` | Contact details, enquiry form, map |

## Structure

```
.
├── index.html  about.html  products.html  services.html  projects.html  contact.html
└── assets/
    ├── css/styles.css   # design system + all styles
    ├── js/main.js       # nav, scroll reveal, counters, hero slideshow, form
    └── img/             # real project & facility imagery preserved from the original site
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Notes

- The contact form is front-end only (shows a success state). Wire it to an email
  service or backend endpoint before going live.
- Imagery was carried over from the original site; swap in higher-resolution,
  optimised assets (WebP/AVIF) when available for best performance.
