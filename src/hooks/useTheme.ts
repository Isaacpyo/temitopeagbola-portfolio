import { useState, useEffect } from 'react';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};
