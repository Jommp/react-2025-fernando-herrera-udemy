import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Title to test';
  const description = 'Description to test';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined();
  });

  test('should render the description when is provided', () => {
    render(<CustomHeader title={title} description={description} />);

    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should not render description when is not provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    const paragraph = container.querySelector('p');

    expect(paragraph).toBeNull();
  });
});
