import { act, renderHook, waitFor } from '@testing-library/react';
import { getMoviesClient } from '../client/getMoviesClient';
import { useMovies } from './useMovies';

jest.mock('../client/getMoviesClient');

describe('useMovies hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should have initial state values', () => {
        const { result } = renderHook(() => useMovies());

        expect(result.current.apiStatus).toBe('idle');
        expect(result.current.movies).toEqual([]);
        expect(result.current.pagination.page).toBe(1);
        expect(result.current.pagination.total).toBe(0);
    });

    it('should set apiStatus to "loading" when searchMovies is called', async () => {
        const { result } = renderHook(() => useMovies());
        const mockMovies = {
            success: true,
            data: { search: [], totalResults: '0' },
        };
        (getMoviesClient as jest.Mock).mockResolvedValue(mockMovies);

        act(() => {
            result.current.searchMovies({
                title: 'Inception',
                type: 'movie',
                page: 1,
            });
        });

        expect(result.current.apiStatus).toBe('loading');
    });

    it('should set movies and pagination after a successful API call', async () => {
        const { result } = renderHook(() => useMovies());
        const mockMovies = {
            success: true,
            data: { search: [{ title: 'Inception' }], totalResults: '1' },
        };

        (getMoviesClient as jest.Mock).mockResolvedValue(mockMovies);

        act(() => {
            result.current.searchMovies({
                title: 'Inception',
                type: 'movie',
                page: 1,
            });
        });

        await waitFor(() => expect(result.current.apiStatus).toBe('success'));

        expect(result.current.apiStatus).toBe('success');
        expect(result.current.movies).toEqual([{ title: 'Inception' }]);
        expect(result.current.pagination.total).toBe(1);
    });
});
