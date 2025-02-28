import { movieResponseSchema } from '../schema';

type Props = {
    title: string;
    page?: number;
    type?: string;
};

export const getMoviesServer = async ({ title, page, type }: Props) => {
    const API_KEY = process.env.API_KEY;
    const pageParam = page ? `&page=${page}` : '';
    const typeParam = type ? `&type=${type}` : '';

    const res = await fetch(
        `http://www.omdbapi.com?apikey=${API_KEY}&s=${title}${pageParam}${typeParam}`
    );

    const rawResult = await res.json();

    return movieResponseSchema.parse(rawResult);
};
