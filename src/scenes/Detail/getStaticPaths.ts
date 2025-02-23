export async function getStaticPaths() {
    return {
        paths: Array<string | { params: { [code: string]: string } }>,
        fallback: 'blocking',
    };
}
