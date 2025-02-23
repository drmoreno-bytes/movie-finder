import { Movie } from '@/logic/movies/schema';
import { Movies } from './ListOfMovies';

type Status = 'idle' | 'loading' | 'error' | 'success';

type Props = {
    status: Status;
    movies: Movie[];
};

export const ResultSearch = ({ status, movies }: Props) => {
    return (
        <div>
            {status === 'loading' && <p className="label">loading...</p>}
            {status === 'success' && (
                <div className="results">
                    <Movies movies={movies} />
                </div>
            )}
        </div>
    );
};
