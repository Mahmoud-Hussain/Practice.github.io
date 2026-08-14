/**
 * Portfolio Data Architecture
 * Mahmoud Hussain — Software Engineer / Full-Stack Developer
 * 
 * All portfolio content is managed through structured objects.
 * Placeholders follow the standard [ADD ...] format where details are to be provided.
 */

export const personalInfo = {
  name: "Mahmoud Hussain",
  role: "Software Engineer / Full-Stack Developer",
  status: "Open for Software Engineering & System Architecture Roles",
  location: "Global / Remote Ready",
  
  // Core philosophy that defines the personal brand
  philosophy: {
    headline: "If I don't know something, I learn it. If I face a problem, I learn what it takes and build the solution.",
    subtext: "I don't claim to know everything on day one. Instead, I bring curiosity, rigorous engineering, and the adaptability to learn and master whatever stack a complex problem demands.",
    principles: [
      {
        title: "Curiosity First",
        description: "Driven by a deep desire to understand how complex systems operate under the hood."
      },
      {
        title: "Problem Solver Mindset",
        description: "Focus on real impact and end-to-end solutions rather than tool dogma."
      },
      {
        title: "Continuous Adaptation",
        description: "Eager to step outside comfort zones and master unfamiliar tech stacks rapidly."
      },
      {
        title: "Full-Stack Craftsmanship",
        description: "Building cohesive products, from intuitive UI designs to scalable backend systems."
      }
    ]
  },

  bio: [
    "I'm a full-stack engineer driven by technical curiosity and practical execution. I build web applications, explore distributed systems, and engineer clean software interfaces.",
    "My technical journey is defined by continuous learning. When faced with complex challenges or unfamiliar frameworks, I break down the fundamentals, read the source, and iterate until the solution is solid."
  ],

  stats: [
    { label: "Engineering Mindset", value: "Full-Stack & Systems" },
    { label: "Core Philosophy", value: "Learn & Build" },
    { label: "Code Quality", value: "Modular & Scalable" },
    { label: "Approach", value: "Problem-First Solutions" }
  ]
};

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Root-Cause Problem Solving",
    subtitle: "Understanding the 'Why' Before Writing Code",
    description: "I don't just patch symptoms. I trace system behaviors to their origins to build resilient, long-term engineering solutions."
  },
  {
    number: "02",
    title: "Stack Agnostic Agility",
    subtitle: "Tools Serve the Problem, Not the Reverse",
    description: "Languages and frameworks are means to an end. If a problem requires a language or database I haven't used yet, I pick it up and master it."
  },
  {
    number: "03",
    title: "Clean Modular Architecture",
    subtitle: "Maintainability as a First-Class Feature",
    description: "Writing code that other engineers can read, extend, and maintain effortlessly. Prioritizing modular boundaries and robust data flow."
  },
  {
    number: "04",
    title: "Iterative Refinement & Performance",
    subtitle: "Build, Measure, Learn, Optimize",
    description: "From reducing bundle sizes to optimizing API request latencies, continuous performance audit is integral to my execution workflow."
  }
];

export const technologies = {
  categories: [
    {
      id: "languages",
      title: "Core Languages",
      icon: "Code2",
      description: "Foundational programming languages used across frontend, backend, and scripts.",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced", category: "Language" },
        { name: "TypeScript", level: "Intermediate / Advanced", category: "Language" },
        { name: "Python", level: "Intermediate", category: "Language" },
        { name: "HTML5 / CSS3", level: "Advanced", category: "Frontend Core" },
        { name: "SQL", level: "Intermediate", category: "Database Language" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: "Layout",
      description: "Building responsive, modern, performant user interfaces and dynamic web apps.",
      skills: [
        { name: "React.js", level: "Advanced", category: "Library" },
        { name: "Next.js", level: "Intermediate", category: "Framework" },
        { name: "Tailwind CSS", level: "Advanced", category: "Styling" },
        { name: "Vite", level: "Advanced", category: "Build Tool" },
        { name: "Framer Motion", level: "Intermediate", category: "Animation" },
        { name: "Three.js / React Three Fiber", level: "Learning / Basics", category: "3D Graphics" }
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: "Server",
      description: "Designing RESTful APIs, microservices, data validation, and backend servers.",
      skills: [
        { name: "Node.js", level: "Advanced", category: "Runtime" },
        { name: "Express.js", level: "Advanced", category: "Framework" },
        { name: "RESTful API Architecture", level: "Advanced", category: "Architecture" },
        { name: "GraphQL", level: "Learning", category: "API" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: "Database",
      description: "Data modeling, relational schema design, document stores, and state persistence.",
      skills: [
        { name: "PostgreSQL", level: "Intermediate", category: "Relational DB" },
        { name: "MongoDB", level: "Intermediate", category: "NoSQL DB" },
        { name: "Prisma ORM", level: "Intermediate", category: "ORM" },
        { name: "Redis", level: "Learning", category: "Caching / In-Memory" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Tooling",
      icon: "Terminal",
      description: "Version control, containerization, deployment pipelines, and developer environments.",
      skills: [
        { name: "Git & GitHub", level: "Advanced", category: "Version Control" },
        { name: "Docker", level: "Learning", category: "Containerization" },
        { name: "Vercel / Netlify", level: "Advanced", category: "Deployment" },
        { name: "Linux CLI & Bash", level: "Intermediate", category: "Environment" }
      ]
    }
  ]
};

export const projects = [
  {
    id: "project-1",
    title: "Personal Engineering Portfolio World",
    category: "Full-Stack Web App",
    tagline: "Interactive engineering portfolio featuring clean content architecture and modern visual identity.",
    description: "Built with React, Vite, Tailwind CSS, and structured content architecture. Designed to showcase engineering philosophy, project breakdowns, technologies, and technical research.",
    tags: ["React", "Vite", "Tailwind CSS", "Three.js Base"],
    architectureHighlights: [
      "Modular data architecture decoupling UI components from static data",
      "Custom obsidian dark theme with CSS custom design tokens",
      "Interactive 3D viewport canvas integration framework"
    ],
    github: "https://github.com/Mahmoud-Hussain",
    demo: "#",
    status: "Completed Phase 1"
  },
  {
    id: "project-placeholder-1",
    title: "[ADD PROJECT] — Full-Stack Application",
    category: "Full-Stack Development",
    tagline: "[ADD PROJECT SHORT DESCRIPTION]",
    description: "[ADD DETAILED PROJECT OVERVIEW AND THE REAL-WORLD PROBLEM IT SOLVED]",
    tags: ["[ADD TECH 1]", "[ADD TECH 2]", "[ADD TECH 3]"],
    architectureHighlights: [
      "[ADD KEY ARCHITECTURAL HIGHLIGHT 1]",
      "[ADD KEY ARCHITECTURAL HIGHLIGHT 2]"
    ],
    github: "#",
    demo: "#",
    status: "Placeholder"
  },
  {
    id: "project-placeholder-2",
    title: "[ADD PROJECT] — Systems / Engineering Solution",
    category: "Systems & Backend",
    tagline: "[ADD PROJECT SHORT DESCRIPTION]",
    description: "[ADD DETAILED OVERVIEW OF SYSTEM DESIGN, PERFORMANCE CONSIDERATIONS, AND IMPLEMENTATION]",
    tags: ["[ADD TECH 1]", "[ADD TECH 2]", "[ADD TECH 3]"],
    architectureHighlights: [
      "[ADD SYSTEM COMPONENT HIGHLIGHT 1]",
      "[ADD SYSTEM COMPONENT HIGHLIGHT 2]"
    ],
    github: "#",
    demo: "#",
    status: "Placeholder"
  }
];

export const research = [
  {
    id: "research-1",
    title: "Component Architecture & State Separation in Modern Web Applications",
    area: "Frontend Systems",
    status: "Ongoing Investigation",
    date: "2026",
    summary: "Exploring patterns for isolating side effects, optimizing re-render cascades in React applications, and establishing clean data-flow pipelines between UI layers and data stores.",
    keyTakeaways: [
      "Decoupling UI representation from business state reduces component complexity.",
      "Custom hooks serve as ideal abstraction boundaries for data lifecycle management."
    ]
  },
  {
    id: "research-placeholder-1",
    title: "[ADD RESEARCH] — System Design / Performance Deep-Dive",
    area: "[ADD RESEARCH AREA]",
    status: "Planned / In Progress",
    date: "[ADD DATE]",
    summary: "[ADD SUMMARY OF TECHNICAL TOPIC, HYPOTHESIS, AND KEY INVESTIGATION POINTS]",
    keyTakeaways: [
      "[ADD KEY LESSON / FINDING 1]",
      "[ADD KEY LESSON / FINDING 2]"
    ]
  }
];

export const experience = [
  {
    id: "exp-placeholder-1",
    role: "[ADD ROLE / POSITION TITLE]",
    organization: "[ADD COMPANY / ORGANIZATION NAME]",
    period: "[ADD DURATION e.g. 2024 - PRESENT]",
    location: "[ADD LOCATION / REMOTE]",
    type: "[ADD FULL-TIME / INTERNSHIP / FREELANCE]",
    summary: "[ADD OVERVIEW OF RESPONSIBILITIES AND CONTRIBUTIONS]",
    highlights: [
      "[ADD KEY CONTRIBUTION OR TECHNICAL ACHIEVEMENT 1]",
      "[ADD KEY CONTRIBUTION OR TECHNICAL ACHIEVEMENT 2]",
      "[ADD KEY CONTRIBUTION OR TECHNICAL ACHIEVEMENT 3]"
    ],
    technologies: ["[ADD TECH 1]", "[ADD TECH 2]", "[ADD TECH 3]"]
  },
  {
    id: "exp-placeholder-2",
    role: "[ADD PREVIOUS ROLE TITLE]",
    organization: "[ADD ORGANIZATION NAME]",
    period: "[ADD DURATION]",
    location: "[ADD LOCATION]",
    type: "[ADD TYPE]",
    summary: "[ADD OVERVIEW OF ROLE AND TECHNICAL ENVIRONMENT]",
    highlights: [
      "[ADD KEY CONTRIBUTION 1]",
      "[ADD KEY CONTRIBUTION 2]"
    ],
    technologies: ["[ADD TECH 1]", "[ADD TECH 2]"]
  }
];

export const achievements = [
  {
    id: "achievement-placeholder-1",
    title: "[ADD ACHIEVEMENT TITLE]",
    issuer: "[ADD EVENT / ORGANIZATION NAME]",
    date: "[ADD DATE / YEAR]",
    description: "[ADD BRIEF DESCRIPTION OF THE ACCOMPLISHMENT, COMPETITION, OR HONOR]",
    link: "#"
  },
  {
    id: "achievement-placeholder-2",
    title: "[ADD ACHIEVEMENT / MILESTONE]",
    issuer: "[ADD ISSUER / INSTITUTION]",
    date: "[ADD DATE]",
    description: "[ADD BRIEF DESCRIPTION]",
    link: "#"
  }
];

export const certifications = [
  {
    id: "cert-placeholder-1",
    title: "[ADD CERTIFICATION NAME]",
    issuer: "[ADD ISSUING ORGANIZATION / PLATFORM]",
    issueDate: "[ADD ISSUE DATE]",
    credentialId: "[ADD CREDENTIAL ID OR N/A]",
    credentialUrl: "#",
    skillsCovered: ["[ADD SKILL 1]", "[ADD SKILL 2]", "[ADD SKILL 3]"]
  },
  {
    id: "cert-placeholder-2",
    title: "[ADD CERTIFICATION OR COURSE]",
    issuer: "[ADD PLATFORM / UNIVERSITY]",
    issueDate: "[ADD DATE]",
    credentialId: "[ADD CREDENTIAL ID]",
    credentialUrl: "#",
    skillsCovered: ["[ADD SKILL 1]", "[ADD SKILL 2]"]
  }
];

export const blogPosts = [
  {
    id: "post-1",
    title: "How I Approach Learning Unfamiliar Technologies",
    date: "August 2026",
    readTime: "4 min read",
    category: "Engineering Mindset",
    snippet: "When diving into a framework or language I've never touched before, I avoid tutorial hell by identifying core primitives first...",
    tags: ["Learning", "Engineering", "Workflow"],
    link: "#"
  },
  {
    id: "post-2",
    title: "Decoupling Data Architecture in React Applications",
    date: "August 2026",
    readTime: "5 min read",
    category: "Software Architecture",
    snippet: "Why hardcoding data inside JSX UI files hinders long-term scalability, and how centralized data schemas streamline updates...",
    tags: ["React", "Architecture", "Clean Code"],
    link: "#"
  }
];

export const socials = [
  { name: "GitHub", url: "https://github.com/Mahmoud-Hussain", icon: "Github", handle: "Mahmoud-Hussain" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", handle: "Mahmoud Hussain" },
  { name: "Email", url: "mailto:mahmoud.hussain.dev@example.com", icon: "Mail", handle: "Contact via Email" },
  { name: "Twitter / X", url: "https://x.com", icon: "Twitter", handle: "@mahmoud_dev" }
];
