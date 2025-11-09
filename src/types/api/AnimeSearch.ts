// Jikan API Type Definitions

export type AnimeImages = {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
};

export type AnimeTitle = {
  type: string;
  title: string;
};

export type Trailer = {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
  images: {
    image_url: string | null;
    small_image_url: string | null;
    medium_image_url: string | null;
    large_image_url: string | null;
    maximum_image_url: string | null;
  };
};

export type Aired = {
  from: string;
  to: string | null;
  prop: {
    from: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
    to: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
  };
  string: string;
};

export type Broadcast = {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string;
};

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Producer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Anime = {
  mal_id: number;
  url: string;
  images: AnimeImages;
  trailer: Trailer;
  approved: boolean;
  titles: AnimeTitle[];
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
};

export type PaginationItems = {
  count: number;
  total: number;
  per_page: number;
};

export type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: PaginationItems;
};

export type AnimeSearchResponse = {
  pagination: Pagination;
  data: Anime[];
};

export type AnimeResponse = {
  data: Anime;
};

export type AnimeSearchParams = {
  page?: number;
  limit?: number;
  q?: string;
  type?: string;
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: string;
  rating?: string;
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  order_by?: string;
  sort?: 'desc' | 'asc';
  letter?: string;
  producers?: string;
  start_date?: string;
  end_date?: string;
};

export type TopAnimeParams = {
  page?: number;
  limit?: number;
  type?: string;
  filter?: string;
};

export type GenresResponse = {
  data: Genre[];
};
