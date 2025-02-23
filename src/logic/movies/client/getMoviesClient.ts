import { Movie } from '../schema';

export type MovieListWithErrors =
    | {
          success: true;
          data: {
              search: Movie[];
              totalResults: string;
          };
      }
    | {
          success: false;
          error: string;
      };

type Props = {
    query: string;
    page?: number;
    type?: string;
};

export const getMoviesClient = async ({
    query,
    page,
    type,
}: Props): Promise<MovieListWithErrors> => {
    try {
        const pageParam = page ? `&page=${page}` : '';
        const typeParam = type ? `&type=${type}` : '';
        const response = await fetch(
            `/api/getMovies?query=${query}${pageParam}${typeParam}`
        );

        if (!response.ok) {
            return {
                success: false,
                error: response.statusText,
            };
        }

        const data = await response.json();

        if (data.response?.toLowerCase() !== 'true') {
            return {
                success: false,
                error: data.response.error,
            };
        }

        const { search, totalResults } = data;

        return {
            success: true,
            data: {
                search,
                totalResults,
            },
        };
    } catch {
        return {
            success: false,
            error: 'Network Error',
        };
    }
};
