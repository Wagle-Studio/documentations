"use client";

import "./tag-code.scss";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

interface TagCodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export const TagCode = ({ children, className, inline }: TagCodeProps) => {
  const [copied, setCopied] = useState(false);

  if (inline || !className) {
    return <code className="code-inline">{children}</code>;
  }

  const match = /language-(\w+)/.exec(className);
  const language = match?.[1];
  const code = typeof children === "string" ? children : String(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tag-code">
      <button
        className={`tag-code__copy${copied ? " tag-code__copy--copied" : ""}`}
        onClick={handleCopy}
        aria-label="Copier le code"
      >
        {copied ? "Copié !" : "Copier"}
      </button>
      <SyntaxHighlighter language={language} style={coldarkCold} wrapLongLines>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
