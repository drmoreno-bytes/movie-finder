import { BackgroundCover } from '@/components/BackgroundCover';
import { Like } from '@/components/like';
import { Thumbnails } from '@/components/Thumbnails';
import { MovieDetail } from '@/logic/movies/schema';
import { MovieInfo } from './components/MovieInfo';

type Props = {
    movie: MovieDetail;
};

export default function Detail({ movie }: Props) {
    const { title, poster } = movie;
    const cover = poster !== 'N/A' ? poster : '/images/no-image-available.svg';

    return (
        <div className="overflow-hidden relative">
            <BackgroundCover
                src={cover}
                alt={title}
                width={2048}
                height={1152}
                className="opacity-10 block absolute w-full h-full max-h-[980px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-[#0D0D0D] after:to-transparent after:content-[''] top-0 after:pointer-events-none"
            >
                <div className="px-5 pt-5 sm:pt-32 max-w-5xl mx-auto w-full">
                    <div className="flex flex-col gap-6 sm:flex-row">
                        <div className="sm:min-w-[432] sm:max-w-[432] sm:max-h-[648] sm:min-h-[648] w-full h-auto mx-auto sm:mx-0">
                            <Thumbnails
                                {...movie}
                                width={432}
                                height={648}
                                actions={<Like movie={movie} />}
                                className="pointer-events-none"
                                showDetails={false}
                            />
                        </div>
                        <MovieInfo {...movie} />
                    </div>
                </div>
            </BackgroundCover>
        </div>
    );
}
