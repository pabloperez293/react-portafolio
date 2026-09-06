import { useEffect, useState } from 'react';

// Observa secciones por id y devuelve el id de la sección actualmente visible.
export default function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0,
      }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}