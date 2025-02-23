import { MovieList } from "../schema";

export type MovieListWithErrors = {
    success: true;
    data: MovieList;
} | {
    success: false;
    error: {
        status: number;
        statusText: string;
    }
};

export const getMoviesClient = async (query: string, page?: number, type?: string): Promise<MovieListWithErrors> => {
    try {
        const response = await fetch(`/api/getMovies?query=${query}&page=${page}&type=${type}`);
        if(!response.ok) {
            return {
                success: false,
                error: {
                    status: response.status,
                    statusText: response.statusText,
                }
            };
        }
        const data = await response.json();
        return {
            success: true,
            data,
        };
    } catch {
        return {
            success: false,
            error: {
                status: 500,
                statusText: 'Network Error',
            }
        };
    }
};
