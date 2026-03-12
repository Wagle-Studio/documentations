import { Course } from "@/core/types";
import RegisterManager from "@/core/managers/RegisterManager";
import { ContentCourse } from "@/ui";

export async function generateStaticParams() {
  return RegisterManager.getCourses().data.map((course: Course) => ({
    course: course.slug,
  }));
}

interface CourseParams {
  params: Promise<{
    course: string;
  }>;
}

export default async function CoursePage({ params }: CourseParams) {
  const { course } = await params;

  // TODO : handle error case
  const findCourseResult = RegisterManager.findCourseBySlug(course);

  return (
    <>
      {findCourseResult.success && (
        <ContentCourse course={findCourseResult.data} />
      )}
    </>
  );
}
