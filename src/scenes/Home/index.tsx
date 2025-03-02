import { ResultSearch } from './components/ResultSearch';
import { useSearchForm } from './hooks/useSearchForm';

import { SearchForm } from './components/SearchForm';
import { WelcomeMessage } from './components/WelcomeMessage';
import { ErrorMessage } from './components/ErrorMessage';
import { BackgroundCover } from '@/components/BackgroundCover';
import { MovieBadge } from '@/components/MovieBadge';

type Props = {
    backgroundCover: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
};

export default function Home({ backgroundCover }: Props) {
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
        <div className="relative">
            <BackgroundCover
                src={backgroundCover.src}
                alt={backgroundCover.alt}
                width={backgroundCover.width}
                height={backgroundCover.height}
                className="block absolute w-full h-full max-h-[980px] opacity-80 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-[#0D0D0D] after:to-transparent after:content-[''] top-0 after:pointer-events-none"
            >
                <div className="flex flex-col">
                    <header className="flex flex-col gap-2 items-center text-center relative max-w-[800px] mx-auto xl:py-40 md:px-5 pt-8">
                        <WelcomeMessage />
                        <SearchForm
                            title={title}
                            type={type}
                            onSubmit={handleSubmit}
                            onKeyDown={handleKeyDown}
                            onChangeTitle={handleChangeTitle}
                            onChangeType={handleChangeType}
                        />
                        <MovieBadge text="Favorite movies" />
                        <ErrorMessage description={error} />
                    </header>
                </div>
                <main className="overflow-hidden relative">
                    {!error && (
                        <ResultSearch
                            status={apiStatus}
                            movies={movies}
                            total={totalMovies}
                            onPageChange={handlePagination}
                        />
                    )}
                </main>
            </BackgroundCover>
        </div>
    );
}
