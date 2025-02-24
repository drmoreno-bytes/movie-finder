import { MovieDetail } from '@/logic/movies/schema';

type Props = {
    movie: MovieDetail;
};

export default function Detail({ movie }: Props) {
    return <div className="flex flex-col">DETAIL:{movie.title}</div>;
}
