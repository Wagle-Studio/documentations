import "./contentLesson.scss";
import { Lesson, Reference } from "@/core/types";
import { FooterLesson, HeaderLesson, RenderMdx } from "@/ui";

interface ContentLessonProps {
  lesson: Lesson;
  mdx: string;
  references?: Reference[];
}

export const ContentLesson = ({
  lesson,
  mdx,
  references,
}: ContentLessonProps) => {
  return (
    <div className="content_lesson">
      <HeaderLesson lesson={lesson} references={references} />
      <div id="content_lesson__mdx" className="content_lesson__mdx">
        <RenderMdx content={mdx} />
      </div>
      <FooterLesson references={references} />
    </div>
  );
};
