import { setDarkMode } from '@/store/slices/darkModeSlice';
import { store } from '@/store/store';

/**
 * Initializes dark mode from localStorage or system preference
 * Sets the body class and Redux state before React renders
 */
export const initializeDarkMode = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    store.dispatch(setDarkMode(true));
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark');
    store.dispatch(setDarkMode(false));
  } else {
    // Check system preference if no saved theme
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDark) {
      document.body.classList.add('dark');
      store.dispatch(setDarkMode(true));
    } else {
      document.body.classList.remove('dark');
      store.dispatch(setDarkMode(false));
    }
  }
};
