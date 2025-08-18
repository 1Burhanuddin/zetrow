import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * useScrollToHash - scrolls smoothly to an element with id matching the hash in the URL
 * @param deps - rerun effect when these change (usually location)
 */
export function useScrollToHash(deps: any[] = []) {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // eslint-disable-next-line
  }, [location, ...deps]);
}

/**
 * handleSectionNav - for nav links that scroll to sections on the homepage
 * @param navigate - useNavigate() from react-router-dom
 * @param sectionId - id of the section to scroll to
 */
export function handleSectionNav(navigate: ReturnType<typeof useNavigate>, sectionId: string) {
  if (window.location.pathname !== '/') {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
