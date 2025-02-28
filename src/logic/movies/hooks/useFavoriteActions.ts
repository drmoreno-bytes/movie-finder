import {
    addMovies,
    deleteMoviesById,
    FavoriteMovie,
} from '@/store/favoriteMovies/slice';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';

export const useFavoriteActions = () => {
    const dispatchEvent = useAppDispatch();
    const addFavorite = (movie: FavoriteMovie) => {
        dispatchEvent(addMovies(movie));
    };
    const removeFavorite = (id: string) => {
        dispatchEvent(deleteMoviesById(id));
    };
    return { addFavorite, removeFavorite };
};
