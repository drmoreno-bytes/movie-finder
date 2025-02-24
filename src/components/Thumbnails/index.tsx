import Image from 'next/image';
import { Button } from 'primereact/button';

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
    <li className="relative">
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
        <div className="absolute top-0 pointer-events-none bg-red-200 rounded-full">
            <Button
                icon="pi pi-heart"
                rounded
                text
                aria-label="Favorite"
                className="text-red-500"
            />
        </div>
    </li>
);
