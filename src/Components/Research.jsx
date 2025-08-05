import pokeball_logo from "../assets/pokeball_logo.png";
import pokemon_logo from "../assets/pokemon_logo.png";

function Research() {
  return (
    <div className="flex items-center  justify-between bg-[#ff4d00] px-24">
      <div>
        <img src={pokemon_logo} alt="logo_pokemon" className="w-32 h-32" />
      </div>
      <div className="flex gap-1 ">
        <input
          type="text"
          placeholder="Enter Pokemon name or ID"
          className="px-42 py-2 w-full rounded-md text-black font-bold bg-white"
        />
        <button className="bg-[#ffc107] text-white px-4 py-3 rounded-md font-bold cursor-pointer hover:bg-[#1E90FF] hover:text-white transition-colors">
          Rechercher
        </button>
      </div>
      <div>
        <img src={pokeball_logo} alt="logo_pokeball" className="w-20 h-20" />
      </div>
    </div>
  );
}

export default Research;
