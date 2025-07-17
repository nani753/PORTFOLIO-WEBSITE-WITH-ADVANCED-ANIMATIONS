// ==========================================================================
// Portfolio Website JavaScript - Professional Animations
// ==========================================================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ==========================================================================
// Global Variables
// ==========================================================================
let isMenuOpen = false;
let lastScrollY = window.scrollY;
let ticking = false;

// ==========================================================================
// DOM Content Loaded
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupEventListeners();
    setupScrollAnimations();
    setupNavigation();
    setupSkillsAnimation();
    setupProjectsAnimation();
    setupTimelineAnimation();
    setupContactForm();
    setupScrollToTop();
});

// ==========================================================================
// Initialize Animations
// ==========================================================================
function initializeAnimations() {
    // Set initial states for elements
    gsap.set('.hero-content > *', { opacity: 0, y: 50 });
    gsap.set('.hero-image-container', { opacity: 0, scale: 0.8 });
    gsap.set('.navbar', { y: -100 });
    gsap.set('.scroll-indicator', { opacity: 0 });
    
    // Hero section entrance animation
    const heroTl = gsap.timeline({ delay: 0.5 });
    
    heroTl.to('.navbar', {
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    })
    .to('.hero-greeting', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
    })
    .to('.hero-name', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.3")
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4")
    .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3")
    .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3")
    .to('.hero-image-container', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.6")
    .to('.scroll-indicator', {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.3");

    // Typing animation for hero name
    gsap.to('.hero-name', {
        text: "Alex Johnson",
        duration: 2,
        ease: "none",
        delay: 1.2
    });
}

// ==========================================================================
// Event Listeners
// ==========================================================================
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // Button hover effects
    setupButtonHoverEffects();
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Parallax effect for hero section
    window.addEventListener('scroll', handleParallaxEffect);
    
    // Mouse cursor effect
    setupCursorEffect();
}

// ==========================================================================
// Scroll Animations
// ==========================================================================
function setupScrollAnimations() {
    // Fade in elements on scroll
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // About section animations
    gsap.fromTo('.about-image img', {
        opacity: 0,
        x: -100,
        rotation: -5
    }, {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.about-content',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.fromTo('.about-description', {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.about-text',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Stats animation
    gsap.fromTo('.stat-item', {
        opacity: 0,
        y: 50,
        scale: 0.8
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.about-stats',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Animate stat numbers
    gsap.utils.toArray('.stat-number').forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue);
        
        gsap.fromTo(stat, {
            innerHTML: 0
        }, {
            innerHTML: numericValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: stat,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// ==========================================================================
// Skills Animation
// ==========================================================================
function setupSkillsAnimation() {
    gsap.fromTo('.skill-category', {
        opacity: 0,
        y: 100,
        rotationX: -15
    }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.skills-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Animate progress bars
    gsap.utils.toArray('.progress-bar').forEach(bar => {
        const width = bar.getAttribute('data-width');
        
        gsap.fromTo(bar, {
            width: '0%'
        }, {
            width: width + '%',
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bar,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// ==========================================================================
// Projects Animation
// ==========================================================================
function setupProjectsAnimation() {
    gsap.fromTo('.project-card', {
        opacity: 0,
        y: 100,
        rotationY: -15
    }, {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Project card hover effects
    gsap.utils.toArray('.project-card').forEach(card => {
        const image = card.querySelector('.project-image img');
        const overlay = card.querySelector('.project-overlay');
        const links = card.querySelectorAll('.project-link');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.fromTo(links, {
                scale: 0,
                rotation: 180
            }, {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: 0.1
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// ==========================================================================
// Timeline Animation
// ==========================================================================
function setupTimelineAnimation() {
    gsap.fromTo('.timeline-item', {
        opacity: 0,
        x: (index) => index % 2 === 0 ? -100 : 100,
        scale: 0.8
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.timeline-container',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Timeline dots animation
    gsap.fromTo('.timeline-dot', {
        scale: 0
    }, {
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.timeline-container',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// ==========================================================================
// Navigation
// ==========================================================================
function setupNavigation() {
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                
                navLinks.forEach(link => link.classList.remove('active'));
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navMenu.classList.add('active');
        gsap.to('.hamburger span:nth-child(1)', {
            rotation: 45,
            y: 6,
            duration: 0.3
        });
        gsap.to('.hamburger span:nth-child(2)', {
            opacity: 0,
            duration: 0.3
        });
        gsap.to('.hamburger span:nth-child(3)', {
            rotation: -45,
            y: -6,
            duration: 0.3
        });
    } else {
        navMenu.classList.remove('active');
        gsap.to('.hamburger span', {
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 0.3
        });
    }
}

function handleSmoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        
        gsap.to(window, {
            scrollTo: offsetTop,
            duration: 1,
            ease: "power2.inOut"
        });
        
        // Close mobile menu if open
        if (isMenuOpen) {
            toggleMobileMenu();
        }
    }
}

function handleNavbarScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            const navbar = document.querySelector('.navbar');
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                gsap.to('.navbar', {
                    y: -100,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to('.navbar', {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        });
        ticking = true;
    }
}

// ==========================================================================
// Button Hover Effects
// ==========================================================================
function setupButtonHoverEffects() {
    gsap.utils.toArray('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// ==========================================================================
// Parallax Effect
// ==========================================================================
function handleParallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image-container');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        gsap.to(element, {
            y: scrolled * speed,
            duration: 0.5,
            ease: "power2.out"
        });
    });
}

// ==========================================================================
// Contact Form
// ==========================================================================
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    const formGroups = document.querySelectorAll('.form-group');
    
    // Animate form elements
    gsap.fromTo('.contact-info', {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.contact-content',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.fromTo('.contact-form', {
        opacity: 0,
        x: 50
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.contact-content',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Form field animations
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', () => {
                gsap.to(label, {
                    y: -25,
                    scale: 0.8,
                    color: '#667eea',
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    gsap.to(label, {
                        y: 0,
                        scale: 1,
                        color: '#666',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitButton.style.background = '#10b981';
        
        // Reset form
        setTimeout(() => {
            e.target.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
        }, 2000);
    }, 2000);
}

// ==========================================================================
// Scroll to Top
// ==========================================================================
function setupScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            gsap.to(window, {
                scrollTo: 0,
                duration: 1,
                ease: "power2.inOut"
            });
        });
    }
}

// ==========================================================================
// Cursor Effect
// ==========================================================================
function setupCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Add cursor styles
    const cursorStyles = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        }
        
        .custom-cursor.hover {
            transform: scale(2);
            background: rgba(102, 126, 234, 0.5);
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = cursorStyles;
    document.head.appendChild(style);
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,
            ease: "power2.out"
        });
    });
    
    // Hover effects for interactive elements
    document.querySelectorAll('a, button, .project-card, .skill-category').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// ==========================================================================
// Performance Optimization
// ==========================================================================
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            // Perform scroll-based animations here
        }, 16); // ~60fps
    });
    
    // Preload images
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ==========================================================================
// Initialize Performance Optimizations
// ==========================================================================
document.addEventListener('DOMContentLoaded', optimizePerformance);

// ==========================================================================
// Utility Functions
// ==========================================================================
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================================================
// Error Handling
// ==========================================================================
window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error);
    // You can implement error reporting here
});

// ==========================================================================
// Export for module usage (if needed)
// ==========================================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        setupScrollAnimations,
        setupNavigation
    };
}