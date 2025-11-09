import { useApiErrorHandler } from '@/hooks/useApiErrorHandler';
import { useGetAnimeByIdQuery } from '@/store/api/jikanApi';

export const useGetAnimeById = (id: number) => {
  const { data, error, isLoading, isFetching, refetch } = useGetAnimeByIdQuery(
    id,
    {
      skip: !id || id <= 0,
    }
  );

  useApiErrorHandler({
    error,
    defaultMessage: 'An error occurred while fetching anime details',
  });

  return {
    data: data?.data,
    error,
    isLoading,
    isFetching,
    refetch,
  };
};
