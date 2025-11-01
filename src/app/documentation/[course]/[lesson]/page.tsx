import { RenderMdx } from "@/ui";
import FileManager from "@/core/managers/FileManager";

export async function generateStaticParams() {
  return FileManager.getContentPaths().map((folderPath: string) => {
    const [course, lesson] = folderPath.split("/");
    return { course, lesson };
  });
}

interface LessonParams {
  params: Promise<{ course: string; lesson: string }>;
}

export default async function Lesson({ params }: LessonParams) {
  const { course, lesson } = await params;

  const content = FileManager.getContent(course, lesson);

  return (
    <div className="app__lesson__content">
      <RenderMdx content={content} />
    </div>
  );
}
