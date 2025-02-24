import { MovieDetail } from '@/logic/movies/schema';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Rating } from 'primereact/rating';

type Props = {
    movie: MovieDetail;
};

export default function Detail({ movie }: Props) {
    const ratingValue = +movie.imdbRating / 2;

    return (
        <div className="flex flex-col">
            <BreadCrumb
                model={[{ template: <span>Detail</span> }]}
                home={{ icon: 'pi pi-home', url: '/' }}
            />
            <Rating value={ratingValue} readOnly cancel={false} />
            DETAIL:{movie.title}{' '}
        </div>
    );
}
