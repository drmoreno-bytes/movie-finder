import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type MovieId = string;
export type FavoriteMovie = {
    id: MovieId;
    type: string;
    title: string;
    year: string;
    poster: string;
};

const initialState: FavoriteMovie[] = (() => {
    try {
        const data = localStorage.getItem('__redux_favoriteMovies');
        if (data) {
            return JSON.parse(data);
        }
        return [];
    } catch {
        return [];
    }
})();

export const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState,
    reducers: {
        addMovies: (state, action: PayloadAction<FavoriteMovie>) => {
            return [...state, action.payload];
        },
        deleteMoviesById: (state, action: PayloadAction<MovieId>) => {
            const id = action.payload;
            return state.filter((movie) => movie.id !== id);
        },
    },
});

export const { addMovies, deleteMoviesById } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
