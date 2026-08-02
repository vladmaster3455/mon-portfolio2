# mon-portfolio2

Portfolio personnel de Serge Senghor — développeur full-stack (Java/Spring Boot, React/TypeScript), DevOps et IA. Site one-page en HTML/CSS/JS vanilla, déployé sur GitHub Pages.

## Stack

- HTML / CSS / JS vanilla (aucun build, aucun framework)
- Three.js (r128, CDN) pour la carte mère 3D procédurale
- GSAP + ScrollTrigger pour l'animation au scroll
- i18n FR/EN embarquée (aucune dépendance supplémentaire)

## Fonctionnalités

- Scène 3D procédurale : carte mère low-poly assemblée au fil du scroll (100 % générée en code, aucune image externe)
- Navigation par ancres, sections : expertise, expérience, projets, formation, contact
- Basculé FR/EN sans rechargement (localStorage)
- Fallbacks propres : `prefers-reduced-motion` respecté, repli gracieux sans WebGL
- Mobile : rendu allégé (pixel ratio réduit, animation désactivée)

## Structure

```
index.html   — structure et contenu (i18n via data-i18n)
style.css    — styles, thème clair "papier", responsive
script.js    — i18n, scène Three.js, timeline GSAP
```

## Déploiement

Le site est publié via GitHub Pages depuis la branche `main`. Rien à compiler :

```
git push origin main
```

## Auteur

Serge Senghor (Shinra) — [senghorserge.me](https://senghorserge.me)
