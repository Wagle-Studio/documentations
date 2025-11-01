export type Register = {
  courses: Course[];
  lessons: Lesson[];
};

export type Course = {
  id: number;
  label: string;
  slug: string;
};

export type Lesson = {
  id: number;
  paths: string[];
  label: string;
  slug: string;
  course_id: number;
};
