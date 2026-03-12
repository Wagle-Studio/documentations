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

  return <TemplateCourse courseSlug={course}>{children}</TemplateCourse>;
}
