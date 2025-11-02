"use client";

import { Menu } from "primereact/menu";
import MenuManager from "@/core/managers/MenuManager";

export const MenuSide = () => {
  return (
    <div className="app__side__menu">
      <Menu model={MenuManager.buildMenuSide().data} />
    </div>
  );
};
