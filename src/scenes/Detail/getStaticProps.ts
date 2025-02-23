import { GetStaticProps } from 'next';
import { z } from 'zod';

const idFromCodeSchema = z
    .string()
    .min(4)
    .transform((code) => {
        return z.coerce.number().parse(code);
    });

export const getStaticProps: GetStaticProps = async (context) => {
    const codeParam = context.params?.code;

    const id = idFromCodeSchema.safeParse(codeParam);

    console.log(id);

    return {
        props: {},
    };
};
