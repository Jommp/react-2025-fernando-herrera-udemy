import { useGifs } from './hooks/useGifs';

import { CustomHeader } from '../shared/components/CustomHeader';
import { SearchBar } from '../shared/components/SearchBar';

import { PreviousSearches } from './components/PreviousSearches';
import { GifList } from './components/GifList';

export const GifsApp = () => {
  const {
    gifs,
    previousSearches,
    handleSearch,
    handlePreviousSearchClicked
  } = useGifs();

  return (
    <>
      <CustomHeader
        title='Buscador de GIFS'
        description='Descubre y comparte el GIF perfecto'
      />

      <SearchBar
        placeholder='Buscar GIF'
        onSearch={handleSearch}
      />

      <PreviousSearches
        searches={previousSearches}
        onPreviousSearchClicked={handlePreviousSearchClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};
