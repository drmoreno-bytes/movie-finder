import { useState, useCallback } from 'react';
import { Movie } from '../schema';
import { getMoviesClient } from '../client/getMoviesClient';

type Props = {
    title: string;
    type: string;
    page: number;
};

type ApiStatus = 'idle' | 'loading' | 'error' | 'success';

export const useMovies = () => {
    const [pagination, setPagination] = useState({
        page: 1,
        total: 0,
    });
    const [movies, setMovies] = useState<Movie[]>([]);
    const [apiStatus, setApiStatus] = useState<ApiStatus>('idle');

    const searchMovies = useCallback(async ({ title, type, page }: Props) => {
        try {
            setApiStatus('loading');
            const newMovies = await getMoviesClient({
                title,
                type,
                page,
            });
            if (newMovies.success) {
                setMovies(newMovies.data.search);
                setPagination({ page: 1, total: +newMovies.data.totalResults });
                return;
            }
            setPagination({ page: 1, total: 0 });
            setMovies([]);
        } catch {
            setApiStatus('error');
        } finally {
            setApiStatus('success');
        }
    }, []);

    return { movies, searchMovies, apiStatus, pagination };
};
