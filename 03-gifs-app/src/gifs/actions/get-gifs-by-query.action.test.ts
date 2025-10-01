import AxiosMockAdapter from 'axios-mock-adapter';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { giphySearchResponseMock } from './../../../tests/mocks/giphy.responses.data';
import { giphyApi } from '../api/giphy.api';
import { getGifsByQuery } from './get-gifs-by-query.action';

describe('GetGifsByQueryAction', () => {
  let axiosMock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    axiosMock = new AxiosMockAdapter(giphyApi);
  })

  // test('should return a list of gifs', async () => {
  //   const gifs = await getGifsByQuery('Dofus retro');
  //   const [firstGif] = gifs;

  //   expect(firstGif).toStrictEqual({
  //     id: expect.any(String),
  //     height: expect.any(Number),
  //     width: expect.any(Number),
  //     title: expect.any(String),
  //     url: expect.any(String)
  //   });
  // });

  test('should return a list of gifs', async () => {
    axiosMock.onGet('/search').reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery('Dofus');

    expect(gifs.length).toBe(10);

    gifs.forEach(gif => {
      expect(typeof gif.id).toBe('string');
      expect(typeof gif.title).toBe('string');
      expect(typeof gif.url).toBe('string');
      expect(typeof gif.width).toBe('number');
      expect(typeof gif.height).toBe('number');
    });
  });

  test('should return an empty list of gifs when query is empty', async () => {
    axiosMock.restore();

    const gifs = await getGifsByQuery('');

    expect(gifs.length).toBe(0);
  });

  test('should handle errors when API response an error', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    axiosMock.onGet('/search').reply(400,{
      data: {
        message: 'Bad request',
      }
    });

    const gifs = await getGifsByQuery('Dofus');

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
  });
});
