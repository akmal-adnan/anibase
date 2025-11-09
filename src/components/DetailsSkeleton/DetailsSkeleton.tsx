import { Skeleton } from '@mui/material';
import styles from './styles.module.scss';

const DetailsSkeleton = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          {/* Breadcrumbs Skeleton */}
          <div className={styles.breadcrumbsSkeleton}>
            <Skeleton
              variant="text"
              width={60}
              height={24}
              className={styles.breadcrumbSkeleton}
            />
            <Skeleton
              variant="text"
              width={200}
              height={24}
              className={styles.breadcrumbSkeleton}
            />
          </div>

          <div className={styles.heroInfo}>
            {/* Hero Image Skeleton */}
            <div className={styles.heroImage}>
              <Skeleton
                variant="rectangular"
                className={styles.heroImageSkeleton}
              />
            </div>

            {/* Hero Text Skeleton */}
            <div className={styles.heroText}>
              <div className={styles.titleSection}>
                <Skeleton variant="text" className={styles.titleSkeleton} />
                <Skeleton
                  variant="text"
                  width="70%"
                  className={styles.titleEnglishSkeleton}
                />
                <Skeleton
                  variant="text"
                  width="50%"
                  className={styles.titleJapaneseSkeleton}
                />
              </div>

              {/* Genres Skeleton */}
              <div className={styles.heroGenres}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    className={styles.heroGenreTag}
                  />
                ))}
              </div>

              {/* Stats Grid Skeleton */}
              <div className={styles.statsGrid}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={styles.statItem}>
                    <Skeleton
                      variant="text"
                      width={60}
                      height={16}
                      className={styles.statLabelSkeleton}
                    />
                    <Skeleton
                      variant="text"
                      width={80}
                      height={24}
                      className={styles.statValueSkeleton}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.detailsGrid}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Synopsis Skeleton */}
            <section className={styles.section}>
              <Skeleton
                variant="text"
                width={120}
                height={28}
                className={styles.sectionTitleSkeleton}
              />
              <div className={styles.synopsisSkeleton}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton
                    key={i}
                    variant="text"
                    width={i === 5 ? '60%' : '100%'}
                    height={20}
                    className={styles.synopsisLine}
                  />
                ))}
              </div>
            </section>

            {/* Trailer Skeleton */}
            <section className={styles.section}>
              <Skeleton
                variant="text"
                width={100}
                height={28}
                className={styles.sectionTitleSkeleton}
              />
              <div className={styles.trailerContainer}>
                <Skeleton
                  variant="rectangular"
                  className={styles.trailerSkeleton}
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Information Section Skeleton */}
            <section className={styles.section}>
              <Skeleton
                variant="text"
                width={120}
                height={28}
                className={styles.sectionTitleSkeleton}
              />
              <div className={styles.infoList}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={styles.infoItem}>
                    <Skeleton
                      variant="text"
                      width={80}
                      height={20}
                      className={styles.infoLabelSkeleton}
                    />
                    <Skeleton
                      variant="text"
                      width={120}
                      height={20}
                      className={styles.infoValueSkeleton}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Genres Section Skeleton */}
            <section className={styles.section}>
              <Skeleton
                variant="text"
                width={80}
                height={28}
                className={styles.sectionTitleSkeleton}
              />
              <div className={styles.tagList}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    className={styles.tagSkeleton}
                  />
                ))}
              </div>
            </section>

            {/* Themes Section Skeleton */}
            <section className={styles.section}>
              <Skeleton
                variant="text"
                width={80}
                height={28}
                className={styles.sectionTitleSkeleton}
              />
              <div className={styles.tagList}>
                {[1, 2, 3].map((i) => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    className={styles.tagSkeleton}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
