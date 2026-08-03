import { ListCourses } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export default function DocumentationsPage() {
  const groups = RegisterManager.getCoursesGroupedByCategory().data;

  return <ListCourses groups={groups} />;
}
