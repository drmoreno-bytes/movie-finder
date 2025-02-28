import { Movie } from '@/logic/movies/schema';
import { Movies } from './ListOfMovies';
import { ResultSkeleton } from './ResultSkeleton';

type Status = 'idle' | 'loading' | 'error' | 'success';

type Props = {
    status: Status;
    movies: Movie[];
    keyword: string;
};

export const ResultSearch = ({ status, movies, keyword }: Props) => {
    return (
        <div className="max-w-6xl mx-auto mt-20 px-5">
            <div className="flex flex-col">
                <p className="text-2xl py-5">
                    Search results of{' '}
                    <span className="text-[#d80286]">{keyword}</span>
                </p>
                <p>Count:</p>
                {status === 'loading' && <ResultSkeleton />}
                {status === 'success' && <Movies movies={movies} />}
            </div>
        </div>
    );
};
