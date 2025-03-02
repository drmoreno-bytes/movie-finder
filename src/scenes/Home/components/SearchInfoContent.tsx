export const SearchInfoContent = ({
    keyword,
    total,
}: {
    keyword: string;
    total: number;
}) => (
    <div className="relative block">
        <p className="text-2xl py-5">
            Search results of <span className="text-[#d80286]">{keyword}</span>
        </p>
        <p className=" mb-4">Movies: {total}</p>
    </div>
);
