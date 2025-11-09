import FacebookIcon from '@/assets/FacebookIcon';
import MainLogo from '@/assets/MainLogo';
import RedditIcon from '@/assets/RedditIcon';
import TwitterIcon from '@/assets/TwitterIcon';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Link } from 'react-router';
import styles from './styles.module.scss';

type FooterLink = {
  label: string;
  path: string;
};

type FooterProps = {
  links?: FooterLink[];
  showLogo?: boolean;
  copyrightText?: string;
};

const Footer = ({
  links = [],
  showLogo = true,
  copyrightText,
}: FooterProps) => {
  const { isDark } = useDarkMode();
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} AnimeBase. All rights reserved.`;
  const shareText = 'Check out AnimeBase - Discover your next favorite anime!';

  const handleTwitterShare = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const encodedText = encodeURIComponent(shareText);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodedText}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleFacebookShare = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  const handleRedditShare = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const encodedText = encodeURIComponent(shareText);
    const redditUrl = `https://reddit.com/submit?url=${shareUrl}&title=${encodedText}`;
    window.open(redditUrl, '_blank', 'width=550,height=420');
  };

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      handle: handleTwitterShare,
    },
    {
      name: 'Facebook',
      icon: <FacebookIcon />,
      handle: handleFacebookShare,
    },
    {
      name: 'Reddit',
      icon: <RedditIcon />,
      handle: handleRedditShare,
    },
  ];

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {showLogo && (
            <div className={styles.logoSection}>
              <Link
                to="/"
                onClick={handleLogoClick}
                className={styles.logoContainer}
              >
                <MainLogo dark={isDark} />
              </Link>
              <p className={styles.tagline}>
                Discover your next favorite anime
              </p>
            </div>
          )}

          {links.length > 0 && (
            <nav className={styles.nav}>
              {links.map((link) => (
                <Link key={link.path} to={link.path} className={styles.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <div className={styles.socialSection}>
            <p className={styles.socialTitle}>Share on platforms</p>

            <div className={styles.socialButtons}>
              {socialPlatforms.map((socialList, index) => (
                <button
                  key={index}
                  onClick={socialList.handle}
                  className={styles.socialButton}
                  aria-label={`Share on ${socialList.name}`}
                  title={`Share on ${socialList.name}`}
                >
                  {socialList.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {copyrightText || defaultCopyright}
          </p>

          <p className={styles.poweredBy}>
            Powered by{' '}
            <a
              href="https://jikan.moe"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              Jikan API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
