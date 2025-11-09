import { Link } from 'react-router';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>
        <Link to="/" className={styles.homeButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
