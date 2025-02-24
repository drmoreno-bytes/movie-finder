import { movieDetailResponseSchema } from '../schema';

export const getMovieByIdServer = async (id: string) => {
    const API_KEY = process.env.API_KEY;

    const res = await fetch(`http://www.omdbapi.com?apikey=${API_KEY}&i=${id}`);

    const rawResult = await res.json();

    return movieDetailResponseSchema.parse(rawResult);
};
