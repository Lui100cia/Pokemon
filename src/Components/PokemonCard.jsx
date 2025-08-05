function PokemonCard({ pokemon }) {
  return (
    <div
      className="text-center rounded-xl w-84 p-4 shadow-lg"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="my-6 flex  items-center justify-between ">
        <h2
          className="text-[24px] font-bold"
          style={{ color: pokemon.typeColor }}
        >
          {pokemon.name}
        </h2>

        <p className="text-16px font-bold" style={{ color: pokemon.typeColor }}>
          <strong>#</strong>
          {pokemon.id}
        </p>
      </div>
      <div
        className="rounded-xl"
        style={{ backgroundColor: pokemon.typeColor }}
      >
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-64 h-64 mx-auto"
        />
      </div>
      <div>
        <span
          className="text-white text-16px px-4 py-2 rounded-full"
          style={{ backgroundColor: pokemon.typeColor }}
        >
          {pokemon.type}
        </span>
      </div>

      <div className="mt-4">
        <div
          className="flex justify-between mt-4 rounded-lg p-4 font-bold text-white"
          style={{ color: pokemon.typeColor }}
        >
          <span>
            <strong>Attack</strong>
            <h3>{pokemon.attack}</h3>
          </span>
          <span>
            <strong>Defense</strong>
            <h3>{pokemon.defense}</h3>
          </span>
          <span>
            <strong>Speed</strong>
            <h3>{pokemon.speed}</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
