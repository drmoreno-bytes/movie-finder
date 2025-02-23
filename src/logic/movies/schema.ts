import { z } from "zod";

export const movieListSchema = z.object({
    Title: z.string(),
    Year: z.string(),
    imdbID: z.string(),
    Type: z.string(),
    Poster: z.string(),
});

export type MovieList = z.infer<typeof movieListSchema>;