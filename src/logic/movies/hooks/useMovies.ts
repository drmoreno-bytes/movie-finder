import { useRef, useState, useCallback } from 'react';
import { Movie } from '../schema';
import { getMoviesClient } from '../client/getMoviesClient';
import debounce from 'just-debounce-it';

type Props = {
    search: string;
};

type ApiStatus = 'idle' | 'loading' | 'error' | 'success';

export const useMovies = ({ search }: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [apiStatus, setApiStatus] = useState<ApiStatus>('idle');
    const previousSearch = useRef(search);

    const searchMovies = useCallback(async ({ search }: { search: string }) => {
        if (search === previousSearch.current) return;

        try {
            setApiStatus('loading');
            previousSearch.current = search;
            const newMovies = await getMoviesClient({ query: search });
            if (newMovies.success) {
                setMovies(newMovies.data.search);
                return;
            }

            setMovies([]);
        } catch {
            setApiStatus('error');
        } finally {
            setApiStatus('success');
        }
    }, []);

    const debouncedGetMovies = useCallback(
        debounce((search: string) => {
            searchMovies({ search });
        }, 300),
        [searchMovies]
    );

    return { movies, searchMovies, apiStatus, debouncedGetMovies };
};
