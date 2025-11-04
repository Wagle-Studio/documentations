import "./contentCourse.scss";
import Image from "next/image";
import { Course } from "@/core/types";
import { ListLessons } from "@/ui/molecules";
import RegisterManager from "@/core/managers/RegisterManager";

interface ContentCourseProps {
  course: Course;
}

export const ContentCourse = ({ course }: ContentCourseProps) => {
  const findLessonsResult = RegisterManager.findLessonsByCourseId(course.id);

  // TODO : handle error case
  if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

  const lessons = findLessonsResult.data;

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
