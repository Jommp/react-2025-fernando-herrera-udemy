import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import FirstStepsApp from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepApp', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).matchSnapshot();
  });

  test('should render at least 3 ItemCounter components', () => {
    render(<FirstStepsApp />);

    const testId = 'ItemCounter';
    const itemCounters = screen.getAllByTestId(testId);

    expect(itemCounters.length).toBe(3);
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    expect(mockItemCounter).toHaveBeenCalledWith({
      article: 'Procesador Core I5 14400',
      quantity: 2
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      article: 'Tarjeta Gráfica RTX 5070 TI',
      quantity: 1
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      article: 'Fuente de poder Corsair Full Modular 700W Gold',
      quantity: 3
    });
  });
});
