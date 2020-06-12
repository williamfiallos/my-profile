import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

it('should render component', () => {
    const app = render(<App />);

    expect(app.getByText('Counter: 0')).toBeInTheDocument();
    fireEvent.click(app.getByText('+'));
});