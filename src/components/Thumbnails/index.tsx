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
    <li className="">
        <h3>{title}</h3>
        <p>{year}</p>
        {poster !== 'N/A' ? (
            <Image src={poster} alt={title} width={width} height={height} />
        ) : (
            <p>No image available</p>
        )}
    </li>
);
