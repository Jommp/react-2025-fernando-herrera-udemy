import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CounterApp } from './CounterApp';

describe('CounterApp', () => {
  test('should render component', () => {
    render(<CounterApp />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Counter: 20');

    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should increment the Counter', () => {
    render(<CounterApp />);

    const h1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '+1' });

    fireEvent.click(button);

    expect(h1.innerHTML).toContain('Counter: 21');
  });

  test('should decrement the Counter', () => {
    render(<CounterApp />);

    const h1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '-1' });

    fireEvent.click(button);

    expect(h1.innerHTML).toContain('Counter: 19');  
  });
});
