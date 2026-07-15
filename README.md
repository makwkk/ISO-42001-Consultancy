# Edtrix Solutions — ISO 42001:2023 Consultancy Site

Single-page marketing + lead-capture site for **Edtrix Solutions**, an ISO 42001:2023 AI Management System consultancy.

**Live site:** https://makwkk.github.io/ISO-42001-Consultancy/

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | Single-page site: hero, services, process, testimonials, lead magnet, enquiry form, footer, WhatsApp widget |
| `styles.css` | Mobile-first responsive styles |
| `script.js` | Mobile menu, form validation, toast notifications |
| `404.html` | Custom 404 page |
| `robots.txt` | SEO crawler instructions |
| `sitemap.xml` | XML sitemap |
| `assets/` | Logo, favicon, OG image, hero background (all SVG, zero raster bloat) |
| `.github/workflows/deploy.yml` | GitHub Actions → GitHub Pages deployment |

## SEO features

- ✅ Title, meta description, keywords, canonical URL
- ✅ Open Graph + Twitter Card
- ✅ JSON-LD structured data: **Organization**, **ProfessionalService**, **FAQPage**, **BreadcrumbList**
- ✅ `robots.txt` + `sitemap.xml`
- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- ✅ ARIA labels, skip-to-content link, focus management
- ✅ Single H1, proper heading hierarchy
- ✅ Fast: no JS framework, ~25KB total CSS, zero raster images

## Lead magnet

The site captures emails for a free **47-Point ISO 42001 Readiness Checklist** (PDF). Two capture points:
1. Hero card (right rail on desktop)
2. Dedicated CTA section lower on the page

Forms are wired with client-side validation. To capture leads to your own backend, edit `script.js` and replace the `console.log(...)` line with a `fetch()` to your CRM / email service.

## WhatsApp widget

Floating button bottom-right → `https://wa.me/6594387287?text=...` (pre-filled message). Replace `6594387287` in `index.html` and `script.js` if your number changes.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages.

To enable GitHub Pages on first push:
1. Go to repo **Settings → Pages**
2. Source: **GitHub Actions**

## Local preview

No build step. Just open `index.html` in a browser, or:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Editing

All brand content lives in `index.html` (text) and `styles.css` (theme). The two CSS custom properties at the top of `styles.css` define the entire color scheme:

```css
--brand: #0b3d91;     /* primary blue */
--brand-2: #1d4ed8;   /* hover blue */
--accent: #00c896;    /* green accent */
```

## License

© Edtrix Solutions. All rights reserved.
