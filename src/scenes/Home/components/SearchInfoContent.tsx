export const SearchInfoContent = ({ total }: { total: number }) => (
    <div className="relative block">
        <p className="text-2xl py-5">
            Total: <span className="text-[#d80286]">{total}</span>
        </p>
    </div>
);
