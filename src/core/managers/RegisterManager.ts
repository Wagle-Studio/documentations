import {
  CoreResult,
  CoreResultSuccess,
  Course,
  Lesson,
  Register,
} from "@/core/types";
import register from "@/register";

export default class RegisterManager {
  private static readonly register: Register = register;

  private constructor() {}

  static getCourses = (): CoreResultSuccess<Course[]> => {
    return {
      success: true,
      data: this.register.courses,
    };
  };

  static getLessons = (): CoreResultSuccess<Lesson[]> => {
    return {
      success: true,
      data: this.register.lessons,
    };
  };

  static findCourseById = (id: number): CoreResult<Course, undefined> => {
    const course = this.register.courses.find((course) => course.id === id);

    if (!course) {
      return {
        success: false,
        message: "Aucun cours correspondant",
      };
    } else {
      return {
        success: true,
        data: course,
      };
    }
  };

  static findCourseBySlug = (slug: string): CoreResult<Course, undefined> => {
    const course = this.register.courses.find((course) => course.slug === slug);

    if (!course) {
      return {
        success: false,
        message: "Aucun cours correspondant",
      };
    } else {
      return {
        success: true,
        data: course,
      };
    }
  };

  static findLessonBySlug = (slug: string): CoreResult<Lesson, undefined> => {
    const lesson = this.register.lessons.find((lesson) => lesson.slug === slug);

    if (!lesson) {
      return {
        success: false,
        message: "Aucun document correspondant",
      };
    } else {
      return {
        success: true,
        data: lesson,
      };
    }
  };

  static findLessonsByCourseId = (
    courseId: number
  ): CoreResult<Lesson[], undefined> => {
    const lessons = this.register.lessons
      .filter((lesson) => lesson.course_id === courseId)
      .sort((a, b) => (a.index < b.index ? -1 : 1));

    if (!lessons) {
      return {
        success: false,
        message: "Aucun document correspondant",
      };
    } else {
      return {
        success: true,
        data: lessons,
      };
    }
  };
}
