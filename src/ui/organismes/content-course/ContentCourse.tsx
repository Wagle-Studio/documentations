import "./contentCourse.scss";
import { Course } from "@/core/types";

interface ContentCourseProps {
  course: Course;
}

export const ContentCourse = ({ course }: ContentCourseProps) => {
  return (
    <div className="content--course">
      <h1>{course.label}</h1>
    </div>
  );
};
