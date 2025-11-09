import MainLogo from '@/assets/MainLogo';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useHeader } from '@/hooks/useHeader';
import { CloseCircle, HamburgerMenu, Moon, Sun1 } from 'iconsax-reactjs';
import { Link, useLocation } from 'react-router';
import styles from './styles.module.scss';

const navLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Share',
    path: '',
  },
];

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useHeader();
  const { isDark, toggleDark } = useDarkMode();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" onClick={handleLogoClick} className={styles.logoContainer}>
          <MainLogo dark={isDark} />
        </Link>

        <div className={styles.headerActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun1 size="24" /> : <Moon size="24" />}
          </button>

          <button className={styles.shareButton}>
            {/* <Send2 size="24" /> */}
            Share
          </button>
        </div>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseCircle size="30" /> : <HamburgerMenu size="30" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        onClick={closeMenu}
      >
        <div
          className={styles.mobileMenuContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileMenuHeader}>
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <CloseCircle size="28" />
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <button
              className={styles.mobileThemeToggle}
              onClick={toggleDark}
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDark ? (
                <>
                  <Sun1 size="20" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size="20" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
        <div className={styles.mobileMenuOverlay} onClick={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
