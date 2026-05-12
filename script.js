const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const certBlock = document.querySelector("[data-certifications]");
const certToggle = document.querySelector("[data-cert-toggle]");
const portrait = document.querySelector("[data-portrait]");
const reveals = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

menuButton.addEventListener("click", () => {
  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

certToggle.addEventListener("click", () => {
  const open = !certBlock.classList.contains("is-open");
  certBlock.classList.toggle("is-open", open);
  certToggle.textContent = open ? "Voir moins" : "Voir plus";
  certToggle.setAttribute("aria-expanded", String(open));
});

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
