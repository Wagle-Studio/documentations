import "./templateCourse.scss";
import { ReactNode } from "react";
import { Course, Lesson } from "@/core/types";
import { Breadcrumb, SidebarLesson } from "@/ui";

interface TemplateCourseProps {
  children: ReactNode;
  course: Course;
  lessons: Lesson[];
}

export const TemplateCourse = ({ children, course, lessons }: TemplateCourseProps) => {
  return (
    <div className="template_course">
      <div className="template_course__content">{children}</div>
      <div className="template_course__breadcrumb">
        <Breadcrumb />
      </div>
      <div className="template_course__sidebar">
        <SidebarLesson course={course} lessons={lessons} />
      </div>
    </div>
  );
};
