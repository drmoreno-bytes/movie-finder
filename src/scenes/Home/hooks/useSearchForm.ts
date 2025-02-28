import { DropdownChangeEvent } from 'primereact/dropdown';
import { useSearch } from './useSearch';
import { useMovies } from '@/logic/movies/hooks/useMovies';
import { useRef } from 'react';
import { deepEqual } from 'fast-equals';

export const useSearchForm = () => {
    const { search, setSearch, error, isSearchValid } = useSearch();
    const { movies, searchMovies, apiStatus } = useMovies();
    const previousSearch = useRef(search);
    const { title, type } = search;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            !isSearchValid(title) ||
            deepEqual(previousSearch.current, search)
        ) {
            return;
        }
        previousSearch.current = search;
        searchMovies(search);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
        }
    };

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch({ ...search, title: event.target.value });
    };

    const handleChangeType = (event: DropdownChangeEvent) => {
        setSearch({ ...search, type: event.target.value });
    };

    return {
        search,
        setSearch,
        error,
        isSearchValid,
        movies,
        searchMovies,
        apiStatus,
        title,
        type,
        handleSubmit,
        handleKeyDown,
        handleChangeTitle,
        handleChangeType,
    };
};
