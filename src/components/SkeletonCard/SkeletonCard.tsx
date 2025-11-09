import { Skeleton } from '@mui/material';
import styles from './styles.module.scss';

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <Skeleton variant="rectangular" className={styles.skeletonImage} />
      <Skeleton variant="text" className={styles.skeletonLine1} />
      <Skeleton variant="text" className={styles.skeletonLine2} />
    </div>
  );
};

export default SkeletonCard;
