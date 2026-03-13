import { ButtonLink } from "@/ui/atoms";
import "./headerLesson.scss";
import { Lesson, Reference } from "@/core/types";

interface HeaderLessonProps {
  lesson: Lesson;
  references?: Reference[];
}

export const HeaderLesson = ({ lesson, references }: HeaderLessonProps) => {
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
      {references && references.length > 0 && (
        <div className="content_lesson__header__actions">
          <ButtonLink href="#references">
            Voir
            {references.length > 1
              ? ` ${references.length} références`
              : " 1 référence"}
          </ButtonLink>
        </div>
      )}
    </div>
  );
};
