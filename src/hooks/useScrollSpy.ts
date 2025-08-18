import { useEffect, useState } from 'react';

/**
 * useScrollSpy
 * @param sectionIds - array of section ids to track
 * @param offset - offset in px from top (e.g. for fixed headers)
 * @returns the id of the currently visible section
 */
export function useScrollSpy(sectionIds: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      let foundId: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 0 && rect.bottom > offset) {
            foundId = id;
            break;
          }
        }
      }
      setActiveId(foundId);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
