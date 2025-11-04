import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";

interface SummaryItem {
  label: string;
  slug: string;
}

export const useSummaryParser = (lessonSlug: ParamValue) => {
  const [summaryItems, setSummaryItems] = useState<SummaryItem[] | null>(null);

  useEffect(() => {
    if (!lessonSlug) return;

    setSummaryItems(null);

    const contentMdx = document.getElementById("content_lesson__mdx");

    if (!contentMdx) return;

    const items = Array.from(contentMdx.children);

    const summaryItems = items
      .filter((item) => item.tagName === "H2")
      .map(
        (h2): SummaryItem => ({
          label: h2.textContent,
          slug: h2.id,
        })
      );

    setSummaryItems(summaryItems);
  }, [lessonSlug, setSummaryItems]);

  return { summaryItems };
};
