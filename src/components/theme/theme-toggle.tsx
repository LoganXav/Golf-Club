'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { ThemeToggler } from './theme-toggler';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const initialTheme = prefersDarkMode ? 'dark' : 'light';

  React.useEffect(() => {
    if (!theme) {
      setTheme(initialTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTheme]);

  return (
    <div>
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </div>
  );
}
