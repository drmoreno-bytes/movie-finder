import { useAppSelector } from '@/store/hooks/useAppSelector';
import { useEffect, useState } from 'react';

export default function Favorites() {
    const [isClient, setIsClient] = useState(false);
    const favoriteMovies = useAppSelector((state) => state.favoriteMovies);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <p>Favorites 0</p>;
    }

    return <p>Favorites {favoriteMovies?.length ?? 0}</p>;
}
