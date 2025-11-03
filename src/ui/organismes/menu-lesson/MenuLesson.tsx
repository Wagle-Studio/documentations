import "./menuLesson.scss";
import { MenuLink } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

interface MenuLessonProps {
  courseSlug: string;
}

export const MenuLesson = ({ courseSlug }: MenuLessonProps) => {
  const findCourseResult = RegisterManager.findCourseBySlug(courseSlug);

  if (!findCourseResult.success) throw new Error(findCourseResult.message);

  const course = findCourseResult.data;

  const findLessonsResult = RegisterManager.findLessonsByCourseId(course.id);

  if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

  return (
    <div className="sidebar--second">
      <ul className="sidebar__menu">
        <li>
          <MenuLink
            label={course.label}
            href={`/documentation/${course.slug}`}
            emoji={course.emoji}
          />
        </li>
        {findLessonsResult.data.map((lesson) => (
          <li key={lesson.id}>
            <MenuLink
              label={lesson.label}
              href={`/documentation/${course.slug}/${lesson.slug}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
