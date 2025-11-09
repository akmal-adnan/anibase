import { InputAdornment, TextField } from '@mui/material';
import { SearchNormal1 } from 'iconsax-reactjs';
import { useState } from 'react';
import styles from './styles.module.scss';

type SearchBarProps = {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
};

const SearchBar = ({
  onSearch,
  placeholder = 'Search for anime...',
  className,
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <TextField
        fullWidth
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        className={styles.searchInput}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'var(--bg-white)',
            borderRadius: '0.7rem',
            fontSize: 'var(--p3-size)',
            fontFamily: 'var(--body-font)',
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: 'var(--stroke-sheen)',
              borderWidth: '1.5px',
            },
            '&:hover fieldset': {
              borderColor: 'var(--stroke-primary-pale)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--text-primary-normal)',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            padding: '0.8rem',
            color: 'var(--text-bold)',
            '&::placeholder': {
              color: 'var(--text-placeholder)',
              opacity: 1,
            },
          },
          '& .MuiInputAdornment-root': {
            marginLeft: '0rem',
          },
          '& .MuiInputAdornment-positionStart': {
            marginRight: '0rem',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchNormal1 size="22" color="var(--icon-primary-normal)" />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
