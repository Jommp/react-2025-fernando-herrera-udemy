import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { CounterApp } from './CounterApp';

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('./hooks/useCounter', () => ({
  useCounter: () => ({
    counter: 10,
    handleAdd: handleAddMock,
    handleSubstract: handleSubstractMock,
    handleReset: handleResetMock
  })
}));

describe('CounterApp2', () => {
  test('should render the component', () => {
    render(<CounterApp />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Counter: 10');

    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should call handleAdd when +1 button is clicked', () => {
    render(<CounterApp />);

    const button = screen.getByRole('button', { name: '+1' });

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
    expect(handleSubstractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});
