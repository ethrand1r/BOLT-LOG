---
name: bolt-design
description: Design and front-end quality rules for the Bolt Logistics website (Astro, TR/EN). Load before building or changing ANY page, component, style, animation, copy or form in this project, and before reviewing/polishing UI. Distills taste-skill, Emil Kowalski's design-engineering skills and Impeccable into one project-specific rulebook with conflicts already resolved against CLAUDE.md.
---

# Bolt Logistics design rules

This skill adapts three upstream skill sets to this codebase:

- **taste-skill** (Leonxlnx): anti-template layout and copy discipline, pre-flight check
- **Emil Kowalski skills**: animation decisions, easing, interaction feel
- **Impeccable** (Paul Bakaus): craft floor, polish/audit/harden passes

The originals live in [reference/](reference/) for depth. **Precedence when rules conflict:**
`CLAUDE.md` (the brief) > this file > the upstream references. The upstream files assume React/Next/Tailwind and ship CLI tooling; ignore those parts. The Impeccable launcher (`scripts/impeccable`) is not installed. Where a reference says to run it, use the manual path described here.

---

## 1. Design read (fixed for this project)

> Corporate showcase site for B2B logistics buyers (importers/exporters, procurement managers, overseas agents), with a confident, fast, industrial language. Native CSS + Astro components, restrained purposeful motion.

- **Modes (Impeccable):** Home, service pages, About, Quote and Contact are **Persuade**: the visitor should decide and act (quote or contact). Logipedia and Blog are **Read**: structure for comprehension first.
- **Dials (taste-skill):** `DESIGN_VARIANCE 6` · `MOTION_INTENSITY 4` · `VISUAL_DENSITY 4`. B2B trust matters more than experimentation, but the name "Bolt" asks for energy. So use offset/asymmetric layouts, not artsy chaos.
- **Audience scene:** desk users on desktop during business hours, plus mobile users coming from WhatsApp/LinkedIn. Both must work flawlessly.

## 2. Stack decisions (overriding upstream defaults)

| Upstream default | This project |
|---|---|
| React / Next.js, RSC | **Astro** static pages; `.astro` components; zero client JS by default |
| Tailwind v4 | **Plain CSS**: tokens in `src/styles/tokens.css`, component styles scoped in `.astro` files |
| Motion / GSAP | **CSS transitions + `@starting-style` + IntersectionObserver** (tiny vanilla islands). No animation libraries |
| Fonts via `next/font` | **Self-hosted via `@fontsource`** (Archivo + Inter, `latin-ext` subset for Turkish), `font-display: swap`, preload the heading weight |
| "Avoid Inter" | **Inter is pinned by the brief** (body). Archivo for headings. The brief wins |
| Phosphor React icons | **Phosphor via `astro-icon` + `@iconify-json/ph`**, **regular weight** across the site (decided 2026-09-26; sizes via `--icon-*` tokens). Never hand-draw icons. The logo is the only authored SVG |
| Dark mode mandatory | **Light theme only in v1** (B2B, brand-led). The dark header/footer are a brand frame, not a theme |

Check `package.json` before importing anything. If a dependency is missing, install it first.

## 3. Tokens and locks

Everything visual comes from `src/styles/tokens.css`. No raw hex, px font sizes or ad-hoc durations inside components.

- **Color lock:** palette from CLAUDE.md §2.2 only. One accent: yellow `#FEC303`. Text on yellow is always black. Never use yellow text on white (contrast about 1.6:1). On white, yellow is only for fills, marks and focus.
- **Theme lock:** white/`#F6F5F1` page. Dark (`#0F0F10` / `#1E1F22`) is used for the header, the footer and **at most one** deliberate dark band on a page. The yellow CTA band from the brief is the one color-block moment. No random alternation.
- **Shape lock (documented rule):** buttons and inputs `--radius-sm: 8px`; cards, images and panels `--radius-md: 14px`; pills and badges fully round. The logo's rounded square echoes this. Nothing else.
- **Type scale:** fluid `clamp()` steps. Display max 4.5rem. Body 1rem to 1.125rem at line-height 1.6, measure 65–75ch. Headings `text-wrap: balance`, body `text-wrap: pretty`. Tracking never below -0.04em. Test all Turkish glyphs (ğ Ğ ş Ş ı İ ç Ç ö Ö ü Ü). Uppercase needs `lang` set correctly (`i` → `İ` in Turkish).
- **Spacing:** 4px-based scale tokens. Tight inside groups, generous between sections, more space above a heading than below it.
- **Z-index scale** in tokens: base, sticky header, floating WhatsApp, cookie banner, modal. No magic numbers.

## 4. Layout rules

- **Hero fits the viewport:** `min-height: 100dvh` cap (never `100vh`). Headline at most 2 lines on desktop. Subtext at most 20 words. Two CTAs ("Get a Quote" primary, "Our Services" secondary). Nothing else in the hero: no trust strip, no tagline under the CTAs, no scroll cue. Top padding at most about 6rem. Left-aligned split with real imagery, not centered text over a gradient.
- **No template scaffolds:** no row of three identical icon+heading+text cards as page structure, no nested cards. Services (6–7 items) should use a varied composition, for example one large featured service with an image plus a compact grid or list of the rest, or image-led rows. "Why Bolt" should use a different layout family from Services.
- **Section-layout repetition:** each layout family appears at most once per page. The Home page has 8+ sections, so use at least 4 families. No more than 2 consecutive image/text zigzags.
- **Eyebrows are banned** (Impeccable). No small uppercase labels above headings. No section numbers (01/02/03) except in "How We Work", where the order is real information. Even there, label the steps with the verb/noun (Request, Planning, Transport, Delivery), not "Step 1".
- **Navigation:** one line on desktop, height 64–72px, sticky. "Get a Quote" is always visible. On mobile, use a full-height menu with 48px targets.
- **Mobile collapse is explicit** for every multi-column block (single column under 768px, 16px side gutters, no horizontal scroll).
- **Long lists** (Logipedia glossary, container types) use grouping, tabs/accordion or card-per-item. Never a 20-row table with a hairline under every row. Data tables are fine inside Logipedia (Read mode) when they have a sticky header and tabular numerals.

## 5. Motion (Emil + Impeccable, gated by `MOTION_INTENSITY 4`)

Ask first: how often is this seen, and what does the animation communicate? If it is seen often and has no purpose, don't animate.

- **Easing tokens:** `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`. Never use `ease-in` on UI elements.
- **Durations:** press 120–160ms, hover/color 150–200ms, dropdown/menu 180–250ms, section reveals at most 500ms. Exits are faster than entrances.
- **Buttons:** `:active { transform: scale(0.97) }`. Hover effects only under `@media (hover: hover) and (pointer: fine)`.
- Animate only `transform`, `opacity`, `clip-path` and `filter`. Never `transition: all`. Never enter from `scale(0)`; start at about 0.95 plus opacity.
- **One authored moment per page**, not the same fade-up on every section. On the Home page the moment is the hero entrance (a speed/"bolt" feel: a quick clip-path or translate reveal of the headline and image). Counters count up once, only when real figures exist. Other sections get at most a subtle, staggered reveal (30–60ms between items) using IntersectionObserver with `once`. Content is visible by default: never hide content without JS.
- **No `scroll` event listeners.** Use IntersectionObserver or CSS scroll-driven animations.
- **`prefers-reduced-motion: reduce`:** remove movement and keep only short opacity fades. Counters show their final value.

## 6. Components and states

- **Buttons:** one label per intent across the whole site. Quote intent: **"Teklif Al" / "Get a Quote"**. Contact intent: **"İletişime Geç" / "Contact Us"**. WhatsApp: **"WhatsApp'tan Yaz" / "Message on WhatsApp"**. Labels stay on one line. Primary buttons are yellow with black text. The secondary is outlined in the section's foreground color.
- **Forms:** label above the input, helper text optional, error text below and linked with `aria-describedby`. Never use a placeholder as the label. Required fields are marked visibly and with `aria-required`. States: default, hover, focus-visible, invalid, disabled, submitting (button busy state, no double submit), success and failure (with the phone/WhatsApp fallback). Error messages come from `tr.json`/`en.json`, name the problem and say how to fix it. The KVKK checkbox links to the notice.
- **Browser surfaces:** themed `::selection` (yellow background, black text), `caret-color`, `:focus-visible` ring (2px black plus yellow offset on light, yellow on dark), `accent-color` for checkboxes/radios, `text-underline-offset` on links, `font-variant-numeric: tabular-nums` for dimensions/figures.
- **Images:** `astro:assets` `<Image>`/`<Picture>` in AVIF/WebP, with explicit width/height (no CLS), lazy except the hero (eager + `fetchpriority="high"`), meaningful alt text in both languages. Royalty-free sources only. Record source and license in `src/assets/images/CREDITS.md`. Until real photos exist, use a clearly labeled placeholder slot. Never use div-drawn fake visuals and never leave the hero with only a gradient.
- **Shadows:** offset plus soft blur, tinted to the surface. No glows, no hard offset shadows. Prefer spacing and hairlines over boxes.

## 7. Copy (TR and EN)

- Turkish reads natively. English is written as English, not translated word for word.
- **No em dash (—) or en dash (–) in visible copy**, in either language. Use a period, comma, colon or parentheses. Ranges use a hyphen (09:00-17:00). Footer: "© 2026 Bolt Logistics. Tüm hakları saklıdır." / "© 2026 Bolt Logistics. All rights reserved."
- Use concrete verbs. Banned filler: seamless, elevate, unleash, next-gen, revolutionize, "kusursuz", "yeni nesil", "çığır açan", "sınırları zorlayan".
- Never invent figures, testimonials, memberships, certificates or social links (CLAUDE.md `[TBD]` rule). Hide the section instead.
- Section content shape: headline of at most about 8 words, supporting paragraph of at most about 25 words, then one visual or one action. Service pages (Read-ish depth) may run longer in the body.

## 8. Verification (bounded, Impeccable-style)

Build fully, then run **one batched inspection** and **at most one confirm round**. Don't loop.

1. `npm run build` passes with no warnings you introduced.
2. Screenshot with headless Edge at 390px and 1440px widths (see command below) for every page type changed. Check TR and EN.
3. Run the pre-flight checklist (§9). Fix everything in one batch, then re-screenshot once.
4. Before a release: Lighthouse (target 90+ in all categories) and a keyboard-only walkthrough.

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,2400 --screenshot="<scratchpad>\page-desktop.png" http://localhost:4321/
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --hide-scrollbars --window-size=390,2400 --screenshot="<scratchpad>\page-mobile.png" http://localhost:4321/
```

## 9. Pre-flight checklist (condensed)

- [ ] Tokens only: no raw colors, sizes, durations or z-indexes in components
- [ ] Contrast AA everywhere (body ≥4.5:1, large ≥3:1), including placeholders, errors, focus rings and buttons in every state
- [ ] No yellow text on white. Black text on yellow
- [ ] Hero: ≤2-line headline, ≤20-word subtext, 2 CTAs visible without scrolling, real image
- [ ] Zero eyebrows. No decorative section numbers, scroll cues, status dots or glows
- [ ] No three-identical-card rows. At least 4 layout families on Home. No repeated family
- [ ] One CTA label per intent, never wrapping on desktop
- [ ] Forms: labels above, inline localized errors, all states, KVKK consent, spam protection
- [ ] Motion: purposeful, ease-out tokens, ≤300ms UI, reduced-motion respected, no scroll listeners, content visible without JS
- [ ] Browser surfaces themed (selection, focus, caret, accent-color, underline offset)
- [ ] Images: sized, modern formats, lazy below the fold, alt text in TR and EN, credits logged
- [ ] Copy: no em/en dashes, no filler words, no invented facts. TR natural, EN natural
- [ ] Mobile 390px: single column, 16px gutters, no horizontal scroll, 44–48px tap targets
- [ ] SEO per page: unique title/description (TR and EN), hreflang, canonical, OG
- [ ] Keyboard: logical tab order, visible focus, menu/accordion operable, skip link present

## 10. Where to look for depth

| Need | Reference |
|---|---|
| Anti-template rules, full pre-flight list | [reference/taste-skill/taste-skill.md](reference/taste-skill/taste-skill.md) (§4, §9, §14) |
| Animation decisions, easing, component feel | [reference/emil-kowalski/emil-design-eng.md](reference/emil-kowalski/emil-design-eng.md) |
| Reviewing or improving animations | [reference/emil-kowalski/review-animations.md](reference/emil-kowalski/review-animations.md), [improve-animations.md](reference/emil-kowalski/improve-animations.md) |
| Quality floor and bans | [reference/impeccable/craft-floor.md](reference/impeccable/craft-floor.md) |
| Final pass before shipping | [reference/impeccable/polish.md](reference/impeccable/polish.md), [audit.md](reference/impeccable/audit.md), [harden.md](reference/impeccable/harden.md) |
| Type, layout, responsive, copy, performance | [reference/impeccable/](reference/impeccable/): typeset, layout, adapt, clarify, optimize |

Licenses: taste-skill (MIT), Emil Kowalski skills (MIT), Impeccable (Apache 2.0). Copies are in each reference folder.
