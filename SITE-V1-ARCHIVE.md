# Aedifica Site v1 — Archive & Restore Reference

**Written 2026-07-19, immediately before the client-directed rewrite.**
This is the human-readable map of what the site was. The complete code and every word of content are preserved in git.

## How to restore

The entire v1 site is frozen at the annotated git tag **`v1-pre-client-rewrite`** (= commit `c6a8f8f`, shipped to production 2026-07-14).

```bash
# See the v1 version of any file
git show v1-pre-client-rewrite:src/views/Home.tsx

# Restore a single file into the working tree
git checkout v1-pre-client-rewrite -- src/components/Hero.tsx

# Browse the whole v1 site on a throwaway branch
git switch -c v1-browse v1-pre-client-rewrite

# Diff the rewrite against v1
git diff v1-pre-client-rewrite -- src/
```

The visual design system (colors, type, components, rules) is documented separately in **`DESIGN.md`** at the repo root.

---

## 1. Stack & infrastructure (v1)

- **Next.js 15 App Router**, TypeScript, Tailwind CSS v4 (`@theme` in `src/app/globals.css`), Motion, Phosphor Icons, Lenis smooth scroll (`LenisProvider.tsx`, skipped entirely under reduced motion).
- `output: 'export'` → static `out/`, deployed on Netlify from `main` (`netlify.toml`, Node 20). Live at `edfca.netlify.app`; `SITE_URL = 'https://edfca.com'` in `src/lib/config.ts`.
- **Wrapper pattern:** every route has a server `src/app/**/page.tsx` (exports `metadata`, injects JSON-LD from `src/lib/schemas.ts`) rendering a `'use client'` view from `src/views/`.
- SEO: Next metadata API, `metadataBase` in `layout.tsx`, `public/sitemap.xml` + `robots.txt` (edfca.com), OG image in `public/`.
- Contact form: Basin POST to `https://usebasin.com/f/5f39f537ee84` (Partner page).
- Videos: self-hosted `/videos/aedifica-brand.mp4` (About + AedificaModel, poster jpg); Vimeo `1204846790` (Bridging Brilliance).
- Route-aware navbar logos: 5 PNGs in `public/images/`, `SERVICE_LOGOS` map in `Navbar.tsx`.

## 2. Route map (14 routes)

| Route | View | What it carried (v1 content) |
|---|---|---|
| `/` | `Home.tsx` | Full narrative: see section stack below |
| `/services` | `ServicesOverview.tsx` | 4 program cards + 13-outcome hover-wake list + proposal-based Launch fact |
| `/services/rebuild` | `Rebuild.tsx` | 12-or-24-week adult bridge: hero (rebuild-deep), 9 learning areas + descriptions, 17-stage hover-wake journey, "what you will gain", sample activities, audience quartet, partner cards, Apply/Refer/Sponsor CTAs |
| `/services/launch` | `Launch.tsx` | Grant strategy service: 6 stages, module accordions, deliverables incl. employer advisory board setup, proposal-based pricing (client conflict resolution — NOT fixed-fee) |
| `/services/pathway` | `Pathway.tsx` | HS program: idea→design→estimate→schedule→field intro, info rows, sample activities, 21st CCLC 6 components with Phosphor icons (#5C5D9C), learner quotes |
| `/services/talent-pipeline` | `TalentPipeline.tsx` | Client's reframe: cross-cutting employer connector, NOT a fifth program, no program color; 6 functions, 5-step connector loop ("cycle, not a funnel", line draws in on scroll), in-development status block, "what TP is not" |
| `/services/explore` | `Explore.tsx` | Middle school: grades 6–9 formats, info rows, 6 sample activities, 10-day Engineering Explorers camp map |
| `/impact` | `Impact.tsx` | Student stories with per-program filter buttons, featured story asymmetric grid, 2022–24 quotes, "Professor Karam" 2025 quotes |
| `/insights` | `Insights.tsx` | Supervisor-gap report (verbatim, "Version 1.0 · Catalogued as R-01"), 5 SectionPair exhibits with animated charts, stats strip, R-01–R-05 research archive (anthracite, 2×2+1 layout), resource library, `<details>` source notes |
| `/about` | `About.tsx` | Mission, EEE signature block (Earth/Engineers/Education + Access/Evidence), 5 operating principles, org history, brand video, team grid (Karim / Evelyne / Nicole / Kimi) with bio modals, founder-letter MODAL (not details), commitments, vision |
| `/partner` | `Partner.tsx` | Audience strip (datum→sediment→quarry→patina), Basin form ("Tell us who you are and what you are trying to build."), org type incl. "Learner, parent, or family member" (org field optional) |
| `/curriculum/bridging-brilliance` | `BridgingBrilliance.tsx` | 12-week curriculum, sticky scroll-spy section bar (6 anchors, IntersectionObserver `-25%/-65%`), 5 NJSLS frameworks + 8 instructional approaches (client's framing), instructor modal, Vimeo |
| `/apply` | `Apply.tsx` | Application structure, four gates, Access & Funding dark section (4 funding sources, 7 support services, "what Aedifica will not do"), TBD cohort dates |
| `/faq` | `FAQ.tsx` | 7 categories in paired 2-col grid (General|Cost, Eligibility|Participation, Application|Partners & Outcomes; Technical Support centered below), 240h + OSHA30/LEED/CAPM facts attributed to BUILD NJ GREEN not Rebuild |

## 3. Homepage section stack (v1 order — `Home.tsx`)

Background rhythm alternates snow/bone/anthracite with zero same-tone seams.

1. **Hero** — "We build the builders New Jersey is *counting on.*" (client's literal phrasing), eyebrow "Earth · Engineers · Education", 2 CTAs (Partner→patina fill, See the programs→datum outline), 4-stat proof strip ($1B+ / Employer-validated / NJ-funded / No cost to learners), **HeroPathway** curve right column
2. **TheGap** ("Why we exist") — client's mission/NJ-investment/workforce-thinning paragraphs + "The short version" box right-aligned (`lg:pt-[42px]` to level with the h2)
3. **MissingChannel** — four-year vs trade route, broken-connector diagram (two rules ending in datum diamonds, gap = "no bridge")
4. **AedificaModel** — sticky brand video + Exposure→Skills→Credentials→Opportunity flow (+ stage descriptions, TP-runs-across-stages note), Prepare/Align/Publish items with Phosphor icons
5. **Services** — 4 program cards + "Choose your on-ramp" comparison table (Typical outcome column, TP row, "Choose X if…" intros), 10-chip "real logic of construction projects" strip
6. **CurriculumIndex** — anthracite, 5 curricula, compact 3-col grid
7. **FourGates** — the four admission gates
8. **PriorExperience** — Practitioner-led / Employer-connected / Funded demand trio (one-sentence disclaimer only)
9. **WhoWeServe** — client's column titles ("Institutions building the workforce" / "People ready for a real career"), incl. career changers, advancement seekers, caregivers, public-sector partners
10. **LearnerStory**
11. **Partnership**
12. **CostCallout**
13. **FinalCTA** — client's headline "New Jersey is building. Let's build the people who lead it."

Unmounted but on disk: `CredibilityBar.tsx`. Deleted in v1 (don't resurrect): `SEO.tsx`, `Outcomes.tsx`, `RoleLadder.tsx`, `CurriculumStrip.tsx`, `src/assets/`.

## 4. Content provenance (v1)

- **Canonical content source:** client's `aedifica-complete-archive (5).html` (21k words, §01–§24), applied 100% verbatim 2026-07-13, verified by a 163-phrase sweep. All 6 content conflicts resolved in the client's favor (proposal-based Launch, 12-or-24-week Rebuild sitewide incl. schemas/metadata, his FinalCTA headline, 5 NJSLS frameworks + 8 approaches, his About mission, his WhoWeServe titles).
- **Team bios:** newer separate files beat the archive HTML — `kimi.jpeg` + `Dr_Nicole_Gilmore-Silva_Aedificio_Bio_Version3 (1).pdf` → About.tsx card summaries + fullBio modals; "Dr. Nicole Gilmore-Silva", title "Co-Founder & Chief Education and Industry Partnerships Officer" (role label `min-h` 3.1rem).
- **Footer taglines:** "Earth. Engineers. Education." / "built from overlooked talent"; "About Us" not "About"; no border-t.
- Client's `[bracketed placeholders]` were skipped by policy; "announced when confirmed" language used instead.
- Karim bio: "Université Saint-Joseph", "École Nationale des Ponts et Chaussées" (UTF-8 — do not re-mojibake).

## 5. Quality state at archive time

- Audit scored 19/20; polish + animate passes complete; `tsc --noEmit` and `npm run build` clean (17 pages).
- Accessibility: WCAG AA sweep done, modal focus management everywhere, Lenis + `scroll-behavior: smooth` both gated on reduced motion, all 18 chart durations `reduce ? 0 : X` (charts never hidden by animation), 3 below-fold images lazy.
- **Waived (not bugs):** video poster frames, tokenizing Insights chart hexes.
- **Open at archive time:** phone + professional email UI (no slot exists yet), DNS switch to edfca.com, GSC/GBP, Basin notification target.

## 6. Working rules that outlive v1

- Never run two `next dev` processes, or `npm run build` while dev is up — corrupts `.next`. Verify with `npx tsc --noEmit`.
- Pushing to `origin main` = production deploy. Confirm before pushing.
- Client reference files at repo root (his HTMLs, kimi.jpeg, Nicole PDF) stay untracked.
- Prototype/preview work goes to Netlify Drop, not git branches.
