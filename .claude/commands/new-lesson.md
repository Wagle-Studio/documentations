---
description: Créer une nouvelle leçon (fichier MDX + enregistrement en base)
argument-hint: [course-slug] [lesson-slug] "Label" "Description"
allowed-tools: Read, Write, Edit, Glob, Bash(npm run build:*)
---

Tu es en train de créer une nouvelle leçon dans le projet de documentation Next.js.

## État actuel de la base

Cours disponibles :
!`cat src/database/courses.ts`

Leçons existantes (pour calculer le prochain id et index) :
!`cat src/database/lessons.ts`

## Arguments reçus

$ARGUMENTS

## Collecte des informations

Si les informations nécessaires sont absentes ou incomplètes dans les arguments, demande-les à l'utilisateur **en une seule fois** :

1. **course_slug** — slug du cours cible (valeurs valides : `apache`, `docker`, `git`, `poo_concepts`, `php_poo`)
2. **lesson_slug** — slug de la leçon en snake_case (ex: `les_variables`). Sert de nom de fichier MDX et d'identifiant d'URL.
3. **Label** — titre affiché dans la navigation (ex: `Les variables`)
4. **Description** — une phrase décrivant le contenu de la leçon

Ne procède à aucune action tant que ces quatre informations ne sont pas confirmées.

## Étapes d'exécution

### 1. Vérifications préalables

- Confirme que `course_slug` correspond à un cours existant dans `src/database/courses.ts`. Si non, arrête et informe l'utilisateur.
- Vérifie que le fichier `content/[course_slug]/[lesson_slug].mdx` n'existe pas déjà. Si oui, arrête et informe l'utilisateur.

### 2. Calcul des identifiants

- **id** : valeur maximale des `id` dans `lessons.ts` + 1
- **course_id** : `id` du cours correspondant au `course_slug`
- **index** : valeur maximale des `index` pour ce `course_id` dans `lessons.ts` + 1

### 3. Créer le fichier MDX

Crée `content/[course_slug]/[lesson_slug].mdx` avec ce squelette :

```mdx
## Introduction

---

```

### 4. Enregistrer dans src/database/lessons.ts

Insère l'entrée suivante dans le tableau `lessons`, juste avant le `];` final :

```ts
  {
    id: [id],
    index: [index],
    paths: ["[course_slug]", "[lesson_slug].mdx"],
    label: "[Label]",
    slug: "[lesson_slug]",
    course_id: [course_id],
    description: "[Description]",
    created: "[date du jour, format '1 janvier 2025']",
    updated: "[date du jour, format '1 janvier 2025']",
  },
```

### 5. Références (optionnel)

Demande à l'utilisateur s'il souhaite lier des références bibliographiques à cette leçon.

Si oui, affiche les références existantes depuis `src/database/references.ts` et propose deux options :
- **Lier une référence existante** : ajouter `{ lesson_id: [id], reference_id: [ref_id] }` dans `src/database/lesson_references.ts`
- **Ajouter une nouvelle référence** : insérer l'entrée (id = max actuel + 1) dans `src/database/references.ts`, puis créer le lien dans `src/database/lesson_references.ts`

### 6. Résumé

Une fois terminé, affiche un récapitulatif :
- Chemin du fichier MDX créé
- id / index / course_id enregistrés dans lessons.ts
- Références liées (ids), le cas échéant
- URL de la leçon : `/documentations/[course_slug]/[lesson_slug]`
