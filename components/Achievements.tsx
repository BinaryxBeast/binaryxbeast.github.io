const PosterIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
    </svg>
);

const GameIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
    </svg>
);

export default function Achievements() {
    return (
        <section className="section achievements-section" id="achievements" aria-label="Achievements and Awards">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Recognition</span>
                    <h2 className="section-title">Achievements &amp; <span className="gradient-text">Awards</span></h2>
                </div>
                <div className="achievements-grid">
                    <div className="achievement-card glass-card silver">
                        <div className="ach-medal silver-medal"><PosterIcon /></div>
                        <div className="ach-content">
                            <div className="ach-rank">2nd Rank</div>
                            <div className="ach-title">Poster Design – Neural Canvas</div>
                            <div className="ach-desc">Secured 2nd rank in the Neural Canvas poster designing competition using Figma.</div>
                        </div>
                    </div>
                    <div className="achievement-card glass-card silver">
                        <div className="ach-medal silver-medal"><PosterIcon /></div>
                        <div className="ach-content">
                            <div className="ach-rank">2nd Rank</div>
                            <div className="ach-title">Poster Design – Teklingo</div>
                            <div className="ach-desc">Secured 2nd rank in the Teklingo poster designing competition using Figma.</div>
                        </div>
                    </div>
                    <div className="achievement-card glass-card silver">
                        <div className="ach-medal silver-medal"><GameIcon /></div>
                        <div className="ach-content">
                            <div className="ach-rank">1st Runner-Up</div>
                            <div className="ach-title">Game Exhibition – Game Jam 2k26</div>
                            <div className="ach-desc">Awarded 1st runner-up in the Game Exhibition category at Game Jam 2k26. Featured my game &quot;Last Protocol&quot;.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
