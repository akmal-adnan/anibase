import type { Anime } from '@/types/api/AnimeSearch';
import { describe, expect, it } from 'vitest';
import { getAnimeInfo, getAnimeStats } from './animeDetails.utils';

describe('animeDetails.utils', () => {
  const createMockAnime = (overrides?: Partial<Anime>): Anime => {
    return {
      mal_id: 1,
      url: 'https://example.com/anime/1',
      images: {
        jpg: {
          image_url: 'https://example.com/image.jpg',
          small_image_url: 'https://example.com/small.jpg',
          large_image_url: 'https://example.com/large.jpg',
        },
        webp: {
          image_url: 'https://example.com/image.webp',
          small_image_url: 'https://example.com/small.webp',
          large_image_url: 'https://example.com/large.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [],
      title: 'Test Anime',
      title_english: null,
      title_japanese: 'テストアニメ',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 24,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2020-01-01T00:00:00+00:00',
        to: '2020-12-31T00:00:00+00:00',
        prop: {
          from: {
            day: 1,
            month: 1,
            year: 2020,
          },
          to: {
            day: 31,
            month: 12,
            year: 2020,
          },
        },
        string: 'Jan 1, 2020 to Dec 31, 2020',
      },
      duration: '24 min per ep',
      rating: 'PG-13',
      score: 8.5,
      scored_by: 1000,
      rank: 10,
      popularity: 5,
      members: 50000,
      favorites: 1000,
      synopsis: 'Test synopsis',
      background: null,
      season: 'Winter',
      year: 2020,
      broadcast: {
        day: 'Monday',
        time: '20:00',
        timezone: 'Asia/Tokyo',
        string: 'Mondays at 20:00 (JST)',
      },
      producers: [],
      licensors: [],
      studios: [],
      genres: [],
      explicit_genres: [],
      themes: [],
      demographics: [],
      ...overrides,
    };
  };

  describe('getAnimeStats', () => {
    it('returns stats array with rank, popularity, and members', () => {
      const anime = createMockAnime({
        rank: 10,
        popularity: 5,
        members: 50000,
      });

      const stats = getAnimeStats(anime);

      expect(stats).toHaveLength(3);
      expect(stats[0]).toEqual({
        key: 'rank',
        label: 'Rank',
        value: 10,
        format: expect.any(Function),
      });
      expect(stats[1]).toEqual({
        key: 'popularity',
        label: 'Popularity',
        value: 5,
        format: expect.any(Function),
      });
      expect(stats[2]).toEqual({
        key: 'members',
        label: 'Members',
        value: 50000,
        format: expect.any(Function),
      });
    });

    it('handles null values correctly', () => {
      const anime = createMockAnime({
        rank: null,
        popularity: null,
        members: null,
      });

      const stats = getAnimeStats(anime);

      expect(stats[0].value).toBeNull();
      expect(stats[1].value).toBeNull();
      expect(stats[2].value).toBeNull();
    });

    it('formats rank correctly', () => {
      const anime = createMockAnime({ rank: 10 });
      const stats = getAnimeStats(anime);
      const formatted = stats[0].format(10);

      expect(formatted).toBe('#10');
    });

    it('formats popularity correctly', () => {
      const anime = createMockAnime({ popularity: 5 });
      const stats = getAnimeStats(anime);
      const formatted = stats[1].format(5);

      expect(formatted).toBe('#5');
    });

    it('formats members with locale string', () => {
      const anime = createMockAnime({ members: 50000 });
      const stats = getAnimeStats(anime);
      const formatted = stats[2].format(50000);

      expect(formatted).toBe('50,000');
    });

    it('handles large member numbers', () => {
      const anime = createMockAnime({ members: 1000000 });
      const stats = getAnimeStats(anime);
      const formatted = stats[2].format(1000000);

      expect(formatted).toBe('1,000,000');
    });
  });

  describe('getAnimeInfo', () => {
    it('returns info array with all anime information', () => {
      const anime = createMockAnime({
        type: 'TV',
        episodes: 24,
        status: 'Finished Airing',
        duration: '24 min per ep',
        rating: 'PG-13',
        source: 'Manga',
        season: 'Winter',
        year: 2020,
        aired: {
          from: '2020-01-01T00:00:00+00:00',
          to: '2020-12-31T00:00:00+00:00',
          prop: {
            from: { day: 1, month: 1, year: 2020 },
            to: { day: 31, month: 12, year: 2020 },
          },
          string: 'Jan 1, 2020 to Dec 31, 2020',
        },
      });

      const info = getAnimeInfo(anime);

      expect(info).toHaveLength(8);
      expect(info[0]).toEqual({ key: 'type', label: 'Type', value: 'TV' });
      expect(info[1]).toEqual({
        key: 'episodes',
        label: 'Episodes',
        value: 24,
      });
      expect(info[2]).toEqual({
        key: 'status',
        label: 'Status',
        value: 'Finished Airing',
      });
      expect(info[3]).toEqual({
        key: 'duration',
        label: 'Duration',
        value: '24 min per ep',
      });
      expect(info[4]).toEqual({
        key: 'rating',
        label: 'Rating',
        value: 'PG-13',
      });
      expect(info[5]).toEqual({
        key: 'aired',
        label: 'Aired',
        value: 'Jan 1, 2020 to Dec 31, 2020',
      });
      expect(info[6]).toEqual({
        key: 'source',
        label: 'Source',
        value: 'Manga',
      });
      expect(info[7]).toEqual({
        key: 'premiered',
        label: 'Premiered',
        value: 'Winter 2020',
      });
    });

    it('handles null values correctly', () => {
      const anime = createMockAnime({
        type: null as unknown as string,
        episodes: null,
        status: null as unknown as string,
        duration: null as unknown as string,
        rating: null,
        source: null as unknown as string,
        aired: {
          from: '2020-01-01T00:00:00+00:00',
          to: '2020-12-31T00:00:00+00:00',
          prop: {
            from: { day: 1, month: 1, year: 2020 },
            to: { day: 31, month: 12, year: 2020 },
          },
          string: 'Jan 1, 2020 to Dec 31, 2020',
        },
      });

      const info = getAnimeInfo(anime);

      expect(info[0].value).toBeNull();
      expect(info[1].value).toBeNull();
      expect(info[2].value).toBeNull();
      expect(info[3].value).toBeNull();
      expect(info[4].value).toBeNull();
      expect(info[6].value).toBeNull();
    });

    it('handles missing aired string', () => {
      const anime = createMockAnime({
        aired: {
          from: '2020-01-01T00:00:00+00:00',
          to: '2020-12-31T00:00:00+00:00',
          prop: {
            from: { day: 1, month: 1, year: 2020 },
            to: { day: 31, month: 12, year: 2020 },
          },
          string: '',
        },
      });

      const info = getAnimeInfo(anime);

      expect(info[5].value).toBe('');
    });

    it('returns null for premiered when season is missing', () => {
      const anime = createMockAnime({
        season: null,
        year: 2020,
      });

      const info = getAnimeInfo(anime);

      expect(info[7].value).toBeNull();
    });

    it('returns null for premiered when year is missing', () => {
      const anime = createMockAnime({
        season: 'Winter',
        year: null,
      });

      const info = getAnimeInfo(anime);

      expect(info[7].value).toBeNull();
    });

    it('returns formatted premiered when both season and year are present', () => {
      const anime = createMockAnime({
        season: 'Spring',
        year: 2021,
      });

      const info = getAnimeInfo(anime);

      expect(info[7].value).toBe('Spring 2021');
    });

    it('handles different seasons correctly', () => {
      const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
      seasons.forEach((season) => {
        const anime = createMockAnime({
          season,
          year: 2020,
        });

        const info = getAnimeInfo(anime);

        expect(info[7].value).toBe(`${season} 2020`);
      });
    });
  });
});
