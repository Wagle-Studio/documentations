"use client";

import "./sidebarLesson.scss";
import { useParams } from "next/navigation";
import { MenuLink } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

interface SidebarLessonProps {
  courseSlug: string;
}

export const SidebarLesson = ({ courseSlug }: SidebarLessonProps) => {
  const params = useParams();

  const findCourseResult = RegisterManager.findCourseBySlug(courseSlug);

  // TODO : handle error case
  if (!findCourseResult.success) throw new Error(findCourseResult.message);

  const course = findCourseResult.data;

  const findLessonsResult = RegisterManager.findLessonsByCourseId(course.id);

  // TODO : handle error case
  if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

  const lessons = findLessonsResult.data;

  return (
    <div className="sidebar_second">
      <ul className="sidebar_second__menu">
        <li>
          <MenuLink
            label={course.label}
            href={`/documentation/${course.slug}`}
            emoji={course.emoji}
            selected={params.course === course.slug}
            highlight
          />
        </li>
        {lessons.map((lesson) => (
          <li key={`sidebar_second__lesson__menu_item--${lesson.id}`}>
            <MenuLink
              label={lesson.label}
              href={`/documentation/${course.slug}/${lesson.slug}`}
              selected={params.lesson === lesson.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
