import { Skeleton } from 'primereact/skeleton';

export const ResultSkeleton = () => {
    const skeletons = Array.from({ length: 9 }, (_, index) => (
        <Skeleton key={index} size="16rem" className="mr-2" />
    ));

    return (
        <div className="grid list-none m-0 p-0 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full gap-20">
            {skeletons}
        </div>
    );
};
