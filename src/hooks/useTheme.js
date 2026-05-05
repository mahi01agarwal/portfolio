import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'mahima.theme';

function getInitial() {
  if (typeof window === 'undefined') return 'dark';
  const fromAttr = document.documentElement.dataset.theme;
  if (fromAttr === 'light' || fromAttr === 'dark') return fromAttr;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* ignore */
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage may be blocked; not critical */
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    []
  );

  return [theme, toggle];
}
