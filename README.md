# Anime Search 🔍

A modern, responsive web application for searching and discovering anime. Built with React, TypeScript, and powered by the Jikan API, this application provides a seamless experience for anime enthusiasts to explore their favorite shows and discover new ones.

## 🌟 Features

### Search & Discovery

- **Real-time Search**: Debounced search functionality for instant anime discovery
- **Advanced Filters**: Filter anime by type, status, genres, rating, and more
- **Pagination**: Navigate through search results with ease
- **Top Anime**: Browse popular and trending anime

### Anime Details

- **Comprehensive Information**: View detailed information about each anime including:
  - Synopsis and description
  - Ratings and scores
  - Genres and themes
  - Studios and producers
  - Episode count, duration, and airing status
  - Trailer embedding
- **Beautiful UI**: Hero section with background images and organized information layout

### User Experience

- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Skeleton loaders for better user feedback
- **Error Handling**: Graceful error handling with user-friendly messages
- **Snackbar Notifications**: Toast notifications for user actions
- **Scroll to Top**: Quick navigation button to scroll back to top

### Technical Features

- **Type Safety**: Full TypeScript implementation
- **State Management**: Redux Toolkit with RTK Query for efficient data fetching
- **Routing**: React Router for seamless navigation
- **Testing**: Comprehensive test suite with Vitest and React Testing Library
- **Code Quality**: ESLint and Prettier for code formatting and linting
- **SCSS Modules**: Scoped styling with typed SCSS modules

## 🛠️ Tech Stack

### Core Technologies

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### State Management & Data Fetching

- **Redux Toolkit** - Predictable state container
- **RTK Query** - Powerful data fetching and caching

### UI & Styling

- **Material-UI (MUI)** - React component library
- **SCSS Modules** - Scoped CSS with type safety
- **Iconsax React** - Beautiful icon library
- **Emotion** - CSS-in-JS styling (used by MUI)

### Testing

- **Vitest** - Fast unit test framework
- **React Testing Library** - Component testing utilities
- **jsdom** - DOM implementation for testing

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **typed-scss-modules** - Type generation for SCSS modules

## 🎁 Bonus Implementation

- [x] Creative UI with unique "wow" factor
- [x] Skeleton loaders or meaningful loading states
- [x] Empty state and no results handling with helpful messaging
- [x] Mobile responsiveness
- [x] Additional features that enhance the project
- [x] Proper error handling (network failures, rate limiting, invalid API responses)
- [x] Race condition handling
- [x] Unit or integration tests

## 📁 Project Structure

```
anime-search/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and SVG components
│   ├── components/        # Reusable React components
│   │   ├── AnimeFilters/  # Filter component for anime search
│   │   ├── CardList/      # Anime card list display
│   │   ├── Header/        # Application header
│   │   ├── Footer/        # Application footer
│   │   ├── SearchForm/    # Search bar component
│   │   ├── ScrollToTop/   # Scroll to top button
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   ├── apiQuery/      # RTK Query hooks
│   │   ├── useAnimeFilters.ts
│   │   ├── useDebounce.ts
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home/          # Home/search page
│   │   ├── Details/       # Anime details page
│   │   └── NotFound/      # 404 page
│   ├── store/             # Redux store configuration
│   │   ├── api/           # RTK Query API setup
│   │   └── slices/        # Redux slices
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── styles/            # Global styles and variables
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd anime-search
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

- `npm run dev` - Start development server with HMR and SCSS watch
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues
- `npm run format` - Format code using Prettier
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run watch-scss` - Watch and generate TypeScript types for SCSS modules

## 🧪 Testing

The project uses Vitest and React Testing Library for testing. Tests are located alongside the components they test or in dedicated test files.

Run tests:

```bash
npm test          # Watch mode
npm run test:run  # Run once
```

## 🌐 API

This application uses the [Jikan API](https://jikan.moe/) (v4) to fetch anime data. Jikan is an unofficial MyAnimeList API that provides:

- Anime search and filtering
- Anime details and information
- Top anime listings
- Genre information

### API Endpoints Used

- `GET /anime` - Search anime with filters
- `GET /anime/{id}` - Get anime by ID
- `GET /top/anime` - Get top anime
- `GET /genres/anime` - Get anime genres

## 🎨 Styling

The project uses SCSS Modules for component-scoped styling with TypeScript type generation. Global styles and variables are defined in `src/styles/_variables.scss`.

### SCSS Variables

Global SCSS variables are automatically imported into all component stylesheets via Vite configuration.

## 🔧 Configuration

### Path Aliases

The project uses path aliases for cleaner imports:

- `@/` - `src/`
- `@components/` - `src/components/`
- `@pages/` - `src/pages/`
- `@hooks/` - `src/hooks/`
- `@styles/` - `src/styles/`
- `@assets/` - `src/assets/`

### TypeScript

TypeScript configuration is split into:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node.js-specific configuration

## 📱 Features in Detail

### Search Functionality

- Debounced search input (250ms delay) to reduce API calls
- Real-time search results as you type
- Search by anime title

### Filtering System

- **Type**: TV, Movie, OVA, ONA, Special, Music
- **Status**: Airing, Complete, Upcoming
- **Genres**: Multiple genre selection
- **Rating**: Various content ratings (G, PG, PG-13, R, R+, Rx)
- **Sort**: Sort by score, popularity, etc.
- **Order**: Ascending or descending order

### Anime Details Page

- Hero section with anime cover image
- Comprehensive statistics (score, episodes, duration, etc.)
- Synopsis and description
- Embedded trailer (if available)
- Genre and theme tags
- Studio and producer information
- Breadcrumb navigation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Jikan API](https://jikan.moe/) for providing the anime data
- [MyAnimeList](https://myanimelist.net/) for the comprehensive anime database
- All the amazing open-source libraries that made this project possible

---

Made with ❤️ for anime fans
