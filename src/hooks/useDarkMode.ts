import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleDarkMode } from '@/store/slices/darkModeSlice';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const isDark = useAppSelector((state) => state.darkMode.isDark);
  const dispatch = useAppDispatch();

  // Update body class and localStorage when dark mode changes
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return {
    isDark,
    toggleDark: () => dispatch(toggleDarkMode()),
  };
};
