"use client";

import "./tag-code.scss";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkCold,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { AppContext } from "@/ui/AppContext";

const LANGUAGE_REGEX = /language-(\w+)/;

interface TagCodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export const TagCode = ({ children, className, inline }: TagCodeProps) => {
  const { isDarkMode } = useContext(AppContext);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const match = className ? LANGUAGE_REGEX.exec(className) : null;
  const language = match?.[1];
  const code = typeof children === "string" ? children : String(children);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  }, [code]);

  if (inline || !className) {
    return <code className="code-inline">{children}</code>;
  }

  return (
    <div className="tag-code">
      <button
        className={`tag-code__copy${copied ? " tag-code__copy--copied" : ""}`}
        onClick={handleCopy}
        aria-label="Copier le code"
      >
        {copied ? "Copié !" : "Copier"}
      </button>
      <SyntaxHighlighter language={language} style={isDarkMode ? coldarkDark : coldarkCold} wrapLongLines>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
