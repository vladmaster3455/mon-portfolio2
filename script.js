/* ==========================================================================
   Serge Senghor (Shinra) — portfolio one-page
   Carte mère low-poly procédurale (Three.js) assemblée au scroll (GSAP)
   Aucun asset 3D externe — 100 % généré en code.
   ========================================================================== */

"use strict";

/* ==========================================================================
   1. I18N — FR par défaut, bascule EN
   ========================================================================== */

var I18N = {
  fr: {
    "hud.label": "assemblage",
    "nav.expertise": "Expertise",
    "nav.projects": "Projets",
    "nav.xp": "Expérience",
    "hero.eyebrow": "Dakar, Sénégal — ouvert aux CDI · CDD · Freelance · Remote / Hybride",
    "xp.eyebrow": "Parcours",
    "xp.title": "Expérience professionnelle",
    "xp.1.meta": "Mai 2026 – Juil. 2026 · Freelance / Hybride",
    "xp.1.role": "Développeur Full-Stack — Araignée SAS",
    "xp.1.desc": "Conception et déploiement d'applications web full-stack (Spring Boot, React/TypeScript) avec intégration d'APIs REST et pipelines CI/CD Docker. Modélisation des données, automatisation des workflows backend en Python, documentation technique et tests unitaires.",
    "xp.2.meta": "Avr. 2026 – Mai 2026 · Stage · Remote",
    "xp.2.role": "Data Scientist — iSHEERO",
    "xp.2.desc": "Développement de scripts de machine learning et de workflows de traitement de données en Python / pandas. Construction et évaluation de modèles prédictifs (tendances, anomalies) et production de rapports et dashboards pour des interlocuteurs non techniques.",
    "xp.3.meta": "Sep. 2024 – Oct. 2024 · Stage",
    "xp.3.role": "Développeur — Banque de l'Habitat du Sénégal",
    "xp.3.desc": "Développement d'une application de gestion bancaire robuste en C# / .NET, avec modélisation des données et tests unitaires. Rédaction de 100 % de la documentation technique, garantissant la fiabilité fonctionnelle du système livré.",
    "xp.4.meta": "Mai 2024 – Juil. 2024 · Stage",
    "xp.4.role": "Data Engineer — Université Cheikh Anta Diop (UCAD)",
    "xp.4.desc": "Étude comparative de plus de 5 LLMs avec analyse quantitative des performances (précision, latence, coût). Pipelines Python de préparation et de nettoyage de données réduisant le temps de préparation d'environ 40 %. Veille technologique deep learning et fine-tuning.",
    "xp.5.meta": "Mai 2023 – Juil. 2023 · Stage",
    "xp.5.role": "Software Engineer — LITA",
    "xp.5.desc": "Contribution à des projets logiciels en équipe : revues de code, versioning Git et documentation, dans le respect des bonnes pratiques de développement.",
    "contact.sub": "Ouvert aux opportunités en CDI, CDD et freelance — en remote, hybride ou sur site. Un projet web, une API, un pipeline data ou un agent IA à mettre en production ? Je réponds vite.",
    "nav.contact": "Contact",
    "hero.sub": "Ingénieur logiciel full-stack : Java / Spring Boot, Node.js, React / TypeScript. Je conçois des applications web robustes, des APIs sécurisées et des pipelines CI/CD — avec une spécialisation en intelligence artificielle : agents autonomes, LLM et computer vision, du prototype à la production.",
    "hero.cta1": "Voir les projets",
    "hero.cta2": "Me contacter",
    "hero.scroll": "↓ Scrollez pour assembler la machine",
    "exp.eyebrow": "Expertise",
    "exp.title": "Ce que je construis",
    "exp.front": "React, TypeScript, interfaces réactives et responsive, intégration Figma, expérience utilisateur soignée.",
    "exp.back": "Java 17/21, Spring Boot, Node.js, PostgreSQL, MongoDB, microservices, REST, JWT, architecture SOLID.",
    "exp.devops": "Docker, Docker Compose, GitLab CI/CD, GitHub Actions, pipelines automatisés, déploiement continu.",
    "exp.ia.title": "IA & Agents",
    "exp.ia": "Ma vraie passion : Spring AI + Claude API, orchestration d'agents autonomes, LLM, NLP, computer vision (YOLO), détection d'anomalies, pipelines data en Python. L'IA n'est pas un bonus dans mes projets — c'est le cœur du réacteur.",
    "proj.eyebrow": "Projets sélectionnés",
    "proj.title": "Du prototype IA à la prod",
    "p.ecommerce": "Plateforme orientée gestion produits, présentation commerciale et expérience utilisateur responsive.",
    "p.styleflow": "Site vitrine pour salon de coiffure avec identité visuelle, services, contact client et parcours simple.",
    "p.vision": "Computer vision en temps réel (YOLO) déployée sur Streamlit : détection d'objets live, directement dans le navigateur. Un de mes projets IA préférés.",
    "p.cyber": "Dashboard IA / sécurité pour visualiser des anomalies et explorer des signaux opérationnels en temps réel.",
    "p.ids": "Système IDS basé machine learning : analyse de trafic réseau et détection de comportements suspects par modèles NLP.",
    "p.bank": "Architecture microservices avec Kafka, PostgreSQL, Docker, Gateway, JWT et documentation Swagger.",
    "p.cvgen.title": "Générateur de CV",
    "p.cvgen": "Application de génération dynamique de CV professionnels avec templates modernes et parcours guidé.",
    "p.api": "Service REST avec JWT, gestion des droits, documentation Swagger et structure backend claire.",
    "p.mongo": "API avec authentification JWT, CRUD, architecture MVC et middlewares personnalisés.",
    "p.projet4": "Application web moderne avec interface réactive et structure fullstack propre.",
    "proj.more": "Aussi en cours :",
    "proj.orchestrator": "plateforme SaaS (Spring Boot 3, React/TypeScript, Spring AI + Claude) pour orchestrer des agents IA autonomes avec function calling et workflows séquentiels.",
    "contact.eyebrow": "Machine assemblée — 100%",
    "contact.title": "Construisons quelque chose ensemble",
    "footer.made": "carte mère 3D générée procéduralement en Three.js, aucune image externe.",
    "tag.brand": "Site vitrine",
    "tag.responsive": "Web responsive",
    "tag.cyber": "Cybersécurité",
    "tag.netsec": "Sécurité réseau",
    "tag.tool": "Outil",
    "step.0": "pièces en attente",
    "step.1": "circuit imprimé (PCB)",
    "step.2": "socket CPU + condensateurs",
    "step.3": "processeur",
    "step.4": "dissipateur + ventilateur",
    "step.5": "barrettes de RAM",
    "step.6": "SSD M.2 + chipset",
    "step.7": "carte graphique",
    "step.8": "panneau I/O",
    "step.9": "machine assemblée ✓"
  },
  en: {
    "hud.label": "assembly",
    "nav.expertise": "Expertise",
    "nav.projects": "Projects",
    "nav.xp": "Experience",
    "hero.eyebrow": "Dakar, Senegal — open to permanent, fixed-term & freelance roles · remote / hybrid",
    "xp.eyebrow": "Career",
    "xp.title": "Professional experience",
    "xp.1.meta": "May 2026 – Jul. 2026 · Freelance / Hybrid",
    "xp.1.role": "Full Stack Developer — Araignée SAS",
    "xp.1.desc": "Developed and deployed full-stack web applications (Spring Boot, React/TypeScript) with REST API integration and Docker-based CI/CD pipelines. Designed data models, automated backend workflows with Python, and ensured quality through technical documentation and unit tests.",
    "xp.2.meta": "Apr. 2026 – May 2026 · Internship · Remote",
    "xp.2.role": "Data Scientist — iSHEERO",
    "xp.2.desc": "Built machine learning scripts and automated data processing workflows using Python / pandas. Built and evaluated predictive models for trend analysis and anomaly detection, and produced analytical reports and dashboards for non-technical stakeholders.",
    "xp.3.meta": "Sep. 2024 – Oct. 2024 · Internship",
    "xp.3.role": "Developer — Banque de l'Habitat du Sénégal",
    "xp.3.desc": "Developed a robust banking management application in C# / .NET with data modelling and unit testing. Produced 100% of the technical documentation, ensuring functional reliability of the delivered system.",
    "xp.4.meta": "May 2024 – Jul. 2024 · Internship",
    "xp.4.role": "Data Engineer — Université Cheikh Anta Diop (UCAD)",
    "xp.4.desc": "Conducted a comparative study of 5+ LLMs with quantitative performance analysis (accuracy, latency, cost). Built Python data preprocessing and cleaning pipelines, reducing dataset preparation time by ~40%. Performed technology watch on deep learning and fine-tuning.",
    "xp.5.meta": "May 2023 – Jul. 2023 · Internship",
    "xp.5.role": "Software Engineer — LITA",
    "xp.5.desc": "Contributed to software projects in a team environment with code reviews, Git versioning and documentation, following software development best practices.",
    "contact.sub": "Open to permanent, fixed-term and freelance opportunities — remote, hybrid or on-site. A web project, an API, a data pipeline or an AI agent to ship to production? I answer fast.",
    "nav.contact": "Contact",
    "hero.sub": "Full-stack software engineer: Java / Spring Boot, Node.js, React / TypeScript. I build robust web applications, secure APIs and CI/CD pipelines — with a specialisation in artificial intelligence: autonomous agents, LLMs and computer vision, from prototype to production.",
    "hero.cta1": "View projects",
    "hero.cta2": "Get in touch",
    "hero.scroll": "↓ Scroll to assemble the machine",
    "exp.eyebrow": "Expertise",
    "exp.title": "What I build",
    "exp.front": "React, TypeScript, reactive and responsive interfaces, Figma integration, polished user experience.",
    "exp.back": "Java 17/21, Spring Boot, Node.js, PostgreSQL, MongoDB, microservices, REST, JWT, SOLID architecture.",
    "exp.devops": "Docker, Docker Compose, GitLab CI/CD, GitHub Actions, automated pipelines, continuous deployment.",
    "exp.ia.title": "AI & Agents",
    "exp.ia": "My true passion: Spring AI + Claude API, autonomous agent orchestration, LLMs, NLP, computer vision (YOLO), anomaly detection, Python data pipelines. AI isn't a bonus in my projects — it's the engine core.",
    "proj.eyebrow": "Selected projects",
    "proj.title": "From AI prototype to production",
    "p.ecommerce": "Product-management-oriented platform with commercial presentation and a responsive user experience.",
    "p.styleflow": "Showcase website for a hair salon with visual identity, services, client contact and a simple journey.",
    "p.vision": "Real-time computer vision (YOLO) deployed on Streamlit: live object detection, right in the browser. One of my favourite AI projects.",
    "p.cyber": "AI / security dashboard to visualise anomalies and explore operational signals in real time.",
    "p.ids": "Machine-learning-based IDS: network traffic analysis and suspicious behaviour detection with NLP models.",
    "p.bank": "Microservices architecture with Kafka, PostgreSQL, Docker, Gateway, JWT and Swagger documentation.",
    "p.cvgen.title": "CV Generator",
    "p.cvgen": "Dynamic professional CV generation app with modern templates and a guided flow.",
    "p.api": "REST service with JWT, role management, Swagger documentation and a clean backend structure.",
    "p.mongo": "API with JWT authentication, CRUD, MVC architecture and custom middlewares.",
    "p.projet4": "Modern web application with a reactive interface and a clean fullstack structure.",
    "proj.more": "Also in progress:",
    "proj.orchestrator": "SaaS platform (Spring Boot 3, React/TypeScript, Spring AI + Claude) orchestrating autonomous AI agents with function calling and sequential workflows.",
    "contact.eyebrow": "Machine assembled — 100%",
    "contact.title": "Let's build something together",
    "footer.made": "3D motherboard procedurally generated in Three.js, no external image.",
    "tag.brand": "Brand website",
    "tag.responsive": "Responsive web",
    "tag.cyber": "Cybersecurity",
    "tag.netsec": "Network security",
    "tag.tool": "Tool",
    "step.0": "parts on standby",
    "step.1": "printed circuit board (PCB)",
    "step.2": "CPU socket + capacitors",
    "step.3": "processor",
    "step.4": "heatsink + fan",
    "step.5": "RAM sticks",
    "step.6": "M.2 SSD + chipset",
    "step.7": "graphics card",
    "step.8": "I/O panel",
    "step.9": "machine assembled ✓"
  }
};

var currentLang = (function () {
  try {
    var saved = localStorage.getItem("portfolio-language");
    if (saved === "fr" || saved === "en") return saved;
  } catch (e) { /* stockage indisponible */ }
  return "fr"; // français par défaut, l'anglais est un choix explicite
})();

function applyLang(lang) {
  currentLang = lang;
  try { localStorage.setItem("portfolio-language", lang); } catch (e) { /* ignore */ }
  document.documentElement.lang = lang;
  var dict = I18N[lang];
  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-i18n");
    if (dict[key]) nodes[i].textContent = dict[key];
  }
  var buttons = document.querySelectorAll("[data-lang]");
  for (var j = 0; j < buttons.length; j++) {
    var active = buttons[j].getAttribute("data-lang") === lang;
    buttons[j].classList.toggle("is-active", active);
    buttons[j].setAttribute("aria-pressed", active ? "true" : "false");
  }
  // Re-affiche l'étape courante dans la bonne langue
  if (typeof updateHudStep === "function") updateHudStep();
}

document.querySelectorAll("[data-lang]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLang(btn.getAttribute("data-lang"));
  });
});

/* ==========================================================================
   2. Scène 3D — carte mère low-poly procédurale
   ========================================================================== */

var PALETTE = {
  paper: 0xf4f1ea,
  paperSoft: 0xebe6dc,
  ink: 0x171512,
  muted: 0x6e675d,
  deep: 0x24201b,
  accent: 0x8a5b34,
  accentLight: 0xb98a5a,
  white: 0xfffdf8
};

var prefersReducedMotion =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

var hudPercent = document.getElementById("hud-percent");
var hudStep = document.getElementById("hud-step");
var hudBar = document.getElementById("hud-bar");
var currentStepIndex = 0;

function updateHudStep() {
  if (hudStep) hudStep.textContent = I18N[currentLang]["step." + currentStepIndex];
}

var STEP_THRESHOLDS = [0, 0.02, 0.14, 0.26, 0.38, 0.52, 0.66, 0.8, 0.92, 0.995];

function stepForProgress(p) {
  var idx = 0;
  for (var i = 0; i < STEP_THRESHOLDS.length; i++) {
    if (p >= STEP_THRESHOLDS[i]) idx = i;
  }
  return idx;
}

function initThree() {
  if (typeof THREE === "undefined" || typeof gsap === "undefined") {
    throw new Error("CDN indisponible");
  }

  var canvas = document.getElementById("scene");
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(
    38, window.innerWidth / window.innerHeight, 0.1, 100
  );

  /* ---- Lumières (papier chaud) ---- */
  scene.add(new THREE.HemisphereLight(0xfffdf8, 0xcfc4b2, 0.95));
  var key = new THREE.DirectionalLight(0xfff2df, 0.85);
  key.position.set(6, 10, 7);
  scene.add(key);
  var rim = new THREE.DirectionalLight(0xb98a5a, 0.35);
  rim.position.set(-8, 4, -6);
  scene.add(rim);

  /* ---- Matériaux ---- */
  function mat(color, opts) {
    var m = new THREE.MeshStandardMaterial({
      color: color,
      roughness: (opts && opts.roughness) != null ? opts.roughness : 0.65,
      metalness: (opts && opts.metalness) != null ? opts.metalness : 0.15,
      flatShading: true
    });
    return m;
  }
  var mPCB = mat(PALETTE.deep, { roughness: 0.8, metalness: 0.05 });
  var mBronze = mat(PALETTE.accent, { roughness: 0.4, metalness: 0.55 });
  var mBronzeLight = mat(PALETTE.accentLight, { roughness: 0.45, metalness: 0.4 });
  var mInk = mat(PALETTE.ink, { roughness: 0.55, metalness: 0.25 });
  var mBone = mat(PALETTE.white, { roughness: 0.7, metalness: 0.05 });
  var mMuted = mat(PALETTE.muted, { roughness: 0.6, metalness: 0.3 });

  /* ---- Racine du modèle ---- */
  var board = new THREE.Group();
  scene.add(board);

  function box(w, h, d, material, x, y, z) {
    var mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x || 0, y || 0, z || 0);
    return mesh;
  }
  function cyl(rt, rb, h, seg, material, x, y, z) {
    var mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material);
    mesh.position.set(x || 0, y || 0, z || 0);
    return mesh;
  }

  /* Les "parts" : chaque pièce a une position finale (dans son group)
     et une position éclatée de départ. */
  var parts = [];

  function registerPart(group, exploded) {
    group.userData.home = {
      pos: group.position.clone(),
      rot: group.rotation.clone()
    };
    group.position.set(exploded.pos.x, exploded.pos.y, exploded.pos.z);
    group.rotation.set(exploded.rot.x, exploded.rot.y, exploded.rot.z);
    board.add(group);
    parts.push(group);
    return group;
  }

  /* ---------- 1. PCB ---------- */
  var pcb = new THREE.Group();
  pcb.add(box(6.4, 0.16, 5.0, mPCB, 0, 0, 0));
  // pistes (traces) fines couleur bronze sur le dessus
  for (var t = 0; t < 6; t++) {
    var trace = box(0.06, 0.02, 3.6 - t * 0.3, mBronze, -2.6 + t * 0.28, 0.095, -0.2);
    pcb.add(trace);
  }
  for (var t2 = 0; t2 < 4; t2++) {
    pcb.add(box(2.4 - t2 * 0.3, 0.02, 0.06, mBronze, 1.2, 0.095, 1.5 + t2 * 0.24));
  }
  // trous de fixation
  var cornersX = [-3.0, 3.0], cornersZ = [-2.3, 2.3];
  for (var cx = 0; cx < 2; cx++) {
    for (var cz = 0; cz < 2; cz++) {
      pcb.add(cyl(0.09, 0.09, 0.2, 10, mBone, cornersX[cx], 0.02, cornersZ[cz]));
    }
  }
  pcb.position.set(0, 0, 0);
  registerPart(pcb, {
    pos: { x: 0, y: -7, z: -4 },
    rot: { x: -1.1, y: 0.5, z: 0.3 }
  });

  /* ---------- 2. Socket CPU + condensateurs ---------- */
  var socket = new THREE.Group();
  socket.add(box(1.7, 0.14, 1.7, mMuted, 0, 0.15, 0));
  socket.add(box(1.45, 0.06, 1.45, mInk, 0, 0.23, 0));
  // rangée de condensateurs
  for (var c = 0; c < 5; c++) {
    socket.add(cyl(0.09, 0.09, 0.34, 10, mBronzeLight, -0.9 + c * 0.45, 0.32, 1.15));
    socket.add(cyl(0.09, 0.09, 0.34, 10, mBronzeLight, -0.9 + c * 0.45, 0.32, -1.15));
  }
  socket.position.set(-1.35, 0.02, -0.7);
  registerPart(socket, {
    pos: { x: -8, y: 3, z: -3 },
    rot: { x: 0.8, y: -1.2, z: 0.5 }
  });

  /* ---------- 3. CPU ---------- */
  var cpu = new THREE.Group();
  cpu.add(box(1.15, 0.12, 1.15, mBronze, 0, 0, 0));
  cpu.add(box(0.7, 0.06, 0.7, mBronzeLight, 0, 0.09, 0));
  cpu.position.set(-1.35, 0.35, -0.7);
  registerPart(cpu, {
    pos: { x: 6, y: 7, z: 4 },
    rot: { x: 2.2, y: 1.4, z: -0.6 }
  });

  /* ---------- 4. Dissipateur + ventilateur ---------- */
  var cooler = new THREE.Group();
  for (var f = 0; f < 6; f++) {
    cooler.add(box(1.5, 0.05, 1.5, mBone, 0, f * 0.11, 0));
  }
  var fanRing = cyl(0.62, 0.62, 0.14, 18, mInk, 0, 0.78, 0);
  cooler.add(fanRing);
  for (var b = 0; b < 5; b++) {
    var blade = box(0.5, 0.03, 0.16, mBronzeLight, 0, 0.86, 0);
    blade.position.x = Math.cos((b / 5) * Math.PI * 2) * 0.3;
    blade.position.z = Math.sin((b / 5) * Math.PI * 2) * 0.3;
    blade.rotation.y = -(b / 5) * Math.PI * 2;
    cooler.add(blade);
  }
  cooler.add(cyl(0.14, 0.14, 0.18, 10, mBronze, 0, 0.87, 0));
  cooler.position.set(-1.35, 0.46, -0.7);
  registerPart(cooler, {
    pos: { x: -3, y: 9, z: 6 },
    rot: { x: -2.4, y: 0.8, z: 1.2 }
  });

  /* ---------- 5. RAM x4 ---------- */
  var ram = new THREE.Group();
  for (var r = 0; r < 4; r++) {
    var stick = new THREE.Group();
    stick.add(box(0.14, 0.85, 2.6, r % 2 === 0 ? mBronze : mInk, 0, 0, 0));
    stick.add(box(0.18, 0.2, 2.6, mBone, 0, 0.44, 0));
    stick.position.set(1.15 + r * 0.34, 0.55, -0.9);
    ram.add(stick);
  }
  ram.position.set(0, 0, 0);
  registerPart(ram, {
    pos: { x: 9, y: 4, z: -5 },
    rot: { x: 0.6, y: -0.9, z: 2.0 }
  });

  /* ---------- 6. SSD M.2 + chipset ---------- */
  var ssd = new THREE.Group();
  ssd.add(box(2.0, 0.08, 0.5, mInk, 0, 0.14, 0));
  ssd.add(box(0.6, 0.1, 0.4, mBronzeLight, -0.5, 0.2, 0));
  ssd.add(box(0.5, 0.1, 0.4, mBronzeLight, 0.35, 0.2, 0));
  ssd.position.set(0.4, 0.02, 1.6);
  // chipset avec petit dissipateur
  ssd.add(box(0.8, 0.22, 0.8, mBronze, 1.9, 0.2, 1.0));
  registerPart(ssd, {
    pos: { x: -7, y: -3, z: 7 },
    rot: { x: 1.6, y: 2.2, z: -0.4 }
  });

  /* ---------- 7. GPU ---------- */
  var gpu = new THREE.Group();
  gpu.add(box(3.4, 0.5, 1.1, mInk, 0, 0, 0));
  gpu.add(box(3.4, 0.06, 1.1, mBronze, 0, 0.28, 0));
  // deux ventilateurs
  for (var g = 0; g < 2; g++) {
    var gx = -0.85 + g * 1.7;
    gpu.add(cyl(0.42, 0.42, 0.1, 16, mBronzeLight, gx, 0.32, 0));
    gpu.add(cyl(0.1, 0.1, 0.14, 8, mBone, gx, 0.34, 0));
  }
  // connecteur PCIe
  gpu.add(box(2.2, 0.18, 0.12, mBronze, -0.4, -0.34, 0.0));
  gpu.position.set(-0.2, 0.55, 1.05);
  gpu.rotation.x = 0;
  registerPart(gpu, {
    pos: { x: 0, y: -8, z: 9 },
    rot: { x: -1.3, y: 0.4, z: -1.8 }
  });

  /* ---------- 8. Panneau I/O ---------- */
  var io = new THREE.Group();
  io.add(box(0.35, 0.9, 2.2, mMuted, 0, 0, 0));
  for (var p = 0; p < 4; p++) {
    io.add(box(0.38, 0.16, 0.34, mInk, 0.02, -0.2 + p * 0.22, -0.7 + p * 0.5));
  }
  io.add(box(0.38, 0.2, 0.5, mBronze, 0.02, 0.28, 0.6));
  io.position.set(-2.95, 0.55, -0.4);
  registerPart(io, {
    pos: { x: -10, y: 6, z: 0 },
    rot: { x: 0.4, y: 1.8, z: 1.1 }
  });

  /* ---- Vue d'ensemble : légère inclinaison esthétique du plateau ---- */
  board.rotation.x = 0.0;

  /* ---- Caméra : points de passage ---- */
  var camState = {
    x: 0, y: 3.2, z: 11.5,
    tx: 0, ty: 0.4, tz: 0
  };
  function applyCam() {
    camera.position.set(camState.x, camState.y, camState.z);
    camera.lookAt(camState.tx, camState.ty, camState.tz);
  }
  applyCam();

  /* ---- Boucle de rendu ---- */
  var idleSpin = { v: 0 };
  var clock = new THREE.Clock();
  function render() {
    var dt = clock.getDelta();
    if (!prefersReducedMotion) {
      // très légère respiration du plateau
      idleSpin.v += dt * 0.12;
      board.rotation.y = board.userData.scrollY + Math.sin(idleSpin.v) * 0.03;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  board.userData.scrollY = 0;

  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ==========================================================================
     3. Timeline d'assemblage pilotée par le scroll
     ========================================================================== */

  if (prefersReducedMotion) {
    // Pas d'animation : modèle directement assemblé, HUD à 100 %.
    parts.forEach(function (grp) {
      grp.position.copy(grp.userData.home.pos);
      grp.rotation.copy(grp.userData.home.rot);
    });
    camState.x = 6.5; camState.y = 5; camState.z = 9;
    applyCam();
    if (hudPercent) hudPercent.textContent = "100";
    if (hudBar) hudBar.style.width = "100%";
    currentStepIndex = 9;
    updateHudStep();
    document.body.classList.add("no-anim");
    render();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: function (self) {
        var p = self.progress;
        if (hudPercent) hudPercent.textContent = Math.round(p * 100);
        if (hudBar) hudBar.style.width = (p * 100).toFixed(1) + "%";
        var idx = stepForProgress(p);
        if (idx !== currentStepIndex) {
          currentStepIndex = idx;
          updateHudStep();
        }
      }
    }
  });

  function assemble(grp, at, dur) {
    var home = grp.userData.home;
    tl.to(grp.position, {
      x: home.pos.x, y: home.pos.y, z: home.pos.z, duration: dur
    }, at);
    tl.to(grp.rotation, {
      x: home.rot.x, y: home.rot.y, z: home.rot.z, duration: dur
    }, at);
  }

  /* Durée virtuelle totale : 10 unités */
  assemble(pcb,    0.2, 1.2);   // 1 — circuit imprimé
  assemble(socket, 1.4, 1.2);   // 2 — socket + condensateurs
  assemble(cpu,    2.6, 1.2);   // 3 — processeur
  assemble(cooler, 3.8, 1.4);   // 4 — dissipateur + ventilateur
  assemble(ram,    5.2, 1.4);   // 5 — RAM
  assemble(ssd,    6.6, 1.2);   // 6 — SSD + chipset
  assemble(gpu,    7.8, 1.4);   // 7 — GPU
  assemble(io,     9.2, 0.8);   // 8 — panneau I/O

  /* Rotation du plateau au fil du scroll (via userData pour cohabiter
     avec la respiration idle) */
  tl.to(board.userData, { scrollY: Math.PI * 1.35, duration: 10, ease: "none" }, 0);

  /* Trajectoire caméra : plongée → orbite → vue héroïque 3/4 */
  tl.to(camState, { x: 4.5,  y: 7.5, z: 8.5, ty: 0.2, duration: 2.5, onUpdate: applyCam }, 0);
  tl.to(camState, { x: -5.5, y: 4.0, z: 8.0, ty: 0.5, duration: 2.5, onUpdate: applyCam }, 2.5);
  tl.to(camState, { x: 2.0,  y: 8.5, z: 6.0, ty: 0.3, duration: 2.5, onUpdate: applyCam }, 5.0);
  tl.to(camState, { x: 6.5,  y: 5.0, z: 9.0, ty: 0.4, duration: 2.5, onUpdate: applyCam }, 7.5);

  /* Pendant la section projets, la carte glisse vers la gauche de l'écran
     pour rester visible à côté de la grille, puis revient au centre. */
  if (window.innerWidth > 900) {
    tl.to(board.position, { x: -4.2, duration: 1.2 }, 4.6);
    tl.to(board.position, { x: 0, duration: 1.2 }, 8.6);
  }

  render();

  /* ---- Reveals de contenu ---- */
  gsap.utils.toArray(
    ".section-card, .project, .section-head, .contact-card, .projects-more, .xp-item"
  ).forEach(function (el) {
    el.classList.add("reveal");
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });
}

/* ==========================================================================
   4. Bootstrap + fallback sans WebGL
   ========================================================================== */

applyLang(currentLang);

try {
  var testCanvas = document.createElement("canvas");
  var gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
  if (!gl) throw new Error("WebGL indisponible");
  initThree();
} catch (err) {
  // Fallback : contenu HTML lisible, aucune 3D, aucun plantage.
  document.body.classList.add("no-webgl", "no-anim");
  var hud = document.getElementById("hud");
  if (hud) hud.style.display = "none";
  var canvas = document.getElementById("scene");
  if (canvas) canvas.style.display = "none";
}
