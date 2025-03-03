import { Movie } from '@/logic/movies/schema';
import { ResultSkeleton } from './ResultSkeleton';
import { EmptyResult } from './EmptyResult';
import { Pagination } from '@/components/Pagination';
import { Movies } from './Movies';

type Status = 'idle' | 'loading' | 'error' | 'success';

type Props = {
    status: Status;
    movies: Movie[];
    total: number;
    onPageChange: (page: number) => void;
};

export const ResultSearch = ({
    status,
    movies,
    onPageChange,
    total,
}: Props) => {
    const itemsByPage = 10;

    return (
        <div className="max-w-6xl mx-auto my-5 px-5">
            <div className="flex flex-col">
                {status === 'loading' && <ResultSkeleton />}
                {status === 'success' && (
                    <Movies movies={movies} total={total} />
                )}
                {status === 'error' && <EmptyResult />}
            </div>
            {total > itemsByPage && (
                <Pagination total={total} onPageChange={onPageChange} />
            )}
        </div>
    );
};
