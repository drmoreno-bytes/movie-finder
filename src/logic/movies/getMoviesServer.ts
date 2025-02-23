import { movieResponseSchema } from './schema';

type Props = {
    query: string;
    page?: number;
    type?: string;
};

export const getMoviesServer = async ({ query, page, type }: Props) => {
    const API_KEY = process.env.API_KEY;
    const pageParam = page ? `&page=${page}` : '';
    const typeParam = type ? `&type=${type}` : '';

    const res = await fetch(
        `http://www.omdbapi.com?apikey=${API_KEY}&s=${query}${pageParam}${typeParam}`
    );
    const rawResult = await res.json();

    return movieResponseSchema.parse(rawResult);
};
