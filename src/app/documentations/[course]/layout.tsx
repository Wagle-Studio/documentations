import { notFound } from "next/navigation";
import RegisterManager from "@/core/managers/RegisterManager";
import { TemplateCourse } from "@/ui";

interface FolderLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    course: string;
  }>;
}

export default async function CourseLayout({
  children,
  params,
}: Readonly<FolderLayoutProps>) {
  const { course } = await params;

  const findCourseResult = RegisterManager.findCourseBySlug(course);

  if (!findCourseResult.success) notFound();

  const findLessonsResult = RegisterManager.findLessonsByCourseId(findCourseResult.data.id);

  if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

  return <TemplateCourse course={findCourseResult.data} lessons={findLessonsResult.data}>{children}</TemplateCourse>;
}
