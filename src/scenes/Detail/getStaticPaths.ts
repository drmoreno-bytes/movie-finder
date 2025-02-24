export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}
