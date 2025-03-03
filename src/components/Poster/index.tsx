import Image from 'next/image';

type PosterProps = {
    title: string;
    poster: string;
    width: number;
    height: number;
};

export const Poster = ({
    title,
    poster,
    width = 216,
    height = 324,
}: PosterProps) => {
    return poster !== 'N/A' ? (
        <Image
            src={poster}
            alt={title}
            width={width}
            height={height}
            className="rounded-md h-auto w-full object-contain block"
        />
    ) : (
        <Image
            src="/images/no-image-available.svg"
            alt="not found"
            width={width}
            height={height}
            className="rounded-md h-[324px] w-full object-cover block"
        />
    );
};
