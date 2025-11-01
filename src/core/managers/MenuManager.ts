import { MenuItem } from "primereact/menuitem";
import RegisterManager from "./RegisterManager";

export default class MenuManager {
  private constructor() {}

  static buildMenuSide = (router: any): MenuItem[] => {
    return RegisterManager.getCourses().map((course) => ({
      label: course.label,
      command: () => router.push(`/documentation/${course.slug}`),
    }));
  };

  static buildMenuLesson = (router: any, slug: string): MenuItem[] => {
    const course = RegisterManager.findCourseBySlug(slug);

    if (!course) return [];

    return RegisterManager.findLessonsByCourseId(course.id).map((lesson) => ({
      label: lesson.label,
      command: () =>
        router.push(`/documentation/${course.slug}/${lesson.slug}`),
    }));
  };
}
