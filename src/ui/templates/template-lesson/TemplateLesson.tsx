import "./templateLesson.scss";
import { ReactNode } from "react";

interface TemplateLessonProps {
  children: ReactNode;
}

export const TemplateLesson = ({ children }: TemplateLessonProps) => {
  return <div className="template_lesson">{children}</div>;
};
