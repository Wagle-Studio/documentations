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
    buildUrl: (courseSlug: string) => `/documentation/${courseSlug}`,
  },
  lesson: {
    registerFn: (lessonSlug: string) =>
      RegisterManager.findLessonBySlug(lessonSlug),
    buildUrl: (courseSlug: string, lessonSlug: string) =>
      `/documentation/${courseSlug}/${lessonSlug}`,
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
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__list__item">
          <Link href="/">
            <HomeIcon />
          </Link>
          <p>{`>`}</p>
        </li>
        {breadCrumbItems.map((breadCrumbItem) => (
          <li
            className="breadcrumb__list__item"
            key={`breadcrumb__list__item--${breadCrumbItem.slug}`}
          >
            <Link href={breadCrumbItem.slug}>{breadCrumbItem.label}</Link>

            {breadCrumbItems.indexOf(breadCrumbItem) !==
              breadCrumbItems.length - 1 && <p>{`>`}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};
