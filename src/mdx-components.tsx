import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // tu peux mapper/override des tags MDX ici si besoin
  return {
    ...components,
  }
}
