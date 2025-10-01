import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';

describe('giphyApi', () => {
  test('should be configured correctly', () => {
    const baseURL = 'https://api.giphy.com/v1/gifs';
    const lang = 'es';
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    
    const { params } = giphyApi.defaults;

    expect(giphyApi.defaults.baseURL).toBe(baseURL);
    expect(params.lang).toBe(lang);
    expect(params.api_key).toBe(apiKey);

    expect(params).toStrictEqual({
      lang: lang,
      api_key: apiKey
    });
  });
});
