"use client";

import { useEffect, useState } from "react";
import "./breadcrumb.scss";
import { useParams } from "next/navigation";
import Link from "next/link";
import { CoreResult, Course, Lesson } from "@/core/types";
import { HomeIcon } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

interface BreadcrumbItem {
  label: string;
  slug: string;
}

interface Conf {
  registerFn: (slug: string) => CoreResult<Course | Lesson, undefined>;
  buildUrl: (...args: string[]) => string;
}

interface Confs {
  course: Conf;
  lesson: Conf;
}

const availableConfs: Confs = {
  course: {
    registerFn: (courseSlug: string): CoreResult<Course, undefined> =>
      RegisterManager.findCourseBySlug(courseSlug),
    buildUrl: (courseSlug: string) => `/documentations/${courseSlug}`,
  },
  lesson: {
    registerFn: (lessonSlug: string) =>
      RegisterManager.findLessonBySlug(lessonSlug),
    buildUrl: (courseSlug: string, lessonSlug: string) =>
      `/documentations/${courseSlug}/${lessonSlug}`,
  },
};

export const Breadcrumb = () => {
  const [breadCrumbItems, setBreadCrumbItems] = useState<BreadcrumbItem[]>([]);

  const params = useParams();

  useEffect(() => {
    const items: BreadcrumbItem[] = [];

    for (const [key, value] of Object.entries(params)) {
      if (!value || typeof value !== "string") return;

      const conf = availableConfs[key as keyof Confs];

      if (!conf) return;

      const entityFindResult = conf.registerFn(value);

      if (!entityFindResult.success) return;

      let url = "";

      if (key === "course") {
        url = conf.buildUrl(value);
      } else if (key === "lesson") {
        const courseSlug = params.course as string;
        url = conf.buildUrl(courseSlug, value);
      }

      items.push({
        label: entityFindResult.data.label,
        slug: url,
      });
    }

    setBreadCrumbItems(items);
  }, [params]);

  return (
    <nav className="breadcrumb" aria-label="Fil d'ariane">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__list__item">
          <Link href="/">
            <HomeIcon />
          </Link>
          <span className="breadcrumb__separator" aria-hidden="true">›</span>
        </li>
        {breadCrumbItems.map((breadCrumbItem, index) => (
          <li
            className="breadcrumb__list__item"
            key={`breadcrumb__list__item--${breadCrumbItem.slug}`}
          >
            <Link
              href={breadCrumbItem.slug}
              className="breadcrumb__label"
              {...(index === breadCrumbItems.length - 1 ? { "aria-current": "page" } : {})}
            >
              {breadCrumbItem.label}
            </Link>

            {index !== breadCrumbItems.length - 1 && (
              <span className="breadcrumb__separator" aria-hidden="true">›</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
