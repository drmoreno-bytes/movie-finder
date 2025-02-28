import { z } from 'zod';

const movieSchema = z
    .object({
        Title: z.string(),
        Year: z.string(),
        imdbID: z.string(),
        Type: z.string(),
        Poster: z.string(),
    })
    .transform(({ Title, Year, imdbID, Type, Poster, ...rest }) => ({
        id: imdbID,
        title: Title,
        year: Year,
        type: Type,
        poster: Poster,
        ...rest,
    }));

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

const movieDetailSchema = z.object({
    title: z.string(),
    year: z.string(),
    rated: z.string(),
    released: z.string(),
    runtime: z.string(),
    genre: z.string(),
    director: z.string(),
    writer: z.string(),
    actors: z.string(),
    plot: z.string(),
    language: z.string(),
    country: z.string(),
    awards: z.string(),
    poster: z.string().url(),
    metascore: z.string(),
    imdbRating: z.string(),
    imdbVotes: z.string(),
    imdbID: z.string(),
    type: z.string(),
    dvd: z.string(),
    boxOffice: z.string(),
    production: z.string(),
    website: z.string(),
});

export const movieDetailResponseSchema = z
    .object({
        Response: z.string(),
        Error: z.string().optional().nullable(),
        Title: z.string(),
        Year: z.string(),
        Rated: z.string(),
        Released: z.string(),
        Runtime: z.string(),
        Genre: z.string(),
        Director: z.string(),
        Writer: z.string(),
        Actors: z.string(),
        Plot: z.string(),
        Language: z.string(),
        Country: z.string(),
        Awards: z.string(),
        Poster: z.string().url(),
        Metascore: z.string(),
        imdbRating: z.string(),
        imdbVotes: z.string(),
        imdbID: z.string(),
        Type: z.string(),
        DVD: z.string().optional(),
        BoxOffice: z.string().optional(),
        Production: z.string().optional(),
        Website: z.string().optional(),
    })
    .transform(({ Response, Error, ...data }) => ({
        response: Response,
        error: Error,
        movie: movieDetailSchema.parse({
            title: data.Title,
            year: data.Year,
            rated: data.Rated,
            released: data.Released,
            runtime: data.Runtime,
            genre: data.Genre,
            director: data.Director,
            writer: data.Writer,
            actors: data.Actors,
            plot: data.Plot,
            language: data.Language,
            country: data.Country,
            awards: data.Awards,
            poster: data.Poster,
            metascore: data.Metascore,
            rating: data.imdbRating,
            votes: data.imdbVotes,
            id: data.imdbID,
            type: data.Type,
            dvd: data.DVD ?? 'N/A',
            boxOffice: data.BoxOffice ?? 'N/A',
            production: data.Production ?? 'N/A',
            website: data.Website ?? 'N/A',
        }),
    }));

export type MovieOfListResponse = z.infer<typeof movieResponseSchema>;
export type MovieDetailResponse = z.infer<typeof movieDetailResponseSchema>;
export type MovieDetail = z.infer<typeof movieDetailSchema>;
export type Movie = z.infer<typeof movieSchema>;
