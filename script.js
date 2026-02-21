/* ============================================
   PORTFOLIO SCRIPT – Rushikesh Ghatul
============================================ */

'use strict';

// ─── Navbar Scroll ───────────────────────────────────────────────────────────
(function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}());


// ─── Mobile Menu ─────────────────────────────────────────────────────────────
(function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobLinks = document.querySelectorAll('.mob-link');

    function toggleMenu(open) {
        hamburger.classList.toggle('active', open);
        mobileMenu.classList.toggle('open', open);
        document.body.classList.toggle('menu-open', open);
    }

    hamburger.addEventListener('click', () => {
        toggleMenu(!mobileMenu.classList.contains('open'));
    });

    mobLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') toggleMenu(false);
    });
}());


// ─── Typewriter Effect ───────────────────────────────────────────────────────
(function initTypewriter() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const strings = [
        'Software Developer',
        'AI Enthusiast',
        'Game Developer',
        'UI/UX Designer',
        'Prompt Engineer',
        'Hackathon Winner 🏆'
    ];

    let strIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pauseTimer = null;

    const TYPING_SPEED = 80;
    const DELETING_SPEED = 40;
    const PAUSE_AFTER_TYPE = 2000;
    const PAUSE_AFTER_DELETE = 500;

    function type() {
        const current = strings[strIdx];

        if (!deleting) {
            el.textContent = current.slice(0, charIdx + 1);
            charIdx++;

            if (charIdx === current.length) {
                deleting = true;
                pauseTimer = setTimeout(type, PAUSE_AFTER_TYPE);
                return;
            }
        } else {
            el.textContent = current.slice(0, charIdx - 1);
            charIdx--;

            if (charIdx === 0) {
                deleting = false;
                strIdx = (strIdx + 1) % strings.length;
                pauseTimer = setTimeout(type, PAUSE_AFTER_DELETE);
                return;
            }
        }

        setTimeout(type, deleting ? DELETING_SPEED : TYPING_SPEED);
    }

    setTimeout(type, 700);
}());


// ─── Skill Bars Animation ────────────────────────────────────────────────────
(function initSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');
    let animated = false;

    function animateSkills() {
        if (animated) return;
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            animated = true;
            fills.forEach(fill => {
                const targetWidth = fill.getAttribute('data-width') + '%';
                setTimeout(() => {
                    fill.style.width = targetWidth;
                }, 200);
            });
        }
    }

    window.addEventListener('scroll', animateSkills, { passive: true });
    animateSkills(); // In case already visible
}());


// ─── Scroll Reveal ───────────────────────────────────────────────────────────
(function initScrollReveal() {
    const revealElements = [
        '.project-card',
        '.skill-category',
        '.achievement-card',
        '.contact-item',
        '.contact-form',
        '.about-text',
        '.education-card',
        '.stat-card',
        '.tech-badge',
    ];

    revealElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add('reveal');
            el.style.transitionDelay = `${i * 80}ms`;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}());


// ─── Active Nav Highlight ────────────────────────────────────────────────────
(function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    function updateActive() {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
}());


// ─── Smooth Scroll for Nav Links ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// ─── Section entrance animations ──────────────────────────────────────────────
const sectionHeaders = document.querySelectorAll('.section-header');
sectionHeaders.forEach(header => {
    header.classList.add('reveal');
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section-header.reveal').forEach(el => sectionObserver.observe(el));


// ─── Console Easter Egg ───────────────────────────────────────────────────────
console.log('%c🚀 Hey! You found the dev console!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Rushikesh Ghatul', 'color: #8b5cf6; font-size: 13px;');
console.log('%cghatulrushikesh1176@gmail.com', 'color: #94a3b8; font-size: 12px;');
