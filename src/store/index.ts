import { configureStore, Middleware } from '@reduxjs/toolkit';
import favoriteMoviesReducer from './favoriteMovies/slice';

const persistanceLocalStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);
        localStorage.setItem(
            '__redux_favoriteMovies',
            JSON.stringify(store.getState().favoriteMovies)
        );
        return result;
    };

export const store = configureStore({
    reducer: {
        favoriteMovies: favoriteMoviesReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware);
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
