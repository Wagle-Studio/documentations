import { MenuItem } from "primereact/menuitem";
import { CoreResult, CoreResultSuccess, Course } from "@/core/types";
import RegisterManager from "./RegisterManager";
import { Params } from "next/dist/server/request/params";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default class MenuManager {
  private constructor() {}

  static buildMenuSide = (
    router: AppRouterInstance,
    params: Params
  ): CoreResultSuccess<MenuItem[]> => {
    const menuItems = RegisterManager.getCourses().data.map((course) => {
      const currentMenu = course.slug === params.course;

      return {
        label: course.label,
        className: currentMenu ? "menu--selected" : undefined,
        command: () => router.push(`/documentation/${course.slug}`),
      };
    });

    return {
      success: true,
      data: menuItems,
    };
  };

  static buildMenuLesson = (
    router: AppRouterInstance,
    params: Params,
    course: Course
  ): CoreResult<MenuItem[]> => {
    const findLessonsResult = RegisterManager.findLessonsByCourseId(course.id);

    if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

    const menuItems = findLessonsResult.data.map((lesson) => {
      const currentMenu = lesson.slug === params.lesson;

      return {
        label: lesson.label,
        className: currentMenu ? "menu--selected" : undefined,
        command: () =>
          router.push(`/documentation/${course.slug}/${lesson.slug}`),
      };
    });

    return {
      success: true,
      data: menuItems,
    };
  };
}
