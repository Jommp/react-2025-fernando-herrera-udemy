import { act, renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { useGifs } from './useGifs';
import * as getGifsAction from '../actions/get-gifs-by-query.action';

describe('useGifs', () => {
  test('should return default values and methods', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousSearches.length).toBe(0);

    expect(result.current.handlePreviousSearchClicked).toBeDefined();
    expect(result.current.handleSearch).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const quantityOfGifsExpected = 10;

    const { result } = renderHook(() => useGifs());

    await act(async () => await result.current.handleSearch('Dofus'));

    expect(result.current.gifs.length).toBe(quantityOfGifsExpected);
  });

  test('should return a list of gifs when handlePreviousSearchClicked is called', async () => {
    const quantityOfGifsExpected = 10;

    const { result } = renderHook(() => useGifs());

    await act(async () => await result.current.handlePreviousSearchClicked('dofus'));

    expect(result.current.gifs.length).toBe(quantityOfGifsExpected);
  });

  test('should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handlePreviousSearchClicked('dofus');
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(getGifsAction, 'getGifsByQuery').mockRejectedValue(
      new Error('This is my custom error')
    );

    await act(async () => {
      await result.current.handlePreviousSearchClicked('dofus');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return no more than 6 previous searches', async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(getGifsAction, 'getGifsByQuery').mockResolvedValue([]);

    await act(async () => {await result.current.handleSearch('dofus-1')});
    await act(async () => {await result.current.handleSearch('dofus-2')});
    await act(async () => {await result.current.handleSearch('dofus-3')});
    await act(async () => {await result.current.handleSearch('dofus-4')});
    await act(async () => {await result.current.handleSearch('dofus-5')});
    await act(async () => {await result.current.handleSearch('dofus-6')});
    await act(async () => {await result.current.handleSearch('dofus-7')});
    await act(async () => {await result.current.handleSearch('dofus-8')});

    expect(result.current.previousSearches).toStrictEqual([
      'dofus-8',
      'dofus-7',
      'dofus-6',
      'dofus-5',
      'dofus-4',
      'dofus-3'
    ]);
  });
});
