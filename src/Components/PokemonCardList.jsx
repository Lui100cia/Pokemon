import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const colors = {
  bug: "#26de81",
  dragon: "#CEB154",
  electric: "#F3C92A",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#59A2E6",
  default: "#AAA",
};

function PokemonCardList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await result.json();
    const detailed = await Promise.all(
      data.results.map(async (p) => {
        const result = await fetch(p.url);
        const info = await result.json();

        return {
          name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
          image: info.sprites.other["official-artwork"].front_default,
          type: info.types[0].type.name,
          typeColor: colors[info.types[0].type.name] || colors.default,
          id: info.id,
          attack: info.stats[1].base_stat,
          defense: info.stats[2].base_stat,
          speed: info.stats[5].base_stat,
        };
      })
    );

    setPokemons((prev) => [...prev, ...detailed]);
    setOffset((prev) => prev + limit);
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={fetchPokemons}
          className="bg-[#ff4d00] text-white px-6 py-3 rounded-md font-bold cursor-pointer hover:bg-[#1E90FF] hover:text-white transition-colors"
        >
          Voir plus de Pokémon
        </button>
      </div>
    </div>
  );
}

export default PokemonCardList;
