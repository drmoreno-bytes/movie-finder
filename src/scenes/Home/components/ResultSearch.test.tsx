import { render, screen } from '@testing-library/react';
import { Movie } from '@/logic/movies/schema';
import { ResultSearch } from './ResultSearch';

// Mock the child components
jest.mock('./ResultSkeleton', () => ({
    ResultSkeleton: () => <div>Loading...</div>,
}));
jest.mock('./EmptyResult', () => ({
    EmptyResult: () => <div>No results found</div>,
}));
jest.mock('./Movies', () => ({
    Movies: ({ movies }: { movies: Movie[] }) => (
        <div>{movies.length} movies found</div>
    ),
}));

describe('ResultSearch Component', () => {
    const mockOnPageChange = jest.fn();

    const movies: Movie[] = [
        {
            id: '1',
            title: 'Movie 1',
            year: '1987',
            type: 'movie',
            poster: 'N/A',
        },
        {
            id: '2',
            title: 'Movie 2',
            year: '1987',
            type: 'movie',
            poster: 'N/A',
        },
    ];
    const total = 15;

    it('renders ResultSkeleton when status is loading', () => {
        render(
            <ResultSearch
                status="loading"
                movies={[]}
                total={0}
                onPageChange={mockOnPageChange}
            />
        );
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders Movies when status is success', () => {
        render(
            <ResultSearch
                status="success"
                movies={movies}
                total={total}
                onPageChange={mockOnPageChange}
            />
        );
        expect(screen.getByText('2 movies found')).toBeInTheDocument();
    });

    it('renders EmptyResult when status is error', () => {
        render(
            <ResultSearch
                status="error"
                movies={[]}
                total={0}
                onPageChange={mockOnPageChange}
            />
        );
        expect(screen.getByText('No results found')).toBeInTheDocument();
    });

    it('does not render Pagination if total is less than or equal to itemsPerPage', () => {
        render(
            <ResultSearch
                status="success"
                movies={movies}
                total={10}
                onPageChange={mockOnPageChange}
            />
        );
        expect(screen.queryByText('Page 2')).not.toBeInTheDocument();
    });
});
