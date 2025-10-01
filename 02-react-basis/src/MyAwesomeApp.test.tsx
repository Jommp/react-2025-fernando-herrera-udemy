import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('FirstStepsApp', () => {
  test('should render firstName', () => {
    const { container } = render(<MyAwesomeApp />);
    screen.debug();

    const h1 = container.querySelector('h1');

    expect(h1?.innerHTML).toContain('Chema');
  });

  test('should render lastName', () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h3 = screen.getByTestId('last-name');

    expect(h3.innerHTML).contain('MP');
  });

  test('should match snapshot', () => {
    const { container } =  render(<MyAwesomeApp />);

    expect(container).matchSnapshot();
  })
});
