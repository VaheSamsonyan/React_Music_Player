import { render, screen } from '@testing-library/react';
import App from './App';

test('renders elements in App component', () => {
  render(<App/>);

  // Test for Play All button
  const playAllElement = screen.getByText(/Play All/i);
  expect(playAllElement).toBeInTheDocument();

  // Test for Add All button
  const addAllElement = screen.getByText(/Add All/i);
  expect(addAllElement).toBeInTheDocument();

  // Test for Track Number button
  const trackNumberElement = screen.getByText(/Track Number/i);
  expect(trackNumberElement).toBeInTheDocument();

  // Test for Filter input
  const filterElement = screen.getByPlaceholderText(/Filter/i);
  expect(filterElement).toBeInTheDocument();

  // Test for Search tracks input
  const searchTracksElement = screen.getByPlaceholderText(/Search tracks/i);
  expect(searchTracksElement).toBeInTheDocument();

  // Test for Upload button
  const uploadElement = screen.getByText(/upload/i);
  expect(uploadElement).toBeInTheDocument();
});


