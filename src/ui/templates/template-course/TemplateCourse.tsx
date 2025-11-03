import "./templateCourse.scss";
import { ReactNode } from "react";
import { SidebarLesson } from "@/ui";

interface TemplateCourseProps {
  children: ReactNode;
  courseSlug: string;
}

export const TemplateCourse = ({
  children,
  courseSlug,
}: TemplateCourseProps) => {
  return (
    <div className="template_course">
      <div className="template_course__content">{children}</div>
      <div className="template_course__sidebar">
        <SidebarLesson courseSlug={courseSlug} />
      </div>
    </div>
  );
};
