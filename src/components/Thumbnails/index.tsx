import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

type Props = {
    title: string;
    year: string;
    poster: string;
    width: number;
    height: number;
    url: string;
    actions?: JSX.Element;
};

export const Thumbnails = ({
    url,
    title,
    year,
    poster,
    width = 216,
    height = 324,
    actions,
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
                    src="/images/no-image-available.svg"
                    alt="not found"
                    width={width}
                    height={height}
                    className="rounded-md h-[324px] w-full object-cover block"
                />
            )}
        </Link>
        <figcaption className="pointer-events-none rounded-md absolute inset-0 opacity-0 transition-opacity [background:linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)]  group-hover:opacity-100">
            {actions && (
                <div className="absolute bottom-15 transition-all p-1">
                    {actions}
                </div>
            )}
            <div className="absolute bottom-0 p-5">
                <p className="text-sm text-white">{year}</p>
                <p className="text-lg text-white line-clamp-2">{title}</p>
            </div>
        </figcaption>
    </figure>
);
