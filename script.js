// Mobile Navigation Toggle
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Navigation
        navLinks.classList.toggle('nav-active');
        
        // Animate Links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

// Smooth Scrolling for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile navigation if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                document.querySelector('.hamburger').classList.remove('toggle');
            }
        });
    });
}

// Scroll Animation for Elements
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 300;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
                section.classList.add('active');
            }
        });
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scroll Down
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scroll Up
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

// Typing Animation for Hero Section
function setupTypingAnimation() {
    const text = document.querySelector('.hero-content h2');
    const originalText = text.textContent;
    text.textContent = '';
    
    let charIndex = 0;
    function type() {
        if (charIndex < originalText.length) {
            text.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    setupSmoothScroll();
    setupScrollAnimation();
    setupNavbarScroll();
    setupTypingAnimation();
});