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
        <div className="flex flex-col">
            <header className="flex flex-col gap-2 items-center text-center relative max-w-[800px] mx-auto xl:pt-40 px-5 pt-8">
                <span>Welcome To</span>
                <h1 className="text-8xl">Movies Planet</h1>
                <p>
                    Millions of movies, TV shows and people to Discover. Explore
                    now.
                </p>
                <form className="pt-5" onSubmit={handleSubmit}>
                    <InputText
                        type="search"
                        onChange={handleChange}
                        value={search}
                        name="query"
                        placeholder="Search for a movie"
                    />
                    <Button
                        type="submit"
                        label="Search"
                        outlined
                        className="text-[#da2f68] border-[#da2f68] ml-2 hover:bg-red-100"
                    />
                </form>
                {error && (
                    <p className="text-[#da2f68] text-xl text-center pt-20">
                        {error}
                    </p>
                )}
            </header>
            <main>
                {!error && (
                    <ResultSearch
                        status={apiStatus}
                        movies={movies}
                        keyword={search}
                    />
                )}
            </main>
        </div>
    );
}
