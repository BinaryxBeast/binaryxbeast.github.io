export default function Skills() {
    return (
        <section className="section skills-section" id="skills" aria-label="Technical Skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I Know</span>
                    <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
                </div>
                <div className="skills-grid">
                    {/* Programming */}
                    <div className="skill-category glass-card">
                        <div className="skill-cat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <h3 className="skill-cat-title">Programming</h3>
                        <div className="skill-items">
                            {[
                                { name: "C", pct: 85 },
                                { name: "C++", pct: 80 },
                                { name: "JavaScript", pct: 90 },
                            ].map((s) => (
                                <div className="skill-item" key={s.name}>
                                    <div className="skill-info">
                                        <span className="skill-name">{s.name}</span>
                                        <span className="skill-pct">{s.pct}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-fill" data-width={s.pct}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dev & Tools */}
                    <div className="skill-category glass-card">
                        <div className="skill-cat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <h3 className="skill-cat-title">Development &amp; Tools</h3>
                        <div className="skill-items">
                            {[
                                { name: "UI/UX Design", pct: 85 },
                                { name: "Git & GitHub", pct: 88 },
                                { name: "HTML5 & CSS3", pct: 92 },
                            ].map((s) => (
                                <div className="skill-item" key={s.name}>
                                    <div className="skill-info">
                                        <span className="skill-name">{s.name}</span>
                                        <span className="skill-pct">{s.pct}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-fill" data-width={s.pct}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specialized */}
                    <div className="skill-category glass-card">
                        <div className="skill-cat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="skill-cat-title">Specialized</h3>
                        <div className="skill-items">
                            {[
                                { name: "Prompt Engineering", pct: 93 },
                                { name: "AI Integration", pct: 87 },
                                { name: "Game Development", pct: 80 },
                            ].map((s) => (
                                <div className="skill-item" key={s.name}>
                                    <div className="skill-info">
                                        <span className="skill-name">{s.name}</span>
                                        <span className="skill-pct">{s.pct}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-fill" data-width={s.pct}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tech badges */}
                <div className="tech-badges">
                    {["Gemini API", "Firebase", "HTML5 Canvas", "Vercel", "GitHub Pages", "Figma", "VS Code", "Node.js"].map((badge) => (
                        <div className="tech-badge" key={badge}><span>{badge}</span></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
