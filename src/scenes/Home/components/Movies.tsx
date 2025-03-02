import { Movie } from '@/logic/movies/schema';
import { EmptyResult } from './EmptyResult';
import { ListOfMovies } from '../../../components/ListOfMovies';

type Props = {
    movies: Movie[];
    total: number;
};

export const Movies = ({ movies, total }: Props) => {
    const hasMovies = movies?.length > 0;
    return hasMovies ? (
        <ListOfMovies movies={movies} total={total} />
    ) : (
        <EmptyResult />
    );
};
