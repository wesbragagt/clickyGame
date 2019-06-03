import React from "react";



export default function pokemonsList(props) {
    return (
        <div id="game-img" className="container">
            {props.pokemons.map(pokemon => (
                <div id={`card_${pokemon.id}`} className="card btn">
                    <img
                        src={pokemon.img}
                        alt={pokemon.name }
                        className="img-fluid"
                        key={pokemon.id}
                    />
                </div>
            ))}
        </div>
    );
}
