const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

interface Project {
    num: string;
    title: string;
    desc: string;
    type: string;
    typeClass: string;
    typeIcon?: React.ReactNode;
    stack: string[];
    githubUrl: string;
    liveUrl: string;
    liveLabel: string;
    featured?: boolean;
    schemaUrl: string;
    schemaDesc: string;
}

const projects: Project[] = [
    {
        num: "01",
        title: "StudySpark",
        desc: "AI-powered academic assistant that reduces manual research time by delivering instant AI-generated summaries, contextual insights, and explanations directly within a focused learning environment.",
        type: "Hackathon Project",
        typeClass: "hackathon",
        stack: ["Gemini 2.5 Flash", "Firebase", "JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/BinaryxBeast/StudySpark",
        liveUrl: "https://studyspark-ed989.firebaseapp.com/",
        liveLabel: "Live Demo",
        featured: true,
        schemaUrl: "https://studyspark-ed989.firebaseapp.com/",
        schemaDesc: "AI-powered academic assistant using Gemini 2.5 Flash and Firebase.",
    },
    {
        num: "02",
        title: "Last Protocol",
        desc: "Web-based stealth action game where players use environmental cover and smart movement to avoid detection. Built with tactical AI pathfinding and behavior systems.",
        type: "Personal Project",
        typeClass: "personal",
        typeIcon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        stack: ["JavaScript", "HTML5 Canvas", "Tactical AI"],
        githubUrl: "https://github.com/BinaryxBeast/Last-Protocol",
        liveUrl: "https://last-protocol-nu.vercel.app/",
        liveLabel: "Play Game",
        schemaUrl: "https://last-protocol-nu.vercel.app/",
        schemaDesc: "Web-based stealth action game with tactical AI pathfinding.",
    },
    {
        num: "03",
        title: "Faculty Portal System",
        desc: "High-availability academic management system for handling student data, visualizing grade distributions, and securing academic tracking processes.",
        type: "College Project",
        typeClass: "college",
        typeIcon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        stack: ["HTML5", "Modern CSS", "JavaScript", "System Analysis"],
        githubUrl: "https://github.com/BinaryxBeast/Faculty-Portal/",
        liveUrl: "https://binaryxbeast.github.io/Faculty-Portal/",
        liveLabel: "Live Demo",
        schemaUrl: "https://binaryxbeast.github.io/Faculty-Portal/",
        schemaDesc: "High-availability academic management system for student data and grade visualization.",
    },
];

export default function Projects() {
    return (
        <section className="section projects-section" id="projects" aria-label="Featured Projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I&apos;ve Built</span>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            key={project.num}
                            className={`project-card glass-card${project.featured ? " featured" : ""}`}
                            data-project={project.num}
                            itemScope
                            itemType="https://schema.org/SoftwareApplication"
                        >
                            <meta itemProp="applicationCategory" content="WebApplication" />
                            <meta itemProp="operatingSystem" content="Web" />
                            <link itemProp="url" href={project.schemaUrl} />
                            <div className="project-header">
                                <div className="project-meta">
                                    <span className={`project-type ${project.typeClass}`}>
                                        {project.typeIcon} {project.type}
                                    </span>
                                    <span className="project-number">{project.num}</span>
                                </div>
                                <h3 className="project-title" itemProp="name">{project.title}</h3>
                                <p className="project-desc" itemProp="description">{project.desc}</p>
                            </div>
                            <div className="project-stack" aria-label="Technologies used">
                                {project.stack.map((tag) => (
                                    <span className="stack-tag" key={tag} itemProp="keywords">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="proj-link github"
                                    aria-label={`View ${project.title} source code on GitHub`}
                                >
                                    <GithubIcon /> Source Code
                                </a>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="proj-link live"
                                    aria-label={`${project.liveLabel} for ${project.title}`}
                                    itemProp="url"
                                >
                                    <ExternalLinkIcon /> {project.liveLabel}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
