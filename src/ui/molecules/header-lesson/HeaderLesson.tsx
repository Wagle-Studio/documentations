"use client";

import { useState } from "react";
import { ButtonLink, ChevronDownIcon, ChevronUpIcon } from "@/ui/atoms";
import { GeminiPanel } from "@/ui/molecules/gemini-panel/GeminiPanel";
import "./headerLesson.scss";
import { Lesson, Reference } from "@/core/types";

interface HeaderLessonProps {
  lesson: Lesson;
  references?: Reference[];
  geminiPrompt?: string;
}

export const HeaderLesson = ({ lesson, references, geminiPrompt }: HeaderLessonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="content_lesson__header">
      <div className="content_lesson__header__body">
        <div className="content_lesson__header__body--titles">
          <h1 id="intro">{lesson.label}</h1>
          <p>{lesson.description}</p>
        </div>
        <div className="content_lesson__header__body--subtitles">
          <span>Créé le {lesson.created}</span>
          <span className="content_lesson__header__body--subtitles__separator">·</span>
          <span>Mis à jour le {lesson.updated}</span>
        </div>
      </div>
      {(references && references.length > 0 || geminiPrompt) && (
        <div className="content_lesson__header__actions">
          {references && references.length > 0 && (
            <ButtonLink href="#references">
              Voir
              {references.length > 1
                ? ` ${references.length} références`
                : " 1 référence"}
            </ButtonLink>
          )}
          {geminiPrompt && (
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="gemini-panel"
              className="button_link button_link--variant-primary"
              onClick={() => setIsOpen(v => !v)}
            >
              Générer un test avec Gemini{" "}
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          )}
        </div>
      )}
      {geminiPrompt && isOpen && <GeminiPanel id="gemini-panel" prompt={geminiPrompt} />}
    </div>
  );
};
