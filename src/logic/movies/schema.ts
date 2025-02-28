import { z } from 'zod';

const baseMovieSchema = z.object({
    Title: z.string(),
    Year: z.string(),
    imdbID: z.string(),
    Type: z.string(),
    Poster: z.string(),
});

const movieSchema = baseMovieSchema.transform(
    ({ Title, Year, imdbID, Type, Poster, ...rest }) => ({
        id: imdbID,
        title: Title,
        year: Year,
        type: Type,
        poster: Poster,
        ...rest,
    })
);

export const movieResponseSchema = z
    .object({
        Response: z.string(),
        Search: z.array(movieSchema).optional().nullable(),
        totalResults: z.string().optional().nullable(),
        Error: z.string().optional().nullable(),
    })
    .transform(({ Search, Response, Error, ...rest }) => ({
        search: Search,
        response: Response,
        error: Error,
        ...rest,
    }));

export const movieDetailResponseSchema = baseMovieSchema
    .extend({
        Response: z.string(),
        Error: z.string().optional().nullable(),
    })
    .transform(
        ({ Response, Error, Title, Year, imdbID, Type, Poster, ...rest }) => ({
            response: Response,
            error: Error,
            movie: {
                id: imdbID,
                title: Title,
                year: Year,
                type: Type,
                poster: Poster,
            },
            ...rest,
        })
    );

export type MovieOfListResponse = z.infer<typeof movieResponseSchema>;
export type MovieDetailResponse = z.infer<typeof movieDetailResponseSchema>;
export type Movie = z.infer<typeof movieSchema>;
