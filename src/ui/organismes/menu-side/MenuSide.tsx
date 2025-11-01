"use client";

import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";

interface MenuSideProps {
  menu: MenuItem[];
}

export const MenuSide = ({ menu }: MenuSideProps) => {
  return (
    <div className="app__side__menu">
      <Menu model={menu} />
    </div>
  );
};
