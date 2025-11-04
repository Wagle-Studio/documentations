import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Slugifier } from "@/core/services";

interface RenderMdxProps {
  content: string;
}

export const RenderMdx = ({ content }: RenderMdxProps) => {
  return (
    <MDXRemote
      source={content}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      components={{ h2: TagHeading2, code: TagCode }}
    />
  );
};

interface TagCodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export const TagCode = ({ children, className, inline }: TagCodeProps) => {
  if (inline || !className) {
    return <code className="code-inline">{children}</code>;
  }

  const match = /language-(\w+)/.exec(className);
  const language = match?.[1];
  const code = typeof children === "string" ? children : String(children);

  return (
    <SyntaxHighlighter language={language} style={coldarkCold} wrapLongLines>
      {code}
    </SyntaxHighlighter>
  );
};

interface TagHeading2Props {
  children: React.ReactNode;
}

export const TagHeading2 = ({ children }: TagHeading2Props) => {
  return <h2 id={Slugifier.slugify(children as string)}>{children}</h2>;
};
