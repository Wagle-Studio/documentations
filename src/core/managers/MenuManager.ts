import { MenuItem } from "primereact/menuitem";

export default class MenuManager {
  private constructor() {}

  static buildMenuSide = (router: any, courses: string[]): MenuItem[] => {
    return courses.map((course) => ({
      label: course,
      command: () => router.push(`/documentation/${course}`),
    }));
  };

  static buildMenuLesson = (
    router: any,
    course: string,
    lessons: string[]
  ): MenuItem[] => {
    return lessons.map((lesson) => ({
      label: lesson,
      command: () => router.push(`/documentation/${course}/${lesson}`),
    }));
  };
}
