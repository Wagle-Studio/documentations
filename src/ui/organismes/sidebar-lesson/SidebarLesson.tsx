"use client";

import "./sidebarLesson.scss";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { Course, Lesson } from "@/core/types";
import { useScrollSpy, useSummaryParser } from "@/core/hooks";

interface SidebarLessonProps {
  course: Course;
  lessons: Lesson[];
}

export const SidebarLesson = ({ course, lessons }: SidebarLessonProps) => {
  const params = useParams();

  const { summaryItems } = useSummaryParser(params.lesson);

  const slugs = useMemo(
    () => summaryItems?.map((summaryItem) => summaryItem.slug) ?? [],
    [summaryItems]
  );

  const { activeSlug } = useScrollSpy(slugs);

  return (
    <nav className="sidebar_second" aria-label="Sommaire du cours">
      <span className="sidebar_second__eyebrow">Sommaire</span>
      <Link
        className={clsx("sidebar_second__course", {
          "sidebar_second__course--selected": !params.lesson,
        })}
        href={`/documentations/${course.slug}`}
      >
        {course.emoji && (
          <Image src={course.emoji} alt="" width={20} height={20} />
        )}
        <span className="sidebar_second__course__infos">
          <span className="sidebar_second__course__label">{course.label}</span>
          <span className="sidebar_second__course__meta">
            {lessons.length} leçon{lessons.length > 1 ? "s" : ""}
          </span>
        </span>
      </Link>
      <ol className="sidebar_second__lessons">
        {lessons.map((lesson, index) => (
          <li
            key={`sidebar_second__lesson__menu_item--${lesson.slug}-${lesson.id}`}
          >
            <Link
              className={clsx("sidebar_second__lesson", {
                "sidebar_second__lesson--active": params.lesson === lesson.slug,
              })}
              href={`/documentations/${course.slug}/${lesson.slug}#top`}
            >
              <span className="sidebar_second__lesson__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{lesson.label}</span>
            </Link>
            {params.lesson === lesson.slug &&
              summaryItems &&
              summaryItems.length > 0 && (
                <ol className="sidebar_second__chapters">
                  {summaryItems.map((summaryItem) => (
                    <li
                      key={`sidebar_second__lesson__menu_item--${summaryItem.slug}`}
                    >
                      <a
                        className={clsx("sidebar_second__chapter", {
                          "sidebar_second__chapter--current":
                            activeSlug === summaryItem.slug,
                        })}
                        href={`#${summaryItem.slug}`}
                      >
                        {summaryItem.label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
