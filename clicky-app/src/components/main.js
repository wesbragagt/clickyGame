import React from "react";
import Pokemon from './pokemonsList';
import pokemon from './json/pokemons.json';

const main = () => (
    <main>
        
           <Pokemon pokemons = {pokemon}/>
        
    </main>
);

export default main;
