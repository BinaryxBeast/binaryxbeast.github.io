// 1. SCROLL OBSERVER (ANIMATIONS)
// This adds the "fade-up" effect as you scroll down
const observerOptions = {
    root: null,
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-el');
            // If you want animations to run only once, uncomment line below:
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Select all elements with the 'hidden-el' class and start observing them
const hiddenElements = document.querySelectorAll('.hidden-el');
hiddenElements.forEach((el) => observer.observe(el));


// 2. ACTIVE NAV LINK HIGHLIGHTER
// Highlights the correct menu item based on which section you are viewing
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Offset -250px helps trigger the active state a bit earlier while scrolling
        if (pageYOffset >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});


// 3. MOBILE MENU TOGGLE
// Opens/closes the hamburger menu on small screens
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}

// Close mobile menu when a specific link is clicked
navLi.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});
