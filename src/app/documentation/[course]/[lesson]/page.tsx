import FileManager from "@/core/managers/FileManager";
import RegisterManager from "@/core/managers/RegisterManager";
import { ContentLesson } from "@/ui";

export async function generateStaticParams() {
  const lessonsPaths: { course: string; lesson: string }[] = [];

  RegisterManager.getLessons().data.map((lesson) => {
    const findCourseResult = RegisterManager.findCourseById(lesson.course_id);

    // TODO : handle error case
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

export default async function Lesson({ params }: LessonParams) {
  const { lesson } = await params;

  // TODO : handle error case
  const getContentResult = FileManager.getContent(lesson);

  return (
    <>
      {getContentResult.success && (
        <ContentLesson
          lesson={getContentResult.data.lesson}
          mdx={getContentResult.data.mdx}
        />
      )}
    </>
  );
}
