import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  test('should render SearchBar correctly', () => {
    const { container } = render(<SearchBar placeholder={'Buscar'} onSearch={() => {}}/>);

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should call onSearch with the correct value after 900ms', async () => {
    const onSearch = vi.fn();
    render(<SearchBar placeholder={'Buscar'} onSearch={onSearch}/>);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalled();
      expect(onSearch).toHaveBeenCalledWith('test');
    });
  });

  test('should call only once with the last value', async () => {
    const onSearch = vi.fn();
    render(<SearchBar placeholder={'Buscar'} onSearch={onSearch}/>);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch).toHaveBeenCalledWith('test');
    });
  });

  test('should call onSearch when button is clicked with the input value', () => {
    const onSearch = vi.fn();
    render(<SearchBar placeholder={'Buscar'} onSearch={onSearch}/>);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('test');
  });

  test('should the input has the correct placeholder value', () => {
    const placeholder = 'Buscar Gif';

    render(<SearchBar placeholder={placeholder} onSearch={() => {}}/>);

    expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
  });
});
