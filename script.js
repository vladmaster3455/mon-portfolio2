const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const certBlock = document.querySelector("[data-certifications]");
const certToggle = document.querySelector("[data-cert-toggle]");
const portrait = document.querySelector("[data-portrait]");
const reveals = document.querySelectorAll(".reveal");
const langSwitcher = document.querySelector("[data-lang-switcher]");
const langButtons = document.querySelectorAll("[data-lang-option]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const storedTextNodes = new WeakMap();

const translations = {
  en: {
    "Projets": "Projects",
    "Compétences": "Skills",
    "Expériences": "Experience",
    "Formation": "Education",
    "Contact": "Contact",
    "Dakar, Sénégal · Disponible": "Dakar, Senegal · Available",
    "Software Engineer Full Stack, Mobile & IA Junior": "Full Stack, Mobile & Junior AI Software Engineer",
    "Je conçois des applications web et mobiles propres, rapides et maintenables, avec une attention forte aux APIs, à l’expérience produit et aux usages IA.": "I build clean, fast and maintainable web and mobile applications, with strong attention to APIs, product experience and AI use cases.",
    "Voir projets": "View projects",
    "Statut": "Status",
    "Ouvert aux opportunités": "Open to opportunities",
    "Localisation": "Location",
    "Mobilité": "Mobility",
    "Sur site · Hybride · Remote": "On-site · Hybrid · Remote",
    "Langues": "Languages",
    "Français courant · Anglais technique": "Fluent French · Technical English",
    "Domaines": "Domains",
    "Web · Mobile · API · IA": "Web · Mobile · API · AI",
    "Projets sélectionnés": "Selected projects",
    "Des réalisations concrètes, présentées pour aller vite à l’essentiel.": "Concrete work, presented so visitors get the essentials quickly.",
    "Production": "Production",
    "Plateforme orientée gestion produits, présentation commerciale et expérience utilisateur responsive.": "Platform focused on product management, commercial presentation and responsive user experience.",
    "Démo live": "Live demo",
    "Site vitrine pour salon de coiffure avec identité visuelle, services, contact client et parcours simple.": "Showcase website for a hair salon with visual identity, services, customer contact and a simple user journey.",
    "IA · Computer Vision": "AI · Computer Vision",
    "Application de computer vision déployée pour tester des scénarios de détection d’objets et d’expérimentation IA.": "Deployed computer vision app for testing object detection scenarios and AI experiments.",
    "Démo non disponible": "Demo unavailable",
    "Architecture microservices avec Kafka, PostgreSQL, Docker, Gateway, JWT et documentation Swagger.": "Microservices architecture with Kafka, PostgreSQL, Docker, Gateway, JWT and Swagger documentation.",
    "Outil": "Tool",
    "Générateur de CV": "Resume Generator",
    "Application de génération dynamique de CV professionnels avec templates modernes et parcours guidé.": "Dynamic professional resume generation app with modern templates and a guided flow.",
    "Cybersécurité": "Cybersecurity",
    "Dashboard IA/sécurité pour visualiser des anomalies et explorer des signaux opérationnels.": "AI/security dashboard for visualizing anomalies and exploring operational signals.",
    "Sécurité réseau": "Network security",
    "Système IDS basé machine learning pour analyser des données réseau et détecter des comportements suspects.": "Machine learning based IDS for analyzing network data and detecting suspicious behavior.",
    "Service REST avec JWT, gestion des droits, documentation Swagger et structure backend claire.": "REST service with JWT, permission management, Swagger documentation and a clear backend structure.",
    "API avec authentification JWT, CRUD, architecture MVC et middlewares personnalisés.": "API with JWT authentication, CRUD, MVC architecture and custom middleware.",
    "Application web moderne avec interface réactive et structure fullstack propre.": "Modern web application with a responsive interface and clean full-stack structure.",
    "Une stack organisée par usage, pas par accumulation.": "A stack organized by use case, not by accumulation.",
    "React, Next.js, React Native, TypeScript, JavaScript, HTML5, CSS3, WordPress, responsive design, intégration Figma.": "React, Next.js, React Native, TypeScript, JavaScript, HTML5, CSS3, WordPress, responsive design, Figma integration.",
    "Data & IA": "Data & AI",
    "Python, Streamlit, FastAPI, PyTorch, LLM, NLP, deep learning, computer vision, data engineering, PGVector.": "Python, Streamlit, FastAPI, PyTorch, LLM, NLP, deep learning, computer vision, data engineering, PGVector.",
    "Delivery & Qualité": "Delivery & Quality",
    "Parcours court, lisible et orienté impact.": "A concise, readable path focused on impact.",
    "Avril 2026 — Présent": "April 2026 — Present",
    "Développement d’applications web et mobiles en startup tech, collaboration remote et itérations produit.": "Web and mobile application development in a tech startup, remote collaboration and product iterations.",
    "Juillet 2025 — Octobre 2025": "July 2025 — October 2025",
    "Développeur Full Stack · Simplon Sénégal": "Full Stack Developer · Simplon Senegal",
    "Applications web et mobile avec React, React Native et TypeScript, intégration Figma, APIs REST et méthode Agile.": "Web and mobile applications with React, React Native and TypeScript, Figma integration, REST APIs and Agile methods.",
    "Septembre 2024 — Octobre 2024": "September 2024 — October 2024",
    "Application C# Windows Forms/.NET, modélisation de données, tests unitaires et documentation.": "C# Windows Forms/.NET application, data modeling, unit testing and documentation.",
    "Avril 2024 — Juillet 2024": "April 2024 — July 2024",
    "Stagiaire Data Engineer · UCAD": "Data Engineer Intern · UCAD",
    "Étude comparative de LLMs, pipelines Python, nettoyage de données et veille deep learning.": "Comparative study of LLMs, Python pipelines, data cleaning and deep learning research monitoring.",
    "Avril 2023 — Septembre 2023": "April 2023 — September 2023",
    "Stagiaire Software Engineer · LITA": "Software Engineer Intern · LITA",
    "Contribution à des projets logiciels réels, collaboration en équipe et bonnes pratiques de développement.": "Contribution to real software projects, team collaboration and development best practices.",
    "Base académique claire.": "A clear academic foundation.",
    "2024 à 2026": "2024 to 2026",
    "Diplôme d’Ingénierie Technologue en Informatique": "Computer Science Technologist Engineering Degree",
    "2022 à 2024": "2022 to 2024",
    "Diplôme de Technicien Supérieur en Informatique": "Higher Technician Diploma in Computer Science",
    "Juillet à Novembre": "July to November",
    "Formation Développement Web & Mobile": "Web & Mobile Development Training",
    "Certifications": "Certifications",
    "Quelques signaux complémentaires.": "A few additional signals.",
    "Voir plus": "Show more",
    "Voir moins": "Show less",
    "Disponible pour construire des interfaces, APIs et produits numériques sérieux.": "Available to build serious interfaces, APIs and digital products.",
    "Téléphone": "Phone",
    "Dakar · Portfolio statique GitHub Pages": "Dakar · Static GitHub Pages portfolio"
  }
};

const uiLabels = {
  fr: {
    brand: "Accueil Serge Senghor",
    closeMenu: "Fermer le menu",
    langChoice: "Choix de langue",
    menu: "Ouvrir le menu",
    metaDescription: "Portfolio professionnel de Serge Senghor, Software Engineer Full Stack, Mobile et IA Junior basé à Dakar.",
    nav: "Navigation principale",
    portrait: "Portrait de Serge Senghor",
    quickInfo: "Informations rapides"
  },
  en: {
    brand: "Serge Senghor home",
    closeMenu: "Close menu",
    langChoice: "Language choice",
    menu: "Open menu",
    metaDescription: "Professional portfolio of Serge Senghor, Full Stack, Mobile and Junior AI Software Engineer based in Dakar.",
    nav: "Main navigation",
    portrait: "Portrait of Serge Senghor",
    quickInfo: "Quick information"
  }
};

const detectLanguage = () => {
  const savedLanguage = localStorage.getItem("portfolio-language");

  if (savedLanguage === "fr" || savedLanguage === "en") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
};

let currentLanguage = detectLanguage();

const translateTextNodes = (language) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName) || !node.textContent.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  let node = walker.nextNode();

  while (node) {
    textNodes.push(node);
    node = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    if (!storedTextNodes.has(textNode)) {
      storedTextNodes.set(textNode, textNode.textContent);
    }

    const originalText = storedTextNodes.get(textNode);
    const trimmedText = originalText.trim();
    const translatedText = language === "fr" ? trimmedText : translations.en[trimmedText];

    if (translatedText) {
      textNode.textContent = originalText.replace(trimmedText, translatedText);
    } else {
      textNode.textContent = originalText;
    }
  });
};

const updateCertificationToggle = () => {
  const open = certBlock.classList.contains("is-open");
  certToggle.textContent = currentLanguage === "fr"
    ? (open ? "Voir moins" : "Voir plus")
    : (open ? "Show less" : "Show more");
};

const updateMenuLabel = () => {
  const open = nav.classList.contains("is-open");
  menuButton.setAttribute("aria-label", open ? uiLabels[currentLanguage].closeMenu : uiLabels[currentLanguage].menu);
};

const applyLanguage = (language) => {
  currentLanguage = language;
  localStorage.setItem("portfolio-language", language);
  document.documentElement.lang = language;
  document.querySelector('meta[name="description"]').setAttribute("content", uiLabels[language].metaDescription);
  document.querySelector(".brand").setAttribute("aria-label", uiLabels[language].brand);
  document.querySelector(".profile-band").setAttribute("aria-label", uiLabels[language].quickInfo);
  portrait.setAttribute("aria-label", uiLabels[language].portrait);
  nav.setAttribute("aria-label", uiLabels[language].nav);
  langSwitcher.setAttribute("aria-label", uiLabels[language].langChoice);

  langButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langOption === language));
  });

  translateTextNodes(language);
  updateCertificationToggle();
  updateMenuLabel();
};

menuButton.addEventListener("click", () => {
  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  updateMenuLabel();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    updateMenuLabel();
  });
});

certToggle.addEventListener("click", () => {
  const open = !certBlock.classList.contains("is-open");
  certBlock.classList.toggle("is-open", open);
  certToggle.setAttribute("aria-expanded", String(open));
  updateCertificationToggle();
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
  });
});

applyLanguage(currentLanguage);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));

let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  header.classList.toggle("is-compact", currentY > 24);
  lastY = currentY;
}, { passive: true });

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  portrait.addEventListener("mousemove", (event) => {
    const bounds = portrait.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    portrait.style.setProperty("--portrait-x", `${x * 10}px`);
    portrait.style.setProperty("--portrait-y", `${y * 10}px`);
    portrait.style.setProperty("--portrait-rotate", `${x * 2.2}deg`);
  }, { passive: true });

  portrait.addEventListener("mouseleave", () => {
    portrait.style.removeProperty("--portrait-x");
    portrait.style.removeProperty("--portrait-y");
    portrait.style.removeProperty("--portrait-rotate");
  });
}

if (reducedMotion) {
  reveals.forEach((item) => item.classList.add("is-visible"));
}
