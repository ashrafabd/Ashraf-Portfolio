export const siteConfig = {
  name: "Ashraf Muneer Abd Alkhaliq",
  title: "Software Quality Assurance Engineer",
  tagline: "QA engineer building reliable automation and quality systems.",
  email: "ashrafmoneer1@yahoo.com",
  location: "Jenin · Palestine",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/ashraf-abd-alkhaliq-165b45236",
    github: "https://github.com/ashrafabd",
    email: "mailto:ashrafmoneer1@yahoo.com",
  },
  seo: {
    defaultTitle:
      "Ashraf Muneer Abd Alkhaliq — Software Quality Assurance Engineer",
    defaultDescription:
      "Portfolio of a Software Quality Assurance Engineer with experience in automation, API testing, and quality engineering.",
  },
};

export const navLinks = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "experience", path: "/experience" },
  { key: "projects", path: "/projects" },
  { key: "skills", path: "/skills" },
  { key: "certifications", path: "/certifications" },
  { key: "courses", path: "/courses" },
  { key: "awards", path: "/awards" },
  { key: "blog", path: "/blog" },
  { key: "contact", path: "/contact" },
];

export const stats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Projects Completed", value: "45+" },
  { label: "Certifications", value: "12" },
  { label: "Awards", value: "5" },
];

export const featuredSkills = [
  "Cypress",
  "Selenium",
  "Postman",
  "Jenkins",
  "Bamboo",
  "Salesforce Testing",
];

export const testimonials = [
  {
    quote:
      "Ashraf transformed our release process. Defect escape rate dropped 60% within two quarters.",
    author: "Sarah Chen",
    role: "Engineering Manager",
    company: "NovaTech",
  },
  {
    quote:
      "His automation framework became the standard across three product teams. Exceptional attention to detail.",
    author: "Marcus Rivera",
    role: "VP of Engineering",
    company: "CloudScale",
  },
  {
    quote:
      "A rare QA engineer who thinks like a product owner. He elevated our entire quality culture.",
    author: "Elena Kowalski",
    role: "Director of QA",
    company: "FinEdge",
  },
];

export const about = {
  story:
    "A software quality assurance engineer seeking manual or automation QA roles where I can contribute to organizational success through strong programming, analytical skills, and quality-driven experience.",
  journey:
    "I have built practical QA solutions across web and enterprise systems, from full-stack internship work to automation engineering and manual QA leadership. My focus is on delivering dependable releases through effective test design, automation, and collaboration.",
  education: [
    {
      degree: "BSc Computer Systems Engineering",
      school: "Arab American University – Jenin",
      year: "2018 – 2022",
      detail:
        "Studied software systems, programming, and engineering methodologies.",
    },
    {
      degree: "English Access Microscholarship Program",
      school: "Amideast & American Consulate General, Jerusalem",
      year: "2014 – 2016",
      detail:
        "Advanced English communication skills for academic and professional settings.",
    },
  ],
  values: [
    {
      title: "Quality Focus",
      description:
        "I ensure every feature is tested with clear expectations and reliable outcomes.",
    },
    {
      title: "Pragmatic Automation",
      description:
        "Automation that drives stability while remaining maintainable.",
    },
    {
      title: "Clear Communication",
      description:
        "I keep teams aligned with concise reporting and shared goals.",
    },
    {
      title: "Continuous Improvement",
      description:
        "I learn from every release and strengthen the process afterwards.",
    },
  ],
  expertise: [
    "Cypress UI & integration testing",
    "Selenium WebDriver with Java",
    "API testing with Postman",
    "CI/CD automation with Bamboo and Jenkins",
    "Test case management with Cucumber Studio and TestRail",
    "Email testing using Novu and SMTP",
  ],
  goals: [
    "Drive automation adoption across QA teams",
    "Build scalable regression suites for web applications",
    "Strengthen release quality through test-driven practices",
    "Support teams with precise defect triage and reporting",
  ],
  timeline: [
    {
      year: "2022",
      title: "Full Stack Intern",
      description:
        "Developed and fixed web applications using MERN stack and Laravel.",
    },
    {
      year: "2023",
      title: "Software Engineer in QA – SF Team",
      description:
        "Led manual and automation QA efforts with Bamboo test execution and regression planning.",
    },
    {
      year: "2024",
      title: "QA Automation Engineer",
      description:
        "Implemented Cypress-based automation and supported cross-environment validation.",
    },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Apple (hosted by Aurora Technologies)",
    role: "QA Automation Engineer",
    duration: "Sep 2024 — Present",
    category: "Automation",
    technologies: ["Cypress", "JavaScript", "Postman", "Novu", "SMTP"],
    responsibilities: [
      "Design and develop efficient test cases for web applications",
      "Implement automated UI and integration tests using Cypress",
      "Maintain and update automation test scripts as the project evolves",
      "Analyze code and validate execution across multiple environments",
      "Develop and document test plans based on requirements and technical specifications",
      "Ensure compliance with programming best practices and web standards",
      "Participate in requirements elicitation and software design discussions",
    ],
    achievements: [
      "Delivered stable Cypress automation suites for critical workflows",
      "Improved cross-environment test reliability and execution coverage",
      "Reduced regression feedback time through automated test maintenance",
    ],
  },
  {
    id: 2,
    company: "Ninja Van Company",
    role: "Software Engineer in QA – SF Team",
    duration: "Mar 2023 — Sep 2024",
    category: "QA",
    technologies: ["Bamboo", "Cucumber", "Jira", "Radar", "TestRail"],
    responsibilities: [
      "Design, write, and execute manual test cases",
      "Lead automation efforts by writing test scenarios and maintaining regression plans",
      "Execute automated tests using Bamboo and monitor daily runs",
      "Identify bugs and ensure product quality with continuous updates to test scenarios",
    ],
    achievements: [
      "Improved daily release quality with consistent Bamboo automation runs",
      "Reduced regression defects by refining scenarios and coverage",
      "Streamlined defect reporting and triage across teams",
    ],
  },
  {
    id: 3,
    company: "Auxilium Technology",
    role: "Full Stack Intern",
    duration: "Jul 2022 — Sep 2022",
    category: "Development",
    technologies: ["MERN", "Laravel", "Node.js", "Express.js", "React"],
    responsibilities: [
      "Developed and fixed web applications using MERN stack and Laravel framework",
      "Collaborated with developers on feature implementation and bug fixes",
      "Tested application behavior across browsers and devices",
    ],
    achievements: [
      "Delivered several web application improvements during the internship",
      "Enhanced application stability with proactive bug identification",
      "Expanded full-stack development and QA knowledge through hands-on work",
    ],
  },
];

export const experienceFilters = ["All", "QA", "Automation", "Development"];

export const projects = [
  {
    id: 1,
    title: "Playwright Test Framework",
    category: "Automation",
    image: null,
    description:
      "Enterprise-grade E2E automation framework with parallel execution and rich reporting.",
    technologies: ["Playwright", "TypeScript", "Allure", "Docker"],
    challenges:
      "Fragmented test suites across teams with inconsistent patterns and flaky tests.",
    solutions:
      "Unified page object model, smart waits, and self-healing selectors with shared utilities.",
    results: "85% reduction in flaky tests, 3x faster CI feedback loop.",
    github: "https://github.com/ashrafabd",
    demo: null,
  },
  {
    id: 2,
    title: "API Contract Testing Suite",
    category: "APIs",
    image: null,
    description:
      "Pact-based contract testing ensuring microservice compatibility across deployments.",
    technologies: ["Pact", "Node.js", "Postman", "GitHub Actions"],
    challenges:
      "Breaking API changes causing downstream service failures in production.",
    solutions:
      "Consumer-driven contracts with automated verification in every PR.",
    results:
      "Eliminated 4 production incidents related to API breaking changes.",
    github: "https://github.com/ashrafabd",
    demo: null,
  },
  {
    id: 3,
    title: "QA Dashboard Portal",
    category: "Web",
    image: null,
    description:
      "Real-time quality metrics dashboard for engineering leadership and stakeholders.",
    technologies: ["React", "TypeScript", "D3.js", "REST API"],
    challenges:
      "No visibility into test coverage, defect trends, or release readiness.",
    solutions:
      "Aggregated CI data into interactive dashboards with drill-down capabilities.",
    results: "Data-driven release decisions adopted by 5 product teams.",
    github: "https://github.com/ashrafabd",
    demo: null,
  },
  {
    id: 4,
    title: "Performance Testing Platform",
    category: "QA",
    image: null,
    description:
      "Load testing orchestration with k6 for simulating peak traffic scenarios.",
    technologies: ["k6", "Grafana", "InfluxDB", "Kubernetes"],
    challenges:
      "Unknown system bottlenecks before high-traffic product launches.",
    solutions:
      "Automated load test scenarios with SLA thresholds and alerting.",
    results: "Identified and resolved 3 critical bottlenecks pre-launch.",
    github: "https://github.com/ashrafabd",
    demo: null,
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Personal",
    image: null,
    description:
      "This premium portfolio — designed and built with modern React and animations.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    challenges:
      "Creating a recruiter-ready presence that reflects senior-level craft.",
    solutions:
      "Apple-inspired minimalism with Linear-grade motion and accessibility.",
    results: "Fully responsive, accessible, dark/light mode portfolio.",
    github: "https://github.com/ashrafabd/Ashraf-Portfolio",
    demo: "/",
  },
];

export const projectFilters = [
  "All",
  "Automation",
  "QA",
  "Web",
  "APIs",
  "Personal",
];

export const skillCategories = {
  Testing: [
    { name: "Manual Testing", level: 95 },
    { name: "Automation Testing", level: 92 },
    { name: "API Testing", level: 90 },
    { name: "Salesforce Testing", level: 85 },
    { name: "Email Testing", level: 82 },
  ],
  Programming: [
    { name: "Java", level: 88 },
    { name: "TypeScript", level: 88 },
    { name: "C++", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "SQL", level: 84 },
  ],
  Tools: [
    { name: "Cypress", level: 94 },
    { name: "Selenium", level: 90 },
    { name: "Postman", level: 92 },
    { name: "Jenkins", level: 88 },
    { name: "Bamboo", level: 86 },
    { name: "Git", level: 90 },
  ],
};

export const certifications = [
  {
    id: 1,
    title: "ISTQB Advanced Test Analyst",
    organization: "ISTQB",
    provider: "ISTQB",
    date: "2022",
    credentialId: "AT-2022-8841",
    verifyUrl: "https://www.istqb.org",
    logo: "ISTQB",
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    provider: "AWS",
    date: "2023",
    credentialId: "AWS-CCP-7723",
    verifyUrl: "https://aws.amazon.com/certification",
    logo: "AWS",
  },
  {
    id: 3,
    title: "Certified Scrum Master",
    organization: "Scrum Alliance",
    provider: "Scrum Alliance",
    date: "2021",
    credentialId: "CSM-441902",
    verifyUrl: "https://www.scrumalliance.org",
    logo: "CSM",
  },
  {
    id: 4,
    title: "Playwright Automation Professional",
    organization: "Test Automation University",
    provider: "TAU",
    date: "2023",
    credentialId: "TAU-PW-2291",
    verifyUrl: "https://testautomationu.applitools.com",
    logo: "TAU",
  },
  {
    id: 5,
    title: "Postman API Testing Expert",
    organization: "Postman",
    provider: "Postman",
    date: "2022",
    credentialId: "PMN-API-5567",
    verifyUrl: "https://www.postman.com",
    logo: "PMN",
  },
  {
    id: 6,
    title: "Google Cloud Digital Leader",
    organization: "Google Cloud",
    provider: "Google",
    date: "2024",
    credentialId: "GCP-DL-9934",
    verifyUrl: "https://cloud.google.com/certification",
    logo: "GCP",
  },
];

export const certProviders = [
  "All",
  "ISTQB",
  "AWS",
  "Scrum Alliance",
  "TAU",
  "Postman",
  "Google",
];

export const courses = [
  {
    id: 1,
    name: "Advanced Playwright Techniques",
    provider: "Test Automation University",
    date: "2024",
    progress: 100,
    skills: ["Playwright", "Parallel Execution", "Visual Testing"],
    certificate: true,
  },
  {
    id: 2,
    name: "API Testing with Postman",
    provider: "Postman Academy",
    date: "2023",
    progress: 100,
    skills: ["REST APIs", "Newman", "Mock Servers"],
    certificate: true,
  },
  {
    id: 3,
    name: "Performance Testing with k6",
    provider: "Grafana Labs",
    date: "2023",
    progress: 100,
    skills: ["Load Testing", "Grafana", "Thresholds"],
    certificate: true,
  },
  {
    id: 4,
    name: "TypeScript for Test Engineers",
    provider: "Frontend Masters",
    date: "2024",
    progress: 85,
    skills: ["TypeScript", "Generics", "Type Safety"],
    certificate: false,
  },
  {
    id: 5,
    name: "CI/CD for Quality Engineers",
    provider: "LinkedIn Learning",
    date: "2022",
    progress: 100,
    skills: ["GitHub Actions", "Jenkins", "Quality Gates"],
    certificate: true,
  },
];

export const awards = [
  {
    id: 1,
    title: "Quality Excellence Award",
    organization: "NovaTech Solutions",
    date: "2024",
    level: "Company",
    description:
      "Recognized for leading automation initiative that transformed release confidence.",
    image: null,
  },
  {
    id: 2,
    title: "Innovation in Testing",
    organization: "CloudScale Inc.",
    date: "2022",
    level: "Department",
    description:
      "Awarded for pioneering contract testing approach across microservices.",
    image: null,
  },
  {
    id: 3,
    title: "Spot Award — Zero Defect Release",
    organization: "FinEdge Payments",
    date: "2020",
    level: "Team",
    description:
      "Led QA effort for PCI audit release with zero critical findings.",
    image: null,
  },
  {
    id: 4,
    title: "Rising Star in QA",
    organization: "DevCraft Studio",
    date: "2018",
    level: "Company",
    description:
      "Fast-tracked promotion for exceptional bug detection and automation contributions.",
    image: null,
  },
  {
    id: 5,
    title: "Open Source Contributor",
    organization: "Playwright Community",
    date: "2023",
    level: "Community",
    description:
      "Contributed utilities adopted by 500+ developers in the testing ecosystem.",
    image: null,
  },
];

export const awardStats = [
  { label: "Total Awards", value: "5" },
  { label: "Company Level", value: "2" },
  { label: "Department Level", value: "1" },
  { label: "Community", value: "1" },
];

export const blogPosts = [
  {
    id: 1,
    title: "Why Flaky Tests Are a Leadership Problem",
    excerpt:
      "Flaky tests are symptoms of deeper organizational issues — here is how to fix the root cause.",
    category: "QA",
    tags: ["Flaky Tests", "Leadership", "CI/CD"],
    readTime: "8 min",
    date: "2025-03-12",
  },
  {
    id: 2,
    title: "Playwright vs Cypress in 2025",
    excerpt:
      "An honest comparison for teams choosing their next automation framework.",
    category: "Automation",
    tags: ["Playwright", "Cypress", "Comparison"],
    readTime: "12 min",
    date: "2025-02-28",
  },
  {
    id: 3,
    title: "Contract Testing Saved Our Microservices",
    excerpt:
      "How Pact-based testing prevented four production incidents in six months.",
    category: "Testing",
    tags: ["Pact", "Microservices", "APIs"],
    readTime: "10 min",
    date: "2025-01-15",
  },
  {
    id: 4,
    title: "Building a QA Career in Tech",
    excerpt:
      "A practical roadmap from junior analyst to principal quality engineer.",
    category: "Career",
    tags: ["Career", "Mentorship", "Growth"],
    readTime: "15 min",
    date: "2024-12-01",
  },
  {
    id: 5,
    title: "Performance Testing on a Budget",
    excerpt:
      "Open-source tools and strategies for startups without dedicated perf teams.",
    category: "Technology",
    tags: ["k6", "Performance", "Startups"],
    readTime: "9 min",
    date: "2024-11-20",
  },
  {
    id: 6,
    title: "Shift-Left Testing That Actually Works",
    excerpt:
      "Moving testing earlier without overwhelming developers or slowing delivery.",
    category: "QA",
    tags: ["Shift-Left", "Agile", "DevOps"],
    readTime: "7 min",
    date: "2024-10-05",
  },
];

export const blogCategories = [
  "All",
  "QA",
  "Automation",
  "Testing",
  "Technology",
  "Career",
];

export const achievements = [
  {
    title: "Zero Critical Defects",
    description: "Two consecutive PCI audit cycles without critical findings.",
    icon: "shield",
  },
  {
    title: "92% Test Coverage",
    description:
      "Critical user paths fully automated across enterprise platform.",
    icon: "target",
  },
  {
    title: "70% Faster CI",
    description: "Parallel test execution slashed pipeline duration.",
    icon: "zap",
  },
];
