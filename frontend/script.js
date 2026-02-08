// ============================================
// Navigation Functionality
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards, skill categories, and other animated elements
const animatedElements = document.querySelectorAll('.project-card, .skill-category, .contact-card, .education-card, .about-text, .about-education, .hobby-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// Special Effects for Programming Skills
// ============================================
const programmingSkills = document.querySelectorAll('.programming-skills .skill-item.special-effect');

programmingSkills.forEach((skill, index) => {
    // Staggered entrance animation
    skill.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    
    // Add particle effect on hover
    skill.addEventListener('mouseenter', function() {
        createParticles(this);
    });
});

function createParticles(element) {
    const colors = ['#667eea', '#764ba2', '#f093fb'];
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 5px;
            height: 5px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        const rect = element.getBoundingClientRect();
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 5;
        const velocity = 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = rect.left + rect.width / 2;
        let posY = rect.top + rect.height / 2;
        let opacity = 1;
        
        const animate = () => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// ============================================
// Hobby Cards Tilt Effect
// ============================================
const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                display: flex;
                align-items: center;
                gap: 0.75rem;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                min-width: 300px;
            }
            
            .notification-success {
                border-left: 4px solid #10b981;
            }
            
            .notification-success i {
                color: #10b981;
                font-size: 1.5rem;
            }
            
            .notification-error {
                border-left: 4px solid #ef4444;
            }
            
            .notification-error i {
                color: #ef4444;
                font-size: 1.5rem;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============================================
// Typing Effect for Hero Subtitle
// ============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let index = 0;
function typeWriter() {
    if (index < text.length) {
        heroSubtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// ============================================
// Parallax Effect for Hero Section
// ============================================
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${rate}px)`;
    }
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${rate * -1}px)`;
    }
});

// ============================================
// Project Card Hover Effect
// ============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Skill Items Animation on Hover
// ============================================
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ============================================
// Dynamic Year in Footer
// ============================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Moad Elhoussaini. Tous droits réservés.`;
}

// ============================================
// Loading Animation
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Cursor Trail Effect (Optional)
// ============================================
const createCursorTrail = () => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.cursor-circle');
    
    if (circles.length === 0 && window.innerWidth > 768) {
        // Create cursor circles
        for (let i = 0; i < 20; i++) {
            const circle = document.createElement('div');
            circle.className = 'cursor-circle';
            circle.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                pointer-events: none;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(circle);
        }
    }
    
    const circles2 = document.querySelectorAll('.cursor-circle');
    
    circles2.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
    });
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        circles2.forEach((circle, index) => {
            circle.style.left = x - 5 + 'px';
            circle.style.top = y - 5 + 'px';
            circle.style.transform = `scale(${(circles2.length - index) / circles2.length})`;
            circle.style.opacity = (circles2.length - index) / circles2.length * 0.3;
            
            circle.x = x;
            circle.y = y;
            
            const nextCircle = circles2[index + 1] || circles2[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }
    
    if (window.innerWidth > 768) {
        animateCircles();
    }
};

// Uncomment to enable cursor trail effect
// createCursorTrail();

// ============================================
// Interactive Projects Functionality
// ============================================
const interactiveProjects = document.querySelectorAll('.interactive-project');

// Project URLs mapping
const projectUrls = {
    'competitive-games': '#',  // Add your actual project URLs here
    'guess-trick': '#',
    'would-you-rather': '#',
    'environmental': '#',
    'boycott': '#',
    'tierlist': '#',
    'calculator': '#',
    'guitar': '#',
    'munchies': '#'
};

// Add click handlers
interactiveProjects.forEach(project => {
    const projectId = project.getAttribute('data-project');
    
    // Click event
    project.addEventListener('click', () => {
        const url = projectUrls[projectId];
        if (url && url !== '#') {
            window.open(url, '_blank');
        } else {
            // Show a notification that the project is coming soon
            showProjectNotification(project);
        }
    });
    
    // Mouse tracking for glow effect
    project.addEventListener('mousemove', (e) => {
        const rect = project.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        project.style.setProperty('--x', x + '%');
        project.style.setProperty('--y', y + '%');
    });
    
    // Reset on mouse leave
    project.addEventListener('mouseleave', () => {
        project.style.setProperty('--x', '50%');
        project.style.setProperty('--y', '50%');
    });
});

// Show notification function
function showProjectNotification(project) {
    const projectName = project.querySelector('h3').textContent;
    const lang = currentLang || 'en';
    const comingSoonText = translations[lang].notificationComingSoon;
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'project-notification';
    notification.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${projectName} - ${comingSoonText}</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification styles dynamically
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .project-notification {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.95) 0%, rgba(139, 92, 246, 0.95) 100%);
        color: var(--bg-dark);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 245, 255, 0.4);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 10000;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }
    
    .project-notification.show {
        transform: translateX(0);
    }
    
    .project-notification i {
        font-size: 1.25rem;
    }
    
    @media (max-width: 768px) {
        .project-notification {
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
            transform: translateY(200px);
        }
        
        .project-notification.show {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(notificationStyles);

// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Hello!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cYou\'re curious? I like that! 🚀', 'font-size: 14px; color: #764ba2;');
console.log('%cThis portfolio was created with ❤️ by Moad Elhoussaini', 'font-size: 12px; color: #4a5568;');
console.log('%cContact me: moadelhoussaini2@gmail.com', 'font-size: 12px; color: #667eea; font-weight: bold;');
