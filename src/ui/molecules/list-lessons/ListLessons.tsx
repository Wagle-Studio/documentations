import "./listLessons.scss";
import { Course, Lesson } from "@/core/types";
import { TeaserLesson } from "@/ui";

interface ListLessonsProps {
  course: Course;
  lessons: Lesson[];
}

export const ListLessons = ({ course, lessons }: ListLessonsProps) => {
  return (
    <div className="list_lessons">
      <h2>Documents</h2>
      <ul className="list_lessons__list">
        {lessons.map((lesson) => (
          <li key={`list_lessons--${lesson.slug}-${lesson.id}`}>
            <TeaserLesson course={course} lesson={lesson} />
          </li>
        ))}
      </ul>
    </div>
  );
};
