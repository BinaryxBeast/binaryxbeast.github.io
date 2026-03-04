'use client';

import { useEffect } from 'react';

export default function ClientEffects() {
    useEffect(() => {
        // ─── Navbar Scroll ────────────────────────────────────────────────────────
        const navbar = document.getElementById('navbar');
        const handleNavScroll = () => {
            if (!navbar) return;
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        };
        window.addEventListener('scroll', handleNavScroll, { passive: true });

        // ─── Mobile Menu ──────────────────────────────────────────────────────────
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobLinks = document.querySelectorAll<HTMLElement>('.mob-link');

        const toggleMenu = (open: boolean) => {
            hamburger?.classList.toggle('active', open);
            mobileMenu?.classList.toggle('open', open);
            document.body.classList.toggle('menu-open', open);
        };

        const handleHamburger = () => {
            toggleMenu(!mobileMenu?.classList.contains('open'));
        };

        hamburger?.addEventListener('click', handleHamburger);
        mobLinks.forEach((link) => link.addEventListener('click', () => toggleMenu(false)));

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') toggleMenu(false);
        };
        document.addEventListener('keydown', handleEsc);

        // ─── Typewriter Effect ────────────────────────────────────────────────────
        const el = document.getElementById('typed-text');
        const strings = [
            'Software Developer',
            'AI Enthusiast',
            'Game Developer',
            'UI/UX Designer',
            'Prompt Engineer',
            'Hackathon Winner 🏆',
        ];
        let strIdx = 0;
        let charIdx = 0;
        let deleting = false;
        let typeTimer: ReturnType<typeof setTimeout>;

        const TYPING_SPEED = 80;
        const DELETING_SPEED = 40;
        const PAUSE_AFTER_TYPE = 2000;
        const PAUSE_AFTER_DELETE = 500;

        function type() {
            if (!el) return;
            const current = strings[strIdx];
            if (!deleting) {
                el.textContent = current.slice(0, charIdx + 1);
                charIdx++;
                if (charIdx === current.length) {
                    deleting = true;
                    typeTimer = setTimeout(type, PAUSE_AFTER_TYPE);
                    return;
                }
            } else {
                el.textContent = current.slice(0, charIdx - 1);
                charIdx--;
                if (charIdx === 0) {
                    deleting = false;
                    strIdx = (strIdx + 1) % strings.length;
                    typeTimer = setTimeout(type, PAUSE_AFTER_DELETE);
                    return;
                }
            }
            typeTimer = setTimeout(type, deleting ? DELETING_SPEED : TYPING_SPEED);
        }
        typeTimer = setTimeout(type, 700);

        // ─── Skill Bars Animation ─────────────────────────────────────────────────
        const fills = document.querySelectorAll<HTMLElement>('.skill-fill');
        let skillsAnimated = false;

        const animateSkills = () => {
            if (skillsAnimated) return;
            const skillsSection = document.getElementById('skills');
            if (!skillsSection) return;
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                skillsAnimated = true;
                fills.forEach((fill) => {
                    const targetWidth = fill.getAttribute('data-width') + '%';
                    setTimeout(() => { fill.style.width = targetWidth; }, 200);
                });
            }
        };
        window.addEventListener('scroll', animateSkills, { passive: true });
        animateSkills();

        // ─── Scroll Reveal ────────────────────────────────────────────────────────
        const revealSelectors = [
            '.project-card', '.skill-category', '.achievement-card',
            '.contact-item', '.contact-form', '.about-text', '.education-card',
            '.stat-card', '.tech-badge',
        ];
        revealSelectors.forEach((selector) => {
            document.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
                el.classList.add('reveal');
                el.style.transitionDelay = `${i * 80}ms`;
            });
        });

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

        // ─── Section Header Reveal ────────────────────────────────────────────────
        const sectionHeaders = document.querySelectorAll<HTMLElement>('.section-header');
        sectionHeaders.forEach((header) => header.classList.add('reveal'));

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        sectionObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        document.querySelectorAll('.section-header.reveal').forEach((el) => sectionObserver.observe(el));

        // ─── Active Nav Highlight ─────────────────────────────────────────────────
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        const navItems = document.querySelectorAll<HTMLAnchorElement>('.nav-item');

        const updateActive = () => {
            let current = '';
            sections.forEach((section) => {
                const top = section.offsetTop - 100;
                if (window.scrollY >= top) current = section.getAttribute('id') || '';
            });
            navItems.forEach((item) => {
                item.classList.toggle('active', item.getAttribute('href') === '#' + current);
            });
        };
        window.addEventListener('scroll', updateActive, { passive: true });

        // ─── Smooth Scroll ────────────────────────────────────────────────────────
        const smoothScrollHandler = function (this: HTMLAnchorElement, e: Event) {
            const href = this.getAttribute('href');
            if (!href) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: 'smooth' });
            }
        };
        const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
        anchorLinks.forEach((anchor) =>
            anchor.addEventListener('click', smoothScrollHandler as unknown as EventListener)
        );

        // ─── Console Easter Egg ───────────────────────────────────────────────────
        console.log('%c🚀 Hey! You found the dev console!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
        console.log('%cBuilt with ❤️ by Rushikesh Ghatul', 'color: #8b5cf6; font-size: 13px;');
        console.log('%cghatulrushikesh1176@gmail.com', 'color: #94a3b8; font-size: 12px;');

        // ─── Cleanup ─────────────────────────────────────────────────────────────
        return () => {
            window.removeEventListener('scroll', handleNavScroll);
            window.removeEventListener('scroll', animateSkills);
            window.removeEventListener('scroll', updateActive);
            hamburger?.removeEventListener('click', handleHamburger);
            document.removeEventListener('keydown', handleEsc);
            anchorLinks.forEach((anchor) =>
                anchor.removeEventListener('click', smoothScrollHandler as unknown as EventListener)
            );
            clearTimeout(typeTimer);
            revealObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    return null;
}
