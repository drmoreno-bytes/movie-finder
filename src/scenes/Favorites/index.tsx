import { ListOfMovies } from '@/components/ListOfMovies';
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
        <div className="overflow-hidden relative">
            <div className="flex flex-col max-w-5xl justify-center mx-auto pt-12 pb-32">
                <ListOfMovies
                    movies={favoriteMovies}
                    total={favoriteMovies.length ?? 0}
                />
            </div>
        </div>
    );
}
