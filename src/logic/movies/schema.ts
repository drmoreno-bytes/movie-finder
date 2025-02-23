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

export type MovieOfListResponse = z.infer<typeof movieResponseSchema>;
export type Movie = z.infer<typeof movieSchema>;
