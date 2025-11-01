import { MenuItem } from "primereact/menuitem";

export default class MenuManager {
  private constructor() {}

  static buildMenuSide = (courses: string[]): MenuItem[] => {
    return courses.map((course) => ({
      label: course,
      url: `/documentation/${course}`,
    }));
  };

  static buildMenuLesson = (course: string, lessons: string[]): MenuItem[] => {
    return lessons.map((lesson) => ({
      label: lesson,
      url: `/documentation/${course}/${lesson}`,
    }));
  };
}
