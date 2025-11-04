import { ListCourses } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export default function HomePage() {
  const courses = RegisterManager.getCourses().data;

  return (
    <div className="page--homepage">
      <h1>Documentation</h1>
      <ListCourses courses={courses} />
    </div>
  );
}
