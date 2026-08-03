"use client";

import { isValidElement, ReactNode } from "react";
import "./tag-heading2.scss";
import { Slugifier } from "@/core/services";

interface TagHeading2Props {
  children: React.ReactNode;
}

const extractText = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  if (isValidElement(node)) {
    return extractText((node.props as { children?: ReactNode }).children);
  }
  return "";
};

export const TagHeading2 = ({ children }: TagHeading2Props) => {
  const id = Slugifier.slugify(extractText(children));

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
