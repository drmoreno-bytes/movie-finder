import { SearchInfoContent } from '@/components/ListOfMovies/SearchInfoContent';
import { Skeleton } from 'primereact/skeleton';

export const ResultSkeleton = () => {
    const skeletons = Array.from({ length: 12 }, (_, index) => (
        <li key={index} className="mb-4">
            <Skeleton width="100%" height="324px" />
        </li>
    ));

    return (
        <div className="flex flex-col">
            <SearchInfoContent total={0} />
            <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                {skeletons}
            </ul>
        </div>
    );
};
