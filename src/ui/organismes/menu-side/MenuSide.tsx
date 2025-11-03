import "./menuSide.scss";
import { MenuLink } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export const MenuSide = () => {
  return (
    <div className="sidebar--main">
      <ul className="sidebar__menu">
        {RegisterManager.getCourses().data.map((course) => (
          <li key={course.id}>
            <MenuLink
              label={course.label}
              emoji={course.emoji}
              href={`/documentation/${course.slug}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
