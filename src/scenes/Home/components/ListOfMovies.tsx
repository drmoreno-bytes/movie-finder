import { Thumbnails } from '@/components/Thumbnails';
import { Movie } from '@/logic/movies/schema';

type Props = {
    movies: Movie[];
};

const ListOfMovies = ({ movies }: Props) => {
    return (
        <ul className="grid list-none m-0 p-0 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-ful gap-20">
            {movies.map((movie: Movie) => (
                <Thumbnails
                    key={movie.id}
                    {...movie}
                    width={250}
                    height={350}
                />
            ))}
        </ul>
    );
};

const NoMoviesResults = () => (
    <p className="text-[#da2f68] text-xl text-center">
        No Results found for keyword. Try another One
    </p>
);

export const Movies = ({ movies }: Props) => {
    const hasMovies = movies?.length > 0;
    return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
