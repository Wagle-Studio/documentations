"use client";

import { useState } from "react";
import "./promptPreview.scss";

interface PromptPreviewProps {
  prompt: string;
}

export const PromptPreview = ({ prompt }: PromptPreviewProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="prompt_preview">
      <div className="prompt_preview__block">
        <pre className="prompt_preview__text">{prompt}</pre>
        <div className="prompt_preview__fade" />
      </div>
      <button
        className="prompt_preview__copy button_link button_link--variant-ghost"
        onClick={handleCopy}
      >
        {isCopied ? "Copié ✓" : "Copier"}
      </button>
    </div>
  );
};
