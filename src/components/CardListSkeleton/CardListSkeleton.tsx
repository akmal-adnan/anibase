import SkeletonCard from '@/components/SkeletonCard/SkeletonCard';
import styles from './styles.module.scss';

type CardListSkeletonProps = {
  count?: number;
};

const CardListSkeleton = ({ count = 24 }: CardListSkeletonProps) => {
  return (
    <div className={styles.skeletonGrid}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default CardListSkeleton;
