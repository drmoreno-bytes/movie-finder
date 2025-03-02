import { Thumbnails } from '@/components/Thumbnails';
import { Movie } from '@/logic/movies/schema';
import { Like } from '@/components/like';
import { SearchInfoContent } from './SearchInfoContent';

type ListOfMoviesProps = {
    movies: Movie[];
    total: number;
};

export const ListOfMovies = ({ movies, total }: ListOfMoviesProps) => {
    return (
        <>
            <SearchInfoContent total={total} />
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
