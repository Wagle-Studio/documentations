"use client";

import { useRouter } from "next/navigation";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import MenuManager from "@/core/managers/MenuManager";

export const MenuSide = () => {
  const router = useRouter();

  const menu: MenuItem[] = [
    {
      label: "Documentations",
      items: MenuManager.buildMenuSide(router).data,
    },
  ];

  return (
    <div className="app__side__menu">
      <Menu model={menu} />
    </div>
  );
};
