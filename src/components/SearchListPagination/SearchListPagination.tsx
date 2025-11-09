import type { Pagination as PaginationType } from '@/types/api/AnimeSearch';
import { Pagination } from '@mui/material';
import styles from './styles.module.scss';

type SearchListPaginationProps = {
  pagination: PaginationType;
  onPageChange: (page: number) => void;
};

const SearchListPagination = ({
  pagination,
  onPageChange,
}: SearchListPaginationProps) => {
  if (pagination.last_visible_page <= 1) {
    return null;
  }

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onPageChange(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.paginationContainer}>
      <Pagination
        count={pagination.last_visible_page}
        page={pagination.current_page}
        onChange={handlePageChange}
        size="large"
        showFirstButton
        showLastButton
        shape="rounded"
        className={styles.pagination}
      />
    </div>
  );
};

export default SearchListPagination;
