import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
  test('should render with required properties', () => {
    const article = 'Control de Xbox';

    render(<ItemCounter article={article} />);

    expect(screen.getByText(article)).toBeDefined();
  });

  test('should render with custom quantity', () => {
    const article = 'Control de Xbox';
    const quantity = 3;

    render(<ItemCounter article={article} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    const article = 'Control de Xbox';
    const quantity = 3;

    render(<ItemCounter article={article} quantity={quantity} />);

    const [, addButton] = screen.getAllByRole('button');

    fireEvent.click(addButton);

    expect(screen.getByText(4)).toBeDefined();
  });

  test('should decrease count when -1 button is pressed', () => {
    const article = 'Control de Xbox';
    const quantity = 5;

    render(<ItemCounter article={article} quantity={quantity} />);

    const [decreaseButton] = screen.getAllByRole('button');

    fireEvent.click(decreaseButton);

    expect(screen.getByText(4)).toBeDefined();
  });

  test('should not decrease count when -1 button is pressed and quantity is 1', () => {
    const article = 'Control de Xbox';
    const quantity = 1;

    render(<ItemCounter article={article} quantity={quantity} />);

    const [decreaseButton] = screen.getAllByRole('button');

    fireEvent.click(decreaseButton);

    expect(screen.getByText(1)).toBeDefined();
  });

  test('should title be color red when quantity is 1', () => {
    const article = 'Control de Xbox';
    const quantity = 1;
    const color = 'red';
    render(<ItemCounter article={article} quantity={quantity} />);

    const articleText = screen.getByText(article);

    expect(articleText.style.color).toBe(color);
  });

  test('should title be color black when quantity is greater 1', () => {
    const article = 'Control de Xbox';
    const quantity = 3;
    const color = 'black';
    render(<ItemCounter article={article} quantity={quantity} />);

    const articleText = screen.getByText(article);

    expect(articleText.style.color).toBe(color);
  });
});
