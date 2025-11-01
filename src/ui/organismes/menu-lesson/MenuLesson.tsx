"use client";

import { useRouter } from "next/navigation";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import MenuManager from "@/core/managers/MenuManager";

interface MenuLessonProps {
  course: string;
}

export const MenuLesson = ({ course }: MenuLessonProps) => {
  const router = useRouter();

  const menu: MenuItem[] = [
    {
      label: course,
      items: MenuManager.buildMenuLesson(router, course),
    },
  ];

  return (
    <div className="app__lesson__menu">
      <Menu model={menu} />
    </div>
  );
};
