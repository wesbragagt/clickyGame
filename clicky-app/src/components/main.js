import React from "react";
import PokemonList from "./pokemonsList";
// JSON file with a list of pokemons
import pokemon from "./json/pokemons.json";

const Main = () => (
    <main>
        <PokemonList pokemons={pokemon} />
    </main>
);

export default Main;
