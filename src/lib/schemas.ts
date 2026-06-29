import { SITE_URL } from './config'

export const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Aedifica',
      url: SITE_URL,
      description:
        'Employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey.',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      // Replace with the Google Business Profile URL once created:
      // sameAs: ['https://www.google.com/maps?cid=YOUR_GBP_ID'],
      knowsAbout: [
        'construction management',
        'workforce development',
        'workforce pathways',
        'adult bridge cohorts',
        'grant strategy',
        'career pathway programs',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Aedifica',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Aedifica | Construction-Management Workforce Pathways for New Jersey',
      description:
        'Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export const SERVICES_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      ],
    },
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/services`,
      name: 'Services | Aedifica Construction-Management Workforce Pathways',
      description:
        'All five Aedifica programs in one view: Rebuild for adults, Launch for institutions, Explore and Pathway for students and schools, and Talent Pipeline for employers. Construction-management pathways across New Jersey.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      provider: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export const REBUILD_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOccupationalProgram',
      name: 'Aedifica Rebuild',
      description:
        'A 12-week adult bridge cohort for credible entry and progression in construction-management careers in New Jersey.',
      provider: { '@id': `${SITE_URL}/#organization` },
      timeToComplete: 'P12W',
      educationalProgramMode: 'in-person',
      occupationalCategory: 'Construction Manager',
      educationalCredentialAwarded: 'Certificate of Completion',
      areaServed: { '@type': 'State', name: 'New Jersey' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Rebuild', item: `${SITE_URL}/services/rebuild` },
      ],
    },
  ],
}

export const LAUNCH_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Aedifica Launch',
      description:
        'Fixed-fee workforce grant strategy and proposal-authoring support for New Jersey community organizations, education institutions, and training providers.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Workforce Grant Strategy and Proposal Authoring',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Community organizations, education institutions, and workforce training providers in New Jersey',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Launch', item: `${SITE_URL}/services/launch` },
      ],
    },
  ],
}

export const PATHWAY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOccupationalProgram',
      name: 'Aedifica Pathway',
      description:
        'A high-school construction-management curriculum designed for career readiness and future articulation in New Jersey.',
      provider: { '@id': `${SITE_URL}/#organization` },
      educationalProgramMode: 'on-campus',
      occupationalCategory: 'Construction Manager',
      educationalLevel: 'High School',
      areaServed: { '@type': 'State', name: 'New Jersey' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Pathway', item: `${SITE_URL}/services/pathway` },
      ],
    },
  ],
}

export const TALENT_PIPELINE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Aedifica Talent Pipeline',
      description:
        "Aedifica's Talent Pipeline connects New Jersey construction employers with prepared emerging construction-management talent through employer-informed pathways.",
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Employer Talent Engagement and Construction Workforce Pipeline',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      audience: {
        '@type': 'Audience',
        audienceType: 'Construction employers and emerging construction-management talent in New Jersey',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Talent Pipeline',
          item: `${SITE_URL}/services/talent-pipeline`,
        },
      ],
    },
  ],
}

export const EXPLORE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOccupationalProgram',
      name: 'Aedifica Explore',
      description:
        'Hands-on engineering and construction-management career discovery for middle- and high-school students through workshops, summer camps, and school partnerships in New Jersey.',
      provider: { '@id': `${SITE_URL}/#organization` },
      educationalProgramMode: 'on-campus',
      educationalLevel: 'Middle School and High School',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      teaches:
        'Engineering design, construction-management careers, infrastructure, sustainability, teamwork, and project thinking',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Explore', item: `${SITE_URL}/services/explore` },
      ],
    },
  ],
}

export const IMPACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/impact`,
      name: 'Student Stories & Impact | Aedifica',
      description:
        'Real outcomes from Aedifica programs: student stories, verified impact data, and the measurable shifts the Building Bridges cohort showed in Spring 2025.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Student Stories & Impact', item: `${SITE_URL}/impact` },
      ],
    },
  ],
}

export const INSIGHTS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      url: `${SITE_URL}/insights`,
      name: 'Insights & Research | Aedifica Workforce Pathway Strategy',
      description:
        'Research and perspectives on New Jersey construction-management workforce pathways, employer validation, accountability frameworks, and talent advancement.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      specialty: 'Construction-management workforce development research and strategy in New Jersey',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Insights & Research', item: `${SITE_URL}/insights` },
      ],
    },
  ],
}

export const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      url: `${SITE_URL}/about`,
      name: 'About Aedifica | We Build the Builders',
      description:
        'Aedifica builds construction-management workforce pathways for overlooked talent in New Jersey through disciplined employer partnerships and measurable outcomes.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
      ],
    },
  ],
}

export const PARTNER_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      url: `${SITE_URL}/partner`,
      name: "Partner With Aedifica | Build New Jersey's CM Workforce Pathway",
      description:
        'Partner with Aedifica as an education institution, workforce organization, employer, or funding partner to build accountable construction-management pathways in New Jersey.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Partner With Us', item: `${SITE_URL}/partner` },
      ],
    },
  ],
}

export const BB_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      name: 'Bridging Brilliance: Engineering the Hudson',
      description:
        'A twelve-week middle school engineering program where students design, model, build, test, and present a sustainable bridge across the Hudson River. Aligned with NGSS, Common Core Math and ELA, and NJ 21st Century Life and Careers standards.',
      provider: { '@id': `${SITE_URL}/#organization` },
      educationalLevel: 'Middle School',
      teaches:
        'Engineering design, bridge typologies, digital modeling, physical prototyping, load testing, data analysis, and technical communication',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'on-campus',
        duration: 'P12W',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Bridging Brilliance',
          item: `${SITE_URL}/curriculum/bridging-brilliance`,
        },
      ],
    },
  ],
}

export const APPLY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/apply`,
      name: 'Apply to an Aedifica Program',
      description:
        'Apply to Aedifica construction-management pathway programs: Explore, Pathway, Rebuild, Launch, and Talent Pipeline. Eligibility overview, materials checklist, and next steps.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Apply', item: `${SITE_URL}/apply` },
      ],
    },
  ],
}

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      url: `${SITE_URL}/faq`,
      name: 'FAQ & Eligibility | Aedifica',
      description:
        'Answers to common questions about Aedifica programs, eligibility, applications, cost, and participation.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'FAQ & Eligibility', item: `${SITE_URL}/faq` },
      ],
    },
  ],
}
