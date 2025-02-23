import Image from 'next/image';

type Props = {
    title: string;
    year: string;
    poster: string;
    width: number;
    height: number;
};

export const Thumbnails = ({
    title,
    year,
    poster,
    width = 300,
    height = 300,
}: Props) => (
    <li>
        {poster !== 'N/A' ? (
            <Image
                src={poster}
                alt={title}
                width={width}
                height={height}
                className="rounded-md"
            />
        ) : (
            <p>No image available</p>
        )}
        <p className="text-lg">{title}</p>
        <p className="text-sm">{year}</p>
    </li>
);
