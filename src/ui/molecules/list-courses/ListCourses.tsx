import "./listCourses.scss";
import { Course } from "@/core/types";
import { TeaserCourse } from "@/ui";

interface ListCoursesProps {
  courses: Course[];
}

export const ListCourses = ({ courses }: ListCoursesProps) => {
  return (
    <div className="list_courses">
      <h2>Thèmes</h2>
      <ul className="list_courses__list">
        {courses.map((course) => (
          <li key={`list_courses--${course.id}`}>
            <TeaserCourse course={course} />
          </li>
        ))}
      </ul>
    </div>
  );
};
