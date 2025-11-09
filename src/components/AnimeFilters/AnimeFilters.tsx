import ResetIcon from '@/assets/ResetIcon';
import { useGetAnimeGenres } from '@/hooks/apiQuery/useGetAnimeGenres';
import type { SelectChangeEvent } from '@mui/material';
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import styles from './styles.module.scss';

type AnimeFiltersProps = {
  type: string;
  status: string;
  genres: number[];
  sort: 'asc' | 'desc' | '';
  orderBy: string;
  rating: string;
  onTypeChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onGenresChange: (value: number[]) => void;
  onSortChange: (value: 'asc' | 'desc' | '') => void;
  onOrderByChange: (value: string) => void;
  onRatingChange: (value: string) => void;
  onReset: () => void;
};

const AnimeFilters = ({
  type,
  status,
  genres,
  sort,
  orderBy,
  rating,
  onTypeChange,
  onStatusChange,
  onGenresChange,
  onSortChange,
  onOrderByChange,
  onRatingChange,
  onReset,
}: AnimeFiltersProps) => {
  const { data: genresData, isLoading: isLoadingGenres } = useGetAnimeGenres();

  const animeTypes = [
    { value: 'tv', label: 'TV' },
    { value: 'movie', label: 'Movie' },
    { value: 'ova', label: 'OVA' },
    { value: 'special', label: 'Special' },
    { value: 'ona', label: 'ONA' },
    { value: 'music', label: 'Music' },
    { value: 'cm', label: 'CM' },
    { value: 'pv', label: 'PV' },
    { value: 'tv_special', label: 'TV Special' },
  ];

  const animeStatuses = [
    { value: 'airing', label: 'Airing' },
    { value: 'complete', label: 'Complete' },
    { value: 'upcoming', label: 'Upcoming' },
  ];

  const sortOptions = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ];

  const orderByOptions = [
    { value: 'mal_id', label: 'ID' },
    { value: 'title', label: 'Title' },
    { value: 'start_date', label: 'Start Date' },
    { value: 'end_date', label: 'End Date' },
    { value: 'episodes', label: 'Episodes' },
    { value: 'score', label: 'Score' },
    { value: 'scored_by', label: 'Scored By' },
    { value: 'rank', label: 'Rank' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'members', label: 'Members' },
    { value: 'favorites', label: 'Favorites' },
  ];

  const ratingOptions = [
    { value: 'g', label: 'G - All Ages' },
    { value: 'pg', label: 'PG - Children' },
    { value: 'pg13', label: 'PG-13 - Teens 13 or older' },
    { value: 'r17', label: 'R - 17+ (violence & profanity)' },
    { value: 'r', label: 'R+ - Mild Nudity' },
    { value: 'rx', label: 'Rx - Hentai' },
  ];

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    onTypeChange(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    onStatusChange(event.target.value);
  };

  const handleGenresChange = (event: SelectChangeEvent<number[]>) => {
    const value = event.target.value;
    // MUI multi-select always returns an array when multiple is true
    onGenresChange(typeof value === 'string' ? [] : value);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    onSortChange(event.target.value as 'asc' | 'desc' | '');
  };

  const handleOrderByChange = (event: SelectChangeEvent<string>) => {
    onOrderByChange(event.target.value);
  };

  const handleRatingChange = (event: SelectChangeEvent<string>) => {
    onRatingChange(event.target.value);
  };

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filtersContainer}>
        <FormControl size="small">
          <InputLabel id="type-filter-label" className={styles.filterLabel}>
            Type
          </InputLabel>
          <Select
            labelId="type-filter-label"
            id="type-filter"
            value={type}
            label="Type"
            onChange={handleTypeChange}
            className={styles.filterSelect}
          >
            <MenuItem value="">
              <em>All Types</em>
            </MenuItem>
            {animeTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel id="status-filter-label" className={styles.filterLabel}>
            Status
          </InputLabel>
          <Select
            labelId="status-filter-label"
            id="status-filter"
            value={status}
            label="Status"
            onChange={handleStatusChange}
            className={styles.filterSelect}
          >
            <MenuItem value="">
              <em>All Status</em>
            </MenuItem>
            {animeStatuses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel id="rating-filter-label" className={styles.filterLabel}>
            Rating
          </InputLabel>
          <Select
            labelId="rating-filter-label"
            id="rating-filter"
            value={rating}
            label="Rating"
            onChange={handleRatingChange}
            className={styles.filterSelect}
          >
            <MenuItem value="">
              <em>All Ratings</em>
            </MenuItem>
            {ratingOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel id="genres-filter-label" className={styles.filterLabel}>
            Genres
          </InputLabel>
          <Select
            labelId="genres-filter-label"
            id="genres-filter"
            multiple
            value={genres}
            label="Genres"
            onChange={handleGenresChange}
            disabled={isLoadingGenres}
            className={styles.filterSelect}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>All Genres</em>;
              }
              if (selected.length === 1) {
                const genre = genresData?.data.find(
                  (g) => g.mal_id === selected[0]
                );
                return genre?.name || '';
              }
              return `${selected.length} selected`;
            }}
          >
            {isLoadingGenres ? (
              <MenuItem disabled>
                <CircularProgress size={20} />
                <span style={{ marginLeft: '0.5rem' }}>Loading genres...</span>
              </MenuItem>
            ) : (
              genresData?.data.map((genre) => (
                <MenuItem key={genre.mal_id} value={genre.mal_id}>
                  {genre.name}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel id="order-by-filter-label" className={styles.filterLabel}>
            Order By
          </InputLabel>
          <Select
            labelId="order-by-filter-label"
            id="order-by-filter"
            value={orderBy}
            label="Order By"
            onChange={handleOrderByChange}
            className={styles.filterSelect}
          >
            <MenuItem value="">
              <em>Default</em>
            </MenuItem>
            {orderByOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel id="sort-filter-label" className={styles.filterLabel}>
            Sort
          </InputLabel>
          <Select
            labelId="sort-filter-label"
            id="sort-filter"
            value={sort}
            label="Sort"
            onChange={handleSortChange}
            className={styles.filterSelect}
          >
            <MenuItem value="">
              <em>Default</em>
            </MenuItem>
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Button
        className={styles.resetButton}
        onClick={onReset}
        variant="outlined"
        size="small"
        startIcon={<ResetIcon />}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default AnimeFilters;
