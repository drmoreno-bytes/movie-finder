import { movieResponseSchema } from '../schema';

type Props = {
    id: string;
};

export const getMoviesByIdServer = async ({ id }: Props) => {
    const API_KEY = process.env.API_KEY;

    const res = await fetch(`http://www.omdbapi.com?apikey=${API_KEY}&i=${id}`);

    const rawResult = await res.json();

    return movieResponseSchema.parse(rawResult);
};
