import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'primereact/button';

type Props = {
    id: string;
    title: string;
    year: string;
    poster: string;
    width: number;
    height: number;
    url: string;
    onFavoriteClick: (id: string) => void;
};

export const Thumbnails = ({
    id,
    url,
    title,
    year,
    poster,
    width = 216,
    height = 324,
    onFavoriteClick,
}: Props) => (
    <figure className="relative group">
        <Link href={url}>
            {poster !== 'N/A' ? (
                <Image
                    src={poster}
                    alt={title}
                    width={width}
                    height={height}
                    className="rounded-md h-auto w-full object-contain block"
                />
            ) : (
                <Image
                    src="/no-image-available.svg"
                    alt="not found"
                    width={width}
                    height={height}
                    className="rounded-md h-[324px] w-full object-cover block"
                />
            )}
        </Link>
        <figcaption className="pointer-events-none rounded-md absolute inset-0 opacity-0 transition-opacity [background:linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)]  group-hover:opacity-100">
            <div className="absolute bottom-15 transition-all p-5">
                <Button
                    icon="pi pi-heart"
                    rounded
                    text
                    aria-label="Favorite"
                    onClick={() => onFavoriteClick(id)}
                    className="cursor-pointer pointer-events-auto flex justify-center items-center rounded-lg w-35 h-35 shadow-[0_0_60px_rgba(34,_34,_34,_0.25)] bg-white hover:bg-gray-400 text-black"
                />
            </div>
            <div className="absolute bottom-0 p-5">
                <p className="text-lg text-white">{title}</p>
                <p className="text-md text-white">{year}</p>
            </div>
        </figcaption>
    </figure>
);
