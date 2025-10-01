import { useEffect, useState, type KeyboardEvent } from 'react';

interface Props {
  placeholder: string;
  button?: string;
  onSearch: (query: string) => void;
};

export const SearchBar = ({ placeholder, button = 'Buscar', onSearch }: Props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      handleSearch();
    }, 900);
  
    return () => {
      clearInterval(timeOutId);
    }
  }, [query, onSearch]);
  
  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key !== 'Enter') return;

    handleSearch();
  };

  return (
    <section className='search-container'>
      <input
        type='text'
        placeholder={ placeholder }
        onChange={(ev) => setQuery(ev.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        { button }
      </button>
    </section>
  );
};
