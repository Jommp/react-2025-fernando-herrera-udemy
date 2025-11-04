import type { PropsWithChildren } from 'react';
import { describe, expect, test, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { HeroesSummaryResponse } from '../types/get-heroes-summary.response';
import { getHeroesSummaryAction } from '../actions/get-heroes-summary.action';
import { useHeroesSummary } from './useHeroesSummary';

vi.mock('../actions/get-heroes-summary.action', () => ({
  getHeroesSummaryAction: vi.fn(),
}));

const mockGetHeroesSummaryAction = vi.mocked(getHeroesSummaryAction);

const tanStackCustomProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  );
};

describe('useHeroesSummary', () => {
  test('should return the initial state (isLoading)', () => {
    const { result } = renderHook(() => useHeroesSummary(), {
      wrapper: tanStackCustomProvider()
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isError).toBeFalsy();
    expect(result.current.data).toBe(undefined);
    expect(result.current.data).toBeUndefined();
  });

  test('should return succes state with data when API call success', async () => {
    const mockSummaryData = {
      totalHeroes: 10,
      strongestHero: {
        id: '1',
        alias: 'Spiderman'
      },
      smartestHero: {
        id: '2',
        alias: 'Batman'
      },
      heroCount: 18,
      villainCount: 7
    } as HeroesSummaryResponse;

    mockGetHeroesSummaryAction.mockResolvedValue(mockSummaryData);

    const { result } = renderHook(() => useHeroesSummary(), {
      wrapper: tanStackCustomProvider()
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.isError).toBe(false);
    expect(mockGetHeroesSummaryAction).toHaveBeenCalled();
  });

  test('should return error state when API call fails', async () => {
    const mockError = new Error('Failed to fetch summary');

    mockGetHeroesSummaryAction.mockRejectedValue(mockError);

    const { result } = renderHook(() => useHeroesSummary(), {
      wrapper: tanStackCustomProvider()
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeDefined();
    expect(result.current.error?.message).toBe('Failed to fetch summary');
    expect(mockGetHeroesSummaryAction).toHaveBeenCalled();
  });
});
