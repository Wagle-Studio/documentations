import { notFound } from "next/navigation";
import { Course } from "@/core/types";
import RegisterManager from "@/core/managers/RegisterManager";
import { ContentCourse } from "@/ui";

export async function generateStaticParams() {
  return RegisterManager.getCourses().data.map((course: Course) => ({
    course: course.slug,
  }));
}

interface CourseParams {
  params: Promise<{
    course: string;
  }>;
}

export default async function CoursePage({ params }: CourseParams) {
  const { course } = await params;

  const findCourseResult = RegisterManager.findCourseBySlug(course);

  if (!findCourseResult.success) notFound();

  const findLessonsResult = RegisterManager.findLessonsByCourseId(findCourseResult.data.id);

  if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

  return <ContentCourse course={findCourseResult.data} lessons={findLessonsResult.data} />;
}
