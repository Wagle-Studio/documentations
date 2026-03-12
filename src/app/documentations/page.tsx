import { ListCourses } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export default function DocumentationsPage() {
  const courses = RegisterManager.getCourses().data;

  return <ListCourses courses={courses} />;
}
