import { Skeleton } from 'primereact/skeleton';

export const ResultSkeleton = () => {
    const skeletons = Array.from({ length: 12 }, (_, index) => (
        <li key={index} className="mb-4">
            <Skeleton size="16rem" />
        </li>
    ));

    return (
        <div className="flex flex-col">
            <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                {skeletons}
            </ul>
        </div>
    );
};
