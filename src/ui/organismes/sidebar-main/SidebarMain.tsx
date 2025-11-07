"use client";

import "./sidebarMain.scss";
import { useParams } from "next/navigation";
import { MenuLink } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export const SidebarMain = () => {
  const params = useParams();

  return (
    <div className="sidebar_main">
      <ul className="sidebar_main__menu">
        {RegisterManager.getCourses().data.map((course) => (
          <li
            key={`sidebar_main__course__menu_item--${course.slug}-${course.id}`}
          >
            <MenuLink
              label={course.label}
              emoji={course.emoji}
              href={`/documentation/${course.slug}`}
              selected={params.course === course.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
