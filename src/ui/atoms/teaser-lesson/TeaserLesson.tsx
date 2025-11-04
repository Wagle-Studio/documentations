import "./teaserLesson.scss";
import Link from "next/link";
import { Course, Lesson } from "@/core/types";

interface TeaserLessonProps {
  course: Course;
  lesson: Lesson;
}

export const TeaserLesson = ({ course, lesson }: TeaserLessonProps) => {
  return (
    <Link
      href={`/documentation/${course.slug}/${lesson.slug}`}
      className="teaser_lesson"
    >
      <div className="teaser_lesson__header">
        <h3>{lesson.label}</h3>
      </div>
      <div className="teaser_lesson__body">
        <p>{lesson.description}</p>
      </div>
    </Link>
  );
};
