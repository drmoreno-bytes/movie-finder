import { BackgroundCover } from '@/components/BackgroundCover';
import { Like } from '@/components/like';
import { Thumbnails } from '@/components/Thumbnails';
import { Movie } from '@/logic/movies/schema';
import { Badge } from 'primereact/badge';
import { Rating } from 'primereact/rating';

type Props = {
    movie: Movie;
};

export default function Detail({ movie }: Props) {
    const { title, poster, year, type } = movie;

    return (
        <div className="overflow-hidden relative">
            <BackgroundCover
                src={poster}
                alt={title}
                width={2048}
                height={1152}
                className="opacity-10 block absolute w-full h-full max-h-[980px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-[#0D0D0D] after:to-transparent after:content-[''] top-0 after:pointer-events-none"
            >
                <div className="px-5 pt-9 max-w-[800px] mx-auto w-full">
                    <div className="flex flex-col gap-6 sm:flex-row">
                        <div className="w-[432] h-[648] mx-auto sm:mx-0">
                            <Thumbnails
                                url={`/detail/${movie.id}`}
                                {...movie}
                                width={432}
                                height={648}
                                actions={<Like movie={movie} />}
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="uppercase">{title}</h2>
                            <p className="text-sm">{year}</p>
                            <Badge
                                className="bg-[#d80286] max-w-20 uppercase"
                                value={type}
                            ></Badge>
                            <Rating value={5} readOnly cancel={false} />
                        </div>
                    </div>
                </div>
            </BackgroundCover>
        </div>
    );
}
