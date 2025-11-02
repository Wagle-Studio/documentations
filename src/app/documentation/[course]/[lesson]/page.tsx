import { HeaderLesson, RenderMdx } from "@/ui";
import FileManager from "@/core/managers/FileManager";
import RegisterManager from "@/core/managers/RegisterManager";

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

export default async function Lesson({ params }: LessonParams) {
  const { lesson } = await params;

  const getContentResult = FileManager.getContent(lesson);

  return (
    <div className="app__lesson__content">
      {!getContentResult.success && <h1>Une problème est survenue</h1>}
      {getContentResult.success && (
        <>
          <HeaderLesson lesson={getContentResult.data.lesson} />
          <RenderMdx content={getContentResult.data.mdx} />
        </>
      )}
    </div>
  );
}
