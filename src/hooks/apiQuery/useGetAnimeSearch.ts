import { useApiErrorHandler } from '@/hooks/useApiErrorHandler';
import { useGetAnimeSearchQuery } from '@/store/api/jikanApi';
import type { AnimeSearchParams } from '@/types/api/AnimeSearch';

export const useGetAnimeSearch = (params: AnimeSearchParams) => {
  const { data, error, isLoading, isFetching, refetch } =
    useGetAnimeSearchQuery(params);

  useApiErrorHandler({
    error,
    defaultMessage: 'An error occurred while fetching anime data',
  });

  return {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  };
};
