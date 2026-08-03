"use client";

import "./sidebarMain.scss";
import { useParams } from "next/navigation";
import { MenuLink } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export const SidebarMain = () => {
  const params = useParams();

  return (
    <nav className="sidebar_main" aria-label="Liste des cours">
      <span className="sidebar_main__eyebrow">Cours</span>
      {RegisterManager.getCoursesGroupedByCategory().data.map((group) => (
        <div
          className="sidebar_main__group"
          key={`sidebar_main__group--${group.category}`}
        >
          <span className="sidebar_main__group__label">{group.category}</span>
          <ul className="sidebar_main__menu">
            {group.courses.map((course) => (
              <li
                key={`sidebar_main__course__menu_item--${course.slug}-${course.id}`}
              >
                <MenuLink
                  label={course.label}
                  emoji={course.emoji}
                  href={`/documentations/${course.slug}`}
                  selected={params.course === course.slug}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
