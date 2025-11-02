"use client";

import { useParams, useRouter } from "next/navigation";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import MenuManager from "@/core/managers/MenuManager";
import RegisterManager from "@/core/managers/RegisterManager";

interface MenuLessonProps {
  course: string;
}

export const MenuLesson = ({ course }: MenuLessonProps) => {
  const router = useRouter();
  const params = useParams();

  const findCourseResult = RegisterManager.findCourseBySlug(course);

  if (!findCourseResult.success) throw new Error(findCourseResult.message);

  const menuItems = MenuManager.buildMenuLesson(
    router,
    params,
    findCourseResult.data
  );

  const menu: MenuItem[] = [
    {
      label: findCourseResult.data.label,
      items: menuItems.success ? menuItems.data : [],
    },
  ];

  return (
    <div className="app__lesson__menu">
      <Menu model={menu} />
    </div>
  );
};
