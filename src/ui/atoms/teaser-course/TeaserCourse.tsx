import "./teaserCourse.scss";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/core/types";
import RegisterManager from "@/core/managers/RegisterManager";

interface TeaserCourseProps {
  course: Course;
}

export const TeaserCourse = ({ course }: TeaserCourseProps) => {
  const findLessonsResult = RegisterManager.findLessonsByCourseId(course.id);

  // TODO : handle error case
  if (!findLessonsResult.success) throw new Error(findLessonsResult.message);

  const lessons = findLessonsResult.data;

  return (
    <Link href={`/documentation/${course.slug}`} className="teaser_course">
      <>
        <div className="teaser_course__header">
          <Image src={course.emoji} alt={course.label} width={32} height={32} />
          <h3>{course.label}</h3>
        </div>
        <p>
          {lessons.length} {lessons.length > 0 ? "documents" : "document"}
        </p>
      </>
    </Link>
  );
};
