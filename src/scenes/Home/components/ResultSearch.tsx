import { Movie } from '@/logic/movies/schema';
import { Movies } from './ListOfMovies';
import { ResultSkeleton } from './ResultSkeleton';
import { EmptyResult } from './EmptyResult';
import { Pagination } from '@/components/Pagination';

type Status = 'idle' | 'loading' | 'error' | 'success';

type Props = {
    status: Status;
    movies: Movie[];
    keyword: string;
    total: number;
    onPageChange: (page: number) => void;
};

export const ResultSearch = ({
    status,
    movies,
    keyword,
    onPageChange,
    total,
}: Props) => {
    const itemsByPage = 10;

    return (
        <div className="max-w-6xl mx-auto mt-20 px-5">
            <div className="flex flex-col">
                {status === 'loading' && <ResultSkeleton />}
                {status === 'success' && (
                    <Movies movies={movies} keyword={keyword} />
                )}
                {status === 'error' && <EmptyResult />}
            </div>
            {total > itemsByPage && (
                <Pagination total={total} onPageChange={onPageChange} />
            )}
        </div>
    );
};
