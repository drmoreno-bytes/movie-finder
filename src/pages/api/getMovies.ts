// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getMoviesServer } from '@/logic/movies/getMoviesServer';
import { MovieList } from '@/logic/movies/schema';
import { parseAPIError } from '@/utils/parseAPIError';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const paramsSchema = z.object({
    query: z.string(),
    page: z.number().optional().default(1),
    type: z.string().optional(),
});

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<MovieList>
) => {
    try {
        if (req.method !== 'GET') {
            throw new Error(
                JSON.stringify({ status: 405, message: 'Method Not Allowed' })
            );
        }

        const paramsResult = paramsSchema.parse(req.query);

        if (!paramsResult) {
            throw new Error(
                JSON.stringify({ status: 400, message: 'Bad Request' })
            );
        }

        const data = await getMoviesServer(paramsResult);

        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        res.status(200).json(data);
        
    } catch (error: unknown) {
        const { status, statusText } = parseAPIError(error);

        res.status(status).end(statusText);
    }
};

export default handler;
