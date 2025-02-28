import { useState } from 'react';

type SearchProps = {
    title: string;
    type: string;
    page: number;
};

export const useSearch = () => {
    const [search, setSearch] = useState<SearchProps>({
        title: '',
        type: '',
        page: 1,
    });
    const [error, setError] = useState<string | null>(null);

    const isSearchValid = (search: string) => {
        if (search === '') {
            setError('Cannot search for an empty movie');
            return false;
        }

        if (search.match(/^\d+$/)) {
            setError('Cannot search for a movie using a number');
            return false;
        }

        if (search.length < 3) {
            setError('The search must have at least 3 characters');
            return false;
        }
        setError(null);
        return true;
    };

    return { search, isSearchValid, setSearch, error };
};
