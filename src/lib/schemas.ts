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

export const PROGRAMS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE_URL}/programs` },
      ],
    },
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/programs`,
      name: 'Programs | Aedifica Construction-Management Workforce Pathways',
      description:
        'All five Aedifica programs in one view: Explore and Pathway for students and schools, Launch for institutions, Rebuild for adults, and Talent Pipeline for employers. Construction-management pathways across New Jersey.',
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
        'A 12- or 24-week adult bridge cohort for credible entry and progression in construction-management careers in New Jersey.',
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
        { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE_URL}/programs` },
        { '@type': 'ListItem', position: 3, name: 'Rebuild', item: `${SITE_URL}/programs/rebuild` },
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
        'Institutional construction-management pathway architecture anchored by the 16-week BUILD NJ GREEN curriculum, for workforce boards, county colleges, agencies, and institutions in New Jersey.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Institutional Pathway Architecture',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Workforce boards, county colleges, agencies, and employers standing up institutional pathways in New Jersey',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE_URL}/programs` },
        { '@type': 'ListItem', position: 3, name: 'Launch', item: `${SITE_URL}/programs/launch` },
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
        { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE_URL}/programs` },
        { '@type': 'ListItem', position: 3, name: 'Pathway', item: `${SITE_URL}/programs/pathway` },
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
        { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE_URL}/programs` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Talent Pipeline',
          item: `${SITE_URL}/programs/talent-pipeline`,
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
        { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE_URL}/programs` },
        { '@type': 'ListItem', position: 3, name: 'Explore', item: `${SITE_URL}/programs/explore` },
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

export const RESEARCH_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      url: `${SITE_URL}/research`,
      name: 'Aedifica Research',
      description:
        'Aedifica\'s research agenda: two investigations in progress (the supervisor gap in New Jersey\'s green-construction workforce, and the Bridging Brilliance case study) plus a five-publication research archive, R-01 through R-05.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      specialty: 'Construction-management workforce development research and strategy in New Jersey',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Research', item: `${SITE_URL}/research` },
      ],
    },
  ],
}

export const SUPERVISOR_GAP_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ScholarlyArticle',
      url: `${SITE_URL}/research/supervisor-gap`,
      name: 'The Supervisor Gap | Aedifica Research',
      description:
        'Why New Jersey\'s building-electrification mandates will require an estimated 2,000 to 3,000 green-fluent construction managers by 2030 against a credentialed supply near zero, and the pathway architecture required to close the distance.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      specialty: 'Construction-management workforce development research and strategy in New Jersey',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Research', item: `${SITE_URL}/research` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'The Supervisor Gap',
          item: `${SITE_URL}/research/supervisor-gap`,
        },
      ],
    },
  ],
}

export const BB_RESEARCH_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      url: `${SITE_URL}/research/bridging-brilliance`,
      name: 'Bridging Brilliance: Lessons from the Instructor',
      description:
        'Ten lessons on trust, ownership, and opportunity in STEM learning, from the instructor who delivered HIA Bridging Brilliance.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Research', item: `${SITE_URL}/research` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Bridging Brilliance',
          item: `${SITE_URL}/research/bridging-brilliance`,
        },
      ],
    },
  ],
}

export const EXPERIENCE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/experience`,
      name: 'Learner Experience | Aedifica',
      description:
        "In their own words: reflections from Aedifica Explore's Building Bridges cohort and Aedifica Pathway's Civil Engineering & Design Pathway students at Stevens Institute of Technology.",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Learner Experience', item: `${SITE_URL}/experience` },
      ],
    },
  ],
}

export const FAMILIES_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/families`,
      name: 'For Families | Aedifica',
      description:
        'A real path into careers that build our communities, at no cost to your child. How Aedifica works for parents and families, from middle school through adult programs.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'For Families', item: `${SITE_URL}/families` },
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
        'A twelve-week middle school engineering program where students design, model, build, test, and present a sustainable bridge across the Hudson River. Aligned with five standards frameworks: NGSS/NJSLS-Science, NJSLS Mathematics, NJSLS English Language Arts, Design, Technology & CS, and Career Readiness.',
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
