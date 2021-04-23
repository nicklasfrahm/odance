import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders page headline', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/O!Dance/i);
  expect(linkElement).toBeInTheDocument();
});
