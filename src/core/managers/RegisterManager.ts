import {
  CoreResult,
  CoreResultSuccess,
  Course,
  Lesson,
  Reference,
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

  static findReferencesByLessonId = (
    lessonId: number
  ): CoreResult<Reference[], undefined> => {
    const referenceIds = this.register.lesson_references
      .filter((lr) => lr.lesson_id === lessonId)
      .map((lr) => lr.reference_id);

    const references = this.register.references.filter((reference) =>
      referenceIds.includes(reference.id)
    );

    if (!references) {
      return {
        success: false,
        message: "Aucune référence correspondante",
      };
    } else {
      return {
        success: true,
        data: references,
      };
    }
  };
}
