import { render, screen } from '@testing-library/react';
import { ResultSearch } from './ResultSearch';

describe('ResultSearch Component', () => {
    it('displays success state', () => {
        render(
            <ResultSearch
                status="success"
                movies={[]}
                total={0}
                onPageChange={() => {}}
            />
        );

        expect(screen.getByText('Search results of')).toBeInTheDocument();
    });
});
