export default function Footer() {
    return (
        <footer className="footer" aria-label="Site Footer">
            <div className="container">
                <div className="footer-inner">
                    <a href="#hero" className="footer-logo">
                        <span className="logo-bracket">&lt;</span>RG<span className="logo-bracket">/&gt;</span>
                    </a>
                    <p className="footer-text">
                        &copy; 2026 <strong>Rushikesh Ghatul</strong>. All rights reserved.
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/BinaryxBeast/" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/rushikeshghatul/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://x.com/BinaryxBeast" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                        <a href="mailto:ghatulrushikesh1176@gmail.com">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
