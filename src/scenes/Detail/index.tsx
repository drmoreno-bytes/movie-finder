import { MovieDetail } from '@/logic/movies/schema';
import { BreadCrumb } from 'primereact/breadcrumb';

type Props = {
    movie: MovieDetail;
};

export default function Detail({ movie }: Props) {
    const iconItemTemplate = () => {
        return <span>Detail</span>;
    };
    return (
        <div className="flex flex-col">
            <BreadCrumb
                model={[{ template: iconItemTemplate }]}
                home={{ icon: 'pi pi-home', url: '/' }}
            />
            DETAIL:{movie.title}{' '}
        </div>
    );
}
