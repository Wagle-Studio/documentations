import "./contentLesson.scss";
import { Lesson } from "@/core/types";
import { HeaderLesson, RenderMdx } from "@/ui";

interface ContentLessonProps {
  lesson: Lesson;
  mdx: string;
}

export const ContentLesson = ({ lesson, mdx }: ContentLessonProps) => {
  return (
    <div className="content_lesson">
      <HeaderLesson lesson={lesson} />
      <div className="content_lesson__mdx">
        <RenderMdx content={mdx} />
      </div>
    </div>
  );
};
