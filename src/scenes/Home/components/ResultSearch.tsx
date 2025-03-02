import { Movie } from '@/logic/movies/schema';
import { Movies } from './ListOfMovies';
import { ResultSkeleton } from './ResultSkeleton';
import { Pagination } from './Pagination';
import { EmptyResult } from './EmptyResult';

type Status = 'idle' | 'loading' | 'error' | 'success';

type Props = {
    status: Status;
    movies: Movie[];
    keyword: string;
    total: number;
    onPageChange: (page: number) => void;
};

const SearchInfoContent = ({
    keyword,
    total,
}: {
    keyword: string;
    total: number;
}) => (
    <>
        <p className="text-2xl py-5">
            Search results of <span className="text-[#d80286]">{keyword}</span>
        </p>
        <p>Movies: {total}</p>
    </>
);

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
                <SearchInfoContent keyword={keyword} total={total} />
                {status === 'loading' && <ResultSkeleton />}
                {status === 'success' && <Movies movies={movies} />}
                {status === 'error' && <EmptyResult />}
            </div>
            {total > itemsByPage && (
                <Pagination total={total} onPageChange={onPageChange} />
            )}
        </div>
    );
};
