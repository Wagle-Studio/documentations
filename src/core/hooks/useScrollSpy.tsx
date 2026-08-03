import { useEffect, useState } from "react";

export const useScrollSpy = (slugs: string[]) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    let frame: number | null = null;

    // 90px = scroll-margin-top des h2 (header sticky), plus une marge de lecture
    const offset = 120;

    const update = () => {
      frame = null;

      if (slugs.length === 0) {
        setActiveSlug(null);
        return;
      }

      let current: string | null = null;

      for (const slug of slugs) {
        const element = document.getElementById(slug);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= offset) {
          current = slug;
        }
      }

      setActiveSlug(current);
    };

    const schedule = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [slugs]);

  return { activeSlug };
};
