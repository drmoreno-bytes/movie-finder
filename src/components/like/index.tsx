import { Button } from 'primereact/button';
import { useLike } from './hooks/useLike';
import { FavoriteMovie } from '@/store/favoriteMovies/slice';

type Props = {
    movie: FavoriteMovie;
};

export const Like = ({ movie }: Props) => {
    const { isLiked, handleLike } = useLike(movie);
    const likedIcon = `pi ${isLiked ? 'pi-heart-fill' : 'pi-heart'}`;

    return (
        <Button
            icon={likedIcon}
            rounded
            text
            aria-label="Favorite"
            onClick={() => handleLike(movie)}
            className={`text-red-600
            } cursor-pointer pointer-events-auto flex justify-center items-center rounded-lg w-8 h-8 shadow-[0_0_60px_rgba(34,_34,_34,_0.25)] hover:bg-gray-400 bg-white/30 text-black`}
        />
    );
};
