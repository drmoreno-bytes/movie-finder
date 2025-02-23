import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useMovies } from '@/logic/movies/hooks/useMovies';
import { ResultSearch } from './components/ResultSearch';
import { useSearch } from './hooks/useSearch';

export default function Home() {
    const { search, setSearch, error, isSearchValid } = useSearch();
    const { movies, searchMovies, apiStatus, debouncedGetMovies } = useMovies({
        search,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isSearchValid(search)) {
            return;
        }
        searchMovies({ search });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        if (!isSearchValid(newSearch)) {
            return;
        }
        debouncedGetMovies(newSearch);
    };

    return (
        <div className="flex">
            <header>
                <span>Welcome To</span>
                <h1 className="">Movies Planet</h1>
                <p>
                    Millions of movies, TV shows and people to Discover. Explore
                    now.
                </p>
                <form className="" onSubmit={handleSubmit}>
                    <InputText
                        type="search"
                        onChange={handleChange}
                        value={search}
                        name="query"
                        placeholder="Search for a movie"
                    />
                    <Button type="submit" label="Search" />
                </form>
                {error && <p className="text-red-500">{error}</p>}
            </header>
            <main>
                {!error && <ResultSearch status={apiStatus} movies={movies} />}
            </main>
        </div>
    );
}
