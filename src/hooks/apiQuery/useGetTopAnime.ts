import { useApiErrorHandler } from '@/hooks/useApiErrorHandler';
import { useGetTopAnimeQuery } from '@/store/api/jikanApi';
import type { TopAnimeParams } from '@/types/api/AnimeSearch';

export const useGetTopAnime = (params?: TopAnimeParams) => {
  const { data, error, isLoading, isFetching, refetch } = useGetTopAnimeQuery(
    params || {}
  );

  useApiErrorHandler({
    error,
    defaultMessage: 'An error occurred while fetching top anime data',
  });

  return {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  };
};
