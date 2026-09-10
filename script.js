"use strict";

        /* =========================================================
           CONTENT DATA
           ---------------------------------------------------------
           portfolioData.js was not supplied. This object reproduces
           the named content architecture from the provided document.
    
           Keep content edits here. Rendering functions follow below.
    
           No fabricated:
           - Skill levels
           - Examination years
           - Professional software-engineering employment
           - Research authorship or individual contribution
           - Research performance
           - Certifications
           - Publication acceptance/review status
           - Deployment URL
    
           The actual site implementation is standalone HTML/CSS/JS.
           The React/Vite/Three.js project description documents the
           user's supplied project, not this single-file implementation.
           ========================================================= */

        const portfolioData = {
            siteUrl: "https://mahmoud-hussain.github.io",

            personalInfo: {
                name: "Mahmoud Hussain",
                title: "CSE Student | AI/ML • Cybersecurity • Software Engineering • Research",
                email: "mahmoudMH.work@gmail.com",
                phone: "01836288874",
                university: "United International University",
                degree: "Bachelor of Science in Computer Science and Engineering (BScSE)",
                expectedGraduation: 2027,
                philosophy: "If I don't know something, I learn it. If I face a problem, I learn what it takes and build the solution.",
                interests: [
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Cybersecurity",
                    "Software Engineering",
                    "System Design",
                    "Full-Stack Development",
                    "Green Computing",
                    "IoT",
                    "Research",
                    "Automation"
                ],
                languages: [
                    { name: "Bengali", level: "Fluent" },
                    { name: "English", level: "Fluent" },
                    { name: "Urdu", level: "Conversational / speaking" },
                    { name: "Arabic", level: "Basic comprehension" }
                ]
            },

            process: [
                {
                    title: "01 — Encounter the problem",
                    description: "Start with what needs to be solved, rather than a technology looking for a use case."
                },
                {
                    title: "02 — Understand the fundamentals",
                    description: "Trace the behavior, clarify the constraints, and understand why the problem exists."
                },
                {
                    title: "03 — Learn what is required",
                    description: "Study the concepts and experiment with the tools that fit the problem."
                },
                {
                    title: "04 — Build the solution",
                    description: "Turn understanding into a practical implementation with clear boundaries and data flow."
                },
                {
                    title: "05 — Refine through iteration",
                    description: "Review what works, investigate what does not, and improve the solution deliberately."
                }
            ],

            engineeringPrinciples: [
                {
                    number: "01",
                    title: "Root-Cause Problem Solving",
                    subtitle: 'Understanding the “Why” Before Writing Code',
                    description: "I don't just patch symptoms. I trace system behaviors to their origins to build resilient, long-term engineering solutions."
                },
                {
                    number: "02",
                    title: "Stack Agnostic Agility",
                    subtitle: "Tools Serve the Problem, Not the Reverse",
                    description: "Languages and frameworks are means to an end. If a problem requires a language or database I haven't used yet, I learn it and work toward the depth the solution needs."
                },
                {
                    number: "03",
                    title: "Clean Modular Architecture",
                    subtitle: "Maintainability as a First-Class Feature",
                    description: "I aim to write code that other engineers can read, extend, and maintain, prioritizing modular boundaries and robust data flow."
                },
                {
                    number: "04",
                    title: "Iterative Refinement & Performance",
                    subtitle: "Build, Measure, Learn, Optimize",
                    description: "From bundle sizes to API request latencies, I treat performance review and continuous refinement as part of the engineering workflow."
                }
            ],

            technologies: [
                {
                    category: "Core Languages",
                    items: [
                        "JavaScript (ES6+)",
                        "TypeScript",
                        "Python",
                        "HTML5 / CSS3",
                        "SQL"
                    ]
                },
                {
                    category: "Frontend Engineering",
                    items: [
                        "React.js",
                        "Next.js",
                        "Tailwind CSS",
                        "Vite",
                        "Framer Motion",
                        "Three.js / React Three Fiber"
                    ]
                },
                {
                    category: "Backend & APIs",
                    items: [
                        "Node.js",
                        "Express.js",
                        "RESTful API Architecture",
                        "GraphQL"
                    ]
                },
                {
                    category: "Databases & Storage",
                    items: [
                        "PostgreSQL",
                        "MongoDB",
                        "Prisma ORM",
                        "Redis"
                    ]
                },
                {
                    category: "DevOps & Tooling",
                    items: [
                        "Git & GitHub",
                        "Docker",
                        "Vercel / Netlify",
                        "Linux CLI & Bash"
                    ]
                }
            ],

            projects: [
                {
                    id: "personal-engineering-portfolio-world",
                    published: true,
                    title: "Personal Engineering Portfolio World",
                    category: "Full-Stack Web App",
                    status: "Completed Phase 1",
                    tagline: "Interactive engineering portfolio featuring clean content architecture and modern visual identity.",
                    description: "Built with React, Vite, Tailwind CSS, and structured content architecture. Designed to showcase engineering philosophy, project breakdowns, technologies, and technical research.",
                    technologies: ["React", "Vite", "Tailwind CSS", "Three.js Base"],

                    caseStudy: {
                        overview: "An interactive engineering portfolio for presenting projects, technologies, engineering principles, and technical research.",
                        problem: "Present engineering work and technical thinking in a coherent portfolio while keeping content separate from the interface.",
                        approach: "Use structured content and reusable interface modules so information can evolve without redesigning every section.",
                        architecture: [
                            "Modular data architecture decoupling UI components from static data.",
                            "Custom obsidian dark theme with CSS custom design tokens.",
                            "Interactive 3D viewport canvas integration framework."
                        ],
                        technicalInterest: "The separation between content, presentation, and interactive viewport integration keeps different responsibilities independently maintainable.",
                        challenges: null,
                        solution: null,
                        outcome: "Completed Phase 1.",
                        lessons: null
                    },

                    links: [
                        {
                            label: "GitHub profile",
                            url: "https://github.com/Mahmoud-Hussain"
                        }
                    ],

                    // No repository-specific URL or live demo was supplied.
                    demoUrl: null
                }
            ],

            research: [
                {
                    id: "privacy-preserving-multimodal-ai",
                    filter: "ai",
                    area: "Multimodal AI / Privacy",
                    status: "Final Year Design Project / Ongoing Research",
                    badge: "accent",
                    title: "Privacy-Preserving Multimodal AI Framework for Human Behavioral State Understanding",
                    summary: "An ongoing Final Year Design Project exploring WiFi Channel State Information (CSI) and environmental sound sentiment analysis for understanding human behavioral state.",
                    tags: ["WiFi CSI", "Privacy-Preserving AI", "Environmental Sound", "Multimodal AI"],
                    detailsLabel: "Research scope",
                    details: [
                        "WiFi Channel State Information (CSI) as a sensing modality.",
                        "Human body movement detection and posture detection.",
                        "Human counting.",
                        "Environmental sound sentiment analysis—not speech sentiment analysis.",
                        "Privacy-preserving multimodal AI.",
                        "RuView-related concepts and references."
                    ],
                    note: "This is an ongoing design project, not a thesis or a claim of completed validation. No accuracy, dataset size, deployment result, or research finding is reported.",
                    source: null,
                    year: null
                },
                {
                    id: "x-fibf",
                    filter: "security",
                    area: "Cybersecurity / Explainable AI",
                    status: "Paper-based exploration",
                    badge: "blue",
                    title: "X-FIBF: Explainable File Integrity Behavioral Fingerprinting and Temporal API-Call Learning for Ransomware Detection",
                    paperUrl: "X-FIBF Explainable File Integrity Behavioral Fingerprinting and Temporal API-Call Learning for Ransomware Detection.pdf",
                    summary: "Working with research on ransomware detection that connects static analysis, behavioral fingerprinting, temporal deep learning, and attention-based explainability.",
                    tags: ["Ransomware Detection", "Explainable AI", "Temporal Deep Learning"],
                    detailsLabel: "Documented technical components",
                    details: [
                        "Static PE analysis.",
                        "File-integrity behavioral fingerprinting.",
                        "Temporal API-call learning.",
                        "MHSA-BiLSTM.",
                        "Attention-based explainability.",
                        "Controlled host and virtual-machine simulations."
                    ],
                    note: "The components describe the referenced research. Mahmoud’s authorship, exact individual contribution, and publication status are not asserted.",
                    source: {
                        label: "Referenced research portfolio",
                        url: "https://alvyrahman-ar.vercel.app/"
                    },
                    year: null
                },
                {
                    id: "greenfed-wastenet",
                    filter: "green",
                    area: "Green AI / Sustainable Computing",
                    status: "Paper-based exploration",
                    badge: "amber",
                    title: "GreenFed-WasteNet: Carbon-Aware Federated Baselines for Imbalanced Multi-Class Waste Classification",
                    paperUrl: "GreenFed-WasteNet Carbon-Aware Federated Baselines for Imbalanced Multi-Class Waste Classification.pdf",
                    summary: "Working with research at the intersection of federated learning, computer vision, and carbon-aware computing, with attention to classification imbalance and inference efficiency.",
                    tags: ["Federated Learning", "Green AI", "Computer Vision", "Carbon Awareness"],
                    detailsLabel: "Documented scope & components",
                    details: [
                        "Carbon-aware waste classification and class imbalance evaluation.",
                        "Open-set uncertainty and federated learning.",
                        "Inference efficiency and estimated environmental cost.",
                        "The referenced work documents an eight-class dataset containing 65,669 images.",
                        "Documented architectures include EfficientNet-B0 and MobileNetV3.",
                        "Broader interests include carbon emission estimation, computing efficiency, and the environmental impact of computing."
                    ],
                    note: "Dataset and model details belong to the referenced work. Authorship and individual contribution are not asserted. The previously documented review status is omitted because its current validity has not been confirmed.",
                    source: {
                        label: "Referenced research portfolio",
                        url: "https://alvyrahman-ar.vercel.app/"
                    },
                    year: null
                }
            ],

            experience: [
                {
                    company: "Luminoso Events",
                    role: "2D Graphics Designer",
                    dates: "2022 – Present",
                    location: "Bangladesh",
                    description: "Creating visual assets and 2D event-focused graphics for wedding and event projects at Luminoso Events."
                }
            ],

            workflowTools: [
                "Data workflows",
                "Dashboards",
                "Google Sheets",
                "Excel",
                "Power BI",
                "Process automation",
                "Data reconciliation",
                "Tracking systems",
                "QHSE workflows"
            ],

            achievements: [
                {
                    published: true,
                    title: "FutureMakers — Grameenphone",
                    role: "Participant / Team Member",
                    status: "Selected for Round 2",
                    description: "Selected for Round 2 of Grameenphone's nationwide AI-focused innovation competition from an initial field of 782 teams."
                }
            ],

            certifications: [],

            /*
              BLOG CONTENT MODEL
              -------------------------------------------------------
              No article body, publication date, or read time was supplied.
              These records remain visibly planned, not falsely published.
      
              To publish a verified article:
              1. Set publicationStatus to "published".
              2. Add your actual content blocks.
              3. Optionally supply date, readTime, and featuredImage.
              4. The listing and individual article view update automatically.
      
              Supported content block forms:
                { type: "paragraph", text: "..." }
                { type: "heading", text: "..." }
                { type: "list", items: ["...", "..."] }
                { type: "code", code: "..." }
                { type: "quote", text: "..." }
      
              featuredImage:
                null
                OR { src: "verified-image-url", alt: "Meaningful description" }
      
              For a future CMS, replace contentStore.getBlogPosts() with
              an API request returning this same structure. This file
              contains no pretend database, authentication, or publishing
              backend.
            */

            blogPosts: [
                {
                    title: "How I Approach Learning Unfamiliar Technologies",
                    date: null,
                    readTime: null,
                    category: "Engineering Mindset",
                    tags: ["Learning", "Engineering", "Workflow"],
                    featuredImage: null,
                    content: [],
                    slug: "how-i-approach-learning-unfamiliar-technologies",
                    publicationStatus: "planned"
                },
                {
                    title: "Decoupling Data Architecture in React Applications",
                    date: null,
                    readTime: null,
                    category: "Software Architecture",
                    tags: ["React", "Architecture", "Clean Code"],
                    featuredImage: null,
                    content: [],
                    slug: "decoupling-data-architecture-in-react-applications",
                    publicationStatus: "planned"
                }
            ],

            socials: [
                {
                    name: "GitHub",
                    url: "https://github.com/Mahmoud-Hussain"
                }
            ]
        };

        /* =========================================================
           DATA ACCESS / RENDERING UTILITIES
           ========================================================= */

        const contentStore = {
            async getBlogPosts() {
                return portfolioData.blogPosts;
            }
        };

        const $ = (selector, root = document) => root.querySelector(selector);
        const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

        function escapeHTML(value) {
            return String(value ?? "").replace(/[&<>"']/g, character => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            })[character]);
        }

        function safeURL(value, allowedProtocols = ["https:", "http:"]) {
            if (!value) return "";

            try {
                const url = new URL(value, window.location.href);
                return allowedProtocols.includes(url.protocol) ? url.href : "";
            } catch {
                return "";
            }
        }

        function renderTags(items) {
            return items.map(item => `<span class="tag">${escapeHTML(item)}</span>`).join("");
        }

        function externalLink(link, className = "text-link") {
            const url = safeURL(link.url);
            if (!url) return "";

            return `
        <a
          class="${escapeHTML(className)}"
          href="${escapeHTML(url)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${escapeHTML(link.label)}, opens in a new tab"
        >
          ${escapeHTML(link.label)} <span aria-hidden="true">↗</span>
        </a>
      `;
        }

        function renderBadge(text, color = "accent") {
            const allowed = ["accent", "blue", "amber"];
            const variant = allowed.includes(color) ? color : "accent";

            return `
        <span class="badge badge-${variant}">
          <span class="status-dot" aria-hidden="true"></span>
          ${escapeHTML(text)}
        </span>
      `;
        }

        /* =========================================================
           SECTION RENDERERS
           ========================================================= */

        function renderAbout() {
            $("#interest-list").innerHTML = renderTags(portfolioData.personalInfo.interests);

            $("#language-list").innerHTML = portfolioData.personalInfo.languages.map(language => `
        <div>
          <strong>${escapeHTML(language.name)}</strong>
          <span>${escapeHTML(language.level)}</span>
        </div>
      `).join("");
        }

        function renderPrinciples() {
            $("#principles-grid").innerHTML = portfolioData.engineeringPrinciples.map(principle => `
        <article class="principle">
          <span class="principle-number">${escapeHTML(principle.number)} /</span>
          <h3>${escapeHTML(principle.title)}</h3>
          <h4>${escapeHTML(principle.subtitle)}</h4>
          <p>${escapeHTML(principle.description)}</p>
        </article>
      `).join("");
        }

        function renderTechnologies() {
            $("#technology-list").innerHTML = portfolioData.technologies.map((group, index) => `
        <div class="technology-row">
          <div class="technology-heading">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHTML(group.category)}</h3>
          </div>
          <div class="tag-list">${renderTags(group.items)}</div>
        </div>
      `).join("");
        }

        function caseStudyBlock(title, value) {
            if (!value || (Array.isArray(value) && !value.length)) return "";

            const content = Array.isArray(value)
                ? `<ul>${value.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
                : `<p>${escapeHTML(value)}</p>`;

            return `
        <div class="case-study-block">
          <h4>${escapeHTML(title)}</h4>
          ${content}
        </div>
      `;
        }

        function renderProjects() {
            const projects = portfolioData.projects.filter(project => (
                project.published &&
                project.title &&
                !project.title.includes("[ADD")
            ));

            $("#project-list").innerHTML = projects.map(project => {
                const study = project.caseStudy || {};

                return `
          <article class="project-card reveal" aria-labelledby="${escapeHTML(project.id)}-title">
            <div class="project-intro">
              <div class="project-copy">
                <div class="project-kicker">
                  <span>${escapeHTML(project.category)}</span>
                  ${renderBadge(project.status)}
                </div>
                <h3 id="${escapeHTML(project.id)}-title">${escapeHTML(project.title)}</h3>
                <p>${escapeHTML(project.tagline)}</p>
                <p>${escapeHTML(project.description)}</p>
                <div class="tag-list">${renderTags(project.technologies)}</div>
                ${project.links.map(link => externalLink(link)).join("")}
              </div>

              <div class="architecture-preview" aria-label="Project architecture overview">
                <span class="architecture-label">Architecture / Separation of concerns</span>

                <div class="architecture-box">
                  <strong>portfolioData.js</strong>
                  <span>Content · Projects · Research · Principles</span>
                </div>

                <div class="architecture-connector" aria-hidden="true"></div>

                <div class="architecture-box">
                  <strong>Modular UI components</strong>
                  <span>React presentation layer / reusable sections</span>
                </div>

                <div class="architecture-connector" aria-hidden="true"></div>

                <div class="architecture-split">
                  <div class="architecture-box">
                    <strong>Design tokens</strong>
                    <span>Obsidian theme / CSS</span>
                  </div>
                  <div class="architecture-box">
                    <strong>Viewport base</strong>
                    <span>3D integration framework</span>
                  </div>
                </div>
              </div>
            </div>

            <details class="project-details">
              <summary>Explore the technical case study</summary>
              <div class="case-study-grid">
                ${caseStudyBlock("Overview", study.overview)}
                ${caseStudyBlock("Problem & purpose", study.problem)}
                ${caseStudyBlock("Approach", study.approach)}
                ${caseStudyBlock("Architecture", study.architecture)}
                ${caseStudyBlock("Technically interesting", study.technicalInterest)}
                ${caseStudyBlock("Challenges", study.challenges)}
                ${caseStudyBlock("Solution", study.solution)}
                ${caseStudyBlock("Current outcome", study.outcome)}
                ${caseStudyBlock("Lessons", study.lessons)}
              </div>
            </details>
          </article>
        `;
            }).join("");

            $("#projects").hidden = projects.length === 0;
        }

        function renderResearch() {
            $("#research-grid").innerHTML = portfolioData.research.map(item => `
        <article
          class="research-card reveal"
          data-research-filter="${escapeHTML(item.filter)}"
          aria-labelledby="${escapeHTML(item.id)}-heading"
        >
          <div class="research-meta">
            <span class="research-area">
              ${escapeHTML(item.area)}${item.year ? ` / ${escapeHTML(item.year)}` : ""}
            </span>
            ${renderBadge(item.status, item.badge)}
          </div>

          <h3 id="${escapeHTML(item.id)}-heading">${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.summary)}</p>

          <div class="tag-list">${renderTags(item.tags)}</div>

          ${item.paperUrl ? `
          <div class="research-actions">
            <a
              class="button button-small"
              href="${encodeURI(item.paperUrl)}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View paper for ${escapeHTML(item.title)} (opens in a new tab)"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              View Paper <span aria-hidden="true">↗</span>
            </a>
            <a
              class="button button-small"
              href="${encodeURI(item.paperUrl)}"
              download
              aria-label="Download paper for ${escapeHTML(item.title)}"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download <span aria-hidden="true">↓</span>
            </a>
          </div>
          ` : ""}

          <details class="research-details">
            <summary>${escapeHTML(item.detailsLabel)}</summary>
            <ul>
              ${item.details.map(detail => `<li>${escapeHTML(detail)}</li>`).join("")}
            </ul>

            ${item.note ? `<p class="research-caution">${escapeHTML(item.note)}</p>` : ""}
            ${item.source ? externalLink(item.source, "research-source") : ""}
          </details>
        </article>
      `).join("");
        }

        function renderExperience() {
            $("#experience-list").innerHTML = portfolioData.experience.map(item => `
        <article class="experience-item">
          ${item.dates
                    ? `<span class="experience-date">${escapeHTML(item.dates)}${item.location ? ` · ${escapeHTML(item.location)}` : ""}</span>`
                    : `<span class="experience-date">Professional experience</span>`
                }
          <h3>${escapeHTML(item.role)}</h3>
          <p class="experience-company">${escapeHTML(item.company)}</p>
          <p>${escapeHTML(item.description)}</p>
        </article>
      `).join("");

            $("#workflow-tools").innerHTML = renderTags(portfolioData.workflowTools);

            $("#achievement-list").innerHTML = portfolioData.achievements
                .filter(item => item.published && item.title && !item.title.includes("[ADD"))
                .map(item => `
          <article class="achievement reveal" aria-label="Verified competition achievement">
            <div class="achievement-icon" aria-hidden="true">↗</div>
            <div>
              <span class="inline-label">Innovation competition · ${escapeHTML(item.role)}</span>
              <h3>${escapeHTML(item.title)}</h3>
              <p>${escapeHTML(item.description)}</p>
            </div>
            ${renderBadge(item.status)}
          </article>
        `).join("");
        }

        /* =========================================================
           BLOG LISTING + INDIVIDUAL ARTICLE ROUTES
           ========================================================= */

        let blogPosts = [];
        const defaultTitle = document.title;
        const defaultDescription = $('meta[name="description"]').content;

        function isPublished(post) {
            return (
                post.publicationStatus === "published" &&
                Array.isArray(post.content) &&
                post.content.length > 0
            );
        }

        function formatDate(value) {
            if (!value) return "";

            const date = /^\d{4}-\d{2}-\d{2}$/.test(value)
                ? new Date(`${value}T12:00:00`)
                : new Date(value);

            if (Number.isNaN(date.getTime())) return "";

            return new Intl.DateTimeFormat("en", {
                year: "numeric",
                month: "short",
                day: "numeric"
            }).format(date);
        }

        function blogImage(post) {
            if (!post.featuredImage?.src || !post.featuredImage?.alt) return "";

            const src = safeURL(post.featuredImage.src);
            if (!src) return "";

            return `
        <img
          class="blog-image"
          src="${escapeHTML(src)}"
          alt="${escapeHTML(post.featuredImage.alt)}"
          loading="lazy"
          decoding="async"
          width="760"
          height="420"
        >
      `;
        }

        function renderBlog() {
            const visiblePosts = blogPosts.filter(post =>
                isPublished(post) || post.publicationStatus === "planned"
            );

            $("#blog-grid").innerHTML = visiblePosts.map(post => {
                const published = isPublished(post);
                const date = formatDate(post.date);
                const metadata = [
                    date,
                    post.readTime ? `${post.readTime} min read` : ""
                ].filter(Boolean).join(" · ");

                return `
          <article class="blog-card reveal">
            ${blogImage(post)}
            <div class="blog-category">
              <span>${escapeHTML(post.category)}</span>
              <span class="badge">${published ? "Published" : "Planned article"}</span>
            </div>

            <h3>${escapeHTML(post.title)}</h3>
            <div class="tag-list">${renderTags(post.tags || [])}</div>

            <div class="blog-footer">
              <span>${published
                        ? escapeHTML(metadata || "Engineering notes")
                        : "Not yet published"
                    }</span>

              ${published
                        ? `<a class="text-link" href="#article/${encodeURIComponent(post.slug)}">Read article <span aria-hidden="true">↗</span></a>`
                        : `<span aria-hidden="true">Writing / forthcoming</span>`
                    }
            </div>
          </article>
        `;
            }).join("");

            const hasPublishedPosts = visiblePosts.some(isPublished);
            if (hasPublishedPosts) {
                $("#blog .section-heading > p").textContent =
                    "Engineering notes, learning workflows, and architecture. Published articles appear alongside clearly marked planned topics.";
            }

            $("#blog").hidden = visiblePosts.length === 0;
        }

        function renderContentBlocks(blocks) {
            return blocks.map(block => {
                switch (block.type) {
                    case "paragraph":
                        return `<p>${escapeHTML(block.text)}</p>`;
                    case "heading":
                        return `<h2>${escapeHTML(block.text)}</h2>`;
                    case "list":
                        return `<ul>${(block.items || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
                    case "code":
                        return `<pre><code>${escapeHTML(block.code)}</code></pre>`;
                    case "quote":
                        return `<blockquote><p>${escapeHTML(block.text)}</p></blockquote>`;
                    default:
                        return "";
                }
            }).join("");
        }

        function updateSocialTitle(title, description) {
            document.title = title;
            $('meta[name="description"]').content = description;
            $('meta[property="og:title"]').content = title;
            $('meta[property="og:description"]').content = description;
            $('meta[name="twitter:title"]').content = title;
            $('meta[name="twitter:description"]').content = description;
        }

        function handleRoute() {
            const hash = window.location.hash;
            const articlePrefix = "#article/";
            const portfolioView = $("#portfolio-view");
            const articleView = $("#article-view");

            if (hash.startsWith(articlePrefix)) {
                let slug = "";

                try {
                    slug = decodeURIComponent(hash.slice(articlePrefix.length));
                } catch {
                    slug = "";
                }

                const post = blogPosts.find(item => item.slug === slug && isPublished(item));

                portfolioView.hidden = true;
                articleView.hidden = false;

                if (post) {
                    const date = formatDate(post.date);
                    const metadata = [
                        post.category,
                        date,
                        post.readTime ? `${post.readTime} min read` : ""
                    ].filter(Boolean).join(" · ");

                    $("#article-content").innerHTML = `
            <h1 id="article-title" tabindex="-1">${escapeHTML(post.title)}</h1>
            <p class="article-meta">${escapeHTML(metadata)}</p>
            <div class="tag-list">${renderTags(post.tags || [])}</div>
            ${blogImage(post)}
            <div class="article-body">${renderContentBlocks(post.content)}</div>
          `;

                    const firstParagraph = post.content.find(block => block.type === "paragraph");
                    updateSocialTitle(
                        `${post.title} — Mahmoud Hussain`,
                        firstParagraph?.text?.slice(0, 160) || defaultDescription
                    );
                } else {
                    $("#article-content").innerHTML = `
            <h1 id="article-title" tabindex="-1">Article not available.</h1>
            <p class="muted">This article has not been published, or the link does not match a published post.</p>
          `;
                    updateSocialTitle("Article not available — Mahmoud Hussain", defaultDescription);
                }

                setActiveNavigation("blog");
                window.scrollTo({ top: 0, behavior: "instant" });
                $("#article-title").focus({ preventScroll: true });
            } else {
                const wasReading = !articleView.hidden;
                portfolioView.hidden = false;
                articleView.hidden = true;
                updateSocialTitle(defaultTitle, defaultDescription);

                if (wasReading) {
                    requestAnimationFrame(() => {
                        const targetId = hash.slice(1) || "home";
                        const target = document.getElementById(targetId) || $("#home");
                        target.scrollIntoView({ behavior: "instant", block: "start" });
                    });
                }
            }
        }

        /* =========================================================
           NAVIGATION
           ========================================================= */

        function setActiveNavigation(id) {
            $$("#site-nav a").forEach(link => {
                if (link.getAttribute("href") === `#${id}`) {
                    link.setAttribute("aria-current", "location");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        }

        function initNavigation() {
            const toggle = $("#menu-toggle");
            const navigation = $("#site-nav");
            const mobileQuery = window.matchMedia("(max-width: 860px)");

            function closeMenu(returnFocus = false) {
                navigation.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Open navigation menu");

                if (returnFocus) toggle.focus();
            }

            toggle.addEventListener("click", () => {
                const open = toggle.getAttribute("aria-expanded") !== "true";

                toggle.setAttribute("aria-expanded", String(open));
                toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
                navigation.classList.toggle("is-open", open);
            });

            navigation.addEventListener("click", event => {
                if (event.target.closest("a")) closeMenu();
            });

            document.addEventListener("keydown", event => {
                if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
                    closeMenu(true);
                }
            });

            document.addEventListener("click", event => {
                if (!event.target.closest(".site-header")) closeMenu();
            });

            document.addEventListener("focusin", event => {
                if (navigation.classList.contains("is-open") && !event.target.closest(".site-header")) {
                    closeMenu();
                }
            });

            mobileQuery.addEventListener("change", () => closeMenu());

            let scheduled = false;

            function updateScrollState() {
                scheduled = false;

                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const progress = maxScroll > 0
                    ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
                    : 0;

                $("#scroll-progress").style.transform = `scaleX(${progress})`;

                if (!$("#article-view").hidden) return;

                const threshold = window.innerHeight * .3;
                let currentSection = "home";

                $$("#portfolio-view > section[id]").forEach(section => {
                    if (!section.hidden && section.getBoundingClientRect().top <= threshold) {
                        currentSection = section.id;
                    }
                });

                if (maxScroll > 0 && window.scrollY >= maxScroll - 5) {
                    currentSection = "contact";
                }

                setActiveNavigation(currentSection);
            }

            function scheduleUpdate() {
                if (scheduled) return;
                scheduled = true;
                requestAnimationFrame(updateScrollState);
            }

            window.addEventListener("scroll", scheduleUpdate, { passive: true });
            window.addEventListener("resize", scheduleUpdate, { passive: true });
            window.addEventListener("hashchange", scheduleUpdate);
            updateScrollState();
        }

        /* =========================================================
           USER-DRIVEN PROCESS DIAGRAM
           ========================================================= */

        function initProcessDiagram() {
            const buttons = $$(".step-button");
            const nodes = $$("[data-diagram-node]");

            function selectStep(index) {
                const step = portfolioData.process[index];
                if (!step) return;

                buttons.forEach((button, buttonIndex) => {
                    button.setAttribute("aria-pressed", String(buttonIndex === index));
                });

                nodes.forEach(node => {
                    node.classList.toggle("is-active", Number(node.dataset.diagramNode) === index);
                });

                $("#step-title").textContent = step.title;
                $("#step-description").textContent = step.description;
            }

            buttons.forEach((button, index) => {
                button.addEventListener("click", () => selectStep(index));

                button.addEventListener("keydown", event => {
                    let nextIndex = index;

                    if (event.key === "ArrowRight") nextIndex = (index + 1) % buttons.length;
                    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + buttons.length) % buttons.length;
                    else if (event.key === "Home") nextIndex = 0;
                    else if (event.key === "End") nextIndex = buttons.length - 1;
                    else return;

                    event.preventDefault();
                    selectStep(nextIndex);
                    buttons[nextIndex].focus();
                });
            });
        }

        /* =========================================================
           RESEARCH FILTERS
           ========================================================= */

        function initResearchFilters() {
            $("#research-filters").addEventListener("click", event => {
                const button = event.target.closest("[data-filter]");
                if (!button) return;

                const filter = button.dataset.filter;
                let count = 0;

                $$("#research-filters button").forEach(item => {
                    item.setAttribute("aria-pressed", String(item === button));
                });

                $$("[data-research-filter]").forEach(card => {
                    const visible = filter === "all" || card.dataset.researchFilter === filter;
                    card.hidden = !visible;

                    if (visible) {
                        count++;
                        card.classList.remove("is-pending");
                    }
                });

                $("#research-status").textContent =
                    `${count} research ${count === 1 ? "entry" : "entries"} shown for ${button.textContent.trim()}.`;
            });
        }

        /* =========================================================
           COPY EMAIL
           Clipboard API with a local-file-friendly fallback.
           ========================================================= */

        function initCopyEmail() {
            const button = $("#copy-email");
            const status = $("#copy-status");

            button.addEventListener("click", async () => {
                const email = portfolioData.personalInfo.email;
                let success = false;

                try {
                    if (navigator.clipboard && window.isSecureContext) {
                        await navigator.clipboard.writeText(email);
                        success = true;
                    }
                } catch {
                    success = false;
                }

                if (!success) {
                    const field = document.createElement("textarea");
                    field.value = email;
                    field.setAttribute("readonly", "");
                    field.setAttribute("aria-label", "Email address to copy");
                    field.style.position = "fixed";
                    field.style.left = "-9999px";
                    field.style.top = "0";

                    document.body.appendChild(field);
                    field.select();

                    try {
                        success = document.execCommand("copy");
                    } catch {
                        success = false;
                    }

                    field.remove();
                    button.focus({ preventScroll: true });
                }

                status.textContent = success
                    ? "Email address copied."
                    : `Copy manually: ${email}`;
            });
        }

        /* =========================================================
           PROGRESSIVE SCROLL REVEAL
           No animation on reduced-motion or constrained devices.
           ========================================================= */

        function initReveal() {
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            const lowPerformance =
                navigator.connection?.saveData ||
                (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);

            if (
                reducedMotion.matches ||
                lowPerformance ||
                !("IntersectionObserver" in window)
            ) return;

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.remove("is-pending");
                    observer.unobserve(entry.target);
                });
            }, {
                threshold: 0.05,
                rootMargin: "0px 0px -20px 0px"
            });

            $$(".reveal").forEach(element => {
                // Do not hide content already visible on initial load or deep links.
                if (element.getBoundingClientRect().top < window.innerHeight) return;
                element.classList.add("is-pending");
                observer.observe(element);
            });

            reducedMotion.addEventListener("change", event => {
                if (!event.matches) return;
                observer.disconnect();
                $$(".reveal.is-pending").forEach(element => element.classList.remove("is-pending"));
            });
        }

        /* =========================================================
           DEPLOYMENT METADATA
           ========================================================= */

        function configureDeploymentMetadata() {
            const siteURL = safeURL(portfolioData.siteUrl);
            if (!siteURL) return;

            const canonical = document.createElement("link");
            canonical.rel = "canonical";
            canonical.href = siteURL;
            document.head.appendChild(canonical);

            const openGraphURL = document.createElement("meta");
            openGraphURL.setAttribute("property", "og:url");
            openGraphURL.content = siteURL;
            document.head.appendChild(openGraphURL);
        }

        /* =========================================================
           INITIALIZATION
           ========================================================= */

        async function init() {
            renderAbout();
            renderPrinciples();
            renderTechnologies();
            renderProjects();
            renderResearch();
            renderExperience();

            blogPosts = await contentStore.getBlogPosts();
            renderBlog();

            configureDeploymentMetadata();
            initNavigation();
            initProcessDiagram();
            initResearchFilters();
            initCopyEmail();

            $("#copyright-year").textContent = new Date().getFullYear();

            window.addEventListener("hashchange", handleRoute);
            handleRoute();

            // Honor section links after dynamically rendered content is ready.
            if (location.hash && !location.hash.startsWith("#article/")) {
                const target = document.getElementById(location.hash.slice(1));
                if (target) {
                    requestAnimationFrame(() => {
                        target.scrollIntoView({ behavior: "instant", block: "start" });
                    });
                }
            }

            requestAnimationFrame(initReveal);
        }

        init().catch(error => {
            console.error("Portfolio initialization failed:", error);
            $$(".reveal.is-pending").forEach(element => {
                element.classList.remove("is-pending");
            });
        });