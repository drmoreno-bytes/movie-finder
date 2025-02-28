import { Thumbnails } from '@/components/Thumbnails';
import { Movie } from '@/logic/movies/schema';
import { useFavoriteActions } from '@/logic/movies/hooks/useFavoriteActions';

type Props = {
    movies: Movie[];
};

const ListOfMovies = ({ movies }: Props) => {
    const { removeFavorite } = useFavoriteActions();

    const handleFavorite = (id: string) => {
        removeFavorite(id);
    };

    return (
        <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
            {movies.map((movie: Movie) => (
                <li key={movie.id} className="mb-4">
                    <Thumbnails
                        url={`/detail/${movie.id}`}
                        {...movie}
                        width={216}
                        height={324}
                        onFavoriteClick={handleFavorite}
                    />
                </li>
            ))}
        </ul>
    );
};

const NoMoviesResults = () => (
    <p className="text-[#da2f68] text-xl text-center mt-10 w-full">
        No Results found for keyword. Try another One
    </p>
);

export const Movies = ({ movies }: Props) => {
    const hasMovies = movies?.length > 0;
    return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
