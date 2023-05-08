import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './App';

test('renders input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Input number/i);
  expect(inputElement).toBeInTheDocument();
});
