import { jikanApi } from '@/store/api/jikanApi';
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slices/darkModeSlice';
import headerReducer from './slices/headerSlice';
import snackbarReducer from './slices/snackbarSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    snackbar: snackbarReducer,
    darkMode: darkModeReducer,
    [jikanApi.reducerPath]: jikanApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jikanApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
