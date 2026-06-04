# AEDIFICA — COMPLETE BUILD REFERENCE
> Keep this open while building. Everything you need in one place.

---

## 1. WHAT IS AEDIFICA (30-second version)

Construction-management workforce education company in NJ/NY.
They train overlooked adults (ex-prisoners, veterans, returning mothers) for the **office/management side** of construction — not labor.
Tagline: **"We build the builders."**
State of NJ approached them + is deploying $100M+ in this space.
They are pre-revenue / pre-launch — no cohorts run yet.

**Three founders from Stevens Institute of Technology:**
- **Dr. Karim Karam** — Co-Founder & CEO
- **Dr. Nicole Silva** — Co-Founder & Community Partnerships Lead
- **Kimi Stephenson** — Co-Founder & Community Program Lead

---

## 2. PAGES TO BUILD (14 total)

| Page | URL | Priority |
|---|---|---|
| Home | `/` | ✅ Launch |
| Services Overview | `/services` | ✅ Launch |
| Rebuild | `/services/rebuild` | ✅ Launch |
| Launch | `/services/launch` | ✅ Launch |
| Pathway | `/services/pathway` | ✅ Launch (coming Y2 label) |
| Talent Pipeline | `/services/talent-pipeline` | ✅ Launch (coming Y2 label) |
| Explore | `/services/explore` | ✅ Launch (coming Y2 label) |
| Impact | `/impact` | ✅ Launch |
| Insights | `/insights` | ✅ Launch |
| About | `/about` | ✅ Launch |
| Partner With Us | `/partner` | ✅ Launch |
| Privacy | `/privacy` | ✅ Launch |
| Accessibility | `/accessibility` | ✅ Launch |

---

## 3. DESIGN SYSTEM

### Colors
```css
/* PRIMARY */
--color-datum: #6667AB;          /* Periwinkle purple — primary accent */
--color-quarry: #8A9A93;         /* Muted sage green — supporting */
--color-patina: #C17F5E;         /* Warm terracotta/copper — CTA accent */

/* NEUTRALS */
--color-snow: #F9F8F6;           /* Near white — primary background */
--color-bone: #F0EDE8;           /* Warm off-white — section alternates */
--color-sediment: #B5B2AC;       /* Warm gray — borders, subtle text */
--color-anthracite: #1C1C1E;     /* Near black — primary text */

/* SECONDARY */
--color-sage-light: #D4DDD9;     /* Light sage — hover states */
```

### Typography
- **Headlines:** Newsreader (Google Fonts serif) — tight tracking, 0.88–0.95 leading
- **Body / UI:** Hanken Grotesk (Google Fonts) — 15.5–16px, 50–75 chars per line
- **Labels / Data:** Hanken Grotesk uppercase with letter-spacing
- **Fallback chain:** `'Hanken Grotesk', 'Inter', Helvetica Neue, Arial, sans-serif`

> Note: Brand book mentions "Aedifica Grotesk" custom font — Karim hasn't provided files yet. Use Hanken Grotesk until he does.

### Logo
- Geometric keystone shape (reads as A + keystone + doorway)
- Periwinkle `#6667AB` wedge accent on the mark
- **Karim hasn't provided SVG yet — placeholder until received**

---

## 4. DESIGN DIRECTION

**Concept:** "Architectural Evidence. Human Momentum."

**Feel:** Institutional authority meets editorial publication. Think high-end consultancy × government accountability report × workforce credibility.

**NOT:** Startup-y, charity-like, generic education branding, hard hat stock photos, handshakes.

**Layout principles:**
- Section numbers in large faded type (01, 02, 03) behind content
- Asymmetric image placement — offset, clip-path angle on left edge
- Grid-based like architectural drawings: labeled sections, disciplined dividers
- Generous white space
- Hero: pure typography on `--color-snow` background (no video, no gradient mesh)

**Photography rules (for stock placeholders):**
- Documentary style — real people mid-task
- Show people studying drawings, tablets, models
- Diverse, shown with competence — NOT charity poster style
- No posed hard hats, no handshakes, no active construction site

---

## 5. NAVIGATION

**Header:**
```
AEDIFICA · We build the builders.    [Services] [Impact] [Insights] [About] [Partner With Us]    [Start a Partnership Conversation] ← CTA button
```

**Footer columns:**
- Build the Pathway → Rebuild · Launch · Pathway · Talent Pipeline · Explore
- Evidence & Accountability → Projects & Impact · Insights & Research · Outcome Reporting Commitment
- Partner → Education · Workforce & Community · Employers · Funding & State
- Organization → About · Contact · Privacy · Accessibility

---

## 6. SEO METADATA (all pages)

| Page | Title | Meta Description |
|---|---|---|
| Home `/` | Aedifica \| Construction-Management Workforce Pathways for New Jersey | Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey. |
| Services `/services` | Services \| Aedifica Construction-Management Workforce Pathways | Explore Aedifica Rebuild and Launch, the initial services building measurable construction-management pathways for New Jersey talent and partners. |
| Rebuild `/services/rebuild` | Aedifica Rebuild \| Adult Construction-Management Bridge Cohort in NJ | Rebuild is Aedifica's planned 12-week adult bridge cohort designed for credible entry and progression in construction-management-track careers. |
| Launch `/services/launch` | Aedifica Launch \| Workforce Grant Strategy & Proposal Authoring in NJ | Launch provides fixed-fee workforce grant strategy and proposal-authoring support for New Jersey community, education, and training organizations. |
| Pathway `/services/pathway` | Aedifica Pathway \| Future High-School Construction-Management Curriculum | Pathway is Aedifica's planned high-school construction-management curriculum offering, designed for career readiness and future articulation after initial evidence. |
| Talent Pipeline `/services/talent-pipeline` | Aedifica Talent Pipeline \| Employer Engagement for Emerging CM Talent | Aedifica's planned Talent Pipeline connects construction employers with prepared emerging construction-management talent through employer-informed pathways. |
| Explore `/services/explore` | Aedifica Explore \| Construction & Infrastructure Career Exposure Modules | Explore is Aedifica's planned middle- and high-school exposure offering introducing construction, infrastructure, and digital construction careers. |
| Insights `/insights` | Insights & Research \| Aedifica Workforce Pathway Strategy | Research and perspectives on New Jersey construction-management workforce pathways, employer validation, accountability, and talent advancement. |
| Impact `/impact` | Projects & Impact \| Aedifica Delivery Foundation and Outcome Commitment | Review Aedifica's relevant educational delivery foundation, planned Rebuild reporting framework, and accountable partnership model. |
| About `/about` | About Aedifica \| We Build the Builders | Aedifica builds construction-management workforce pathways for overlooked talent through disciplined partnerships and measurable outcomes. |
| Partner `/partner` | Partner With Aedifica \| Build New Jersey's CM Workforce Pathway | Partner with Aedifica as an education institution, workforce organization, employer, or funding partner to build accountable construction-management pathways. |
| Privacy `/privacy` | Privacy Policy \| Aedifica | Learn how Aedifica handles information submitted through its institutional and partnership inquiry channels. |
| Accessibility `/accessibility` | Accessibility Statement \| Aedifica | Read Aedifica's commitment to an accessible digital experience for partners, learners, and the public. |

---

## 7. HOMEPAGE COPY (complete)

### Hero
**Eyebrow:** CONSTRUCTION-MANAGEMENT WORKFORCE ARCHITECTURE · NEW JERSEY

**H1:** New Jersey needs a construction-management workforce pathway. We are building it.

**Subheading:** Aedifica connects overlooked talent, education institutions, workforce partners, and employers through disciplined, credential-aligned programs designed for credible entry, advancement, and measurable outcomes.

**CTA 1:** Partner with Aedifica
**CTA 2:** Explore Aedifica Rebuild

**Trust note (small):** Initial Year 1 focus: Rebuild adult bridge cohorts and Launch grant strategy services. Expansion offerings follow credible outcome evidence.

---

### Credibility Bar — "A pathway built around accountability"
- **Employer-informed design** — role relevance and interview commitments before cohort launch.
- **Advancement-focused preparation** — realistic entry roles with documented progression routes.
- **Outcome transparency** — completion, credential, interview, placement, retention, and continuing-education results reported distinctly.
- **New Jersey focus** — designed for the institutions, communities, and employers of the NJ / NY metropolitan construction market.

---

### Problem Section
**Eyebrow:** THE GAP

**H2:** The talent exists. The structured route does not.

New Jersey's construction workforce system has important entry programs and strong four-year construction-management education. Between them sits a missing channel: a practical, employer-facing route for capable adults and students to prepare for construction-management-track work such as project administration, estimating support, project controls, BIM coordination, scheduling support, safety documentation, and field leadership progression.

This is not a statement that learners lack potential. It is a statement that the system has not yet built a sufficiently clear pathway to advancement.

**Callout:** A pathway is credible only when it connects preparation to employer relevance, articulation opportunities, and outcomes that can be reported honestly.

---

### Solution Section
**Eyebrow:** THE AEDIFICA MODEL

**H2:** Workforce architecture, not isolated training.

Aedifica designs the connections a pathway requires: recruitment and support partners who reach overlooked talent; institutions and funding partners capable of sustaining delivery; employers who validate roles and interview prepared completers; and articulation or apprenticeship pathways that make advancement tangible.

Training matters. What surrounds training determines whether it leads somewhere.

**3 sub-columns:**
1. **Prepare learners for relevant work** — Rebuild is designed around practical construction-management literacy: documentation, digital tools, estimating and scheduling foundations, supervisory communication, safety-related preparation where appropriate, capstone experience, and interview readiness.
2. **Align institutions around delivery** — Launch helps community organizations, colleges, districts, and training providers pursue workforce and apprenticeship-related funding with a credible program strategy and measurable outcomes framework.
3. **Publish what happens next** — Aedifica intends to publish future cohort outcomes with clarity: what was completed, what credentials were achieved where applicable, who interviewed, what employment categories followed, what retention shows, and what additional education or apprenticeship progression occurred.

---

### Four Launch Gates Section
**Eyebrow:** FROM READINESS TO ADVANCEMENT

**H2:** A disciplined pathway requires four commitments before instruction begins.

**01 — Recruitment and community support**
A community or recruitment partner helps identify participants and define attendance support, case-management coordination, supportive services, and data responsibilities.

**02 — Funding and fiscal alignment**
A funding or fiscal partner establishes how the cohort is supported, administered, and reported—before delivery obligations begin.

**03 — Employer commitment**
Participating employers help validate role relevance, inform capstone expectations, and commit to a defined interview opportunity for qualified completers.

**04 — Articulation or apprenticeship pathway**
A signed progression route with an apprenticeship sponsor, union local, county college, or employer training program creates a credible next step beyond completion.

**Section close:** Curriculum without these commitments is a class. Aedifica is designed to build a pathway.

**CTA:** Discuss a Founding Partnership

---

### Services Section
**Eyebrow:** SERVICES

**H2:** Focused first. Scalable after proof.

**Aedifica Rebuild** — A 12-week adult bridge cohort for construction-management-track opportunity. → Explore Rebuild

**Aedifica Launch** — Grant strategy for workforce programs built to report outcomes. → Explore Launch

**Expansion Pathways** — Pathway · Talent Pipeline · Explore. School curriculum, employer membership infrastructure, and student exposure modules designed to expand after credible Cohort 1 outcomes establish the foundation for scale. → View the expansion roadmap

---

### Role Ladder Section
**Eyebrow:** REALISTIC ADVANCEMENT

**H2:** Entry is the beginning of the pathway—not the promise of an instant title.

| Stage | Timing | Illustrative roles |
|---|---|---|
| Immediate opportunity | 0–90 days | Field office assistant; project administration trainee; safety documentation assistant; apprentice candidate; estimating assistant; document-control assistant |
| Progression opportunity | 6–18 months | Project controls assistant; junior estimator; assistant scheduler; BIM coordination assistant; assistant superintendent trainee |
| Career-track progression | 2–4 years | Assistant superintendent; field engineer; project engineer; scheduler; estimator; foreperson-to-supervisor pathway |

**Microcopy:** Roles are illustrative pathway targets, not guarantees of placement or advancement. Aedifica will report actual future outcomes as they occur.

---

### Outcomes & Accountability Section
**Eyebrow:** MEASUREMENT

**H2:** Outcomes belong on the record.

Aedifica is being built on a clear principle: workforce investment must be accountable to learners, employers, and institutional partners. Following an initial Rebuild cohort, the organization intends to publish outcomes in categories that matter and should never be blurred together.

**Future reporting categories:**
- Enrollment, attendance, and completion
- Credential preparation and attainment, where applicable and authorized
- Employer capstone participation and interviews
- Employment placement by role category and time period
- Apprenticeship or articulation outcomes
- Retention at defined milestones
- Continuing education outcomes reported separately from employment

**CTA:** View Our Impact Framework

---

### Partnership Section
**Eyebrow:** PARTNER WITH US

**H2:** A pathway is built by institutions that are ready to be accountable together.

**Education institutions** — Build student pathways connecting construction learning, career readiness, future credentials, and articulation possibilities.
→ Discuss an Education Partnership

**Workforce and community organizations** — Connect adult participants to a practical bridge cohort designed around employer relevance, support coordination, and advancement.
→ Discuss a Rebuild Cohort

**Employers** — Help validate the roles, participate in capstone experiences, and meet prepared emerging talent through an accountable interview model.
→ Become an Employer Partner

**Funding and state partners** — Support a measurable workforce model designed for credible reporting, employer linkage, and responsible scale.
→ Request an Institutional Briefing

---

### Prior Experience Section
**Eyebrow:** DELIVERY FOUNDATION

**H2:** Built on relevant educational delivery experience. Designed to prove future workforce outcomes.

Aedifica's expansion pathway design is informed by prior educational delivery experience: pre-college engineering workshops for high-school students delivered through Stevens Institute of Technology and the Hillside Innovation Academy / Bridging Brilliance STEM implementation. These experiences inform instructional design, student engagement, and community partnership readiness.

They are not presented as Aedifica workforce placement outcomes. Those results will be measured and reported only after Aedifica programming is delivered.

**CTA:** Review Projects & Impact

---

### Final Hero CTA
New Jersey can build the next generation of construction leadership from talent already here.

The pathway requires committed partners. Speak with Aedifica about recruitment, funding, employer participation, educational pathways, or future outcome reporting.

**CTA 1:** Start a Partnership Conversation
**CTA 2:** Request an Institutional Briefing

---

## 8. SERVICES PAGE COPY (complete)

**Eyebrow:** AEDIFICA SERVICES

**H1:** Services designed to build a pathway

Aedifica **Rebuild**, a 12-week adult bridge cohort designed for credible construction-management-track entry and advancement; Aedifica **Launch**, support for institutions pursuing workforce and apprenticeship-related funding.

**Section H2:** Start with delivery discipline.

Aedifica's initial focus is intentionally narrow. A workforce platform earns the right to scale after it secures committed partners, delivers responsibly, and publishes outcomes with integrity.

**Expansion section H2:** Expand after evidence, not before it.

Aedifica's future service platform is designed to carry validated learning into secondary education, employer partnerships, and earlier career exposure. These offerings are intended to scale after Cohort 1 outcome reporting provides credible evidence for expansion.

**Shared principles:**
- **Role relevance** — Program components must connect to real construction-management work and realistic progression opportunities.
- **Employer validation** — Employers should inform expectations, interact with learners, and help verify the relevance of preparation.
- **Institutional alignment** — Delivery must be aligned to recruitment capacity, funding structures, support services, and articulation opportunities.
- **Outcome accountability** — Aedifica intends to report what happens after instruction—clearly, consistently, and without substituting enrollment for impact.

---

## 9. REBUILD PAGE COPY (complete)

**Eyebrow:** YEAR 1 CORE OFFERING · ADULT BRIDGE COHORT

**H1:** A credible bridge into construction-management-track opportunity.

Aedifica Rebuild is a planned 12-week cohort designed for overlooked adults—including justice-impacted adults, returning mothers, veterans, and other learners seeking entry into construction-management-track work. Rebuild prepares participants for realistic initial roles, employer interaction, and documented progression routes over time.

**Who it serves H2:** Talent that has been outside the usual recruiting channel—not outside the opportunity.

**What participants learn H2:** Preparation grounded in the work.

Planned learning areas:
- OSHA-10 or OSHA-30 exposure/preparation
- NCCER Core pathway preparation
- Bluebeam and Procore Foundations
- BIM viewer literacy and digital plan navigation
- Project documentation, submittal, RFI, daily log, document-control fundamentals
- Foundational estimating and scheduling concepts
- Supervisory communication and professional jobsite coordination
- Employer-informed capstone activity
- Structured interview-readiness and interview week

**Credential note:** Credential availability will be presented only in accordance with confirmed authorization, partner arrangements, and actual participant attainment.

**Four Launch Gates** — same content as homepage, more detail
**Role Ladder** — same table as homepage
**Why institutional partners should support Rebuild**
**Employer value proposition**
**Planned reporting commitment**

**Final CTAs:** Discuss a Rebuild Partnership / Become an Employer Participant

---

## 10. LAUNCH PAGE COPY (complete)

**Eyebrow:** YEAR 1 CORE OFFERING · GRANT STRATEGY

**H1:** Fund workforce pathways that are designed to deliver—and report.

Aedifica Launch is a fixed-fee grant strategy and proposal-authoring service for community organizations, county colleges, school districts, and training providers pursuing workforce, apprenticeship, and career-pathway funding.

**Serves:**
- Community-based organizations developing employment or pre-apprenticeship programming
- County colleges connecting funding to credentials, articulation, and employment pathways
- Districts and vocational institutions pursuing career-connected learning resources
- Training providers refining an apprenticeship or construction workforce proposal

**Relevant funding categories:**
- Pre-apprenticeship in Career Education (PACE)
- Growing Apprenticeships in New Sectors (GAINS)
- New Jersey Economic Development Authority workforce opportunities
- Workforce Innovation and Opportunity Act Title I pathways
- Federal apprenticeship and workforce-related opportunities

**Deliverables:** Opportunity & eligibility review / Program architecture / Partner & evidence matrix / Narrative & proposal authoring / Budget & measurement alignment / Submission readiness review

**Final CTAs:** Discuss a Launch Engagement / Submit an Opportunity for Review

---

## 11. EXPANSION SERVICE PAGES (Pathway, Talent Pipeline, Explore)

All three follow same pattern:
- Clear "EXPANSION OFFERING" eyebrow label
- Honest about being Year 2+
- Present what it will be, not what it is
- Final CTA: Register Interest / Begin a Conversation

**Status label to show on each:**
- Pathway: "Expansion offering · informed by prior pre-college engineering delivery experience"
- Talent Pipeline: "Expansion offering · activates following outcome evidence"
- Explore: "Expansion / feeder offering · informed by prior local STEM implementation experience"

---

## 12. IMPACT PAGE — KEY CONTENT

Two completed prior experiences to feature:

**Case Study 1 — Stevens Pre-College Engineering Workshops**
- 5 years of delivery by Dr. Karam
- High school students
- Two one-week summer sessions continuing
- Informs Aedifica's secondary curriculum approach
- **Important label:** "Prior educational delivery experience — NOT Aedifica workforce outcomes"

**Case Study 2 — Hillside Innovation Academy / Bridging Brilliance**
- 8-week STEM program
- 21 students
- Delivered by Kimi Stephenson + Dr. Karam
- Extremely successful
- Informs Aedifica Explore modules
- Post-project report available on request
- **Same label:** "Prior delivery experience — NOT workforce outcome evidence"

**Future Outcome Reporting Framework table:**

| Category | Measure |
|---|---|
| Cohort participation | Enrollment, attendance, withdrawal, completion |
| Credential outcomes | Attainment where applicable and authorized |
| Employer interaction | Capstone participation, interviews |
| Employment outcomes | Placements by role category + time milestone |
| CM-track outcomes | Placements in supervisory-support roles |
| Apprenticeship/articulation | Verified entry or progression |
| Retention | Verified at defined milestones |
| Continuing education | Reported separately from employment |

---

## 13. ABOUT PAGE — KEY CONTENT

**Vision:** A New Jersey construction-management workforce built from talent the system overlooked—credentialed where applicable, placed when earned, and proven on the published record.

**Mission:** Aedifica designs and delivers construction-management career pathways—adult bridge cohorts, school curriculum, and employer pipelines—that move overlooked learners from classroom to jobsite, with outcomes reported on the record and employer validation built into the model.

**Core Values (8):**
1. Built, not borrowed
2. Technology-fluent by default
3. Equity is the strategy, not the side door
4. Outcomes over activity, honestly reported
5. Sustainable buildings, sustainable careers
6. Adult-learner respect
7. Partner deeply, compete narrowly
8. Built for New Jersey, designed to scale

**Team Bios:**

**Dr. Karim Karam — Co-Founder & CEO**
Leads construction-management education at Stevens Institute of Technology. Infrastructure and workforce leadership experience from Sarooj Construction Company across major infrastructure projects. Pre-college engineering workshops for HS students through Stevens.

**Dr. Nicole Silva — Co-Founder & Community Partnerships Lead**
Cross-sector workforce-development and partnership experience across Union and Essex counties. Documented relationship with Crystal Orr, CEO of Urban League of Union County. Cultivated the Stevens-HIA partnership.

**Kimi Stephenson — Co-Founder & Community Program Lead**
MS in Construction Engineering & Management from Stevens. Undergraduate from Rutgers University–New Brunswick. Co-delivered Bridging Brilliance STEM program at Hillside Innovation Academy.

> Note to Omar: Karim must approve final bios before publishing.

---

## 14. PARTNER PAGE — CONTACT FORM

**Four audience routes on the page:**

1. **Education institutions** → districts, charter networks, county colleges
2. **Workforce & community organizations** → CBOs, workforce boards, reentry orgs
3. **Employers** → GCs, specialty contractors, developers
4. **Funding & state partners** → state agencies, workforce boards, philanthropic funders

**Form fields (master form):**
- First name, Last name, Work email, Organization, Title/role
- Organization type (dropdown): Education / Workforce-community / Employer / Funding-state / Philanthropic / Other
- Partnership interest (dropdown): Rebuild / Launch / Pathway / Talent Pipeline / Explore / Outcome reporting / Institutional briefing / Other
- Geography / county served
- Timeline: Exploring / Within 3 months / Within 6 months / Next academic year / Funding deadline / Other
- Message: "What pathway need, opportunity, or commitment would you like to discuss?"
- Consent checkbox

**Conditional fields:**
- Funding opportunity name + due date (for Launch/funder inquiries)
- Roles of interest + employer participation type (for employers)
- Grade bands / learner population (for education)
- Target population + recruitment capacity (for CBOs)

---

## 15. INSIGHTS PAGE — 10 ARTICLE STUBS (titles + summaries)

1. The Missing Construction-Management Workforce Channel in New Jersey
2. From CTE to Construction Leadership: Building Measurable Student Pathways
3. Why Employer-Validated Capstones Matter
4. Apprenticeship Alignment as Workforce Strategy—not Marketing Language
5. Publishing Outcomes: The Accountability Standard Workforce Programs Need
6. Digital Construction Literacy for Emerging Talent
7. The Hidden Supervisory Talent Gap in Infrastructure Delivery
8. Designing Workforce Programs Around Retention, Not Enrollment
9. Four Launch Gates for an Accountable Adult Bridge Cohort
10. The Role Ladder: Making Advancement Visible Without Overpromising It

---

## 16. IMPORTANT COPY RULES (claim discipline)

**Use:**
- "preparing to launch"
- "designed to"
- "will report"
- "built around"
- "planned"
- "intended to"

**Never say:**
- "our graduates get hired within X days" (no cohorts run yet)
- "we've placed X people" (hasn't happened)
- "we partner with [org]" (unless signed + approved)
- "proven" or "leading" (unsubstantiated)

**Never combine:** employment + continuing education into one "placement" number.

---

## 17. TECH STACK

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Fonts:** Google Fonts (Newsreader + Hanken Grotesk)
- **Deployment:** Netlify
- **CMS:** Add later (Sanity recommended) — launch static first

---

## 18. COMPONENT LIST (to build)

- `Navbar` — logo + nav links + CTA button, sticky
- `Hero` — eyebrow + H1 + subheading + dual CTA + trust note
- `CredibilityBar` — 4 horizontal proof points
- `SectionLabel` — numbered eyebrow label (01, 02...)
- `FourGatesDiagram` — visual diagram of the 4 launch gates
- `RoleLadderTable` — 3-stage table with disclaimer
- `ServiceCard` — offering card with status label (Y1 vs expansion)
- `AudienceRouter` — 4-panel "which describes you" section
- `ImpactCard` — prior experience card with evidence label
- `InsightCard` — article preview card
- `PartnerForm` — master form with conditional fields
- `TeamCard` — founder bio card
- `Footer` — full 4-column footer
- `StatusBadge` — "Year 1 Core" / "Expansion Offering" chip

---

## 19. DESIGN INSPIRATION SITES

- **perscholas.org** — closest model (workforce training, dual audience)
- **yearup.org** — clean institutional feel
- **awwwards.com** — search "editorial" or "agency" for asymmetric layouts
- **godly.website** — modern curated references

**Hero direction:** Pure typography on `--color-snow`, large editorial H1, one offset documentary photo (clip-path left edge), periwinkle accent on one word.
