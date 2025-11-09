export type Register = {
  courses: Course[];
  lessons: Lesson[];
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
