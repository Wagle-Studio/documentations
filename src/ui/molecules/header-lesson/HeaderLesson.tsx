import "./headerLesson.scss";
import { Lesson } from "@/core/types";

interface HeaderLessonProps {
  lesson: Lesson;
}

export const HeaderLesson = ({ lesson }: HeaderLessonProps) => {
  return (
    <div className="header_lesson">
      <h1>{lesson.label}</h1>
      <div className="header_lesson__subtitles">
        <p>Créé le {lesson.created}</p>
        <p>Mis à jour le {lesson.updated}</p>
      </div>
    </div>
  );
};
