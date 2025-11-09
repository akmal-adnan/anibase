import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  isDark: boolean;
}

// Initialize from localStorage if available
const getInitialDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Optional: Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

const initialState: DarkModeState = {
  isDark: getInitialDarkMode(),
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
    setDarkMode: (state, action: { payload: boolean }) => {
      state.isDark = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
