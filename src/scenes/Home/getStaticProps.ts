import { GetStaticProps } from 'next';
import { BACKGROUND_COVER } from './config';

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            backgroundCover: BACKGROUND_COVER,
        },
    };
};
