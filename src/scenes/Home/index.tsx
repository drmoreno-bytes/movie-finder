import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ResultSearch } from './components/ResultSearch';
import { Dropdown } from 'primereact/dropdown';
import { useSearchForm } from './hooks/useSearchForm';

export default function Home() {
    const {
        search,
        error,
        apiStatus,
        movies,
        handleSubmit,
        handleKeyDown,
        handleChangeTitle,
        handleChangeType,
    } = useSearchForm();
    const { title, type } = search;

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
                        onKeyDown={handleKeyDown}
                        onChange={handleChangeTitle}
                        value={title}
                        name="query"
                        placeholder="Search for a movie"
                        className="w-96"
                    />
                    <Dropdown
                        value={type}
                        onChange={handleChangeType}
                        options={['movie', 'series']}
                        optionLabel="name"
                        placeholder="Select a type"
                        className="w-36"
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
                        keyword={title}
                    />
                )}
            </main>
        </div>
    );
}
