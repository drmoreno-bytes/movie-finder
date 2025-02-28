import { Button } from 'primereact/button';
import { useLike } from './hooks/useLike';
import { FavoriteMovie } from '@/store/favoriteMovies/slice';

type Props = {
    movie: FavoriteMovie;
};

export const Like = ({ movie }: Props) => {
    const { isLiked, handleLike } = useLike(movie);

    return (
        <Button
            icon="pi pi-heart"
            rounded
            text
            aria-label="Favorite"
            onClick={() => handleLike(movie)}
            className={`${
                isLiked ? 'text-red-600' : 'bg-white'
            } cursor-pointer pointer-events-auto flex justify-center items-center rounded-lg w-35 h-35 shadow-[0_0_60px_rgba(34,_34,_34,_0.25)] hover:bg-gray-400 text-black`}
        />
    );
};
