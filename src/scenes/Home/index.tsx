import { ResultSearch } from './components/ResultSearch';
import { useSearchForm } from './hooks/useSearchForm';
import { MovieBadge } from './components/MovieBadge';
import { SearchForm } from './components/SearchForm';
import { WelcomeMessage } from './components/WelcomeMessage';
import { ErrorMessage } from './components/ErrorMessage';

export default function Home() {
    const {
        search,
        error,
        apiStatus,
        movies,
        totalMovies,
        handleSubmit,
        handleKeyDown,
        handleChangeTitle,
        handleChangeType,
        handlePagination,
    } = useSearchForm();
    const { title, type } = search;

    return (
        <div className="flex flex-col">
            <header className="flex flex-col gap-2 items-center text-center relative max-w-[800px] mx-auto xl:pt-40 px-5 pt-8">
                <WelcomeMessage />
                <SearchForm
                    title={title}
                    type={type}
                    onSubmit={handleSubmit}
                    onKeyDown={handleKeyDown}
                    onChangeTitle={handleChangeTitle}
                    onChangeType={handleChangeType}
                />
                <MovieBadge />
                <ErrorMessage description={error} />
            </header>
            <main>
                {!error && totalMovies > 0 && (
                    <ResultSearch
                        status={apiStatus}
                        movies={movies}
                        keyword={title}
                        total={totalMovies}
                        onPageChange={handlePagination}
                    />
                )}
            </main>
        </div>
    );
}
