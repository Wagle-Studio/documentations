"use client";

import { useState } from "react";
import "./geminiPanel.scss";
import { ButtonLink } from "@/ui/atoms";

interface GeminiPanelProps {
  prompt: string;
  id?: string;
}

export const GeminiPanel = ({ prompt, id }: GeminiPanelProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div id={id} className="gemini_panel">
      <div className="gemini_panel__steps">
        <div className="gemini_panel__step">
          <div className="gemini_panel__step-header">
            <span className="gemini_panel__step-number">1️⃣</span>
            <strong>Copier le prompt</strong>
          </div>
          <p className="gemini_panel__step-description">
            Copiez ce prompt dans votre presse-papier.
          </p>
          <div className="gemini_panel__actions">
            <button
              className="button_link button_link--variant-primary"
              onClick={handleCopy}
            >
              {isCopied ? "Copié ✓" : "Copier le prompt"}
            </button>
          </div>
        </div>
        <div className="gemini_panel__step">
          <div className="gemini_panel__step-header">
            <span className="gemini_panel__step-number">2️⃣</span>
            <strong>Ouvrir Gemini</strong>
          </div>
          <p className="gemini_panel__step-description">
            Collez le prompt dans Gemini pour générer le test.
          </p>
          <div className="gemini_panel__actions">
            <ButtonLink href="https://gemini.google.com/app" target="_blank">
              Ouvrir Gemini
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
