import FileManager from "@/core/managers/FileManager";

export async function generateStaticParams() {
  return FileManager.getFolderPaths().map((folderPath: string) => ({
    course: folderPath,
  }));
}

interface CourseParams {
  params: Promise<{
    course: string;
  }>;
}

export default async function Course({ params }: CourseParams) {
  const { course } = await params;

  return <h1>{course}</h1>;
}
