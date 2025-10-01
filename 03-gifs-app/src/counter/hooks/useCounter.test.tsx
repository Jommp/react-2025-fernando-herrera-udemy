import { describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should render with default initial value', () => {
    const defaultInitialValue = 0;

    const { result } = renderHook(useCounter);

    expect(result.current.counter).toBe(defaultInitialValue);
  });

  test('should render with custom initial value of 5', () => {
    const customInitialValue = 5;

    const { result } = renderHook(() => useCounter(customInitialValue));

    expect(result.current.counter).toBe(customInitialValue);
  });

  test('should increase counter when handleAdd is called', () => {
    const counterExpected = 1;

    const { result } = renderHook(() => useCounter());

    act(() => result.current.handleAdd());

    expect(result.current.counter).toBe(counterExpected);
  });

  test('should decrease counter when handleSubstract is called', () => {
    const counterExpected = -1;

    const { result } = renderHook(() => useCounter());

    act(() => result.current.handleSubstract());

    expect(result.current.counter).toBe(counterExpected);
  });

  test('should reset counter to default value when handleReset is called', () => {
    const counterExpectedAtAdd = 2;
    const counterExpected = 0;

    const { result } = renderHook(() => useCounter());

    act(() => result.current.handleAdd());
    act(() => result.current.handleAdd());

    expect(result.current.counter).toBe(counterExpectedAtAdd);

    act(() => result.current.handleReset());

    expect(result.current.counter).toBe(counterExpected);
  });
});