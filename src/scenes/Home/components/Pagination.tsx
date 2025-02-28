import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useState } from 'react';

type Props = {
    total: number;
    onPageChange: (page: number) => void;
};

export const Pagination = ({ total, onPageChange }: Props) => {
    const [first, setFirst] = useState<number>(0);

    const handlePageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        onPageChange(event.page + 1);
    };

    return (
        <div className="card">
            <Paginator
                first={first}
                rows={10}
                totalRecords={total}
                onPageChange={handlePageChange}
                template={{
                    layout: 'PrevPageLink CurrentPageReport NextPageLink',
                }}
            />
        </div>
    );
};
