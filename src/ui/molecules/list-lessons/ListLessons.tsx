import "./listLessons.scss";
import { Course, Lesson } from "@/core/types";
import { TeaserLesson } from "@/ui";

interface ListLessonsProps {
  course: Course;
  lessons: Lesson[];
}

export const ListLessons = ({ course, lessons }: ListLessonsProps) => {
  return (
    <>
      <h2>
        {lessons.length} {lessons.length > 0 ? "Documents" : "Document"}
      </h2>
      <ul className="list_lessons">
        {lessons.map((lesson) => (
          <li key={`list_lessons--${lesson.id}`}>
            <TeaserLesson course={course} lesson={lesson} />
          </li>
        ))}
      </ul>
    </>
  );
};
