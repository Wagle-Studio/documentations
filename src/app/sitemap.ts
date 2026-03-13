import { MetadataRoute } from "next";
import RegisterManager from "@/core/managers/RegisterManager";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const courses = RegisterManager.getCourses().data;
  const lessons = RegisterManager.getLessons().data;

  return [
    { url: BASE_URL, priority: 1 },
    ...courses.map((c) => ({
      url: `${BASE_URL}/documentations/${c.slug}`,
      priority: 0.8,
    })),
    ...lessons.map((l) => {
      const course = RegisterManager.findCourseById(l.course_id);
      const courseSlug = course.success ? course.data.slug : "";
      return {
        url: `${BASE_URL}/documentations/${courseSlug}/${l.slug}`,
        priority: 0.6,
      };
    }),
  ];
}
