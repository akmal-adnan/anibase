import { useApiErrorHandler } from '@/hooks/useApiErrorHandler';
import { useGetAnimeGenresQuery } from '@/store/api/jikanApi';

export const useGetAnimeGenres = () => {
  const { data, error, isLoading, isFetching, refetch } =
    useGetAnimeGenresQuery();

  useApiErrorHandler({
    error,
    defaultMessage: 'An error occurred while fetching genres',
  });

  return {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  };
};
