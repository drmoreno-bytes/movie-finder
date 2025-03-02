import { Thumbnails } from '@/components/Thumbnails';
import { Movie } from '@/logic/movies/schema';
import { Like } from '@/components/like';
import { EmptyResult } from './EmptyResult';
import { SearchInfoContent } from './SearchInfoContent';

type ListOfMoviesProps = {
    movies: Movie[];
    keyword: string;
    total: number;
};

const ListOfMovies = ({ movies, keyword, total }: ListOfMoviesProps) => {
    return (
        <>
            <SearchInfoContent keyword={keyword} total={total} />
            <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                {movies.map((movie: Movie) => (
                    <li key={movie.id} className="mb-4">
                        <Thumbnails
                            url={`/detail/${movie.id}`}
                            {...movie}
                            width={216}
                            height={324}
                            actions={<Like movie={movie} />}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

type Props = {
    movies: Movie[];
    keyword: string;
};

export const Movies = ({ movies, keyword }: Props) => {
    const total = movies?.length ?? 0;
    const hasMovies = movies?.length > 0;
    return hasMovies ? (
        <ListOfMovies movies={movies} total={total} keyword={keyword} />
    ) : (
        <EmptyResult />
    );
};
