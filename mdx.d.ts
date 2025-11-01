declare module "mdx/types" {
  export type MDXComponents = Record<string, React.ComponentType<any>>;
  export function useMDXComponents(components: MDXComponents): MDXComponents;
}
