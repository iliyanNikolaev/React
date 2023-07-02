import ReactDOM from 'react-dom/client';
import { GameCard } from "./GameCard";
describe('GameCard component', () => {

    test('GameCard title', () => {
        const expectTitle = 'test-title';
        const div = document.createElement('div');
        const root = ReactDOM.createRoot(div);

        document.appendChild(root);

        root.render(<GameCard game={{ title: 'test-title' }} />);

        const actualTitle = document.querySelector('#game-title').value;

        expect(actualTitle).toBe.expectTitle;
    });
})