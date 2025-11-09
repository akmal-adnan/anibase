import type {
  AnimeResponse,
  AnimeSearchParams,
  AnimeSearchResponse,
  GenresResponse,
  TopAnimeParams,
} from '@/types/api/AnimeSearch';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jikanApi = createApi({
  reducerPath: 'jikanApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
  endpoints: (builder) => ({
    getAnimeSearch: builder.query<AnimeSearchResponse, AnimeSearchParams>({
      query: (params) => {
        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== '') {
            searchParams.append(key, String(value));
          }
        });

        return `anime?${searchParams.toString()}`;
      },
    }),

    getTopAnime: builder.query<AnimeSearchResponse, TopAnimeParams>({
      query: (params) => {
        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== '') {
            searchParams.append(key, String(value));
          }
        });

        const queryString = searchParams.toString();
        return `top/anime${queryString ? `?${queryString}` : ''}`;
      },
    }),

    getAnimeById: builder.query<AnimeResponse, number>({
      query: (id) => `anime/${id}`,
    }),

    getAnimeGenres: builder.query<GenresResponse, void>({
      query: () => 'genres/anime',
    }),
  }),
});

export const {
  useGetAnimeSearchQuery,
  useGetTopAnimeQuery,
  useGetAnimeByIdQuery,
  useGetAnimeGenresQuery,
} = jikanApi;
