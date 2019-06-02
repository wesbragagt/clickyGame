import React from "react";

export default function pokemonsList(props) {
    return (
        <div id="game-img" className="container">
            {props.pokemons.map(pokemon => (
                <div className="card">
                    <img
                        src={pokemon.img}
                        alt={pokemon.name}
                        className="img-fluid"
                        key={pokemon.id}
                    />
                </div>
            ))}
        </div>
    );
}
