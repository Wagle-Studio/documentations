import "./templateCourse.scss";
import { ReactNode } from "react";
import { MenuLesson } from "@/ui";

interface TemplateCourseProps {
  children: ReactNode;
  courseSlug: string;
}

export const TemplateCourse = ({ children, courseSlug }: TemplateCourseProps) => {
  return (
    <>
      <div className="template--course">{children}</div>
      <MenuLesson courseSlug={courseSlug} />
    </>
  );
};
