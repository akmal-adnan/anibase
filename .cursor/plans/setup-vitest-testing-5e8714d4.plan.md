<!-- 5e8714d4-c2e2-412b-aa30-ab1b94c53e4e 8ad89f58-7194-45a7-83af-0519db711c9e -->
# Setup Vitest and React Testing Library for Anime Search App

## Overview

Set up Vitest and React Testing Library infrastructure and create one example component test (SearchBar) demonstrating basic rendering and user interactions. This is a minimal setup to get testing started.

## Implementation Steps

### 1. Install Testing Dependencies

Install required packages:

- `vitest` - Testing framework
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom matchers for DOM assertions
- `@testing-library/user-event` - User interaction simulation
- `jsdom` - DOM environment for tests

### 2. Configure Vitest

Update `vite.config.ts` to include Vitest configuration:

- Import `defineConfig` from `vitest/config` instead of `vite`
- Add `test` configuration block
- Configure environment (jsdom)
- Set up path aliases to match existing Vite config
- Configure setupFiles to point to test setup file
- Enable globals for cleaner test syntax

### 3. Create Test Setup File

Create `src/test/setup.ts`:

- Import `@testing-library/jest-dom` to extend expect matchers
- Basic global test configuration

### 4. Add Test Scripts to package.json

Add test commands:

- `test` - Run tests in watch mode
- `test:run` - Run tests once

### 5. Write Example Test for SearchBar Component

Create `src/components/SearchForm/SearchBar.test.tsx`:

- Test component rendering with default props
- Test user input handling (typing in the search field)
- Test form submission
- Test placeholder text display
- Test onSearch callback invocation
- Keep it simple - no complex mocking needed since SearchBar is relatively isolated

### 6. Update .gitignore

Ensure test coverage directories are ignored:

- `coverage/`

## Files to Modify

- `package.json` - Add dependencies and test scripts
- `vite.config.ts` - Add Vitest configuration
- `.gitignore` - Add coverage directory (if not already present)

## Files to Create

- `src/test/setup.ts` - Test setup configuration
- `src/components/SearchForm/SearchBar.test.tsx` - Example component test

## Key Considerations

- SearchBar component uses Material-UI, which should work with React Testing Library
- SearchBar has minimal dependencies (just props and local state), making it a good test candidate
- Focus on basic rendering and user interactions (typing, submitting)
- No need for complex Redux/Router mocking for this initial test
- SCSS modules should work automatically with Vite's test configuration

### To-dos

- [ ] Install Vitest, React Testing Library, jsdom, and related testing packages
- [ ] Update vite.config.ts with Vitest configuration including jsdom environment and path aliases
- [ ] Create src/test/setup.ts file with jest-dom matchers and global test configuration
- [ ] Create src/test/utils.tsx with renderWithProviders, renderWithRouter, and mock store helpers
- [ ] Update TypeScript configuration to support test files and path aliases
- [ ] Add test scripts to package.json (test, test:run, test:ui, test:coverage)
- [ ] Write example tests for SearchBar component and animeDetails.utils functions
- [ ] Ensure coverage and .vitest directories are in .gitignore