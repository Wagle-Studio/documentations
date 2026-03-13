"use client";

import "./sidebarLesson.scss";
import { useParams } from "next/navigation";
import { Course, Lesson } from "@/core/types";
import { MenuLink } from "@/ui";
import { useSummaryParser } from "@/core/hooks";

interface SidebarLessonProps {
  course: Course;
  lessons: Lesson[];
}

export const SidebarLesson = ({ course, lessons }: SidebarLessonProps) => {
  const params = useParams();

  const { summaryItems } = useSummaryParser(params.lesson);

  return (
    <div className="sidebar_second">
      <ul className="sidebar_second__menu">
        <li>
          <MenuLink
            label={course.label}
            href={`/documentations/${course.slug}`}
            emoji={course.emoji}
            selected={params.course === course.slug}
            highlight
          />
        </li>
        {lessons.map((lesson) => (
          <li
            key={`sidebar_second__lesson__menu_item--${lesson.slug}-${lesson.id}`}
          >
            <MenuLink
              label={lesson.label}
              href={`/documentations/${course.slug}/${lesson.slug}#top`}
              selected={params.lesson === lesson.slug}
            />
            {params.lesson === lesson.slug && summaryItems && (
              <ul className="sidebar_second__menu__chapters">
                {summaryItems.map((summaryItem) => (
                  <li
                    key={`sidebar_second__lesson__menu_item--${summaryItem.slug}`}
                  >
                    <MenuLink
                      label={summaryItem.label}
                      href={`#${summaryItem.slug}`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
