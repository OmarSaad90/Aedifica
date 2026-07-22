---
name: Aedifica
description: Editorial, architecturally restrained brand site for a New Jersey construction-workforce platform
colors:
  datum: "#6667AB"
  quarry: "#8A9A93"
  patina: "#836479"
  sediment: "#C7B377"
  rebuild: "#A0838F"
  rebuild-deep: "#7E6973"
  datum-light: "#9C9CC8"
  snow: "#FAF7F1"
  bone: "#F4EEE4"
  anthracite: "#2D2D31"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "2.75rem/3.5rem/4.75rem (sm/lg/xl steps)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2rem-2.75rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk Variable, Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "10.5px-12.5px"
    fontWeight: 500
    letterSpacing: "0.08em-0.22em"
  wordmark:
    fontFamily: "Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  cta-top: "2rem"
spacing:
  section: "3rem"
  section-lg: "4.5rem"
  section-dark: "3.5rem"
  section-dark-lg: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.patina}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#957A8B"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.datum}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
---

# Design System: Aedifica (v1, archived 2026-07-19)

> **This file captures the site as shipped at git tag `v1-pre-client-rewrite` (commit `c6a8f8f`), recorded before the client-directed rewrite of 2026-07-19.** Structure and content are archived separately in `SITE-V1-ARCHIVE.md`.

## 1. Overview

**Creative North Star: "The Architect's Datum"**

A datum is the reference line every measurement on a drawing comes back to. This system treats the page the same way: one periwinkle anchor color, sharp corners everywhere, serif italic display type doing the emotional work while a geometric grotesque body stays factual. It signals institutional seriousness, not marketing enthusiasm; credibility is carried by typography, spacing, and controlled color rather than decoration.

The system explicitly rejects (from PRODUCT.md): generic nonprofit homepages, standard consultancy "our services" grids, SaaS landing pages with hero metrics and gradient text, and warm-toned career-platform sites with stock photography and rounded corners.

**Key Characteristics:**
- Sharp corners sitewide (single sanctioned exception: PageCTA's `rounded-t-[2rem]` top corners)
- Serif italic (Cormorant Garamond) for every display moment; Space Grotesk for everything factual
- Sections alternate snow / bone / anthracite backgrounds; no two adjacent sections share a tone
- The diamond (rotated square) is the house glyph: pathway waypoints, list bullets, active states
- Light mode only (`color-scheme: light only`)
- Every animation gated behind `useReducedMotion()`

## 2. Colors

Muted, mineral, architectural: one periwinkle anchor plus program-coded accents against warm paper neutrals and a near-black ink.

### Primary
- **Datum** (#6667AB): Periwinkle, the anchor and the only color that operates alone. Links, focus rings, eyebrows, the Explore program, key accents.
- **Datum Light** (#9C9CC8): Datum lightened ~35% toward white. Exists solely because raw datum only reaches ~2.7:1 on anthracite; use for any real text/link/focus ring inside `bg-anthracite` sections.

### Secondary
- **Patina** (#836479): Mauve-aubergine, "the mark". Reserved for emphasis and the primary CTA fill. Partner-audience coding.
- **Quarry** (#8A9A93): Sage-green, neutral wayfinding. The Pathway program color.
- **Sediment** (#C7B377): Yellow-olive, warmth for human-centred moments. The Launch program color.

### Tertiary
- **Rebuild** (#A0838F): The Rebuild program identity (client-supplied exact value, 2026-07-02). Only safe for large display text on light backgrounds.
- **Rebuild Deep** (#7E6973): 70% rebuild / 30% anthracite mix. Used for any solid fill carrying white body text (Rebuild hero, program cards, PageCTA rebuild variant). If the client changes the rebuild color again, recompute this as the same 70/30 mix.

### Neutral
- **Snow** (#FAF7F1): Page background, "the light".
- **Bone** (#F4EEE4): Alternate section background, "the page".
- **Anthracite** (#2D2D31): Primary text, "the line", and the dark section background. Body copy typically runs at /70–/75 opacity on light backgrounds, never lower.

### Named Rules
**The Program Color Rule.** Explore=datum, Pathway=quarry, Launch=sediment, Rebuild=rebuild(-deep). `Services.tsx` on the homepage is the source of truth; these mappings are absolute across every page. Talent Pipeline is NOT a program and gets no program color (neutral `anthracite/30` dot).

**The Datum-Light Rule.** On `bg-anthracite`, plain datum is forbidden for text, links, and focus indicators; swap to datum-light. On snow/bone, plain datum passes (~4.8:1) and datum-light is unnecessary.

**The Alternation Rule.** Adjacent page sections never share a background tone. Check the snow/bone/anthracite rhythm before inserting or reordering any section.

## 3. Typography

**Display Font:** Cormorant Garamond (Georgia fallback) — weights 300–500, italics are the signature
**Body Font:** Space Grotesk Variable (Helvetica Neue fallback)
**Wordmark Font:** Cinzel (Trajan Pro fallback) — "AEDIFICA" only

**Character:** An old-style serif with an exceptional italic carries all emotion and scale; a geometric grotesque carries all information. The italic serif is used for display headings, pull-lines, stat numerals, and in-sentence emphasis spans; the pairing reads editorial, never promotional.

### Hierarchy
- **Display** (400 italic, 2.75rem → 3.5rem lg → 4.75rem xl, lh 1.05, tracking -0.03em): Page heroes only. `[text-wrap:balance]`, max ~15ch.
- **Headline** (400, ~2rem–2.75rem, lh ~1.1): Section h2s, frequently italic with a colored emphasis span.
- **Title** (400 italic, 1.375–1.625rem, lh 1.08): Card names, stat numerals, stage names.
- **Body** (400, 15.5px, lh 1.6–1.65): Max ~54–68ch. On snow/bone use `anthracite/70`–`/75`; on anthracite use `white/75`+.
- **Label** (500, 10.5–12.5px, uppercase, tracking 0.08em–0.22em): Eyebrows, table headers, stat captions. Short labels only, never sentences.
- **Wordmark** (Cinzel 400, 14px, tracking 0.06em): The navbar/footer "AEDIFICA" mark, nothing else.

### Named Rules
**The Italic Carries the Voice Rule.** Emphasis is expressed by switching a span to the serif italic (often colored), never by bolding body text or raising its size.

## 4. Elevation

Essentially flat. Depth is conveyed by background alternation (snow / bone / anthracite), hairline rules (`border-anthracite/12`), and whitespace, not shadows. Surfaces are flat at rest.

### Shadow Vocabulary
- **Navbar scroll shadow** (`box-shadow: 0 2px 12px rgba(45,45,49,0.07)`): appears only after `scrollY > 8`; the border underneath is always visible.
- **Modal backdrop** (`bg-anthracite/60` + `backdrop-blur-[2px]`): bio/letter/instructor modals; panel itself is flat with a border.

### Named Rules
**The Hairline Rule.** Structure is drawn with 1px rules at `anthracite/12` (light bgs) or `white/12`–`/15` (dark bgs), never with boxes or shadows.

## 5. Components

### Buttons
- **Shape:** Sharp (0px radius), `inline-flex items-center`
- **Primary:** patina fill, white text, 13px medium, `px-6 py-3`, tracking -0.01em
- **Outline:** 1px datum border, datum text, same metrics; hover `bg-datum/6`
- **Hover / Focus:** color-only transitions 150ms (`transition-[transform,background-color]`); `active:scale-[0.98]`; focus ring is the global `:focus-visible` 2px datum outline (datum-light inside dark sections)
- **Casing:** deliberately mixed sitewide — client's verbatim labels are sentence case, legacy buttons Title Case. Accepted trait, do not normalize.

### Program Cards (Services)
- **Corner Style:** sharp; solid program-color fill (rebuild uses rebuild-deep) with white text, or bordered light cards depending on page
- **CTA:** per-program colored button, "View X" verb-object labels

### Navigation
- 4 dropdown groups + patina CTA ("Partner with Us"); dropdown items `text-anthracite/70`; route-aware logo swap (`SERVICE_LOGOS`, PNGs, `mix-blend-mode: multiply` on snow); scroll-aware shadow; mobile menu via AnimatePresence.

### Modals (About bios, founder letter, BB instructor)
- 580–640px panel, `max-h-[78vh]`, z-100 backdrop / z-101 panel; focus moves to close button on open (`requestAnimationFrame`), returns to trigger on close, Tab trap on the dialog div.

### Signature Component: HeroPathway
Single Catmull-Rom curve through 4 diamond waypoints (the programs, canonical order Explore→Pathway→Launch→Rebuild, canonical colors), pixel-space viewBox with uniform scale (never `preserveAspectRatio="none"` — it distorts the diamonds), snow halo rects so the line breaks behind each marker. Collapses to a dot-row below `lg`. Its draw-in is the site's signature entrance animation.

### Signature Pattern: Hover-Wake Lists
Dense numbered lists (Rebuild 17-stage journey, /services 13 outcomes) rest with numerals at `color/55` and wake to full color on row hover, row rule tinting to match. Color-only, so no reduced-motion gating needed. This is the house pattern for dense lists.

## 6. Do's and Don'ts

### Do:
- **Do** keep every animation behind `useReducedMotion()` with `reduce ? undefined : {...}`; never gate content *visibility* on an animation state.
- **Do** use the shared easings exactly: `EASE = [0.25, 0.1, 0.25, 1]`, `SPRING = [0.32, 0.72, 0, 1]`, `VIEWPORT = { once: true, margin: '100px 0px' }`.
- **Do** hold WCAG AA: body ≥4.5:1; datum-light on anthracite; rebuild-deep under white body text; body opacity floors (anthracite/70 on snow, /75 on snow for small text).
- **Do** keep section padding rhythm: `py-12 lg:py-18` standard, `py-14 lg:py-20` for anthracite sections.
- **Do** use the diamond as the marker glyph for waypoints, bullets, and active states.

### Don't:
- **Don't** build "SaaS landing pages with hero metrics and gradient text" (PRODUCT.md anti-reference) — no gradient text, no big-number hero-metric template.
- **Don't** build "warm-toned career platform sites with stock photography and rounded corners" — corners stay sharp except PageCTA's top arc.
- **Don't** build "generic nonprofit homepages" or "standard consultancy services grids" — no identical icon+heading+text card walls.
- **Don't** re-add: the hero audience selector, ghost watermark words on dark sections, giant ghost section numerals, the removed LearnerStory/PriorExperience disclaimer lines.
- **Don't** use raw rebuild (#A0838F) under white body text, or raw datum on anthracite.
- **Don't** put two adjacent sections on the same background tone, or use shadows/boxes where a hairline rule serves.
