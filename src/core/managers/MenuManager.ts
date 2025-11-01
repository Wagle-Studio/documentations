import { MenuItem } from "primereact/menuitem";
import { CoreResult, CoreResultSuccess, Course } from "@/core/types";
import RegisterManager from "./RegisterManager";

export default class MenuManager {
  private constructor() {}

  static buildMenuSide = (router: any): CoreResultSuccess<MenuItem[]> => {
    const menuItems = RegisterManager.getCourses().data.map((course) => ({
      label: course.label,
      command: () => router.push(`/documentation/${course.slug}`),
    }));

    return {
      success: true,
      data: menuItems,
    };
  };

  static buildMenuLesson = (
    router: any,
    course: Course
  ): CoreResult<MenuItem[]> => {
    const findLessonsResult = RegisterManager.findLessonsByCourseId(course.id);

    if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

    const menuItems = findLessonsResult.data.map((lesson) => ({
      label: lesson.label,
      command: () =>
        router.push(`/documentation/${course.slug}/${lesson.slug}`),
    }));

    return {
      success: true,
      data: menuItems,
    };
  };
}
