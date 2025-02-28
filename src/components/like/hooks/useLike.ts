import { FavoriteMovie } from '@/store/favoriteMovies/slice';
import { useAppSelector } from '@/store/hooks/useAppSelector';

import { useState, useEffect } from 'react';
import { useFavoriteActions } from '@/logic/movies/hooks/useFavoriteActions';

export const useLike = (movie: FavoriteMovie) => {
    const likesMovies = useAppSelector((state) => state.favoriteMovies);
    const { addFavorite, removeFavorite } = useFavoriteActions();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setIsLiked(likesMovies.some((fav) => fav.id === movie.id));
    }, [likesMovies, movie.id]);

    const handleLike = (movie: FavoriteMovie) => {
        if (isLiked) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };

    return { isLiked, handleLike };
};
