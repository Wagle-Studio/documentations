---
description: Applique les Next.js best practices sur le code ciblé
allowed-tools: Read, Write, Edit, Glob, Grep
---

Apply Next.js best practices when writing or reviewing code in this project. Reference the rules below.

## File Conventions
See `.agents/skills/next-best-practices/file-conventions.md` for project structure, route segments, parallel/intercepting routes, middleware.

## RSC Boundaries
See `.agents/skills/next-best-practices/rsc-boundaries.md` for async client component detection, non-serializable props, Server Action exceptions.

## Async Patterns
See `.agents/skills/next-best-practices/async-patterns.md` for async `params`/`searchParams`, async `cookies()`/`headers()`, migration codemod.

## Runtime Selection
See `.agents/skills/next-best-practices/runtime-selection.md` for Node.js vs Edge runtime.

## Directives
See `.agents/skills/next-best-practices/directives.md` for `'use client'`, `'use server'`, `'use cache'`.

## Functions
See `.agents/skills/next-best-practices/functions.md` for navigation hooks, server functions, generate functions.

## Error Handling
See `.agents/skills/next-best-practices/error-handling.md` for `error.tsx`, `not-found.tsx`, `redirect`, `notFound`.

## Data Patterns
See `.agents/skills/next-best-practices/data-patterns.md` for Server Components vs Server Actions vs Route Handlers, avoiding waterfalls.

## Route Handlers
See `.agents/skills/next-best-practices/route-handlers.md` for `route.ts` basics, GET conflicts, when to use vs Server Actions.

## Metadata & OG Images
See `.agents/skills/next-best-practices/metadata.md` for static/dynamic metadata, `generateMetadata`, OG image generation.

## Image Optimization
See `.agents/skills/next-best-practices/image.md` for `next/image`, remote images, responsive `sizes`, blur placeholders, priority loading.

## Font Optimization
See `.agents/skills/next-best-practices/font.md` for `next/font` setup, Google Fonts, local fonts, preloading subsets.

## Bundling
See `.agents/skills/next-best-practices/bundling.md` for server-incompatible packages, CSS imports, ESM/CommonJS issues, bundle analysis.

## Scripts
See `.agents/skills/next-best-practices/scripts.md` for `next/script`, loading strategies, Google Analytics.

## Hydration Errors
See `.agents/skills/next-best-practices/hydration-error.md` for common causes, debugging, fixes.

## Suspense Boundaries
See `.agents/skills/next-best-practices/suspense-boundaries.md` for CSR bailout with `useSearchParams`/`usePathname`.

## Parallel & Intercepting Routes
See `.agents/skills/next-best-practices/parallel-routes.md` for modal patterns, `default.tsx`, closing modals.

## Self-Hosting
See `.agents/skills/next-best-practices/self-hosting.md` for `output: 'standalone'`, cache handlers, multi-instance ISR.

## Debug Tricks
See `.agents/skills/next-best-practices/debug-tricks.md` for MCP endpoint, rebuild specific routes.
