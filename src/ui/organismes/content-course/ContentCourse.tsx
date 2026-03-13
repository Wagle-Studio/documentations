import "./contentCourse.scss";
import Image from "next/image";
import { Course, Lesson } from "@/core/types";
import { ListLessons } from "@/ui/molecules";

interface ContentCourseProps {
  course: Course;
  lessons: Lesson[];
}

export const ContentCourse = ({ course, lessons }: ContentCourseProps) => {
  return (
    <div className="content_course">
      <div className="content_course__header">
        <div className="content_course__header__title">
          <Image src={course.emoji} alt={course.label} width={32} height={32} />
          <h1>{course.label}</h1>
        </div>
        <p>
          {lessons.length} {lessons.length > 0 ? "Documents" : "Document"}
        </p>
      </div>
      <div className="content_couse__body">
        <ListLessons course={course} lessons={lessons} />
      </div>
    </div>
  );
};
