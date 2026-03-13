---
description: Redesign ou amélioration UI avec le skill frontend-design
allowed-tools: Read, Write, Edit, Glob, Grep
---

Tu es en train d'améliorer l'UI de ce projet de documentation Next.js.

## Étape 1 — Lire le système de design existant

Avant toute proposition, lis obligatoirement ces fichiers pour comprendre l'existant :

- `src/ui/globals.scss` — variables CSS (couleurs, typographie, espacements, breakpoints)
- `src/app/layout.tsx` — polices chargées via next/font
- `src/ui/atoms/` — composants de base (boutons, cards, tags...)
- `src/ui/organismes/header/header.scss` — header

Identifie et mémorise :
- La palette de couleurs (light + dark mode)
- Les polices utilisées et leurs variables CSS
- L'échelle d'espacements (`--space-*`)
- Les border-radius, shadows, transitions

## Étape 2 — Appliquer le skill frontend-design

Une fois le contexte acquis, applique les guidelines suivantes en **respectant et enrichissant** le système existant — pas en le remplaçant.

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

### Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.
- **Constraints**: Respecte les variables CSS existantes (`--primary`, `--font-primary`, `--font-display`, `--space-*`...). Utilise-les comme base — tu peux les enrichir mais pas les ignorer.
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision.

### Frontend Aesthetics Guidelines

- **Typography**: Exploite les polices déjà chargées. Utilise `var(--font-display)` pour les titres d'impact, `var(--font-primary)` pour le corps. Si une nouvelle police est nécessaire, justifie-le et ajoute-la dans `layout.tsx`.
- **Color & Theme**: Utilise les variables CSS existantes comme ancre. Tu peux introduire de nouvelles variables mais elles doivent s'intégrer au système light/dark déjà en place.
- **Motion**: Animations CSS en priorité. Micro-interactions sur les moments clés. Transitions cohérentes avec les `150ms–250ms ease` déjà en place.
- **Spatial Composition**: Layouts inattendus, asymétrie, espace négatif généreux. Tout en restant dans la grille et les breakpoints existants (`850px` principal).
- **Backgrounds & Visual Details**: Textures subtiles, ombres dramatiques, bordures décoratives — en cohérence avec le `--card-shadow` et `--border` existants.

NEVER introduire des familles de polices génériques (Arial, system-ui) ou des schémas de couleurs qui cassent la cohérence light/dark mode.

**IMPORTANT**: Toute modification SCSS doit utiliser les variables CSS existantes comme fondation. Toute nouvelle variable doit respecter la convention de nommage du projet.

## Étape 3 — Proposer et implémenter

Explique ta direction créative en une phrase, puis implémente directement dans les fichiers SCSS/TSX concernés.
