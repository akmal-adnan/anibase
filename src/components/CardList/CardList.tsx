import styles from '@/components/CardList/styles.module.scss';
import type { Anime } from '@/types/api/AnimeSearch';
import { Link } from 'react-router';

type CardListProps = {
  cardListData: Anime[];
};

const CardList = ({ cardListData }: CardListProps) => {
  return (
    <div className={styles.animeGrid}>
      {cardListData.map((anime) => (
        <Link
          key={anime.mal_id}
          to={`/anime/${anime.mal_id}`}
          className={styles.animeCard}
        >
          <div className={styles.animeImage}>
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              loading="lazy"
            />
          </div>
          <div className={styles.animeTitle}>{anime.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default CardList;
