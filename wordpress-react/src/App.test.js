import {render, screen} from '@testing-library/react';
import App from './App';

test("Render inicial", () => {
    render(<App />);
    const header1 = screen.getByRole('heading');
    expect(header1).toBeInTheDocument();
});