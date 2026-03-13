import { notFound } from "next/navigation";
import { Metadata } from "next";
import FileManager from "@/core/managers/FileManager";
import RegisterManager from "@/core/managers/RegisterManager";
import { ContentLesson } from "@/ui";

export async function generateStaticParams() {
  const lessonsPaths: { course: string; lesson: string }[] = [];

  RegisterManager.getLessons().data.map((lesson) => {
    const findCourseResult = RegisterManager.findCourseById(lesson.course_id);

    if (!findCourseResult.success) throw new Error(findCourseResult.message);

    lessonsPaths.push({
      course: findCourseResult.data.slug,
      lesson: lesson.slug,
    });
  });

  return lessonsPaths;
}

interface LessonParams {
  params: Promise<{ course: string; lesson: string }>;
}

export async function generateMetadata({ params }: LessonParams): Promise<Metadata> {
  const { lesson } = await params;
  const result = FileManager.getContent(lesson);
  if (!result.success) return {};
  return {
    title: result.data.lesson.label,
    description: result.data.lesson.description,
  };
}

export default async function Lesson({ params }: LessonParams) {
  const { lesson } = await params;

  const getContentResult = FileManager.getContent(lesson);

  if (!getContentResult.success) notFound();

  return (
    <ContentLesson
      lesson={getContentResult.data.lesson}
      mdx={getContentResult.data.mdx}
      references={getContentResult.data.references}
    />
  );
}
