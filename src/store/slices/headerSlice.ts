import { createSlice } from '@reduxjs/toolkit';

interface HeaderState {
  isMenuOpen: boolean;
}

const initialState: HeaderState = {
  isMenuOpen: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = headerSlice.actions;
export default headerSlice.reducer;
