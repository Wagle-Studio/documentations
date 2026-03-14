import { TemplateLesson } from "@/ui";

interface FolderLayoutProps {
  children: React.ReactNode;
}

export default function LessonLayout({
  children,
}: Readonly<FolderLayoutProps>) {
  return <TemplateLesson>{children}</TemplateLesson>;
}
