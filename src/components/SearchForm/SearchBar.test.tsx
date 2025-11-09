import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders with default placeholder', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search for anime...');
    expect(input).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<SearchBar placeholder="Custom placeholder" />);
    const input = screen.getByPlaceholderText('Custom placeholder');
    expect(input).toBeInTheDocument();
  });

  it('updates input value when user types', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(
      'Search for anime...'
    ) as HTMLInputElement;

    await user.type(input, 'Naruto');
    expect(input.value).toBe('Naruto');
  });

  it('calls onSearch callback when user types', async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const input = screen.getByPlaceholderText('Search for anime...');

    await user.type(input, 'Test');
    expect(onSearchMock).toHaveBeenCalled();
  });

  it('calls onSearch callback on form submission', async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const input = screen.getByPlaceholderText('Search for anime...');

    await user.type(input, 'One Piece');
    await user.type(input, '{Enter}');

    expect(onSearchMock).toHaveBeenCalledWith('One Piece');
  });

  it('does not call onSearch when callback is not provided', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search for anime...');

    await user.type(input, 'Test');
    await user.type(input, '{Enter}');

    // Should not throw an error
    expect(input).toBeInTheDocument();
  });
});
