import BreadCrumbsDetails from '@/components/BreadCrumbsDetails/BreadCrumbsDetails';
import DetailsSkeleton from '@/components/DetailsSkeleton/DetailsSkeleton';
import { useGetAnimeById } from '@/hooks/apiQuery/useGetAnimeById';
import { ArrowLeft2 } from 'iconsax-reactjs';
import { useNavigate, useParams } from 'react-router';
import { getAnimeInfo, getAnimeStats } from './animeDetails.utils';
import styles from './styles.module.scss';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const animeId = id ? parseInt(id, 10) : 0;

  const { data: anime, isLoading, error } = useGetAnimeById(animeId);

  const handleBack = () => {
    navigate(-1);
  };

  // Handle invalid ID
  if (!id || isNaN(animeId) || animeId <= 0) {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.errorContainer}>
            <h2>Invalid Anime ID</h2>
            <p>Please provide a valid anime ID.</p>
            <button onClick={handleBack} className={styles.backButton}>
              <ArrowLeft2 size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <DetailsSkeleton />;
  }

  if (error || !anime) {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.errorContainer}>
            <h2>Anime not found</h2>
            <p>Sorry, we couldn't find the anime you're looking for.</p>

            <button onClick={handleBack} className={styles.backButton}>
              <ArrowLeft2 size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const animeStats = getAnimeStats(anime);
  const animeInfo = getAnimeInfo(anime);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroSection}>
        <div
          className={styles.heroBackground}
          style={{
            backgroundImage: `url(${anime.images.jpg.large_image_url})`,
          }}
        >
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <BreadCrumbsDetails title={anime.title} />

          <div className={styles.heroInfo}>
            <div className={styles.heroImage}>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </div>

            <div className={styles.heroText}>
              <div>
                <h1 className={styles.title}>{anime.title}</h1>
                {anime.title_english && (
                  <h2 className={styles.titleEnglish}>{anime.title_english}</h2>
                )}
                {anime.title_japanese && (
                  <p className={styles.titleJapanese}>{anime.title_japanese}</p>
                )}
              </div>

              {anime.genres && (
                <div className={styles.heroGenres}>
                  {anime.genres.map((genre) => (
                    <span key={genre.mal_id} className={styles.heroGenreTag}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              <div className={styles.statsGrid}>
                {anime.score && (
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Score</span>
                    <span className={styles.statValue}>{anime.score}</span>
                    {anime.scored_by && (
                      <span className={styles.statSubtext}>
                        {anime.scored_by.toLocaleString()} voters
                      </span>
                    )}
                  </div>
                )}

                {animeStats
                  .filter((stat) => stat.value)
                  .map((stat) => (
                    <div key={stat.key} className={styles.statItem}>
                      <span className={styles.statLabel}>{stat.label}</span>
                      <span className={styles.statValue}>
                        {stat.format(stat.value!)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.detailsGrid}>
          <div className={styles.mainContent}>
            {anime.synopsis && (
              <section className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Synopsis</h3>
                <p className={styles.synopsis}>{anime.synopsis}</p>
              </section>
            )}

            {anime.trailer?.embed_url && (
              <section className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Trailer</h3>
                <div className={styles.trailerContainer}>
                  <iframe
                    src={anime.trailer.embed_url}
                    title="Anime Trailer"
                    className={styles.trailer}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>
            )}
          </div>

          <div className={styles.sidebar}>
            <section className={styles.sectionContainer}>
              <h3 className={styles.sectionTitle}>Information</h3>

              <div className={styles.infoList}>
                {animeInfo
                  .filter((info) => info.value)
                  .map((info) => (
                    <div key={info.key} className={styles.infoItem}>
                      <span className={styles.infoLabel}>{info.label}:</span>
                      <span className={styles.infoValue}>{info.value}</span>
                    </div>
                  ))}
              </div>
            </section>

            {anime.genres && anime.genres.length > 0 && (
              <section className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Genres</h3>
                <div className={styles.tagList}>
                  {anime.genres.map((genre) => (
                    <span key={genre.mal_id} className={styles.tag}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {anime.themes && anime.themes.length > 0 && (
              <section className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Themes</h3>
                <div className={styles.tagList}>
                  {anime.themes.map((theme) => (
                    <span key={theme.mal_id} className={styles.tag}>
                      {theme.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {anime.studios && anime.studios.length > 0 && (
              <section className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Studios</h3>
                <div className={styles.infoList}>
                  {anime.studios.map((studio) => (
                    <div key={studio.mal_id} className={styles.infoItem}>
                      <span className={styles.infoValue}>{studio.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {anime.producers && anime.producers.length > 0 && (
              <section className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Producers</h3>
                <div className={styles.infoList}>
                  {anime.producers.map((producer) => (
                    <div key={producer.mal_id} className={styles.infoItem}>
                      <span className={styles.infoValue}>{producer.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
