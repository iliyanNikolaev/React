import { getByText, queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import { GameCard } from "./GameCard";


describe('GameCard component', () => {
    test('GameCard title', () => {
        render(
            <BrowserRouter>
                <GameCard game={{ title: 'test-title' }} />
            </BrowserRouter>
        );
        expect(screen.getByTestId('game-title')).toHaveTextContent('test-title');
    });

    test('Click on details', async () => {
        const game = {
            _id: 'test-id'
        }

        render(
            <BrowserRouter>
                <GameCard game={game} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Details'));

        expect(document.location.pathname).toContain(`/details/${game._id}`);
    })
})