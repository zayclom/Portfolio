// Language translations
const translations = {
    en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About',
        navProjects: 'Projects',
        navSkills: 'Skills',
        navContact: 'Contact',
        
        // Hero Section
        heroTitle: "I'm",
        heroName: 'Moad',
        heroSubtitle: 'IT Technician • Developer • Creative',
        heroDescription: "A guy who codes websites and apps for fun, and helps create useful things to make people's lives easier — whether it's complex or simple, I'll code it :D",
        heroVibe: "Between coding sessions, you'll probably find me on my skateboard or with my guitar. Because life isn't just lines of code!",
        btnProjects: 'Check out my projects',
        btnContact: "Let's talk!",
        
        // About Section
        aboutTitle: 'A bit about me',
        aboutP1: "A young professional from Montreal, I'm passionate about creating solutions and solving problems. Whether it's software development, network configuration, or troubleshooting, I place great importance on efficient, reliable, and well-executed solutions.",
        aboutP2: "A graduate of Cégep de Montréal in Computer Science, I'm looking to join a team where I can contribute my skills while continuing to learn and grow. I'm described as efficient, creative, and positive, with a collaborative and results-oriented approach.",
        aboutP3: "Outside the digital world, I express myself through skateboarding, guitar, and photography. For me, creativity goes far beyond code: it's a way of thinking and approaching every project.",
        aboutEducationTitle: 'My Journey',
        eduDEC: 'DEC - Computer Science',
        eduDECSchool: 'Cégep de Montréal',
        eduDECDesc: 'Comprehensive training in development, networking, and technical support',
        eduHighSchool: 'High School',
        eduHighSchoolDesc: 'International secondary education',
        
        // Projects Section
        projectsTitle: 'My Creations',
        projectsDesc: 'Projects that helped me learn and grow',
        projectsCategoryCollege: 'College Assignment Works',
        projectsCategoryInteractive: 'Interactive Personal Projects',
        clickMe: 'Click me!',
        
        // Project Descriptions
        projectAI: 'Automated image recognition tool using artificial intelligence for object detection and classification.',
        projectLibrary: 'Book management and lending system with relational database and intuitive user interface.',
        projectAndroid: 'Mobile delivery application with real-time tracking system and database management.',
        projectIoT: 'Technical devices project: Real-time communication between Raspberry Pi, interactive button, and automated LED lighting system.',
        projectEcommerce: 'Complete online platform for ordering different brands of energy drinks with integrated payment system.',
        projectCalculator: 'Desktop application developed with a modern interface and advanced calculation features.',
        projectCompetitive: 'Competitive gaming site with ranking system and real-time matchmaking.',
        projectGuess: 'Interactive guessing game where you discover hidden tricks and solve puzzles.',
        projectWouldYou: 'Dilemma choice app with live statistics and social sharing of results.',
        projectEnvironmental: 'Environmental awareness site with interactive data and calculated ecological impact.',
        projectBoycott: 'Awareness platform to promote ethical alternatives and inform about boycotts.',
        projectTierlist: 'Custom tierlist creator with drag-and-drop, saving, and sharing of rankings.',
        projectCalc: 'Modern web calculator with advanced functions, history, and minimalist design.',
        projectGuitar: 'Interactive guide with exercises, video tutorials, and progress tracker for guitarists.',
        projectMunchies: 'Recipe and culinary discovery site with smart recommendations and cooking mode.',
        
        // Skills Section
        skillsTitle: 'My Toolbox',
        skillsCategoryIT: 'IT & Networking',
        skillsCategoryProgramming: 'Programming & Web Development',
        skillsCategoryDatabase: 'Databases',
        skillsCategoryAPI: 'API & Frameworks',
        skillsCategoryCreative: 'Creative Skills',
        skillsCategoryHobbies: 'Passions & Hobbies',
        skillsCategorySoft: 'Soft Skills',
        skillFirewalls: 'Firewalls',
        skillOOP: 'OOP',
        skillPhotoEditing: 'Photo Editing',
        skillVideoEditing: 'Video Editing',
        hobbySkateboarding: 'Skateboarding',
        hobbySkateDesc: 'Passion for extreme sports and urban culture',
        hobbyGuitar: 'Guitar',
        hobbyGuitarDesc: 'Amateur and creative musician',
        softSkillCommunication: 'Communication',
        softSkillTeamwork: 'Teamwork',
        softSkillProblem: 'Problem Solving',
        softSkillAdaptability: 'Adaptability',
        softSkillLearner: 'Fast Learner',
        
        // Contact Section
        contactTitle: "Let's Chat?",
        contactDesc: "An idea, a project, or just want to say hi? Let's connect!",
        contactPhone: 'Phone',
        contactLocation: 'Location',
        
        // Footer
        footerJob: 'IT Technician & Web Developer',
        footerRights: 'All rights reserved.',
        
        // Notifications
        notificationComingSoon: 'Coming Soon!'
    },
    fr: {
        // Navigation
        navHome: 'Accueil',
        navAbout: 'À Propos',
        navProjects: 'Projets',
        navSkills: 'Compétences',
        navContact: 'Contact',
        
        // Hero Section
        heroTitle: 'Je suis',
        heroName: 'Moad',
        heroSubtitle: 'Technicien IT • Développeur • Créatif',
        heroDescription: "Un gars qui code des sites web et des apps pour le fun, et qui aide à créer des choses utiles pour faciliter la vie des autres — que ce soit compliqué ou pas, je vais le coder :D",
        heroVibe: "Entre deux sessions de code, tu me trouveras probablement sur mon skate ou avec ma guitare. Parce que la vie, c'est pas juste des lignes de code!",
        btnProjects: 'Check mes projets',
        btnContact: "Let's talk!",
        
        // About Section
        aboutTitle: 'Un peu sur moi',
        aboutP1: "Jeune professionnel de Montréal, je suis passionné par la création de solutions et la résolution de problèmes. Que ce soit en développement logiciel, en configuration réseau ou en dépannage, j'accorde une grande importance à des solutions efficaces, fiables et bien exécutées.",
        aboutP2: "Diplômé du Cégep de Montréal en Techniques de l'informatique, je souhaite rejoindre une équipe où je pourrai mettre mes compétences à contribution tout en continuant à apprendre et à évoluer. On me décrit comme quelqu'un d'efficace, créatif et positif, avec une approche collaborative et orientée vers les résultats.",
        aboutP3: "En dehors du monde numérique, je m'exprime à travers le skate, la guitare et la photographie. Pour moi, la créativité dépasse largement le code : c'est une façon de penser et d'aborder chaque projet.",
        aboutEducationTitle: 'Mon parcours',
        eduDEC: "DEC - Techniques de l'informatique",
        eduDECSchool: 'Cégep de Montréal',
        eduDECDesc: 'Formation complète en développement, réseaux, et support technique',
        eduHighSchool: 'Secondaire',
        eduHighSchoolDesc: 'Formation secondaire internationale',
        
        // Projects Section
        projectsTitle: 'Mes créations',
        projectsDesc: "Des projets qui m'ont fait apprendre et grandir",
        projectsCategoryCollege: 'College Assignment Works',
        projectsCategoryInteractive: 'Projets Personnels Interactifs',
        clickMe: 'Clique-moi!',
        
        // Project Descriptions
        projectAI: "Outil de reconnaissance d'images automatisé utilisant l'intelligence artificielle pour la détection et classification d'objets.",
        projectLibrary: "Système de gestion et d'emprunt de livres avec base de données relationnelle et interface utilisateur intuitive.",
        projectAndroid: 'Application mobile de livraison avec système de suivi en temps réel et gestion de base de données.',
        projectIoT: "Projet de périphériques techniques: Communication en temps réel entre Raspberry Pi, bouton interactif et système d'éclairage LED automatisé.",
        projectEcommerce: "Plateforme en ligne complète pour commander différentes marques de boissons énergétiques avec système de paiement intégré.",
        projectCalculator: 'Application desktop développée avec une interface moderne et des fonctionnalités avancées de calcul.',
        projectCompetitive: 'Site de jeux compétitifs avec système de classement et matchmaking en temps réel.',
        projectGuess: 'Jeu interactif de devinettes où tu dois découvrir des astuces cachées et résoudre des énigmes.',
        projectWouldYou: 'Application de choix dilemmes avec statistiques en direct et partage social des résultats.',
        projectEnvironmental: 'Site de sensibilisation environnementale avec données interactives et impact écologique calculé.',
        projectBoycott: 'Plateforme de sensibilisation pour promouvoir des alternatives éthiques et informer sur les boycotts.',
        projectTierlist: 'Créateur de tierlists personnalisé avec drag-and-drop, sauvegarde et partage de classements.',
        projectCalc: 'Calculatrice web moderne avec fonctions avancées, historique et design minimaliste.',
        projectGuitar: 'Guide interactif avec exercices, tutoriels vidéo et tracker de progression pour guitaristes.',
        projectMunchies: 'Site de recettes et découverte culinaire avec recommandations intelligentes et mode cuisine.',
        
        // Skills Section
        skillsTitle: 'Ma boîte à outils',
        skillsCategoryIT: 'Informatique & Réseaux',
        skillsCategoryProgramming: 'Programmation & Développement Web',
        skillsCategoryDatabase: 'Bases de Données',
        skillsCategoryAPI: 'API & Frameworks',
        skillsCategoryCreative: 'Compétences Créatives',
        skillsCategoryHobbies: 'Passions & Loisirs',
        skillsCategorySoft: 'Compétences Interpersonnelles',
        skillFirewalls: 'Pare-feux',
        skillOOP: 'POO',
        skillPhotoEditing: 'Retouche Photo',
        skillVideoEditing: 'Montage Vidéo',
        hobbySkateboarding: 'Skateboard',
        hobbySkateDesc: 'Passion pour les sports de glisse et la culture urbaine',
        hobbyGuitar: 'Guitare',
        hobbyGuitarDesc: 'Musicien amateur et créatif',
        softSkillCommunication: 'Communication',
        softSkillTeamwork: "Travail d'équipe",
        softSkillProblem: 'Résolution de problèmes',
        softSkillAdaptability: 'Adaptabilité',
        softSkillLearner: 'Apprentissage rapide',
        
        // Contact Section
        contactTitle: 'On jase?',
        contactDesc: "Une idée, un projet, ou juste envie de dire salut? Let's connect!",
        contactPhone: 'Téléphone',
        contactLocation: 'Localisation',
        
        // Footer
        footerJob: "Technicien d'Informatique & Développeur Web",
        footerRights: 'Tous droits réservés.',
        
        // Notifications
        notificationComingSoon: 'Bientôt disponible!'
    }
};

// Current language (default: English)
let currentLang = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    
    const t = translations[lang];
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Navigation
    document.querySelector('[href="#home"].nav-link').textContent = t.navHome;
    document.querySelector('[href="#about"].nav-link').textContent = t.navAbout;
    document.querySelector('[href="#projects"].nav-link').textContent = t.navProjects;
    document.querySelector('[href="#skills"].nav-link').textContent = t.navSkills;
    document.querySelector('[href="#contact"].nav-link').textContent = t.navContact;
    
    // Language toggle button
    document.querySelector('.lang-text').textContent = lang === 'en' ? 'FR' : 'EN';
    
    // Hero Section
    document.querySelector('.hero-title').innerHTML = `${t.heroTitle} <span class="gradient-text">${t.heroName}</span>`;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelector('.hero-description').textContent = t.heroDescription;
    document.querySelector('.hero-vibe').textContent = t.heroVibe;
    document.querySelector('[href="#projects"].btn').textContent = t.btnProjects;
    document.querySelector('[href="#contact"].btn').textContent = t.btnContact;
    
    // About Section
    document.querySelector('#about .section-title').textContent = t.aboutTitle;
    const aboutPs = document.querySelectorAll('.about-text > p');
    aboutPs[0].textContent = t.aboutP1;
    aboutPs[1].textContent = t.aboutP2;
    aboutPs[2].textContent = t.aboutP3;
    document.querySelector('.about-education h3').innerHTML = `<i class="fas fa-graduation-cap"></i> ${t.aboutEducationTitle}`;
    document.querySelectorAll('.edu-header h4')[0].textContent = '🇨🇦 ' + t.eduDEC;
    document.querySelectorAll('.edu-description')[0].textContent = t.eduDECDesc;
    document.querySelectorAll('.edu-header h4')[1].textContent = '🇲🇦 ' + t.eduHighSchool;
    document.querySelectorAll('.edu-description')[1].textContent = t.eduHighSchoolDesc;
    
    // Projects Section
    document.querySelector('#projects .section-title').textContent = t.projectsTitle;
    document.querySelector('#projects .section-description').textContent = t.projectsDesc;
    document.querySelectorAll('.project-category-title')[1].innerHTML = `<i class="fas fa-gamepad"></i> ${t.projectsCategoryInteractive}`;
    
    // Update all "Click me!" badges
    document.querySelectorAll('.interactive-badge').forEach(badge => {
        badge.innerHTML = `<i class="fas fa-mouse-pointer"></i> ${t.clickMe}`;
    });
    
    // Project descriptions
    const projectDescs = document.querySelectorAll('.project-card p');
    const descMapping = [
        t.projectAI, t.projectLibrary, t.projectAndroid, t.projectIoT, 
        t.projectEcommerce, t.projectCalculator, t.projectCompetitive,
        t.projectGuess, t.projectWouldYou, t.projectEnvironmental,
        t.projectBoycott, t.projectTierlist, t.projectCalc,
        t.projectGuitar, t.projectMunchies
    ];
    projectDescs.forEach((desc, index) => {
        if (descMapping[index]) {
            desc.textContent = descMapping[index];
        }
    });
    
    // Skills Section
    document.querySelector('#skills .section-title').textContent = t.skillsTitle;
    const categoryHeaders = document.querySelectorAll('.category-header h3');
    categoryHeaders[0].textContent = t.skillsCategoryIT;
    categoryHeaders[1].textContent = t.skillsCategoryProgramming;
    categoryHeaders[2].textContent = t.skillsCategoryDatabase;
    categoryHeaders[3].textContent = t.skillsCategoryAPI;
    categoryHeaders[4].textContent = t.skillsCategoryCreative;
    categoryHeaders[5].textContent = t.skillsCategoryHobbies;
    categoryHeaders[6].textContent = t.skillsCategorySoft;
    
    // Update specific skill names
    const firewallSkill = Array.from(document.querySelectorAll('.skill-item span')).find(el => el.textContent.includes('Pare-feux') || el.textContent.includes('Firewalls'));
    if (firewallSkill) firewallSkill.textContent = t.skillFirewalls;
    
    const oopSkill = Array.from(document.querySelectorAll('.skill-item span')).find(el => el.textContent === 'POO' || el.textContent === 'OOP');
    if (oopSkill) oopSkill.textContent = t.skillOOP;
    
    // Creative skills
    const creativeSkills = document.querySelectorAll('.creative-item span');
    if (creativeSkills[1]) creativeSkills[1].textContent = t.skillPhotoEditing;
    if (creativeSkills[3]) creativeSkills[3].textContent = t.skillVideoEditing;
    
    // Hobbies
    const hobbyCards = document.querySelectorAll('.hobby-card');
    hobbyCards[0].querySelector('h4').textContent = t.hobbySkateboarding;
    hobbyCards[0].querySelector('p').textContent = t.hobbySkateDesc;
    hobbyCards[1].querySelector('h4').textContent = t.hobbyGuitar;
    hobbyCards[1].querySelector('p').textContent = t.hobbyGuitarDesc;
    
    // Soft skills
    const softSkills = document.querySelectorAll('.soft-skill');
    softSkills[0].textContent = t.softSkillCommunication;
    softSkills[1].textContent = t.softSkillTeamwork;
    softSkills[2].textContent = t.softSkillProblem;
    softSkills[3].textContent = t.softSkillAdaptability;
    softSkills[4].textContent = t.softSkillLearner;
    
    // Contact Section
    document.querySelector('#contact .section-title').textContent = t.contactTitle;
    document.querySelector('#contact .section-description').textContent = t.contactDesc;
    const contactCards = document.querySelectorAll('.contact-card h3');
    contactCards[1].textContent = t.contactPhone;
    contactCards[2].textContent = t.contactLocation;
    
    // Footer
    document.querySelector('.footer-brand p').textContent = t.footerJob;
    document.querySelector('.footer-bottom p').textContent = `© 2026 Moad Elhoussaini. ${t.footerRights}`;
}

// Language toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    if (savedLang === 'fr') {
        changeLanguage('fr');
    }
    
    // Toggle button event
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'fr' : 'en';
            changeLanguage(newLang);
        });
    }
});
