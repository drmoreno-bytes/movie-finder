import { Thumbnails } from '@/components/Thumbnails';
import { Movie } from '@/logic/movies/schema';

type Props = {
    movies: Movie[];
};

const ListOfMovies = ({ movies }: Props) => {
    return (
        <ul className="movies">
            {movies.map((movie: Movie) => (
                <Thumbnails
                    key={movie.id}
                    {...movie}
                    width={400}
                    height={400}
                />
            ))}
        </ul>
    );
};

const NoMoviesResults = () => <p>No movies were found for this search</p>;

export const Movies = ({ movies }: Props) => {
    const hasMovies = movies?.length > 0;
    return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
