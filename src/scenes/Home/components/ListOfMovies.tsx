import { Thumbnails } from '@/components/Thumbnails';
import { Movie } from '@/logic/movies/schema';
import { Like } from '@/components/like';
import { EmptyResult } from './EmptyResult';

type Props = {
    movies: Movie[];
};

const ListOfMovies = ({ movies }: Props) => {
    return (
        <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
            {movies.map((movie: Movie) => (
                <li key={movie.id} className="mb-4">
                    <Thumbnails
                        url={`/detail/${movie.id}`}
                        {...movie}
                        width={216}
                        height={324}
                        actions={<Like movie={movie} />}
                    />
                </li>
            ))}
        </ul>
    );
};

export const Movies = ({ movies }: Props) => {
    const hasMovies = movies?.length > 0;
    return hasMovies ? <ListOfMovies movies={movies} /> : <EmptyResult />;
};
