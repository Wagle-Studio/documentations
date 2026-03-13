# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 static documentation site** (App Router, TypeScript, SASS) that renders MDX content files as course lessons.

### Adding a new lesson (required steps)

1. Create the MDX file at `content/[course-slug]/[lesson-slug].mdx`
2. Register it in `src/database/lessons.ts` — add an entry to the `lessons` array
3. Optionally add entries to `src/database/references.ts` and `src/database/lesson_references.ts`

There is no automatic file discovery. All content is statically registered in `src/database/`, which defines the full data model: courses, lessons, references, and lesson↔reference join records.

### Data flow

```
src/database/index.ts     ← static data registry (source of truth)
  └─ RegisterManager      ← static query methods over the registry
  └─ FileManager          ← reads MDX files from disk using lesson.paths[]
       └─ gray-matter     ← strips frontmatter, returns .content
            └─ RenderMdx  ← renders with next-mdx-remote/rsc + remark-gfm
```

### Key files

- `src/database/` — one file per table (`courses`, `lessons`, `references`, `lesson_references`), `index.ts` centralise le tout
- `src/core/managers/RegisterManager.ts` — static class with query methods (find by id/slug, filter by course)
- `src/core/managers/FileManager.ts` — resolves a lesson slug → file path → MDX string
- `src/core/types/Core.ts` — `CoreResult<S, F>` discriminated union used for all manager return values
- `src/core/types/Api.ts` — domain types: `Course`, `Lesson`, `Reference`, `Register`
- `src/ui/RenderMdx.tsx` — MDX renderer with custom components for `h2`, `img`, and `code`

### Routes

- `/` — lists all courses
- `/documentations/[course]` — lists lessons for a course
- `/documentations/[course]/[lesson]` — renders a lesson (uses `generateStaticParams` for static export)

### UI structure

Follows Atomic Design: `atoms` → `molecules` → `organismes` → `templates`. Each tier has an `index.ts` barrel export.

### MDX conventions

- Section headings use `##` (H2). These are parsed client-side by `useSummaryParser` to build the lesson sidebar table of contents. The `Slugifier` service generates anchor IDs from heading text: lowercased, spaces → `_`, special characters (including `/`) → `_`. Internal anchor links (e.g. `[label](#open_closed)`) must match this output exactly.
- Images must encode dimensions in the filename: `name_WIDTH_HEIGHT.ext` (e.g. `diagram_800_600.png`). Missing dimensions render nothing.
- Code blocks use standard fenced syntax with a language tag; syntax highlighting is applied via `react-syntax-highlighter` (Prism, `coldarkCold` theme).
