# Aedifica Website

A complete, production-ready website for **Aedifica** — New Jersey's construction-management
workforce pathway architect. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS,
and deployable to Netlify.

**Tagline:** We build the builders. · **Mantra:** Earth. Engineers. Education.

---

## 1. Running the project

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Node 18+ recommended. Fonts (Inter + IBM Plex Mono) are **self-hosted** via `@fontsource`
packages, so the build does not depend on Google Fonts being reachable.

## 2. Deploying to Netlify

The repo includes `netlify.toml` configured for the official Next.js runtime
(`@netlify/plugin-nextjs`). Connect the repo in Netlify and it will build automatically.

**Partner form (Netlify Forms):** `src/components/PartnerForm.tsx` is already marked up for
Netlify Forms (`data-netlify="true"`, hidden `form-name`, honeypot field). For the preview it
uses an `onSubmit` handler that shows the confirmation message without a real POST. **Before
launch, remove the `onSubmit` handler** (one clearly-commented line) so the form POSTs natively
to Netlify. If you prefer a different handler (e.g. an API route or a third-party endpoint),
swap the form's `action`/`method` accordingly — it's isolated in that one component.

## 3. Architecture

```
src/
  app/                      15 routes (App Router)
    page.tsx                /
    services/page.tsx       /services
    services/[slug]/        /services/{rebuild,launch,pathway,talent-pipeline,explore}
    impact/page.tsx         /impact
    impact/building-bridges/  /impact/building-bridges
    insights/page.tsx       /insights
    insights/[slug]/        /insights/{7 articles}
    about/ partner/ privacy/ accessibility/
    layout.tsx globals.css
  components/               Header, Footer, Hero, sections (PageIntro/CTASection/AudienceRouter),
                           cards (Program/Metric/Link/Insight/Project/FeatureList),
                           diagrams (FourGatesPathway/OutcomeCommitment/Timeline),
                           blocks (ServiceComparisonGrid/ExternalResourceLinks),
                           PartnerForm, primitives (Container/SectionEyebrow/TickRule/TrustNote/Breadcrumbs)
  data/                    site, navigation, audiences, services, projects (+metrics),
                           insights, externalResources  — all content lives here
  lib/seo.ts               pageMeta() helper for per-page title/description/OG/canonical
```

All copy is in the `data/` files and page components. To edit content, start there —
the components are presentational and driven by the data objects.

## 4. Design system

Concept: **Architectural Evidence. Human Momentum.** Institutional, public-accountability-report
feel. Charcoal ink (`#1F2933`), warm paper/cream, one disciplined indigo accent (`#6667AB`).
Inter for text, IBM Plex Mono for the "plan-mark" eyebrows and data labels. Signature motifs:
the **measurement-tick rule** divider, faint **blueprint grid** on dark surfaces, structural
truss line-art, and **outcome-reporting cards** that separate *verified* from *will-report*.
Tokens live in `tailwind.config.ts` and `src/app/globals.css`.

---

## 5. Assumptions made

1. **Brand palette & fonts.** The strategic briefing (May 2026) is treated as the controlling
   source. Palette continues the established charcoal/cream/indigo system; per the brief, the
   Inter/Söhne/Helvetica fallback stack is used (no proprietary Aedifica Grotesk file was supplied).
2. **Leadership.** Three co-founders are shown — Karam, Silva, Stephenson — per the strategic
   briefing. The master copy template separately names Evelyne Chedrawi as a co-founder; this is a
   **source conflict**. The newer, controlling briefing lists three, so the About page uses those
   three. Confirm the final roster and titles before launch.
3. **Stage labels.** Rebuild and Launch are "Launch-stage"; Pathway, Talent Pipeline, and Explore
   are "Expansion-stage," per the briefing's Year-1/Year-2 sequencing.
4. **Building Bridges figures.** 21 students, 10-week program, 22% of HIA enrollment, four capstone
   teams, 55% of eleven eighth-graders into UCVTS, Year-2 collaboration — all taken directly from
   supplied reporting. (The briefing calls it an "8-week" program; the detailed reporting says
   "10-week." The 10-week figure from the detailed report is used; **reconcile before launch.**)
5. **UCVTS = advanced-STEM next step**, never workforce placement. Stated that way everywhere.
6. **Contact.** `info@edfca.com` is shown for general inquiries (from source). All other emails,
   phone, address, office hours, and social links are placeholders.
7. **Insights articles.** Bodies are original, claim-disciplined draft copy written to the brief's
   seven titles — positions and analysis, not unsupported statistics.
8. **Domain.** `metadataBase` is set to `https://edfca.netlify.app`. Update to the final domain.

## 6. Launch checklist (verify before publishing)

- [ ] **Swap the partner-form handler** to native Netlify POST (remove the `onSubmit` in `PartnerForm.tsx`).
- [ ] **External resource URLs.** Every entry in `src/data/externalResources.ts` is a placeholder
      marked "needs official URL verification before launch" (NJDOE CTE/Perkins V, NJEDA, NJDOL/
      PACE/GAINS/NJBUILD, NCCER, OSHA, Stevens, HIA). Add official URLs or remove.
- [ ] **Publication approvals.** Confirm Stevens Institute and Hillside Innovation Academy /
      Building Bridges references are approved for public use. The Building Bridges page already
      carries a verification note.
- [ ] **Credential language.** Keep OSHA / NCCER / LEED / CAPM references conditional until
      authorization is confirmed (NCCER sponsorship and OSHA Outreach authorization were "in
      progress" in the source). Do not state authority that doesn't yet exist.
- [ ] **Reconcile the program length** (8-week vs 10-week) and any 20-vs-21 participant discrepancy
      before citing figures publicly.
- [ ] **Leadership roster & titles**; add advisory board as confirmed; add headshots.
- [ ] **Contact details** (emails, phone, address, hours, social) and **privacy/accessibility
      contact** placeholders.
- [ ] **Privacy policy** reviewed by counsel; set the "last updated" date.
- [ ] **Standards codes** on any curriculum content are alignment targets to confirm against current
      NJSLS/NYS revisions.
- [ ] Replace blueprint/truss CSS motifs with licensed photography only if cleared (no stock
      hard-hat imagery, per brand).
- [ ] Final domain set in `src/data/site.ts` and `metadataBase`.

## 7. Recommended external links — and where they go

Managed centrally in `src/data/externalResources.ts`; rendered by `<ExternalResourceLinks>`.

| Resource | Page placement | Why |
|---|---|---|
| NJDOE CTE / Perkins V | Pathway; Funding/state section | Program-of-study & CTE outcome context for districts |
| NJEDA workforce/economic-development grants | Launch; Funding/state | Funding pathways for institutional partners |
| NJDOL apprenticeship / PACE / GAINS / NJBUILD | Launch; Rebuild | Apprenticeship alignment & grant context |
| NCCER credentials | Rebuild (conditional) | Credential-aligned; mark pending authorization |
| OSHA Outreach Training | Rebuild (conditional) | Safety credential; describe accurately |
| Stevens Institute | Impact / Building Bridges (if approved) | Prior delivery partner |
| Hillside Innovation Academy | Building Bridges (if approved) | Prior delivery site |

A "Public-sector resources" group can also be surfaced in the footer.

## 8. How the site attracts each audience

- **Schools & districts** land on **Pathway** (CTE/Perkins V alignment, teacher PD, capstones,
  district reporting) and reach it from the nav, services comparison, the decision tree, and the
  audience router. Parents-and-schools cross-link through Explore → Building Bridges.
- **NJDOE / CTE stakeholders** find outcomes-reportable language on **Impact** and **Launch**, plus
  the Insights article on district pathways — framed around program-of-study culmination.
- **NJEDA & grant providers** are routed to **Launch** (grant strategy, logic model, KPI dashboard,
  compliance-aware reporting) and **Impact** (the Outcome Reporting Commitment), with a dedicated
  "Funding / State Partner" route and conditional funding fields on the form.
- **Parents** reach **Explore** and **Building Bridges** quickly (nav → Impact, Explore CTAs, and a
  Parent/Family audience route) — credible, hands-on STEM without overstatement.
- **Employers & contractors** find **Talent Pipeline** (role validation, interview days, capstone
  review, *no guaranteed hires*) and **Rebuild**, with an Employer audience route and employer-
  specific form fields.
- **Workforce & community organizations** find **Rebuild** and **Launch** (the four-gate model,
  recruitment/fiscal/employer/articulation partner structure) via the Workforce route.
- **Learners** get a low-friction Rebuild interest path and a Learner audience route.

Every page ends in a relevant CTA, and every major page carries the "Which part of the pathway do
you represent?" audience router.

## 9. Claim-discipline summary

Nothing planned is presented as proven. No NJDOE/NJEDA/NJDOL/NCCER/OSHA/employer/grant approval is
implied. Credential language is conditional. Prior educational delivery (Building Bridges, Stevens
pre-college) is framed as engagement evidence and delivery foundation — **not** as Aedifica
workforce-placement proof. Employment, placement, retention, credential, and wage outcomes appear
only as **future reporting commitments** (the "will report" metric cards and the Outcome Reporting
Commitment section), reported on consistent definitions and never redefined.
