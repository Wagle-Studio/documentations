import { Lesson } from "@/core/types";

interface HeaderLessonProps {
  lesson: Lesson;
}

export const HeaderLesson = ({ lesson }: HeaderLessonProps) => {
  return (
    <div className="app__lesson__content__header">
      <h1>{lesson.label}</h1>
      <div className="app__lesson__content__header--subtitles">
        <p>Créé le {lesson.created}</p>
        <p>Mis à jour le {lesson.updated}</p>
      </div>
    </div>
  );
};
