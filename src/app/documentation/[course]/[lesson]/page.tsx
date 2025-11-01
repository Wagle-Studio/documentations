import { RenderMdx } from "@/ui";
import data from "@/register";
import FileManager from "@/core/managers/FileManager";
import RegisterManager from "@/core/managers/RegisterManager";

export async function generateStaticParams() {
  const lessonsPaths: { course: string; lesson: string }[] = [];

  data.lessons.map((lesson) => {
    const course = RegisterManager.findCourseById(lesson.course_id);
    if (!course) return;
    lessonsPaths.push({ course: course?.slug, lesson: lesson.slug });
  });

  return lessonsPaths.map((lessonsPath) => {
    return lessonsPath;
  });
}

interface LessonParams {
  params: Promise<{ course: string; lesson: string }>;
}

export default async function Lesson({ params }: LessonParams) {
  const { lesson } = await params;

  const content = FileManager.getContent(lesson);

  return (
    <div className="app__lesson__content">
      <RenderMdx content={content} />
    </div>
  );
}
