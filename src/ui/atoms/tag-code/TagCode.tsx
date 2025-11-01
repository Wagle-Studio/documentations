import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

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
