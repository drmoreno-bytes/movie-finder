import { useAppSelector } from '@/store/hooks/useAppSelector';
import { Badge } from 'primereact/badge';
import { useEffect, useState } from 'react';

export const MovieBadge = () => {
    const [isClient, setIsClient] = useState(false);
    const favoriteMovies = useAppSelector((state) => state.favoriteMovies);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <span>
            <Badge className="mr-1" value={favoriteMovies?.length ?? 0}></Badge>
            Favorite movies
        </span>
    );
};
