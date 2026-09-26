# CLAUDE.md — Bolt Logistics Corporate Website

> This file defines all requirements for the website. Read it fully before writing any code and follow it in every decision.
> Fields marked `[TBD]` are not yet known. Never invent content for them; leave a placeholder or hide the section.

---

## 1. Project Overview

- **Company:** Bolt Logistics (founded in 2021, Istanbul, Türkiye)
- **Current site:** https://bolt-log.com (GoDaddy site builder, single page — to be fully replaced)
- **Site type:** Corporate showcase website (no e-commerce, no user accounts, no admin panel)
- **Primary goal:** Get visitors to **request a quote** or **get in touch** (form, phone, WhatsApp, email)
- **Target audience:** Importers/exporters, procurement and logistics managers, overseas agents and partners
- **Languages:** Turkish (default) and English

---

## 2. Brand & Design

### 2.1 Logo
- Original logo file: `/assets/logo-original.webp` — **not available**; the new SVG logo is designed from the description below instead (decided 2026-09-26).
- **Description of the current logo:**
  - A large, bold capital **"B"** in the center
  - A **lightning bolt** cuts diagonally through the top-right of the "B", breaking out of the frame
  - An **open circular ring** (two arcs, left and right) surrounds the "B"
  - Wordmark below: **"BOLT"** in bold, widely letter-spaced capitals, with **"LOGISTICS"** in smaller, widely spaced capitals underneath
  - Everything is in a **metallic gold/yellow gradient** on a white background
- **What to keep:** The overall concept — the "B" + lightning bolt + circular ring, and the stacked "BOLT / LOGISTICS" wordmark.
- **What to improve (why it looks amateur):**
  - Metallic gradients and bevel effects look dated and reproduce poorly (print, embroidery, small sizes)
  - It appears to be a raster image, not a vector
  - Thin details get lost at small sizes (favicon, mobile header)
  - Only works on a white background
- **Redesign direction:**
  - Flat, clean, geometric **SVG** vector with solid colors (no gradients or bevels)
  - Stronger, more confident proportions; bolt integrated cleanly with the "B"
  - Deliver these variants:
    1. Primary logo (icon + wordmark, stacked) — for light backgrounds
    2. Primary logo — for dark backgrounds
    3. Horizontal logo (icon left, wordmark right) — for the website header
    4. Icon only ("B" + bolt, optionally with ring) — for favicon and social media avatars
    5. Single-color (black and white) versions
- **Final logo (approved 2026-09-26):** files in `/assets/logo/`, generated from one source so all variants match.
  - Mark = the `favicon.svg` design: a thick rounded-square outline (transparent inside) containing the "B" + yellow bolt. **No ring.** It is used as the image part of every variant.
  - Light backgrounds: black outline/B/wordmark + yellow bolt (`favicon.svg`, `logo-stacked-light.svg`, `logo-horizontal-light.svg`)
  - Dark backgrounds: white outline/B/wordmark + yellow bolt (`logo-icon-dark.svg`, `logo-stacked-dark.svg`, `logo-horizontal-dark.svg`)
  - Single color: `*-black.svg`, `*-white.svg`
  - The logo does not need further approval; do not redesign it.

### 2.2 Color Palette
Keep the yellow–black identity. Yellow is an accent color; it must not dominate the entire page.

| Role | Color | Usage |
|---|---|---|
| Primary accent (yellow) | `#FEC303` | Buttons, highlights, icons, active menu items |
| Dark yellow | `#D9A300` | Button hover, fine details on yellow |
| Black (primary dark) | `#0F0F10` | Header, footer, dark sections, headings |
| Graphite | `#1E1F22` | Dark cards, secondary dark backgrounds |
| Gray text | `#5E6166` | Body and description text |
| Light background | `#F6F5F1` | Light section backgrounds |
| White | `#FFFFFF` | Main background, text on dark backgrounds |

- Text on yellow backgrounds must always be **black** (white is unreadable).
- All contrast ratios must meet **WCAG AA**.
- Define all colors as CSS variables in one place.

### 2.3 Typography
- **Headings:** Archivo (bold, industrial, strong)
- **Body:** Inter
- Verify both fonts render Turkish characters correctly: ğ, Ğ, ş, Ş, ı, İ, ç, Ç, ö, Ö, ü, Ü.

### 2.4 Look & Feel
- Strong, trustworthy, fast, modern. The name "Bolt" should convey **speed and energy**.
- Clean layout with generous whitespace; avoid a cluttered, old-fashioned corporate look.
- Realistic logistics imagery (trucks, containers, aircraft, ports, warehouses). Only use royalty-free stock images.
- Subtle, purposeful animations (counters counting up, cards fading in). No excessive effects. Respect `prefers-reduced-motion`.

---

## 3. Reference Sites (Inspiration Only — Do NOT Copy)

Do **not** reuse any text, images, or logos from these sites. Take only structural and feature ideas.

| Site | Features we like |
|---|---|
| https://veralog.com | Each service on its own page; a "Logipedia" knowledge section (Incoterms, container types, truck dimensions, logistics glossary); membership logos (WCA, IATA, etc.); TR/EN language switch |
| https://www.kitalogistics.com | "Get a Quote" button always visible in the header; mega menu; "Industries" section; downloadable company presentation (PDF); certificates and legal links in the footer |
| https://alslogistics.com.tr | Video hero section; stat counters (countries, customers, etc.); customer testimonials; floating WhatsApp button; dedicated quote request page; forms with a KVKK consent checkbox |

---

## 4. Sitemap

```
/ (Home)
├── About
│   ├── About Us
│   ├── Vision & Mission
│   └── Memberships & Certificates    [TBD — if any]
├── Services
│   ├── Air Freight
│   ├── Road Freight
│   ├── Sea Freight
│   ├── Rail Freight
│   ├── Intermodal Transport
│   ├── Warehousing
│   └── Customs Clearance             [TBD — offered as a service?]
├── Logipedia
│   ├── Incoterms
│   ├── Container Types & Dimensions
│   ├── Truck / Trailer Dimensions
│   └── Logistics Glossary
├── Blog / News                       (optional — may launch empty)
├── Get a Quote
├── Contact
└── Legal: KVKK Privacy Notice, Cookie Policy
```

### URL structure
- Turkish (default): `/`, `/hizmetler/havayolu-tasimaciligi`, `/teklif-al`, `/iletisim`
- English: `/en/`, `/en/services/air-freight`, `/en/get-a-quote`, `/en/contact`

---

## 5. Page Content

### 5.1 Home Page (top to bottom)
1. **Header:** Logo, navigation with dropdowns, TR/EN switcher, yellow "Get a Quote" button. Sticky on scroll.
2. **Hero:** Full-width image or short muted looping video, strong headline, subheading, two buttons: "Get a Quote" and "Our Services".
3. **Services overview:** Icon cards for each service with a short description and link to its page.
4. **Why Bolt Logistics?** 4–6 points: global agent network, experienced team, customer focus, transparency, flexible solutions, technology.
5. **Bolt in Numbers:** Animated counters `[TBD — real figures: countries served, shipments, customers, partners]`. Hide this section if no real data is available.
6. **How We Work:** 4-step flow (Request → Planning → Transport → Delivery).
7. **Testimonials:** `[TBD — real testimonials]`. Never use fabricated testimonials; hide the section if none exist.
8. **Memberships / certificates logos:** `[TBD]`
9. **Call-to-action band:** Yellow background, short message, button.
10. **Footer:** Logo, short intro, quick links, services, contact details, social media icons, KVKK/cookie links, copyright line.

### 5.2 Service Pages (shared template)
- Header image and page title
- Service description (2–3 paragraphs)
- Key benefits list
- Cargo types / scope `[TBD — e.g. FCL, LCL, partial, full truckload, cold chain, dangerous goods?]`
- FAQ (accordion)
- "Get a quote for this service" button at the bottom, plus links to other services

### 5.3 About Us
- Company story since 2021
- Values and approach
- Team or office photo `[TBD — optional]`
- The "Why Bolt Logistics" text from the current site can be used as a base, rewritten to be shorter and punchier.

### 5.4 Get a Quote Page
Form fields:
- Full name*, Company, Email*, Phone*
- Transport mode* (Air / Road / Sea / Rail / Intermodal / Warehousing)
- Origin*, Destination*
- Cargo type, weight, volume / number of packages
- Estimated loading date
- Message / additional details
- File upload (optional)
- KVKK consent checkbox* (linked to the privacy notice)
- Spam protection (reCAPTCHA / Cloudflare Turnstile or honeypot)

On submit: send an email to `cargo@bolt-log.com` and show a success message to the user. Validate all required fields with clear error messages in the active language.

### 5.5 Contact Page
- Address, phone numbers, email, business hours
- Embedded Google Map
- Short contact form (Name, Email, Phone, Message, KVKK consent)
- "Message us on WhatsApp" button

---

## 6. Contact Details & Social Media

- **Address:** Çobançeşme, Nish İstanbul, Sanayi Caddesi, Bahçelievler / İstanbul, Türkiye
- **Phone 1:** +90 533 081 84 00
- **Phone 2 / WhatsApp:** +90 533 081 85 00 (`https://wa.me/905330818500`)
- **Email:** cargo@bolt-log.com
- **Business hours:** Weekdays 09:00 – 17:00 `[TBD — Saturdays?]`

**Social media:**
- LinkedIn: `[TBD]`
- Instagram: `[TBD]`
- Facebook: `[TBD]`
- X (Twitter): `[TBD]`
- YouTube: `[TBD — if any]`

Do not display an icon for any social account without a link.

---

## 7. Features

- [x] Turkish / English language support (all content in both languages)
- [x] Sticky header with an always-accessible "Get a Quote" button
- [x] Floating WhatsApp button (bottom right)
- [x] Quote and contact forms
- [x] Google Maps embed
- [x] Cookie consent banner (KVKK-compliant, with accept/reject)
- [x] Logipedia knowledge pages
- [ ] Blog (build the structure; content added later)
- [ ] Downloadable company presentation PDF `[TBD — if available]`
- [ ] Shipment tracking — **not in the first release**

---

## 8. Technical Requirements

- **Stack:** Static site built with **Astro** (decided 2026-09-26).
- **Hosting:** `[TBD — e.g. Netlify, Vercel, Cloudflare Pages, or existing hosting]`
- **Domain:** bolt-log.com (existing, keep it)
- **Forms:** **Web3Forms** (decided 2026-09-26). Access key `[TBD]`. Free plan has no file attachments — the quote form's file upload is hidden/disabled until a paid plan or alternative is chosen.
- **Responsive:** Mobile-first; every page must look flawless on phone, tablet and desktop.
- **Performance:** Images in WebP/AVIF, compressed, lazy-loaded. Target Lighthouse scores of 90+ in all categories.
- **Accessibility:** Alt text on all images, keyboard navigation, visible focus states, sufficient color contrast.
- **i18n:** Keep all UI strings in translation files (e.g. `tr.json`, `en.json`), never hard-coded in templates.

---

## 9. SEO

- Unique `title` and `meta description` for every page (separate for TR and EN)
- `hreflang` tags (tr / en) and a canonical URL on every page
- Clean, meaningful URLs (see section 4)
- Open Graph and Twitter card images
- `sitemap.xml` and `robots.txt`
- Schema.org `Organization` / `LocalBusiness` structured data
- Google Search Console and Google Analytics integration `[TBD — accounts]` (Analytics must load only after cookie consent)
- 301 redirects from any old URLs to the new ones

---

## 10. Legal

- KVKK Privacy Notice `[TBD — company's own or lawyer-approved text]`
- Cookie Policy
- Explicit consent checkbox on all forms
- Footer copyright: "© [year] Bolt Logistics. Tüm hakları saklıdır." / "© [year] Bolt Logistics. All rights reserved." (no dashes in visible copy, see the `bolt-design` skill)

---

## 11. Materials Checklist

- [x] Original logo file
- [x] New vector logo (`/assets/logo/`)
- [ ] Company and office photos (if any)
- [ ] Real figures for counters
- [ ] Customer testimonials and permission to publish
- [ ] Membership / certificate documents and logos
- [ ] Social media links
- [ ] KVKK text
- [ ] Final list of services (is customs clearance included?)
- [x] Sector list on the home page Industries section confirmed 2026-09-26 (`src/components/home/Industries.astro`: automotive, textiles, machinery, retail/e-commerce, furniture/building materials, electronics)
- [x] "Why Bolt" point wording confirmed 2026-09-26 (`src/i18n/*.json`, `home.why`)
- [x] Temporary royalty-free photos (Pexels, see `src/assets/images/CREDITS.md`); replace with company photos when available

---

## 12. Rules for Claude

1. Do **not** copy text, images or logos from the reference sites.
2. Never invent information for `[TBD]` fields — leave a clear placeholder or hide the section.
3. Turkish copy must read naturally and fluently. English copy must be natural English, not a literal translation of the Turkish.
4. Define all colors, fonts and spacing as CSS variables / design tokens in one place.
5. Keep components reusable (header, footer, service card, CTA band, form fields).
6. Work in small, reviewable steps and summarize what changed after each step.
7. If a decision is unclear, ask before implementing.
8. **Load the `bolt-design` skill (`.claude/skills/bolt-design/SKILL.md`) before building, changing or reviewing any UI, styles, animation, copy or form.** It holds the design, motion, copy and verification rules (adapted from taste-skill, Emil Kowalski's skills and Impeccable), and the site must pass its pre-flight checklist before a step counts as done.
