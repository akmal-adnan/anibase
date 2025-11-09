import { useCallback, useState } from 'react';

export type FilterState = {
  type: string;
  status: string;
  genres: number[];
  sort: 'asc' | 'desc' | '';
  orderBy: string;
  rating: string;
};

const initialFilterState: FilterState = {
  type: '',
  status: '',
  genres: [],
  sort: '',
  orderBy: '',
  rating: '',
};

export const useAnimeFilters = () => {
  const [filters, setFilters] = useState<FilterState>(initialFilterState);

  const handleTypeChange = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, type: value }));
  }, []);

  const handleStatusChange = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, status: value }));
  }, []);

  const handleGenresChange = useCallback((value: number[]) => {
    setFilters((prev) => ({ ...prev, genres: value }));
  }, []);

  const handleSortChange = useCallback((value: 'asc' | 'desc' | '') => {
    setFilters((prev) => ({ ...prev, sort: value }));
  }, []);

  const handleOrderByChange = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, orderBy: value }));
  }, []);

  const handleRatingChange = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, rating: value }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(initialFilterState);
  }, []);

  return {
    filters,
    handleTypeChange,
    handleStatusChange,
    handleGenresChange,
    handleSortChange,
    handleOrderByChange,
    handleRatingChange,
    handleResetFilters,
  };
};
