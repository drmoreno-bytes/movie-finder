import Link from 'next/link';
import { JSX } from 'react';
import { Poster } from '../Poster';

type Props = {
    title: string;
    year: string;
    poster: string;
    width: number;
    height: number;
    url?: string;
    actions?: JSX.Element;
    className?: string;
    showDetails?: boolean;
};

export const Thumbnails = ({
    url,
    title,
    year,
    poster,
    width = 216,
    height = 324,
    actions,
    className = '',
    showDetails = true,
}: Props) => {
    const ThumbnailContent = (
        <Poster title={title} poster={poster} width={width} height={height} />
    );

    return (
        <figure className={`relative group cursor-pointer ${className}`}>
            {actions && (
                <div className="absolute top-0 right-0 p-1 transition-all">
                    {actions}
                </div>
            )}
            {url ? (
                <Link href={url}>{ThumbnailContent}</Link>
            ) : (
                ThumbnailContent
            )}
            {showDetails && (
                <figcaption className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-b from-black/10 to-black/40">
                    <div className="absolute bottom-0 p-5">
                        <p className="text-sm text-white">{year}</p>
                        <p className="text-lg text-white line-clamp-2">
                            {title}
                        </p>
                    </div>
                </figcaption>
            )}
        </figure>
    );
};
