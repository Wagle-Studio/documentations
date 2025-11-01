import { Course } from "@/core/types";
import data from "@/register";

export async function generateStaticParams() {
  return data.courses.map((course: Course) => ({
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

  return <h1>{course}</h1>;
}
