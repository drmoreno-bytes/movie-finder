import { getMovieByIdServer } from '@/logic/movies/server/getMovieByIdServer';
import { parseAPIError } from '@/utils/parseAPIError';
import { GetStaticProps } from 'next';
import { z } from 'zod';

const idFromCodeSchema = z.string().min(1).max(255);

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const codeParam = context.params?.code;
        const params = idFromCodeSchema.safeParse(codeParam);

        if (!params.success) {
            throw new Error(
                JSON.stringify({ status: 404, message: 'Not found' })
            );
        }

        const res = await getMovieByIdServer(params.data);
        if (res.response.toLocaleLowerCase() !== 'true') {
            throw new Error(
                JSON.stringify({ status: 404, message: 'Not found' })
            );
        }
        return {
            props: {
                movie: res.movie,
            },
        };
    } catch (error: unknown) {
        const { statusText } = parseAPIError(error);
        throw new Error(statusText);
    }
};
