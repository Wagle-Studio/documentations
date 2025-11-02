import { MenuItem } from "primereact/menuitem";
import { CoreResult, CoreResultSuccess, Course } from "@/core/types";
import { MenuLink } from "@/ui";
import RegisterManager from "./RegisterManager";

export default class MenuManager {
  private constructor() {}

  static buildMenuSide = (): CoreResultSuccess<MenuItem[]> => {
    const menuItems = RegisterManager.getCourses().data.map((course) => {
      return {
        template: () => (
          <MenuLink
            label={course.label}
            emoji={course.emoji}
            href={`/documentation/${course.slug}`}
          />
        ),
      };
    });

    return {
      success: true,
      data: menuItems,
    };
  };

  static buildMenuLesson = (course: Course): CoreResult<MenuItem[]> => {
    const menu: MenuItem[] = [
      {
        template: () => (
          <MenuLink
            label={course.label}
            emoji={course.emoji}
            href={`/documentation/${course.slug}`}
          />
        ),
      },
    ];

    const findLessonsResult = RegisterManager.findLessonsByCourseId(course.id);

    if (!findLessonsResult.success) throw new Error(findLessonsResult.message)

    const menuItems = findLessonsResult.data.map((lesson) => {
      return {
        template: () => (
          <MenuLink
            label={lesson.label}
            href={`/documentation/${course.slug}/${lesson.slug}`}
          />
        ),
      };
    });

    menu.push(...menuItems);

    return {
      success: true,
      data: menu,
    };
  };
}
