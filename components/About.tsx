export default function About() {
    return (
        <section className="section about-section" id="about" aria-label="About Me">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Who I Am</span>
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                </div>
                <div className="about-grid">
                    <div className="about-text" itemScope itemType="https://schema.org/Person">
                        <meta itemProp="name" content="Rushikesh Ghatul" />
                        <meta itemProp="alternateName" content="BinaryxBeast" />
                        <p className="about-lead">
                            I&apos;m <strong itemProp="name">Rushikesh Ghatul</strong>, a B.Tech Computer Science student at{" "}
                            <strong itemProp="worksFor" itemScope itemType="https://schema.org/CollegeOrUniversity">
                                <span itemProp="name">Vishwakarma University</span>
                            </strong>, passionate about building technology that makes a real impact.
                        </p>
                        <p className="about-body">
                            Whether it&apos;s crafting AI-powered academic tools, designing tactical game mechanics, or
                            engineering high-availability management systems — I bring creativity and technical precision to
                            every project I touch.
                        </p>
                        <p className="about-body">
                            I love participating in hackathons and game jams, where tight deadlines push me to think fast
                            and build bold. I&apos;m always looking for the next challenge that blends problem-solving with
                            innovation.
                        </p>
                        <div className="about-stats">
                            <div className="stat-card">
                                <div className="stat-num">3+</div>
                                <div className="stat-label">Projects Built</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-num">1</div>
                                <div className="stat-label">Hackathon Started</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-num">3</div>
                                <div className="stat-label">Awards</div>
                            </div>
                        </div>
                    </div>
                    <div className="education-card glass-card">
                        <div className="edu-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </div>
                        <h3>Education</h3>
                        <div className="edu-school">Vishwakarma University</div>
                        <div className="edu-degree">B.Tech in Computer Science</div>
                        <div className="edu-year">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Expected Graduation: 2029
                        </div>
                        <div className="edu-tags">
                            <span className="edu-tag">Computer Science</span>
                            <span className="edu-tag">Software Engineering</span>
                            <span className="edu-tag">AI/ML</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
