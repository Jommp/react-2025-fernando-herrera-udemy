import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { SearchControls } from './SearchControls';
import { MemoryRouter } from 'react-router';

if (typeof window.ResizeObserver === 'undefined') {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  window.ResizeObserver = ResizeObserver;
}

const renderSearchControls = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <SearchControls />
    </MemoryRouter>
  );
};

describe('SearchControls', () => {
  test('should render SearchControls with default values', () => {
    const { container } = renderSearchControls();

    expect(container).toMatchSnapshot();
  });

  test('should set input value when search param name is set', () => {
    renderSearchControls(['/?name=spiderman']);

    const input = screen.getByPlaceholderText('Buscar heroes, villanos...');

    expect(input.getAttribute('value')).toBe('spiderman')
  });

  test('should change params when input is changed and enter is pressed', () => {
    renderSearchControls(['/?name=spiderman']);

    const input = screen.getByPlaceholderText('Buscar heroes, villanos...');

    expect(input.getAttribute('value')).toBe('spiderman');

    fireEvent.change(input, { target: { value: 'ironman' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input.getAttribute('value')).toBe('ironman');
  });

  test('should change strength param when slider change', () => {
    renderSearchControls(['/?name=spiderman&display-filters=display-filters']);

    const slider = screen.getByRole('slider');

    expect(slider.getAttribute('aria-valuenow')).toBe('0');

    fireEvent.keyDown(slider, { key: 'ArrowRight'});

    expect(slider.getAttribute('aria-valuenow')).toBe('1');
  });

  test('should accordion be open when active-accordion param is set', () => {
    renderSearchControls(['/?name=spiderman&display-filters=display-filters']);

    const accordion = screen.getByTestId('accordion');
    const accordionItem = accordion.querySelector('div');

    expect(accordionItem?.getAttribute('data-state')).toBe('open');
  });

  test('should accordion be closed when active-accordion param is not set', () => {
    renderSearchControls(['/?name=spiderman']);

    const accordion = screen.getByTestId('accordion');
    const accordionItem = accordion.querySelector('div');

    expect(accordionItem?.getAttribute('data-state')).toBe('closed');
  });
});
