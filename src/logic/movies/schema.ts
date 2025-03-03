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

export const movieSchemaDetail = baseMovieSchema
    .extend({
        Plot: z.string(),
        Released: z.string(),
        Runtime: z.string(),
        Language: z.string(),
        imdbRating: z.string(),
        imdbVotes: z.string(),
        Actors: z.string(),
        Genre: z.string(),
    })
    .transform(
        ({
            Title,
            Year,
            imdbID,
            Type,
            Poster,
            imdbRating,
            imdbVotes,
            Plot,
            Released,
            Runtime,
            Language,
            Actors,
            Genre,
            ...rest
        }) => ({
            id: imdbID,
            title: Title,
            year: Year,
            type: Type,
            poster: Poster,
            rating: imdbRating,
            votes: imdbVotes,
            plot: Plot,
            released: Released,
            runtime: Runtime,
            language: Language,
            actors: Actors,
            genre: Genre,
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
        Plot: z.string(),
        Released: z.string(),
        Runtime: z.string(),
        Language: z.string(),
        imdbRating: z.string(),
        imdbVotes: z.string(),
        Actors: z.string(),
        Genre: z.string(),
    })
    .transform(
        ({
            Response,
            Error,
            Title,
            Year,
            imdbID,
            Type,
            Poster,
            imdbRating,
            imdbVotes,
            Plot,
            Released,
            Runtime,
            Language,
            Actors,
            Genre,
            ...rest
        }) => ({
            response: Response,
            error: Error,
            movie: {
                id: imdbID,
                title: Title,
                year: Year,
                type: Type,
                poster: Poster,
                rating: imdbRating,
                votes: imdbVotes,
                plot: Plot,
                released: Released,
                runtime: Runtime,
                language: Language,
                actors: Actors,
                genre: Genre,
            },
            ...rest,
        })
    );

export type MovieOfListResponse = z.infer<typeof movieResponseSchema>;
export type MovieDetailResponse = z.infer<typeof movieDetailResponseSchema>;
export type Movie = z.infer<typeof movieSchema>;
export type MovieDetail = z.infer<typeof movieSchemaDetail>;
