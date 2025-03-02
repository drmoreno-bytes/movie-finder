import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    quality?: number;
    className?: string;
    children?: ReactNode;
};

export const BackgroundCover = ({
    src,
    alt,
    width,
    height,
    quality,
    className,
    children,
}: Props) => (
    <div className="relative overflow-hidden min-h-[400px] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:pointer-events-none">
        <div className={`absolute block w-full h-full top-0 ${className}`}>
            <Image
                alt={alt}
                width={width}
                height={height}
                src={src}
                quality={quality}
                className="h-[980px] object-cover object-position-left"
            />
        </div>
        {children}
    </div>
);
