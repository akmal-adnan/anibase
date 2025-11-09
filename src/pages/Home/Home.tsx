import AnimeFilters from '@/components/AnimeFilters/AnimeFilters';
import CardList from '@/components/CardList/CardList';
import CardListSkeleton from '@/components/CardListSkeleton/CardListSkeleton';
import SearchBar from '@/components/SearchForm/SearchBar';
import SearchListPagination from '@/components/SearchListPagination/SearchListPagination';
import { useGetAnimeSearch } from '@/hooks/apiQuery/useGetAnimeSearch';
import { useAnimeFilters } from '@/hooks/useAnimeFilters';
import { useDebounce } from '@/hooks/useDebounce';
import styles from '@/pages/Home/styles.module.scss';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const Home = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const {
    filters,
    handleTypeChange,
    handleStatusChange,
    handleGenresChange,
    handleSortChange,
    handleOrderByChange,
    handleRatingChange,
    handleResetFilters,
  } = useAnimeFilters();

  const debouncedSearchQuery = useDebounce<string>(searchInput.trim(), 250);

  // Format genres array as comma-separated string for API
  const genresString =
    filters.genres.length > 0 ? filters.genres.join(',') : undefined;
  const genresKey = filters.genres.join(',');

  const {
    data: fetchedData,
    isLoading,
    isFetching,
  } = useGetAnimeSearch({
    ...(debouncedSearchQuery && { q: debouncedSearchQuery }),
    ...(filters.type && { type: filters.type }),
    ...(filters.status && { status: filters.status }),
    ...(filters.rating && { rating: filters.rating }),
    ...(genresString && { genres: genresString }),
    ...(filters.orderBy && { order_by: filters.orderBy }),
    ...(filters.sort && { sort: filters.sort }),
    limit: 24,
    page,
  });

  useEffect(() => {
    setPage(1);
  }, [
    debouncedSearchQuery,
    filters.type,
    filters.status,
    filters.rating,
    genresKey,
    filters.sort,
    filters.orderBy,
  ]);

  const handleSearch = (query: string) => {
    setSearchInput(query);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.titleGroup}>
          <h6>Search for anime</h6>
          <p>Discover your next favorite anime</p>
        </div>

        <div className={styles.searchSection}>
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search for anime..."
          />
        </div>

        <div className={styles.filtersSection}>
          <AnimeFilters
            type={filters.type}
            status={filters.status}
            genres={filters.genres}
            sort={filters.sort}
            orderBy={filters.orderBy}
            rating={filters.rating}
            onTypeChange={handleTypeChange}
            onStatusChange={handleStatusChange}
            onGenresChange={handleGenresChange}
            onSortChange={handleSortChange}
            onOrderByChange={handleOrderByChange}
            onRatingChange={handleRatingChange}
            onReset={handleResetFilters}
          />
        </div>

        <div className={styles.animeListSection}>
          <h6 className={styles.sectionTitle}>
            {debouncedSearchQuery
              ? `${isFetching ? 'Searching...' : 'Search results for'} "${debouncedSearchQuery}"`
              : 'Anime List'}

            {isFetching && (
              <CircularProgress
                size={25}
                sx={{ color: 'var(--primary-300)' }}
              />
            )}
          </h6>

          {isLoading ? (
            <CardListSkeleton count={24} />
          ) : fetchedData?.data ? (
            <>
              <CardList cardListData={fetchedData.data} />

              {fetchedData.pagination && (
                <SearchListPagination
                  pagination={fetchedData.pagination}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className={styles.loading}>No anime found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
