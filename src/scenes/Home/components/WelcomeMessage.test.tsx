import { render, screen } from '@testing-library/react';
import { WelcomeMessage } from './WelcomeMessage';

describe('WelcomeMessage', () => {
    it('renders the welcome message correctly', () => {
        render(<WelcomeMessage />);

        expect(screen.getByText('Welcome To')).toBeInTheDocument();
        expect(screen.getByText('Movies Planet')).toBeInTheDocument();
        expect(
            screen.getByText(
                'Millions of movies, TV shows and people to Discover. Explore now.'
            )
        ).toBeInTheDocument();
    });

    it('renders the h1 with correct class', () => {
        render(<WelcomeMessage />);
        const heading = screen.getByText('Movies Planet');
        expect(heading).toHaveClass('text-4xl');
        expect(heading).toHaveClass('md:text-8xl');
    });
});
