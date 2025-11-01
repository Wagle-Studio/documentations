import { Course, Lesson, Register } from "@/core/types";
import register from "@/register";

export default class RegisterManager {
  private static readonly register: Register = register;

  private constructor() {}

  static getCourses = (): Course[] => {
    return this.register.courses;
  };

  static findCourseById = (id: number): Course | undefined => {
    return this.register.courses.find((course) => course.id === id);
  };

  static findCourseBySlug = (slug: string): Course | undefined => {
    return this.register.courses.find((course) => course.slug === slug);
  };

  static findLessonById = (id: number): Lesson | undefined => {
    return this.register.lessons.find((lesson) => lesson.id === id);
  };

  static findLessonBySlug = (slug: string): Lesson | undefined => {
    return this.register.lessons.find((lesson) => lesson.slug === slug);
  };

  static findLessonsByCourseId = (courseId: number): Lesson[] => {
    return this.register.lessons.filter(
      (lesson) => lesson.course_id === courseId
    );
  };
}
