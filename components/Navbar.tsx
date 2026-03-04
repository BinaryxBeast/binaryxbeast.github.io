export default function Navbar() {
    return (
        <>
            <nav className="navbar" id="navbar" aria-label="Main Navigation">
                <div className="nav-inner">
                    <a href="#hero" className="nav-logo">
                        <span className="logo-bracket">&lt;</span>RG<span className="logo-bracket">/&gt;</span>
                    </a>
                    <ul className="nav-links" id="nav-links">
                        <li><a href="#about" className="nav-item">About</a></li>
                        <li><a href="#projects" className="nav-item">Projects</a></li>
                        <li><a href="#skills" className="nav-item">Skills</a></li>
                        <li><a href="#achievements" className="nav-item">Achievements</a></li>
                    </ul>
                    <a href="mailto:ghatulrushikesh1176@gmail.com" className="nav-cta">Contact</a>
                    <button className="hamburger" id="hamburger" aria-label="Toggle menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className="mobile-menu" id="mobile-menu">
                <a href="#about" className="mob-link">About</a>
                <a href="#projects" className="mob-link">Projects</a>
                <a href="#skills" className="mob-link">Skills</a>
                <a href="#achievements" className="mob-link">Achievements</a>
                <a href="#contact" className="mob-link">Contact</a>
            </div>
        </>
    );
}
