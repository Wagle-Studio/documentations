"use client";

import "./tag-heading2.scss";
import { Slugifier } from "@/core/services";

interface TagHeading2Props {
  children: React.ReactNode;
}

export const TagHeading2 = ({ children }: TagHeading2Props) => {
  const id = Slugifier.slugify(children as string);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <h2 id={id} className="tag-heading2">
      {children}
      <button
        className="tag-heading2__anchor"
        onClick={handleShare}
        aria-label="Copier le lien de la section"
      >
        #
      </button>
    </h2>
  );
};
