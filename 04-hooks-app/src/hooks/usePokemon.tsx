import { useEffect, useState } from 'react';

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}

export const usePokemon = ({ id } : Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const getPokemonById = async(id: number) => {
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await reponse.json();

    setPokemon({
      id: id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    })
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]); 
  
  
  return {
    // Properties
    pokemon,
  };
};
