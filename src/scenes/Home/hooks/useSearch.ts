import { useState, useRef } from 'react';

export const useSearch = () => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState<string | null>(null);
    const isFirstInput = useRef(true);

    const isSearchValid = (search: string) => {
        if (isFirstInput.current) {
            isFirstInput.current = search === '';
            return false;
        }
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
