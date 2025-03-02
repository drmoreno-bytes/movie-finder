import { ListOfMovies } from '@/components/ListOfMovies';
import { MovieBadge } from '@/components/MovieBadge';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import { useEffect, useState } from 'react';

export default function Favorites() {
    const [isClient, setIsClient] = useState(false);
    const favoriteMovies = useAppSelector((state) => state.favoriteMovies);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return;
    }

    return (
        <div className="flex flex-col max-w-5xl justify-center mx-auto pt-12 pb-32">
            <ListOfMovies
                movies={favoriteMovies}
                total={favoriteMovies.length ?? 0}
            />
        </div>
    );
}
