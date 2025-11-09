import type { Anime } from '@/types/api/AnimeSearch';

export type AnimeStat = {
  key: string;
  label: string;
  value: number | null;
  format: (val: number) => string;
};

export type AnimeInfo = {
  key: string;
  label: string;
  value: string | number | null;
};

export const getAnimeStats = (anime: Anime): AnimeStat[] => {
  return [
    {
      key: 'rank',
      label: 'Rank',
      value: anime.rank,
      format: (val: number) => `#${val}`,
    },
    {
      key: 'popularity',
      label: 'Popularity',
      value: anime.popularity,
      format: (val: number) => `#${val}`,
    },
    {
      key: 'members',
      label: 'Members',
      value: anime.members,
      format: (val: number) => val.toLocaleString(),
    },
  ];
};

export const getAnimeInfo = (anime: Anime): AnimeInfo[] => {
  return [
    {
      key: 'type',
      label: 'Type',
      value: anime.type,
    },
    {
      key: 'episodes',
      label: 'Episodes',
      value: anime.episodes,
    },
    {
      key: 'status',
      label: 'Status',
      value: anime.status,
    },
    {
      key: 'duration',
      label: 'Duration',
      value: anime.duration,
    },
    {
      key: 'rating',
      label: 'Rating',
      value: anime.rating,
    },
    {
      key: 'aired',
      label: 'Aired',
      value: anime.aired?.string,
    },
    {
      key: 'source',
      label: 'Source',
      value: anime.source,
    },
    {
      key: 'premiered',
      label: 'Premiered',
      value:
        anime.season && anime.year ? `${anime.season} ${anime.year}` : null,
    },
  ];
};
