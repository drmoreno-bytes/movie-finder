import {
    addMovies,
    deleteMoviesById,
    FavoriteMovie,
} from '@/store/favoriteMovies/slice';
import { useAppDispatch } from '@/store/hooks/useAppDisparch';

export const useFavoriteActions = () => {
    const dispatchEvent = useAppDispatch();
    const addFavourite = (movie: FavoriteMovie) => {
        dispatchEvent(addMovies(movie));
    };
    const removeFavorite = (id: string) => {
        dispatchEvent(deleteMoviesById(id));
    };
    return { addFavourite, removeFavorite };
};
