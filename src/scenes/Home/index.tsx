import { useCallback, useState } from 'react';
import { Movies } from './components/ListOfMovies';
import { Movie } from '@/logic/movies/schema';
import { getMoviesClient } from '@/logic/movies/client/getMoviesClient';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, updateSearch] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchMovies({ search });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value;
        updateSearch(newSearch);
        //debouncedGetMovies(newSearch)
    };

    const searchMovies = useCallback(async ({ search }: { search: string }) => {
        //  if (search === previousSearch.current) return
        // search es ''

        try {
            //setLoading(true)
            // setError(null)
            // previousSearch.current = search;
            const newMovies = await getMoviesClient({ query: search });

            if (newMovies.success) {
                setMovies(newMovies.data.search);
                return;
            }

            setMovies([]);
        } catch {
            // setError(e.message);
        } finally {
            // tanto en el try como en el catch
            // setLoading(false);
        }
    }, []);

    return (
        <div className="">
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
            </header>
            <main>
                <Movies movies={movies} />
            </main>
        </div>
    );
}
