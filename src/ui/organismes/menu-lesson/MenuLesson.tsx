"use client";

import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useGetFetch } from "@/core/hooks";
import { Lesson } from "@/core/types";
import MenuManager from "@/core/managers/MenuManager";

interface MenuLessonProps {
  course: string;
}

export const MenuLesson = ({ course }: MenuLessonProps) => {
  const { result, isLoading, isError } = useGetFetch<Lesson[]>(
    `documentation/${course}`
  );

  const isReady = result && result.success && !isLoading && !isError;

  const menu: MenuItem[] = [
    {
      label: course,
      items: isReady ? MenuManager.buildMenuLesson(course, result.data) : [],
    },
  ];

  return (
    <div className="app__lesson__menu">{isReady && <Menu model={menu} />}</div>
  );
};
