import "./listCourses.scss";
import { CourseGroup } from "@/core/types";
import { TeaserCourse } from "@/ui";

interface ListCoursesProps {
  groups: CourseGroup[];
}

export const ListCourses = ({ groups }: ListCoursesProps) => {
  return (
    <div className="list_courses">
      {groups.map((group) => (
        <section
          className="list_courses__group"
          key={`list_courses__group--${group.category}`}
        >
          <h2>{group.category}</h2>
          <ul className="list_courses__list">
            {group.courses.map((course) => (
              <li key={`list_courses--${course.slug}-${course.id}`}>
                <TeaserCourse course={course} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
