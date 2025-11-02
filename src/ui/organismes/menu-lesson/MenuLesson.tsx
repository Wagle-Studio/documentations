"use client";

import { Menu } from "primereact/menu";
import MenuManager from "@/core/managers/MenuManager";
import RegisterManager from "@/core/managers/RegisterManager";
import { useMemo } from "react";

interface MenuLessonProps {
  course: string;
}

export const MenuLesson = ({ course }: MenuLessonProps) => {
  const findCourseResult = RegisterManager.findCourseBySlug(course);

  if (!findCourseResult.success) throw new Error(findCourseResult.message);

  const buildMenuResult = MenuManager.buildMenuLesson(findCourseResult.data);

  if (!buildMenuResult.success) throw new Error(buildMenuResult.message);

  return (
    <div className="app__lesson__menu">
      <Menu model={buildMenuResult.data} />
    </div>
  );
};
