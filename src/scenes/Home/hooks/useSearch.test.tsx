import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useSearch } from './useSearch';

describe('useSearch hook', () => {
    it('should have initial state values', () => {
        const { result } = renderHook(() => useSearch());

        expect(result.current.search).toEqual({ title: '', type: '', page: 1 });
        expect(result.current.error).toBeNull();
    });

    it('should return an error when search is empty', () => {
        const { result } = renderHook(() => useSearch());

        act(() => {
            result.current.isSearchValid('');
        });

        expect(result.current.error).toBe('Cannot search for an empty movie');
    });

    it('should return an error when search contains only numbers', () => {
        const { result } = renderHook(() => useSearch());

        act(() => {
            result.current.isSearchValid('123');
        });

        expect(result.current.error).toBe(
            'Cannot search for a movie using a number'
        );
    });

    it('should return an error when search length is less than 3 characters', () => {
        const { result } = renderHook(() => useSearch());

        act(() => {
            result.current.isSearchValid('In');
        });

        expect(result.current.error).toBe(
            'The search must have at least 3 characters'
        );
    });

    it('should not return an error for a valid search', () => {
        const { result } = renderHook(() => useSearch());

        act(() => {
            result.current.isSearchValid('Inception');
        });

        expect(result.current.error).toBeNull();
    });

    it('should update search state when setSearch is called', () => {
        const { result } = renderHook(() => useSearch());

        act(() => {
            result.current.setSearch({
                title: 'Inception',
                type: 'movie',
                page: 1,
            });
        });

        expect(result.current.search).toEqual({
            title: 'Inception',
            type: 'movie',
            page: 1,
        });
    });
});
