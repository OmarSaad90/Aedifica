# Aedifica v2 Rewrite Plan

**Written 2026-07-19.** Baseline: `aedifica-website-reorganized.html` (repo root, 311KB, client's "reorganized" build).
Old site preserved at git tag `v1-pre-client-rewrite`; old design system in `DESIGN.md`; old structure/content map in `SITE-V1-ARCHIVE.md`.

## 0. Ground rules (non-negotiable, per Omar)

1. **Content and section order come from the client HTML, 100%, section by section.** His wording wins everywhere.
2. **Design stays OURS.** His file carries its own design system (Canela/Tiempos/Atlas type, `paper #F1EDE9` background, wine/terracotta/blush accent layer, white cards). ALL of that is ignored. We keep: Cormorant/Space Grotesk/Cinzel, snow/bone/anthracite alternation, sharp corners, diamonds, hairline rules, hover-wake lists, our motion system, our modal machinery, WCAG discipline. `DESIGN.md` is the reference.
3. **`[ADD: …]` placeholders in his file are skipped** (standing policy): use our "announced when confirmed" style or omit. They appear at: Explore safety row, Families safety row, About team-roles note, Contact phone + scheduling link, Access & Funding New York row, FAQ safety answer.
4. His file is a single-page site with `#anchor` navigation. Ours stays a multi-page Next.js site; anchors map to routes (section 2).

---

## 1. What the client's file actually is

A 13-"page" single-file site (`.vpage` divs) with client-side page switching. Sections are numbered §01–§18. The header carries new JSON-LD (EducationalOrganization + Report schemas), new meta title ("Aedifica — From Foundations to Futures. Construction-Management Workforce Pathways for New Jersey"), and **a decided public email: `info@edfca.com`** (phone still `[ADD]`).

**The big structural moves vs v1:**

- **Homepage shrinks from 13 sections to 4.** Everything else redistributes to other pages.
- **Programs get their own hub page** containing only the comparison table.
- **Curriculum becomes the core product.** Each program page carries collapsible "curriculum shells" with full week-by-week curricula, standards tagging, filters, and print support. This is ~60% of the file's mass and the biggest new build.
- **Talent Pipeline is now "Program 05" with its own color** (mauve, `rgb(198,170,175)`) — the client reversed his own v1 rule ("not a fifth program, no color").
- **Launch is redefined**: no longer grant-strategy/proposal-authoring with 6 stages and proposal-based pricing. Now "pathway architecture for institutions" whose flagship is the full BUILD NJ GREEN 16-week curriculum. All v1 Launch pricing/stages content is gone from his file.
- **New pages**: Learner Experience (all quotes), For Families (parent-facing).
- **Gone as standalone pages**: /apply (no equivalent anywhere), /faq (folded into About), /curriculum/bridging-brilliance (folded into Explore's curriculum shell), /insights (renamed Research), /services overview (replaced by Programs hub).
- **New tagline used sitewide**: "From foundations to futures."
- **New Impact data**: the Building Bridges Spring 2025 results block (21 students, 55% UCVTS acceptance, ≈93 avg grade, $10,340 certified investment) — entirely new to the site.

---

## 2. Sitemap: old routes → new routes

Proposed route names (domain not yet indexed, so renames are cheap — decision D6):

| Client page (`id`) | New route (proposed) | Old route | Fate of old |
|---|---|---|---|
| `page-home` | `/` | `/` | Rebuilt (4 sections) |
| `page-programs` | `/programs` | `/services` | Replace; redirect optional |
| `page-explore` | `/programs/explore` | `/services/explore` | Rewrite + absorb BB page |
| `page-pathway` | `/programs/pathway` | `/services/pathway` | Rewrite |
| `page-launch` | `/programs/launch` | `/services/launch` | Full redefinition |
| `page-rebuild` | `/programs/rebuild` | `/services/rebuild` | Rewrite (slimmer) |
| `page-pipeline` | `/programs/talent-pipeline` | `/services/talent-pipeline` | Rewrite (now Program 05) |
| `page-experience` | `/experience` (NEW) | — (quotes were on /impact + program pages) | New page |
| `page-families` | `/families` (NEW) | — | New page |
| `page-impact` | `/impact` | `/impact` | Full rewrite |
| `page-research` | `/research` | `/insights` | Rename + restructure |
| `page-about` | `/about` | `/about` + `/faq` + parts of `/apply` | Mega-page (§12–§16) |
| `page-contact` | `/contact` | `/partner` | Rename + new form |
| — | — | `/apply` | **DELETE** (decision D3) |
| — | — | `/faq` | **DELETE** (content → /about) |
| — | — | `/curriculum/bridging-brilliance` | **DELETE** (content → /programs/explore shell) |

### Navigation (his structure, our navbar design)

Top level: **Home · Programs ▾ (Explore / Pathway / Launch / Rebuild / Talent Pipeline) · Learner Experience · For Families · Impact · Research · About · Contact**

That's 8 top-level items vs our current 4 groups + CTA. Keep our navbar visual design (scroll shadow, logo swap, dropdown pattern, mobile menu) but adopt his item structure. 8 items is wide; recommend keeping "Contact" styled as our patina CTA button (his own hero CTA is "Partner with Aedifica", so Contact-as-CTA preserves both). May need tighter tracking/spacing at `lg` and a considered `xl` breakpoint. The old "Discover Aedifica / Our Impact / Resources" groups die.

### Footer (his structure, our design)

Three link columns — **Programs** (5 programs + Compare), **Evidence** (Impact framework / Aedifica Research / Bridging Brilliance / Resilient Futures / BUILD NJ GREEN / Learner experience), **Aedifica** (About / Principles / Who we serve / For Families / Access & funding / FAQ / Partner / Contact) — plus brand line "Earth. Engineers. Education. / From foundations to futures.", copyright with "built from overlooked talent", and Privacy/Terms/Accessibility links (his link to `#top` = placeholders; omit or stub, decision D9). His footer also has a brand-system color legend strip — that is design chrome, skip it. Anchor-links into About sections (Principles, FAQ…) become `/about#principles`-style anchors; our scroll-mt pattern from BB's section bar applies.

---

## 3. Page-by-page specification

Format: **section order = his**, each with source (§), our design treatment, and reuse notes.

### 3.1 Home (4 sections)

1. **Hero** (§ hero): Same headline ("We build the builders New Jersey is counting on."), eyebrow "Earth. Engineers. Education." (our existing eyebrow). **New body paragraph** (infrastructure-wave phrasing ending "From foundations to futures."). CTAs: "Partner with Aedifica" (keep patina) + **"Compare the Programs"** → `/programs#compare` (replaces "See the programs"). Right column: "The pathway · Index 05" — **5 program entries with audience labels** (Explore·Middle school / Pathway·High schools / Launch·Institutions / Rebuild·Adults / Talent Pipeline·Employers). **HeroPathway must grow from 4 to 5 waypoints** (add pipeline color diamond; keep Catmull-Rom curve, halos, mobile dot-row). Proof strip: same 4 stats, his sublabels ("delivered infrastructure behind our leadership" etc.).
2. **The five programs** (`home-programs`): moved from /services to home. Intro "Find your entry point." + 5 program cards **each with audience-fact chips** (e.g. "Grades 6–8 · School-year & summer · Community-based delivery") + "Explore the program →" links + closing "Compare all five, side by side →" link. Reuse Services.tsx card design; add the 5th (Talent Pipeline) card in the new pipeline color; the comparison table MOVES OUT to /programs.
3. **Why Aedifica exists** (`why`, §01): TheGap rebuilt with his 3 paragraphs (new wording: "New Jersey has the projects. It doesn't yet have the people to run them.") + **"The premise"** callout ("Talent is everywhere, even when opportunity is not…") — reuse TheGap's "short version" box design for the premise.
4. **Our approach** (`approach`, §02): 4 stages (Exposure/Skills/Credentials/Opportunity, his one-line descriptions) + hand-off line ("Curriculum without that hand-off is a class…") + **3 method items**: Field-built ("Designed from the jobsite backward"), Evidence-run ("Measured by outcomes, not hours"), Partner-shaped ("Built with institutions, not around them"). Reuse AedificaModel's stage-flow design. **Decision D7: brand video** — his file has no video here; keep the sticky video as our design touch or drop it.

**Dropped from home** (v1 components to unmount): MissingChannel, CurriculumIndex, FourGates (content → About commitments), PriorExperience (folded into hero stats), WhoWeServe (→ About §14), LearnerStory (→ /experience), Partnership, CostCallout (→ About §15), FinalCTA (→ /contact §17). Background alternation must be re-planned for the 4-section stack.

### 3.2 Programs hub (`/programs`, §03)

Single section: "Five programs. One pathway." → "Which door is yours? Compare the five programs." + **5-row comparison table** with columns **Program / Who it serves / Format / What it delivers / Next step**, each program tagged `EDF·01–05` + channel name. Reuse our "Choose your on-ramp" table design (fixed CTA column, per-program colored buttons); new columns and copy; TP row in pipeline color. `#compare` anchor target. Mobile: the table needs a stacked-card fallback (our v1 table was desktop-only — now it's the whole page, so it must work on mobile).

### 3.3 Explore (`/programs/explore`, §04) — biggest page rebuild alongside Launch

Order:
1. Program hero: "Program 01 · Purple channel" chip, intro ¶s (includes Bridging Brilliance/Hillside provenance sentence), **info rows**: Audience / Format / Setting / ~~Safety [ADD]~~ / Cost to learners, + 3 bullets. Reuse our program-hero + info-row layout.
2. **"Inside a session"** — 6 hands-on activities (Bridge/tower challenge, Mini site-planning, Materials & load-testing, Neighborhood mapping, Career role-play, Present & share). New section; use our bordered-row + diamond-bullet vocabulary, not icon cards.
3. **"Ways to run it"** — 4 delivery models (Single workshop / Multi-session series / Summer camp module / Partner-funded enrichment).
4. **"Evidence you can show"** — 4 assessment artifacts (Engineering portfolio / Prototype & testing performance / Presentation & written argument / Individual reflection) + "Board-ready reporting" 30-day-report paragraph.
5. **Curriculum shell #1: Bridging Brilliance — Engineering the Hudson** (12 weeks, 3 units, 4 stat tiles, in-shell anchor nav, standards legend with 5 filterable frameworks, week-by-week cards each carrying standards-code chips, consolidated standards matrix across 5 frameworks, 7-approach instructional model, partner/framework summary, verification disclaimer). See §4 "Curriculum shell system".
6. **Curriculum shell #2: Summer STEM Camps** (3 camp models incl. Girls in Engineering; 10-day Engineering Explorers map in 2 bands; standards matrix; partners; disclaimer).
7. CTAs: "Bring Explore to your school" → /contact, "Ask about summer camps" → /contact. Closing reassurance line (trim the `[ADD: background-checked]` clause per policy).

Absorbs and retires the v1 BB page. **Decision D4: the v1 BB page's Vimeo video + instructor modal** aren't in his file — keep inside the shell as our touch, or drop.

### 3.4 Pathway (`/programs/pathway`, §05)

1. Program hero: "Program 02 · Green channel", intro (incl. Stevens provenance ¶), info rows (Audience/Format/Alignment/Outcome), 3 bullets.
2. **"The Pathway model, taught for three summers"** — Stevens pre-college evidence block: 4 stats (73–80% Excellent · 88–96% Professor Karam Excellent · 85–100% motivating/approachable · 3 summers) + survey-source disclaimer. New. Use our stat treatment (italic serif numerals) — but note his figures are ranges, design for that.
3. **"Principles of Civil Planning"** — the 9-lesson pre-college curriculum + 4 standards buckets (NJSLS / New York State / NGSS / 21st-century skills). The NY alignment is NEW content. 9 lessons are a real sequence → numbered list is earned; hover-wake pattern fits.
4. **Curriculum shell: Resilient Futures** — 3 grade-band pathways: **Bridge Builders** (grades 6–8, 12 weeks, full week-by-week), **Infrastructure Fellows** (grades 9–12, 8 units + companion Smart Cities studio), **STEM Research Scholars** (grades 11–12, 6 phases) + master standards matrix + **21st CCLC 6-component map** (was on v1 Pathway page with icons — keep our icon treatment) + partners + disclaimer.
5. CTAs: "Build a Pathway in your district" → /contact, "See the evidence base" → /research. Closing line ("co-authored with your educators — designed with them, never at them").

### 3.5 Launch (`/programs/launch`, §06) — full redefinition

1. Program hero: "Program 03 · Yellow channel", **new definition**: pathway architecture for institutions; flagship = BUILD NJ GREEN. Info rows (Audience/Format/Deliverables/**Duration: "Scoped to the institution — typically 2–4 terms to ownership"**), 3 bullets.
2. **Curriculum shell: BUILD NJ GREEN** — 16 weeks/240 hours in 3 phases (Foundations & Core CM wks 1–6 / Green Systems, Energy & Environment wks 7–12 / Credentials & Capstone wks 13–16), week-by-week with competency-area tags (Green Building / Construction Mgmt / Safety & OSHA / Energy & Environment / Project & Professional — a competency legend, not standards), **3 credentials block** (OSHA 30 · LEED GA 85% · PMI-CAPM 75% targets), **capstone deliverables table** (11 rows), **competency domain matrix** (5 domains), **8 career-outcome roles**, partners, disclaimer.
3. CTAs: "Scope a Launch engagement" → /contact, "Read the Supervisor Gap report" → /research. Closing line (radical-legibility).

**Gone**: v1's 6-stage engagement model, module accordions, proposal-based pricing language, "employer advisory board setup" deliverables framing. (Decision D2 — confirm the client intends to drop all pricing/engagement-model content; his file contains none.)

### 3.6 Rebuild (`/programs/rebuild`, §07) — slimmed

1. Program hero: "Program 04 · Light burgundy channel", his intro ("…are not a beneficiary group here. They are the talent pipeline." / "a credential without a door is just a certificate."), info rows (Audience/Format/Supports/Cost to learners), 3 bullets.
2. **17-stage learner journey** — same 17 stages as v1 with his (slightly revised) descriptions. KEEP our hover-wake design; verify copy line-by-line against his.
3. **Curriculum shell: 9 learning areas** — with per-area descriptions (OSHA-10/30 prep, NCCER Core, Bluebeam & Procore, BIM viewer literacy, Submittal/RFI/doc-control, Estimating & scheduling, Supervisory communication, Employer-informed capstone, Interview week) + the "not published here / never guaranteed" closing note. A shell with no weekly bands — lighter variant.
4. CTAs: "Sponsor a Rebuild cohort" → /contact, "How cohorts are funded" → /about#access. Closing line ("a few practical capabilities can change how someone sees themselves…").

**Gone from v1 Rebuild**: audience quartet section, partner cards, "What you will gain" list, 5 sample activities, Apply/Refer/Sponsor triple CTA. His journey + areas carry that load now.

### 3.7 Talent Pipeline (`/programs/talent-pipeline`, §08) — reframed as Program 05

1. Program hero: "Program 05 · Mauve channel" — **first-class program now**. His intro ("where the pathway pays off — for everyone", "The metric is the moat."), info rows (Audience/Commitment/Articulation/Evidence), 3 bullets ("Aedifica does not referee" etc.).
2. CTAs: "Join the Talent Pipeline" → /contact, "See how outcomes are defined" → /impact. Closing employer line.

**Design change required (D1)**: new `--color-pipeline: #C6AAAF` token; navbar dot, program card, table row, hero chip, HeroPathway 5th waypoint all use it. Check contrast: it's light (similar lightness to rebuild) — white text on it will fail; compute a `pipeline-deep` companion the same way as `rebuild-deep` (70/30 mix toward anthracite ≈ `#8F7D82`) for solid fills with white text. v1's TP loop-diagram/6-functions/status-block/is-not content is REPLACED by this much shorter page.

### 3.8 Learner Experience (`/experience`, §09) — NEW page

"In their own words: what the pathway feels like from inside."
- **Explore block** (Middle school · Building Bridges): 5 quotes, all "A 2025 Building Bridges student".
- **Pathway block** (High school · Stevens pre-college): 10 quotes (2022–2024).
- Closing provenance line ("Only genuine, permission-cleared reflections…").
Design: this page is pure testimony — a chance for our serif italic to carry it. Two program-colored groups (datum / quarry). Reuse Impact's quote treatments; don't card-grid 15 identical quotes — vary rhythm (sizes/indentation), keep it editorial. Absorbs quotes previously living on /impact and program pages.

### 3.9 For Families (`/families`) — NEW page

Parent-voiced single section: headline "A real path into careers that build our communities — at no cost to your child.", intro ¶, 3 benefit bullets, info rows (Ages & stages / Cost to your family / ~~Safety [ADD]~~ / How to start), CTAs "Find a program for your child" + "Ask if Aedifica is coming to your school" → /contact, closing line. Warmer register (sediment accents are our "human-centred" color) but same system. Short page — resist padding it out.

### 3.10 Impact (`/impact`, §10) — full rewrite

1. Intro: "Outcomes over activity, honestly reported." + his ¶ (Explore already ran; workforce cohorts next; definitions-before-data) + ordering note.
2. **Building Bridges results block** (NEW data, the crown jewel): titled "Building Bridges: our Explore model, proven in Spring 2025." Provenance ¶ (Hillside Innovation Academy, Stevens, Engineering Information Foundation, NGSS, led by Dr. Karim Karam and Kimi Stephenson) + **6 stats** (21 students ≈22% of school · 10 weeks · 55% UCVTS acceptance (6 of 11) · ≈93 avg final grade · 100%/85% survey response · $10,340 certified investment) + 3 program-goal progress bullets + **Sources & scope** paragraph (EiF 2025 report, HIA Year-2 snapshot, UCVTS/Union County Magnet #1 ranking, 91% vs 50% NJSLA context, "one contributing factor, not the sole cause").
3. **Workforce metric definitions table**: 4 rows (Placement rate / Credential attainment / Wage at placement / Apprenticeship articulation) × (Metric / Definition / Reported).
**Gone**: v1 story cards ("Built, tested, revised…", "Families in the room", "A teacher who opened the field"), featured-story grid, program filter buttons, learner quotes (→ /experience). Flag D5.

### 3.11 Research (`/research`, §11) — renamed from Insights

1. Intro: "Research that de-risks the decision." + his ¶.
2. **Featured report: The supervisor gap** — descriptor ¶, meta rows (Aedifica Research · Published 2026-06 · NJ/NY metro), 4 stats (2,000–3,000 / ≈0 / 2030 / $1B+), CTAs "Request the full report" → /contact + "Book a research briefing" → /contact, **Exhibit 01 bar chart** (2030 demand ≈2,500 / Annual pipeline ≈120 / Enrolled now ≈60 / Credentialed ≈0) + source note. Reuse our Insights chart system (animated, reduce-gated).
3. **Publications archive R·01–R·05** — REVISED list: R·01 The supervisor gap (Published) / R·02 **Bridging Brilliance: a delivery case study** (In progress) / R·03 Outcome definitions that survive an audit (In progress) / R·04 **The non-traditional advantage** (Planned) / R·05 **Rebuild Cohort 1: outcomes report** (Planned). Titles/statuses differ from v1's archive — replace wholesale. Keep our 2×2+1 anthracite layout; status carried by label + glyph (his a11y note), which our chip already does.
4. **Methodology note** (estimates vs measured results).
**Gone**: v1's full in-page supervisor-gap report body (5 SectionPair exhibits, stats strip, resource library, source-notes details). His page is a *summary + archive*; the full report is "Request the full report". Flag D8 — this deletes a lot of our best chart work; confirm.

### 3.12 About (`/about`, §12–§16) — mega-page, five sections

1. **§12 About Aedifica**: intro ("workforce architecture company…") + team-composite ¶; **Mission & Vision** (his wording); **Signature** ("From foundations to futures. · Earth. Engineers. Education." + Earth/Engineers/Education definitions + Access & Evidence values); **Organizational history** ¶; **Origin** ("Founded inside the problem, not above it." + 3 ¶s incl. "we translate — and when translation is insufficient…"); **4 Strategic commitments** (Evidence over inertia / Co-authorship as default / Radical legibility / Widened doorways); **The founders** — 4 bios in his order and titles (Karim / Evelyne / Nicole / Kimi), each: photo, title, credential line, summary ¶, "Read full biography" → keep our MODAL machinery (full bios from v1 stay; his summary ¶s replace card text); partner group photo + caption (asset needed — D10); **Founder letter** — his full first-person text (matches v1's) — keep our modal, not his inline reader. Skip the `[ADD: team roles]` note.
2. **§13 Principles & commitments** (`#principles`): 5 operating principles WITH short forms (verbatim from v1, verify wording) + **4 commitments** (Recruitment / Funding / Employer / Articulation — this is v1's FourGates relocated; keep the FourGates design) + "Curriculum without these commitments is a class." + "Founding partnership" kicker.
3. **§14 Who we serve** (`#serve`): two columns — "Institutions & employers / The people building the pathway" (9 items) and "Learners / The people walking the pathway" (9 items, now incl. "Parents and families exploring options for their child"). Reuse WhoWeServe design.
4. **§15 Access & funding** (`#access`): intro + 4 funding rows (Districts / Workforce / Employers / Philanthropy) + New York row (trim the [ADD] clause, keep the NY-standards sentence). Reuse Apply's Access & Funding dark-section design.
5. **§16 FAQ** (`#faq`): **9 questions only** ("The questions boards, superintendents, and families actually ask.") — replaces the entire v1 30-question/7-category FAQ. Single list, our accordion design. Q8's `[ADD]`s get trimmed to our confirmed-language style.

This page is LONG → give it the BB-style sticky in-page section bar (our component: About / Principles / Who we serve / Access & funding / FAQ). That's a design addition his file justifies structurally (his nav deep-links to these anchors).

### 3.13 Contact (`/contact`, §17–§18) — replaces /partner

1. **§17 Partner CTA**: eyebrow "From foundations to futures" + "Built on a commitment to deliver, report, and be accountable." + ¶ + CTAs "Start a Partnership Conversation" → #contact-form + "View the Impact Framework" → /impact. This is FinalCTA/PageCTA's new home; v1 FinalCTA headline dies (D11 minor).
2. **§18 Contact**: "Tell us which door is yours. We'll map the pathway." + info rows: **Email info@edfca.com** (NEW — the long-awaited public email!) / ~~Phone [ADD]~~ / ~~Schedule [ADD]~~ / Service area / Best for / Response ("a scoped reply — not a brochure") + **form** (keep Basin endpoint): Name, Email, Organization & role, **"I'm interested in" select with 9 options** (Explore / Pathway / Launch / Rebuild / Talent Pipeline / Research briefings / Parent or family / Adult learner / Something else), "What are you trying to build?" textarea, consent checkbox, "Send the inquiry".

Also: add `info@edfca.com` to the Footer brand column (this was the pending "professional email UI" item — the email now exists; phone still pending).

---

## 4. New components to build

1. **Curriculum shell system** (the big one — powers Explore ×2, Pathway, Launch, Rebuild):
   - Collapsible `<details>`-style container with title, meta line, "Open curriculum" affordance; page-level "Expand all / Collapse all / Print curriculum" controls (print = shells forced open via print stylesheet).
   - Shell header: eyebrow, display title ("Bridging Brilliance." etc.), intro, 4 stat tiles, in-shell anchor nav.
   - **Standards/competency legend**: color-coded framework key, **tap-to-filter** (filtering week tags by framework), "Showing all…" status line, hover/focus tooltips with full standard descriptions. Colors: use OUR palette mapped to frameworks (datum/quarry/sediment/patina/rebuild are 5 — exactly 5 frameworks; his rule "color never carries meaning alone" means every chip also carries its text label, which our StdBadge already does).
   - **Week/unit band**: numbered band header (unit number, week range, title, description, essential question, focus, deliverables) + per-week rows (number, question-title, description, standards chips). A real sequence → numbers are earned; hover-wake fits the week rows.
   - **Standards matrix**: grouped-by-framework definition lists.
   - **Info sidebar/footer blocks**: program summary, partners, frameworks, disclaimer.
   - Accordion height animation must be reduce-gated (v1 lesson). Filtering is display-state, not motion.
   - Variants: standards-tagged (Explore/Pathway), competency-tagged (Launch), plain areas (Rebuild).
2. **HeroPathway 5-node upgrade** — extend curve data, pipeline-color diamond, mobile dot-row +1.
3. **Program hero info-rows block** — standardized Audience/Format/… key-value rows used by all 5 program pages + Families (v1 had similar on Explore/Pathway; formalize).
4. **Capstone deliverables table** (Launch) + **metric definitions table** (Impact) — reuse table vocabulary from the compare table.
5. **Stats blocks with ranges** ("73–80%", "100% / 85%") — stat component must handle non-single-number values gracefully.
6. **Quote wall** (/experience) — editorial, varied rhythm, program-color grouping.
7. **Sticky section bar for /about** — reuse BB scroll-spy component (it dies with the BB page; salvage it).
8. **Career-roles list** (Launch, 8 roles) and **credentials trio** (Launch) — use bordered rows/hairline vocabulary, not icon-card grids.

## 5. Retired v1 components/pages

- Views: `Apply.tsx`, `FAQ.tsx` (as route), `BridgingBrilliance.tsx` (as route), `Insights.tsx` (superseded by Research), old `TalentPipeline.tsx` content.
- Home components: `MissingChannel`, `CurriculumIndex`, `FourGates` (relocates to About), `PriorExperience`, `WhoWeServe` (relocates to About), `LearnerStory`, `Partnership`, `CostCallout`, `FinalCTA` (relocates to Contact), `CredibilityBar` (already unmounted).
- Keep on disk vs delete: follow v1 convention — delete after content is confirmed relocated; tag protects everything anyway.
- `schemas.ts`, `sitemap.xml`, `robots.txt`, metadata: full refresh to new routes + his two new JSON-LD schemas (EducationalOrganization with founders/OfferCatalog; Report for supervisor gap).

## 6. Decisions needed from Omar (or client) — do not silently pick

- **D1. Pipeline color.** Adopt his mauve `#C6AAAF` as `--color-pipeline` + computed `--color-pipeline-deep` (~`#8F7D82`) for white-text fills? (Recommended: yes — his file is explicit and repeated: "Program 05 · Mauve channel".) Note it's very close to `--color-rebuild` (#A0838F) in hue/lightness — adjacent use needs care; flag to client if the two read as twins.
- **D2. Launch pricing/engagement content.** His file contains no pricing, no 6-stage engagement model. Confirm deletion (it reverses the 7/13 "proposal-based" resolution by removing the topic entirely).
- **D3. /apply route.** No Apply anywhere in his file (Rebuild CTA is now "Sponsor a cohort", families are told to ask their school). Delete the route? Recommend: yes, with `/apply` → `/contact` redirect.
- **D4. BB Vimeo video + instructor modal** (v1 BB page): not in his file. Keep inside Explore's BB shell as our touch, or drop?
- **D5. v1 Impact story cards** (3 narrative stories): absent from his file (only quotes survive, on /experience). Confirm drop.
- **D6. Route naming.** `/programs/*` (matches his "Programs" nav) vs keeping `/services/*` URLs. Recommend `/programs/*` now, before DNS/GSC.
- **D7. Brand video.** His Approach and About sections have no video. Keep `/videos/aedifica-brand.mp4` somewhere (Approach? About origin?) as our design touch, or retire?
- **D8. Insights report body.** His Research page reduces the supervisor-gap report to a summary + "Request the full report". Our v1 page carries the full report with 5 chart exhibits. Options: (a) match him exactly, archive the exhibits; (b) keep the full report at `/research/supervisor-gap` as the thing "Request the full report" links to. Recommend (b) — zero content loss, matches his structure. Needs his OK since it adds a page.
- **D9. Privacy Policy / Terms / Accessibility Statement** footer links: his link to nowhere. Omit until real pages exist, or stub?
- **D10. Founders group photo** ("[img: Aedifica founders and institutional partners…]"): no asset. Request from client or omit the figure.
- **D11. FinalCTA headline** "New Jersey is building. Let's build the people who lead it." exists nowhere in the new file. It dies with FinalCTA unless Omar wants it reused on /contact.

## 7. Design-preservation checklist (apply throughout)

- Tokens, type, easings, VIEWPORT, section padding: per `DESIGN.md`. No Canela/Tiempos, no paper bg, no white cards, no wine/terracotta/blush layer, no rounded corners.
- Program colors: Explore=datum, Pathway=quarry, Launch=sediment, Rebuild=rebuild(-deep), **Pipeline=NEW token (D1)**. Services→home cards remain the source of truth.
- Background alternation re-planned per page (every page's section stack changed).
- Body text floors: anthracite/70+ on light, white/75+ on dark; datum-light on anthracite; deep variants under white text.
- All new interactive components (shell expand, filters, tooltips, print) keyboard-accessible, focus-managed, reduce-gated; content never hidden behind animation state.
- His a11y doctrine matches ours and is now content-adjacent ("color never carries meaning alone", "status carried by label and glyph") — honor it in the legend/chips design.
- Copy passes: his text verbatim; no em-dash substitution edits of our own (his text uses em dashes — they are HIS content and stay as written).
- Voice/labels: his CTA labels are verb-object already ("Scope a Launch engagement", "Sponsor a Rebuild cohort") — use verbatim.

## 8. Suggested build order

1. **Foundations**: pipeline color tokens; route scaffolding (`/programs/*`, `/experience`, `/families`, `/research`, `/contact`); navbar + footer restructure; redirects; metadata/schemas/sitemap refresh.
2. **Curriculum shell system** (component library first, with BB as the reference implementation).
3. **Program pages**: Explore → Pathway → Launch → Rebuild → Talent Pipeline (descending complexity for the shells; TP is trivial).
4. **Home** rebuild (incl. HeroPathway 5-node) + **Programs hub**.
5. **About** mega-page (+ sticky section bar) + **Contact**.
6. **Impact**, **Research**, **Experience**, **Families**.
7. Route deletions + component retirement + full sweep: content verification pass against the client file (per-section phrase sweep like 7/13's 163-phrase check), contrast audit, motion audit, `tsc` + build, mobile pass (esp. compare table + curriculum shells).

**Verification standard**: same as 7/13 — a systematic phrase sweep of the client file against the built site, section by section, before calling any page done.

---

## 9. Client meeting checklist (2026-07-19) — resolve before build starts

Status: Omar has adopted the plan above in principle. Client meeting today finalizes the open items. Nothing gets built until this section is answered.

### A. The About split (client raised it himself: "About is too big")

**Omar's proposal to bring to the meeting (recommended):**

1. **Who we serve (§14) → homepage**, as a 5th section (after The five programs, or after Approach). Rationale: the v2 homepage is a router ("find your door"); Who we serve names every audience, including the ones with no program card (families, funders, unions, philanthropy). It's compact (two columns, 9+9 items) and gives the homepage its human register. Homepage becomes Hero / Programs / Why / Approach / Who we serve — still lean.
2. **Principles & commitments (§13) → standalone page** (`/principles` or "How we work"). Rationale: the 5 principles + short forms are the client's strongest brand writing and deserve their own room; his own nav/footer already deep-link `#principles`; the 4 commitments are the operational core partners will quote back. Keeps the FourGates design + hover-wake treatment.
3. **Access & funding (§15) + FAQ (§16) → Contact page**, between the Partner CTA (§17) and the form (§18). Rationale: both answer the questions a prospective partner has at the moment of writing ("who pays?", "what does a partnership start with?"); the Contact page is currently thin (2 sections) and this makes it the complete partnership-mechanics page. FAQ-beside-form is a proven pattern.
4. **About keeps**: intro, Mission & Vision, Signature (EEE + Access/Evidence), organizational history, Origin, 4 strategic commitments, founders + bios + founder letter. Pure identity & people. Probably no sticky section bar needed anymore.

**Fallback** if the client dislikes new pages/moves: keep §12–§16 on About with the sticky in-page section bar (plan §3.12 as written).

### B. Decisions D1–D11 — quick reference with recommendations

| # | Question | Recommendation |
|---|---|---|
| D1 | Adopt mauve `#C6AAAF` as the Talent Pipeline program color (+ computed deep variant)? | Yes (his file is explicit); flag rebuild-color similarity |
| D2 | Launch pricing / 6-stage engagement content: confirmed gone? | Confirm deletion |
| D3 | Delete /apply (redirect → /contact)? | Yes |
| D4 | BB Vimeo video + instructor modal: keep inside Explore's BB shell? | Keep (our touch, zero content conflict) |
| D5 | v1 Impact story cards (3 narrative stories): confirmed dropped? | Confirm; quotes live on /experience |
| D6 | Rename routes to /programs/*? | Yes, now, pre-DNS/GSC |
| D7 | Brand video: keep on Approach and/or About origin? | Keep in one place (About origin) |
| D8 | Full supervisor-gap report (our 5 chart exhibits) as /research/supervisor-gap behind "Request the full report"? | Yes — zero content loss. NOTE: client says he's doing more work on Research; hold /research build until his revision lands |
| D9 | Privacy / Terms / Accessibility footer links: omit or stub? | Omit until real content exists |
| D10 | Founders group photo asset | Request from client (or omit the figure) |
| D11 | v1 FinalCTA headline dies? | Yes (his §17 replaces it) |

### C. Other things to confirm while he's in the room

1. **`info@edfca.com`** — is it live? Set up how? (Reminder: plain GoDaddy forwarding covers incoming only; replying *as* info@ needs a paid mailbox + Gmail "Send mail as". Also: point Basin notifications at the right inbox.)
2. **Phone number** — still `[ADD]`; timeline? (The Contact info-rows and footer have slots waiting.)
3. **Domain/DNS timing** — route renames + new sitemap should land before GSC submission; ideal to coordinate.
4. **Research page** — he said more work is coming on "the research gap thing." Confirm scope + ETA so /research is built once, last.
5. **The `[ADD]` placeholders** — confirm our standing policy (skip / "announced when confirmed") still applies to: safety/background-check language (Explore, Families, FAQ), scheduling link, NY funding routes, additional team roles.
6. **Old FAQ content** — v2 keeps 9 questions; ~20 v1 answers (eligibility detail, participation logistics, cost specifics) now exist nowhere. Does he want any resurrected, or archived for the post-cohort era?
7. **Repetition flag** (mention once, his call): "Curriculum without X is a class", "the metric is the moat", "designed with them, never at them" each appear 3+ times across the file — fine per page, noticeable sitewide.
8. **Compare-table mobile** — his table is the entire /programs page; confirm he's fine with a stacked-card presentation on phones (same content).

### D. After the meeting

Record every answer in this file (amend the relevant D-item / section spec), then build per §8 order — with /research moved to last if his revision is pending.

---

## 10. GoDaddy go-live runbook (email forwarding + pointing edfca.com at Netlify)

**Rule that governs everything: keep DNS hosted AT GoDaddy.** Do NOT switch nameservers to Netlify DNS — that would silently kill GoDaddy's email-forwarding MX records. We only add/edit individual DNS records.

**cPanel note:** cPanel belongs to GoDaddy's web-hosting product and is NOT needed — the site is on Netlify, so everything happens in the main dashboard (My Products → Domains). Sanity checks: (a) nameservers should be GoDaddy defaults (`nsXX.domaincontrol.com`) — if not, DNS lives wherever they point; (b) if the client bought a GoDaddy hosting plan alongside the domain, it's dead weight — ask at the meeting and cancel the hosting (never the domain), after checking no mailboxes live in it.

### Part 1 — info@edfca.com forwarding (free with the domain)

1. Sign in at godaddy.com → account menu → **My Products** → **Domains** → select **edfca.com**.
2. On the domain's settings page find **Email Forwarding** (sidebar or under "Additional Settings"; also reachable from My Products under Email). Choose **Add / Create forward**.
3. Create: `info@edfca.com` → forwards to the destination Gmail (Karim's — confirm which inbox at the meeting).
4. GoDaddy auto-creates the required **MX records** when DNS is with them (they point to `smtp.secureserver.net` / `mailstore1.secureserver.net`). If it warns about missing MX, accept the "set up automatically" option.
5. Test after ~15–30 min: send a mail from an unrelated account to info@edfca.com; check inbox AND spam at the destination.
6. Known limitation (already flagged to client): forwarding is **incoming only**. To *reply as* info@edfca.com, he needs a paid mailbox (GoDaddy Microsoft 365 tier) + Gmail "Send mail as" with its SMTP credentials. Fine to skip if he's happy replying from Gmail.
7. Point **Basin's notification email** at the same destination inbox (Basin dashboard, no code).

### Part 2 — replace the GoDaddy parked page with the Netlify site

**Netlify side first:**
1. Netlify → the site (edfca.netlify.app) → **Domain management** → **Add a domain** → `edfca.com` (add `www.edfca.com` too; Netlify usually adds the alias itself). Set the primary domain (recommend apex `edfca.com`; www redirects).

**GoDaddy side:**
2. My Products → Domains → edfca.com → **DNS / Manage DNS** → Records.
3. **Delete/replace the parked records**: the default `A @ → Parked` record and the default `www` CNAME.
4. Add: **A record** — Name `@`, Value `75.2.60.5` (Netlify's load balancer), TTL default.
5. Add: **CNAME** — Name `www`, Value `edfca.netlify.app`, TTL default.
6. Make sure GoDaddy's own **Domain Forwarding** section is empty/off (it competes with the A record).
7. Leave the MX records from Part 1 untouched — A/CNAME and MX coexist fine.

**Back on Netlify:**
8. Domain management will verify DNS (minutes to a few hours; up to 48h worst case) and then auto-provision the **Let's Encrypt SSL cert**. When "HTTPS enabled" shows, the site is live on edfca.com.

### Part 3 — immediately after it resolves
- Verify `https://edfca.com` and `https://www.edfca.com` both load the site with a valid cert.
- Then the already-planned post-DNS list: submit sitemap in Google Search Console, set up the Google Business Profile, add `sameAs` links to the Organization schema.
- (Do the v2 route renames BEFORE the GSC sitemap submission so Google never indexes the old paths.)
