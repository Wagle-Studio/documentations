import { Course } from "@/core/types";
import RegisterManager from "@/core/managers/RegisterManager";

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

  const findCourseResult = RegisterManager.findCourseBySlug(course);

  return (
    <div className="app__course__content">
      {!findCourseResult.success && <h1>Une problème est survenue</h1>}
      {findCourseResult.success && (
        <div>
          <h1>{findCourseResult.data.label}</h1>
        </div>
      )}
    </div>
  );
}
