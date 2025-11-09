import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeMenu, openMenu, toggleMenu } from '@/store/slices/headerSlice';

export const useHeader = () => {
  const isMenuOpen = useAppSelector((state) => state.header.isMenuOpen);
  const dispatch = useAppDispatch();

  return {
    isMenuOpen,
    openMenu: () => dispatch(openMenu()),
    closeMenu: () => dispatch(closeMenu()),
    toggleMenu: () => dispatch(toggleMenu()),
  };
};
