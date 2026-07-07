const email = 'hello@dianerdiana.dev';

export const themeConfig = {
  site: {
    name: 'Dian Erdiana',
    title: 'Dian Erdiana',
    description:
      'A structured software engineering portfolio focused on clear execution and implementation quality.',
    language: 'en',
    tagline: 'Engineering over aesthetics. Clarity over complexity.',
    email,
  },
  assets: {
    favicon: '/logo/logo.svg',
    faviconVersion: '2026-07-06',
    logo: '/logo/logo.svg',
    logoDark: '/logo/logo-dark.svg',
    defaultOgImage: '',
  },
  links: {
    home: '/',
    projects: '/projects',
    blog: '/blog',
    contact: '/#contact',
    resume: '/',
    email: `mailto:${email}`,
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
  navigation: {
    items: [
      { label: 'About', href: '/#about' },
      { label: 'Skills', href: '/#skills' },
      { label: 'Experience', href: '/#experience' },
      { label: 'Projects', href: '/projects' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/#contact' },
    ],
    cta: {
      label: 'Hire Me',
      href: `mailto:${email}`,
    },
  },
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Email', href: `mailto:${email}` },
    { label: 'Resume', href: '/' },
  ],
  pages: {
    home: {
      title: 'Dian Erdiana',
      description:
        'A structured software engineering portfolio focused on clear execution and implementation quality.',
    },
    projects: {
      title: 'Projects',
      description:
        'A collection of Dian Erdiana projects organized by category, problem, solution, outcome, and technology.',
      eyebrow: 'Projects',
      heading: 'A categorized view of selected engineering work.',
      descriptionText:
        'Each card is designed to show the problem context, implementation decisions, outcomes, and technologies used so projects are easy to compare.',
      indexTitle: 'Project index',
    },
    blog: {
      title: 'Blog',
      description:
        'A collection of Dian Erdiana articles about engineering, frontend work, portfolios, and technical decisions.',
      eyebrow: 'Blog',
      heading: 'Notes on engineering decisions and clear interfaces.',
      descriptionText:
        'Short articles about how structure, tradeoffs, and interface details can make software feel clearer and more trustworthy.',
      filtersLabel: 'Blog filters',
      sortTitle: 'Sorting',
      topicTitle: 'Topics',
      allTopicsLabel: 'All topics',
      perPageLabel: '10 articles per page',
      emptyState: 'No articles match the selected topic.',
      sortOptions: [
        { label: 'Newest', value: 'newest' },
        { label: 'Oldest', value: 'oldest' },
        { label: 'Most viewed', value: 'most-viewed' },
        { label: 'Shortest read', value: 'shortest-read' },
        { label: 'Longest read', value: 'longest-read' },
      ],
    },
    articleDetail: {
      backLabel: 'Back to blog',
      backHref: '/blog',
    },
  },
  sections: {
    hero: {
      eyebrow: 'Full-stack developer',
      heading: 'Building reliable software with calm, structured execution.',
      description:
        'I build web applications that are clean, maintainable, and grounded in strong technical decisions. This portfolio highlights my thinking process, measurable outcomes, and approach to solving engineering problems.',
      primaryCta: { label: 'View Projects', href: '/projects' },
      secondaryCta: { label: 'Contact', href: '#contact' },
      snapshot: {
        title: 'Engineering Snapshot',
        subtitle: 'Portfolio foundation',
        status: 'Available',
        items: [
          {
            title: 'Focus',
            description:
              'Maintainable products, practical architecture, clean delivery.',
          },
          {
            title: 'Current Stack',
            description:
              'Astro, React, TailwindCSS, TypeScript, database-backed apps.',
          },
          {
            title: 'Working Principle',
            description: 'Craftsmanship over hype. Clarity over complexity.',
          },
        ],
        metrics: [
          { value: '01', label: 'Foundation' },
          { value: '00', label: 'Client JS' },
          { value: 'SSG', label: 'Output' },
        ],
      },
    },
    about: {
      eyebrow: 'About',
      heading: 'Focused on dependable engineering.',
      paragraphs: [
        'I see software engineering as work that depends on clarity: understanding the problem, choosing the right tradeoffs, and executing with a structure that the next team can understand.',
        'This website is designed to present that way of thinking with calm focus. The homepage creates the first impression, while project details become the evidence: problems, technical decisions, outcomes, and lessons learned.',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      heading: 'A practical, maintainable stack.',
      description:
        'Skills are organized by work category so recruiters can scan them easily while leaving room for more specific data in future iterations.',
      groups: [
        {
          title: 'Frontend',
          items: ['Astro', 'React', 'TypeScript', 'TailwindCSS'],
        },
        {
          title: 'Backend',
          items: [
            'API design',
            'Authentication',
            'Validation',
            'Service structure',
          ],
        },
        {
          title: 'Database',
          items: [
            'Relational data',
            'Schema design',
            'Query planning',
            'Migrations',
          ],
        },
        {
          title: 'Cloud',
          items: [
            'Deployment',
            'Environment config',
            'Static delivery',
            'Runtime basics',
          ],
        },
        {
          title: 'DevOps',
          items: [
            'Build checks',
            'Version control',
            'Release discipline',
            'Debugging',
          ],
        },
        { title: 'Tools', items: ['Git', 'Node.js', 'npm', 'Documentation'] },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      heading: 'A workflow centered on impact.',
      description:
        'This section is prepared as a timeline. Until professional experience data is added, the content shows the working patterns that will support impact-focused writing instead of job-description copy.',
      entries: [
        {
          phase: 'Problem framing',
          title: 'Start with context before implementation',
          description:
            'Understand business goals, users, technical constraints, and the definition of done before choosing a solution.',
        },
        {
          phase: 'System design',
          title: 'Prefer clear structure over clever abstractions',
          description:
            "Create modules, data flows, and interfaces that can be understood later without depending on the original author's memory.",
        },
        {
          phase: 'Delivery',
          title: 'Ship in increments with visible quality gates',
          description:
            'Prioritize stable builds, measurable changes, and documentation for important decisions as complexity grows.',
        },
      ],
    },
    featuredProjects: {
      eyebrow: 'Featured Projects',
      heading: 'Project details will carry the portfolio.',
      description:
        'Project cards are intentionally large and structured so they can later be replaced with real case studies without changing the layout system.',
      cta: { label: 'View all projects', href: '/projects' },
    },
    articles: {
      eyebrow: 'Articles',
      heading: 'Notes on craft and clarity.',
      description:
        'Short notes on engineering, interfaces, and technical decision-making.',
      cta: { label: 'View all articles', href: '/blog' },
    },
    certificates: {
      eyebrow: 'Certificates',
      heading: 'Relevant proof, carefully curated.',
      description:
        'This grid is intentionally concise so certificates do not take over the page. Final data can be replaced with certificates that are genuinely relevant.',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Let us talk when clarity matters.',
      description:
        'For interviews, collaboration, or technical discussions, use one of the channels below. The form on the right only loads when this section is visible to keep the page lightweight.',
    },
  },
} as const;
