import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";

interface MenuLessonProps {
  menu: MenuItem[];
}

export const MenuLesson = ({ menu }: MenuLessonProps) => {
  return (
    <div className="app__lesson__menu">
      <Menu model={menu} />
    </div>
  );
};
