export const siteConfig = {
  name: 'Ashraf Abd',
  title: 'Software QA Engineer',
  tagline: 'Building quality into every release.',
  email: 'ashraf@example.com',
  location: 'Remote · Global',
  resumeUrl: '/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/ashrafabd',
    github: 'https://github.com/ashrafabd',
    email: 'mailto:ashraf@example.com',
  },
  seo: {
    defaultTitle: 'Ashraf Abd — Software QA Engineer',
    defaultDescription:
      'Premium portfolio of a Software QA Engineer specializing in test automation, API testing, and quality engineering for modern technology companies.',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Courses', path: '/courses' },
  { label: 'Awards', path: '/awards' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const stats = [
  { label: 'Years of Experience', value: '7+' },
  { label: 'Projects Completed', value: '45+' },
  { label: 'Certifications', value: '12' },
  { label: 'Awards', value: '5' },
]

export const featuredSkills = [
  'Test Automation',
  'API Testing',
  'Playwright',
  'Cypress',
  'CI/CD Pipelines',
  'Performance Testing',
]

export const testimonials = [
  {
    quote:
      'Ashraf transformed our release process. Defect escape rate dropped 60% within two quarters.',
    author: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'NovaTech',
  },
  {
    quote:
      'His automation framework became the standard across three product teams. Exceptional attention to detail.',
    author: 'Marcus Rivera',
    role: 'VP of Engineering',
    company: 'CloudScale',
  },
  {
    quote:
      'A rare QA engineer who thinks like a product owner. He elevated our entire quality culture.',
    author: 'Elena Kowalski',
    role: 'Director of QA',
    company: 'FinEdge',
  },
]

export const about = {
  story:
    'I believe quality is not a phase — it is a discipline woven into every sprint, every API call, and every user journey. My journey began with curiosity about why software breaks, and evolved into a career building systems that prevent it.',
  journey:
    'From manual exploratory testing in agile startups to architecting enterprise-scale automation frameworks, I have partnered with engineering teams to ship confidently at speed. I bridge the gap between developers and stakeholders, translating risk into actionable quality strategy.',
  education: [
    {
      degree: 'B.S. Computer Science',
      school: 'University of Technology',
      year: '2016',
      detail: 'Focus on software engineering and algorithms',
    },
    {
      degree: 'Quality Engineering Certificate',
      school: 'ISTQB Accredited Program',
      year: '2018',
      detail: 'Advanced test design and management',
    },
  ],
  values: [
    { title: 'Precision', description: 'Every test case earns its place in the suite.' },
    { title: 'Collaboration', description: 'Quality is a team sport, not a gate.' },
    { title: 'Continuous Learning', description: 'Tools evolve — so must our craft.' },
    { title: 'User Advocacy', description: 'The end user is always the north star.' },
  ],
  expertise: [
    'End-to-end test automation',
    'API & contract testing',
    'Performance & load testing',
    'CI/CD quality gates',
    'Test strategy & planning',
    'Accessibility testing',
  ],
  goals: [
    'Lead quality engineering initiatives at scale',
    'Mentor the next generation of QA professionals',
    'Contribute to open-source testing tools',
    'Drive shift-left practices across organizations',
  ],
  timeline: [
    { year: '2017', title: 'Started QA Career', description: 'Junior QA Analyst at a fintech startup' },
    { year: '2019', title: 'Automation Focus', description: 'Built first Selenium framework' },
    { year: '2021', title: 'Senior QA Engineer', description: 'Led test strategy for SaaS platform' },
    { year: '2023', title: 'QA Lead', description: 'Managed team of 6 quality engineers' },
    { year: '2025', title: 'Principal QA Engineer', description: 'Enterprise automation architecture' },
  ],
}

export const experiences = [
  {
    id: 1,
    company: 'NovaTech Solutions',
    role: 'Principal QA Engineer',
    duration: '2023 — Present',
    category: 'Leadership',
    technologies: ['Playwright', 'TypeScript', 'GitHub Actions', 'Postman', 'Datadog'],
    responsibilities: [
      'Architected organization-wide test automation strategy',
      'Established quality gates in CI/CD pipelines',
      'Mentored junior and mid-level QA engineers',
      'Partnered with product on risk-based test planning',
    ],
    achievements: [
      'Reduced regression cycle from 5 days to 4 hours',
      'Achieved 92% automated test coverage on critical paths',
      'Introduced contract testing preventing 3 major outages',
    ],
  },
  {
    id: 2,
    company: 'CloudScale Inc.',
    role: 'Senior QA Engineer',
    duration: '2021 — 2023',
    category: 'Automation',
    technologies: ['Cypress', 'JavaScript', 'Jenkins', 'Docker', 'Jira'],
    responsibilities: [
      'Built and maintained E2E test suites for microservices',
      'Implemented API testing framework with Newman',
      'Conducted performance testing with k6',
      'Led bug triage and root cause analysis sessions',
    ],
    achievements: [
      'Cut production defects by 45% year-over-year',
      'Deployed parallel test execution reducing CI time 70%',
      'Created reusable test data management library',
    ],
  },
  {
    id: 3,
    company: 'FinEdge Payments',
    role: 'QA Engineer',
    duration: '2019 — 2021',
    category: 'QA',
    technologies: ['Selenium', 'Python', 'Postman', 'MySQL', 'Git'],
    responsibilities: [
      'Executed manual and automated testing for payment APIs',
      'Designed test cases for PCI-compliant workflows',
      'Collaborated on sprint planning and story refinement',
      'Maintained regression test documentation',
    ],
    achievements: [
      'Zero critical defects in two consecutive audit cycles',
      'Automated 200+ manual test cases',
      'Received Spot Award for release quality excellence',
    ],
  },
  {
    id: 4,
    company: 'DevCraft Studio',
    role: 'Junior QA Analyst',
    duration: '2017 — 2019',
    category: 'Development',
    technologies: ['JavaScript', 'React', 'Jest', 'Chrome DevTools'],
    responsibilities: [
      'Performed exploratory and regression testing',
      'Logged and tracked defects through resolution',
      'Assisted developers with unit test coverage',
      'Validated cross-browser compatibility',
    ],
    achievements: [
      'Promoted to QA Engineer within 18 months',
      'Introduced first automated smoke test suite',
      'Improved bug report quality scoring by team',
    ],
  },
]

export const experienceFilters = ['All', 'QA', 'Automation', 'Leadership', 'Development']

export const projects = [
  {
    id: 1,
    title: 'Playwright Test Framework',
    category: 'Automation',
    image: null,
    description: 'Enterprise-grade E2E automation framework with parallel execution and rich reporting.',
    technologies: ['Playwright', 'TypeScript', 'Allure', 'Docker'],
    challenges: 'Fragmented test suites across teams with inconsistent patterns and flaky tests.',
    solutions: 'Unified page object model, smart waits, and self-healing selectors with shared utilities.',
    results: '85% reduction in flaky tests, 3x faster CI feedback loop.',
    github: 'https://github.com/ashrafabd',
    demo: null,
  },
  {
    id: 2,
    title: 'API Contract Testing Suite',
    category: 'APIs',
    image: null,
    description: 'Pact-based contract testing ensuring microservice compatibility across deployments.',
    technologies: ['Pact', 'Node.js', 'Postman', 'GitHub Actions'],
    challenges: 'Breaking API changes causing downstream service failures in production.',
    solutions: 'Consumer-driven contracts with automated verification in every PR.',
    results: 'Eliminated 4 production incidents related to API breaking changes.',
    github: 'https://github.com/ashrafabd',
    demo: null,
  },
  {
    id: 3,
    title: 'QA Dashboard Portal',
    category: 'Web',
    image: null,
    description: 'Real-time quality metrics dashboard for engineering leadership and stakeholders.',
    technologies: ['React', 'TypeScript', 'D3.js', 'REST API'],
    challenges: 'No visibility into test coverage, defect trends, or release readiness.',
    solutions: 'Aggregated CI data into interactive dashboards with drill-down capabilities.',
    results: 'Data-driven release decisions adopted by 5 product teams.',
    github: 'https://github.com/ashrafabd',
    demo: null,
  },
  {
    id: 4,
    title: 'Performance Testing Platform',
    category: 'QA',
    image: null,
    description: 'Load testing orchestration with k6 for simulating peak traffic scenarios.',
    technologies: ['k6', 'Grafana', 'InfluxDB', 'Kubernetes'],
    challenges: 'Unknown system bottlenecks before high-traffic product launches.',
    solutions: 'Automated load test scenarios with SLA thresholds and alerting.',
    results: 'Identified and resolved 3 critical bottlenecks pre-launch.',
    github: 'https://github.com/ashrafabd',
    demo: null,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Personal',
    image: null,
    description: 'This premium portfolio — designed and built with modern React and animations.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    challenges: 'Creating a recruiter-ready presence that reflects senior-level craft.',
    solutions: 'Apple-inspired minimalism with Linear-grade motion and accessibility.',
    results: 'Fully responsive, accessible, dark/light mode portfolio.',
    github: 'https://github.com/ashrafabd/Ashraf-Portfolio',
    demo: '/',
  },
]

export const projectFilters = ['All', 'Automation', 'QA', 'Web', 'APIs', 'Personal']

export const skillCategories = {
  Testing: [
    { name: 'Manual Testing', level: 95 },
    { name: 'Automation Testing', level: 92 },
    { name: 'API Testing', level: 90 },
    { name: 'Performance Testing', level: 82 },
    { name: 'Accessibility Testing', level: 78 },
  ],
  Programming: [
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 80 },
  ],
  Tools: [
    { name: 'Playwright', level: 94 },
    { name: 'Cypress', level: 90 },
    { name: 'Selenium', level: 85 },
    { name: 'Postman', level: 92 },
    { name: 'Jira', level: 88 },
    { name: 'Git', level: 90 },
  ],
}

export const certifications = [
  {
    id: 1,
    title: 'ISTQB Advanced Test Analyst',
    organization: 'ISTQB',
    provider: 'ISTQB',
    date: '2022',
    credentialId: 'AT-2022-8841',
    verifyUrl: 'https://www.istqb.org',
    logo: 'ISTQB',
  },
  {
    id: 2,
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    provider: 'AWS',
    date: '2023',
    credentialId: 'AWS-CCP-7723',
    verifyUrl: 'https://aws.amazon.com/certification',
    logo: 'AWS',
  },
  {
    id: 3,
    title: 'Certified Scrum Master',
    organization: 'Scrum Alliance',
    provider: 'Scrum Alliance',
    date: '2021',
    credentialId: 'CSM-441902',
    verifyUrl: 'https://www.scrumalliance.org',
    logo: 'CSM',
  },
  {
    id: 4,
    title: 'Playwright Automation Professional',
    organization: 'Test Automation University',
    provider: 'TAU',
    date: '2023',
    credentialId: 'TAU-PW-2291',
    verifyUrl: 'https://testautomationu.applitools.com',
    logo: 'TAU',
  },
  {
    id: 5,
    title: 'Postman API Testing Expert',
    organization: 'Postman',
    provider: 'Postman',
    date: '2022',
    credentialId: 'PMN-API-5567',
    verifyUrl: 'https://www.postman.com',
    logo: 'PMN',
  },
  {
    id: 6,
    title: 'Google Cloud Digital Leader',
    organization: 'Google Cloud',
    provider: 'Google',
    date: '2024',
    credentialId: 'GCP-DL-9934',
    verifyUrl: 'https://cloud.google.com/certification',
    logo: 'GCP',
  },
]

export const certProviders = ['All', 'ISTQB', 'AWS', 'Scrum Alliance', 'TAU', 'Postman', 'Google']

export const courses = [
  {
    id: 1,
    name: 'Advanced Playwright Techniques',
    provider: 'Test Automation University',
    date: '2024',
    progress: 100,
    skills: ['Playwright', 'Parallel Execution', 'Visual Testing'],
    certificate: true,
  },
  {
    id: 2,
    name: 'API Testing with Postman',
    provider: 'Postman Academy',
    date: '2023',
    progress: 100,
    skills: ['REST APIs', 'Newman', 'Mock Servers'],
    certificate: true,
  },
  {
    id: 3,
    name: 'Performance Testing with k6',
    provider: 'Grafana Labs',
    date: '2023',
    progress: 100,
    skills: ['Load Testing', 'Grafana', 'Thresholds'],
    certificate: true,
  },
  {
    id: 4,
    name: 'TypeScript for Test Engineers',
    provider: 'Frontend Masters',
    date: '2024',
    progress: 85,
    skills: ['TypeScript', 'Generics', 'Type Safety'],
    certificate: false,
  },
  {
    id: 5,
    name: 'CI/CD for Quality Engineers',
    provider: 'LinkedIn Learning',
    date: '2022',
    progress: 100,
    skills: ['GitHub Actions', 'Jenkins', 'Quality Gates'],
    certificate: true,
  },
]

export const awards = [
  {
    id: 1,
    title: 'Quality Excellence Award',
    organization: 'NovaTech Solutions',
    date: '2024',
    level: 'Company',
    description: 'Recognized for leading automation initiative that transformed release confidence.',
    image: null,
  },
  {
    id: 2,
    title: 'Innovation in Testing',
    organization: 'CloudScale Inc.',
    date: '2022',
    level: 'Department',
    description: 'Awarded for pioneering contract testing approach across microservices.',
    image: null,
  },
  {
    id: 3,
    title: 'Spot Award — Zero Defect Release',
    organization: 'FinEdge Payments',
    date: '2020',
    level: 'Team',
    description: 'Led QA effort for PCI audit release with zero critical findings.',
    image: null,
  },
  {
    id: 4,
    title: 'Rising Star in QA',
    organization: 'DevCraft Studio',
    date: '2018',
    level: 'Company',
    description: 'Fast-tracked promotion for exceptional bug detection and automation contributions.',
    image: null,
  },
  {
    id: 5,
    title: 'Open Source Contributor',
    organization: 'Playwright Community',
    date: '2023',
    level: 'Community',
    description: 'Contributed utilities adopted by 500+ developers in the testing ecosystem.',
    image: null,
  },
]

export const awardStats = [
  { label: 'Total Awards', value: '5' },
  { label: 'Company Level', value: '2' },
  { label: 'Department Level', value: '1' },
  { label: 'Community', value: '1' },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Why Flaky Tests Are a Leadership Problem',
    excerpt: 'Flaky tests are symptoms of deeper organizational issues — here is how to fix the root cause.',
    category: 'QA',
    tags: ['Flaky Tests', 'Leadership', 'CI/CD'],
    readTime: '8 min',
    date: '2025-03-12',
  },
  {
    id: 2,
    title: 'Playwright vs Cypress in 2025',
    excerpt: 'An honest comparison for teams choosing their next automation framework.',
    category: 'Automation',
    tags: ['Playwright', 'Cypress', 'Comparison'],
    readTime: '12 min',
    date: '2025-02-28',
  },
  {
    id: 3,
    title: 'Contract Testing Saved Our Microservices',
    excerpt: 'How Pact-based testing prevented four production incidents in six months.',
    category: 'Testing',
    tags: ['Pact', 'Microservices', 'APIs'],
    readTime: '10 min',
    date: '2025-01-15',
  },
  {
    id: 4,
    title: 'Building a QA Career in Tech',
    excerpt: 'A practical roadmap from junior analyst to principal quality engineer.',
    category: 'Career',
    tags: ['Career', 'Mentorship', 'Growth'],
    readTime: '15 min',
    date: '2024-12-01',
  },
  {
    id: 5,
    title: 'Performance Testing on a Budget',
    excerpt: 'Open-source tools and strategies for startups without dedicated perf teams.',
    category: 'Technology',
    tags: ['k6', 'Performance', 'Startups'],
    readTime: '9 min',
    date: '2024-11-20',
  },
  {
    id: 6,
    title: 'Shift-Left Testing That Actually Works',
    excerpt: 'Moving testing earlier without overwhelming developers or slowing delivery.',
    category: 'QA',
    tags: ['Shift-Left', 'Agile', 'DevOps'],
    readTime: '7 min',
    date: '2024-10-05',
  },
]

export const blogCategories = ['All', 'QA', 'Automation', 'Testing', 'Technology', 'Career']

export const achievements = [
  {
    title: 'Zero Critical Defects',
    description: 'Two consecutive PCI audit cycles without critical findings.',
    icon: 'shield',
  },
  {
    title: '92% Test Coverage',
    description: 'Critical user paths fully automated across enterprise platform.',
    icon: 'target',
  },
  {
    title: '70% Faster CI',
    description: 'Parallel test execution slashed pipeline duration.',
    icon: 'zap',
  },
]
