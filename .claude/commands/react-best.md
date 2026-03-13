---
description: Applique les React performance best practices (Vercel) sur le code ciblé
allowed-tools: Read, Write, Edit, Glob, Grep
---

Apply React and Next.js performance optimization guidelines when writing, reviewing, or refactoring code. Rules are prioritized by impact.

## Priority 1 — Eliminating Waterfalls (CRITICAL)
- Move `await` into branches where actually used
- Use `Promise.all()` for independent async operations
- Start promises early, await late in API routes
- Use Suspense to stream content progressively

See `.agents/skills/vercel-react-best-practices/rules/async-*.md`

## Priority 2 — Bundle Size Optimization (CRITICAL)
- Import directly from source, avoid barrel files
- Use `next/dynamic` for heavy components
- Load analytics/logging after hydration
- Load modules only when feature is activated
- Preload on hover/focus for perceived speed

See `.agents/skills/vercel-react-best-practices/rules/bundle-*.md`

## Priority 3 — Server-Side Performance (HIGH)
- Use `React.cache()` for per-request deduplication
- Use LRU cache for cross-request caching
- Avoid duplicate serialization in RSC props
- Hoist static I/O (fonts, logos) to module level
- Minimize data passed to client components
- Use `after()` for non-blocking operations

See `.agents/skills/vercel-react-best-practices/rules/server-*.md`

## Priority 4 — Client-Side Data Fetching (MEDIUM-HIGH)
- Use SWR for automatic request deduplication
- Deduplicate global event listeners
- Use passive listeners for scroll events
- Version and minimize localStorage data

See `.agents/skills/vercel-react-best-practices/rules/client-*.md`

## Priority 5 — Re-render Optimization (MEDIUM)
- Don't subscribe to state only used in callbacks
- Extract expensive work into memoized components
- Hoist default non-primitive props
- Use primitive dependencies in effects
- Derive state during render, not effects
- Use functional setState for stable callbacks
- Pass function to useState for expensive init values
- Put interaction logic in event handlers
- Use startTransition for non-urgent updates
- Use refs for transient frequent values
- Don't define components inside components

See `.agents/skills/vercel-react-best-practices/rules/rerender-*.md`

## Priority 6 — Rendering Performance (MEDIUM)
- Animate div wrapper, not SVG element directly
- Use `content-visibility` for long lists
- Extract static JSX outside components
- Use inline script for client-only data (no flicker)
- Use Activity component for show/hide
- Use ternary, not `&&` for conditionals
- Prefer `useTransition` for loading state

See `.agents/skills/vercel-react-best-practices/rules/rendering-*.md`

## Priority 7 — JavaScript Performance (LOW-MEDIUM)
- Group CSS changes via classes or cssText
- Build Map for repeated lookups
- Cache object properties in loops
- Cache function results in module-level Map
- Combine multiple filter/map into one loop
- Check array length before expensive comparison
- Return early from functions
- Hoist RegExp creation outside loops
- Use Set/Map for O(1) lookups
- Use `toSorted()` for immutability

See `.agents/skills/vercel-react-best-practices/rules/js-*.md`

## Priority 8 — Advanced Patterns (LOW)
- Store event handlers in refs
- Initialize app once per app load
- useLatest for stable callback refs

See `.agents/skills/vercel-react-best-practices/rules/advanced-*.md`
