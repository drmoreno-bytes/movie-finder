import { MovieDetail } from '@/logic/movies/schema';
import { parseDecimalString } from '@/utils/parseDecimalString';
import { Badge } from 'primereact/badge';
import { Rating } from 'primereact/rating';

const MovieDescription = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <p className="text-md">
        {label}: <span className="text-gray-400">{value}</span>
    </p>
);

export const MovieInfo = ({
    title,
    released,
    type,
    rating,
    votes,
    plot,
    actors,
    language,
    genre,
}: MovieDetail) => {
    const ratingNumber = parseDecimalString(rating);

    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2 className="uppercase bold sm:text-4xl">{title}</h2>
            <Badge className="max-w-20 uppercase" value={type} />
            <Rating value={ratingNumber} readOnly cancel={false} />
            <p className="text-lg sm:text-xl">{plot}</p>
            <p className="text-sm">{released}</p>
            <MovieDescription label="Votes" value={votes} />
            <MovieDescription label="Genre" value={genre} />
            <MovieDescription label="Language" value={language} />
            <MovieDescription label="Actors" value={actors} />
        </div>
    );
};
