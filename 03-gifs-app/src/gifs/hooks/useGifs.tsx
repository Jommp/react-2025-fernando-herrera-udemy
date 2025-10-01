import { useRef, useState } from 'react';

import type { Gif } from '../interfaces/gif.interface';

import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleGetGifsByQuery = async (query: string = '') => {
    const results = await getGifsByQuery(query);

    setGifs(results);

    gifsCache.current[query] = results;
  };

  const handlePreviousSearchClicked = async (term: string) => {
    if(gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);

      return;
    };

    await handleGetGifsByQuery(term);
  };

  const handleSearch = async (query: string) => {
    const querySanitized = query.trim().toLowerCase();

    if (!querySanitized.length) return;

    if (previousSearches.includes(querySanitized)) return;

    const newPreviousSearches = [querySanitized, ...previousSearches].splice(0, 6);
    setPreviousSearches(newPreviousSearches);

    await handleGetGifsByQuery(query);
  };

  return {
    gifs,
    previousSearches,

    handlePreviousSearchClicked,
    handleSearch
  };
};
