import { ListCourses } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export default function HomePage() {
  const courses = RegisterManager.getCourses().data;

  return (
    <div className="page--homepage">
      <ListCourses courses={courses} />
    </div>
  );
}
