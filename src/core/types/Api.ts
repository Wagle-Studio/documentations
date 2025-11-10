export type Register = {
  courses: Course[];
  lessons: Lesson[];
  references: Reference[];
  lesson_references: LessonReference[];
};

export type Course = {
  id: number;
  label: string;
  slug: string;
  emoji: string;
};

export type Lesson = {
  id: number;
  index: number;
  paths: string[];
  label: string;
  slug: string;
  course_id: number;
  description: string;
  created: string;
  updated: string;
};

export type Reference = {
  id: number;
  label: string;
  url: string;
};

export type LessonReference = { lesson_id: number; reference_id: number };
