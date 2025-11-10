import "./footer-lesson.scss";
import Link from "next/link";
import { Reference } from "@/core/types";

interface FooterLessonProps {
  references?: Reference[];
}

export const FooterLesson = ({ references }: FooterLessonProps) => {
  return (
    <div className="content_lesson__footer">
      <div className="content_lesson__footer--references">
        <h2 id="references">Références</h2>
        {references && references.length > 0 ? (
          <ul>
            {references.map((reference) => (
              <li key={reference.id}>
                🔗
                <Link
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {reference.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune référence disponible pour ce document.</p>
        )}
      </div>
    </div>
  );
};
