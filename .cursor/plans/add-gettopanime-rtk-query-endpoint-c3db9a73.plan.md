<!-- c3db9a73-095e-4c28-a280-bc06dd86cbd2 dcf71833-28f1-4c5b-b85f-6844f71ce8d7 -->
# Add Filter System for Anime Search

## Overview

Implement a filter system on the Home page with Type, Status, Genres, and Sort filters using MUI Select components. Add API endpoint for fetching genres list and integrate filters with the existing anime search.

## Implementation Steps

### 1. Add Genres API Endpoint

- **File**: `src/store/api/jikanApi.ts`
- Add `getAnimeGenres` endpoint that fetches from `/genres/anime`
- Create response type for genres list in `src/types/api/AnimeSearch.ts`
- Export `useGetAnimeGenresQuery` hook

### 2. Create Genres Type

- **File**: `src/types/api/AnimeSearch.ts`
- Add `GenresResponse` type with array of Genre objects
- Genre type already exists, reuse it

### 3. Create Filter Component

- **File**: `src/components/AnimeFilters/AnimeFilters.tsx`
- Create component with 4 MUI Select dropdowns:
- Type: Select with options (tv, movie, ova, special, ona, music, cm, pv, tv_special)
- Status: Select with options (airing, complete, upcoming)
- Genres: Select with multiple selection enabled, populated from API
- Sort: Select with options (asc, desc)
- Use MUI Select, FormControl, InputLabel, MenuItem components
- Style with sx prop matching existing design system
- Accept filter values and onChange handlers as props

### 4. Create Filter Styles

- **File**: `src/components/AnimeFilters/styles.module.scss`
- Style the filter container and individual selects
- Make it responsive (stack on mobile, row on desktop)
- Match existing design system variables

### 5. Create Custom Hook for Genres

- **File**: `src/hooks/apiQuery/useGetAnimeGenres.ts`
- Wrap `useGetAnimeGenresQuery` with error handling
- Use existing `useApiErrorHandler` pattern

### 6. Update Home Page

- **File**: `src/pages/Home/Home.tsx`
- Add state for filter values: type, status, genres (array), sort
- Add state management for filter changes
- Import and render AnimeFilters component above anime list
- Pass filter values to `useGetAnimeSearch` hook
- Reset page to 1 when filters change
- Format genres array as comma-separated string for API (genres param expects string)

### 7. Update Home Page Styles

- **File**: `src/pages/Home/styles.module.scss`
- Add styles for filters section
- Ensure proper spacing between search bar and filters
- Ensure proper spacing between filters and anime list

### 8. Update AnimeSearchParams Type (if needed)

- **File**: `src/types/api/AnimeSearch.ts`
- Verify all filter parameters are properly typed
- Type, status, genres, and sort are already defined

## Technical Details

### Filter State Management

- Use React useState for filter values in Home component
- Type filter: string | undefined
- Status filter: string | undefined  
- Genres filter: number[] (array of genre IDs)
- Sort filter: 'asc' | 'desc' | undefined

### API Integration

- Genres API: GET `/genres/anime` returns list of genres
- Convert genres array to comma-separated string for API: `genres.join(',')`
- All filters are optional and only included in API call if they have values

### Filter Reset Behavior

- Reset page to 1 when any filter changes
- Filters persist independently of search query
- User can combine search query with filters

### UI/UX Considerations

- Filters displayed in a responsive row (horizontal on desktop, vertical on mobile)
- Clear visual separation between search bar and filters
- Loading state for genres dropdown while fetching
- Empty state handling if genres fail to load

## Files to Create

1. `src/components/AnimeFilters/AnimeFilters.tsx`
2. `src/components/AnimeFilters/styles.module.scss`
3. `src/hooks/apiQuery/useGetAnimeGenres.ts`

## Files to Modify

1. `src/store/api/jikanApi.ts` - Add genres endpoint
2. `src/types/api/AnimeSearch.ts` - Add genres response type
3. `src/pages/Home/Home.tsx` - Add filter state and integration
4. `src/pages/Home/styles.module.scss` - Add filter styles

### To-dos

- [ ] Add getTopAnime endpoint to jikanApi.ts with query parameter handling
- [ ] Export useGetTopAnimeQuery hook from jikanApi.ts
- [ ] Create useGetTopAnime custom hook wrapper with error handling