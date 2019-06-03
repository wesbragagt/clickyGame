import React from "react";

export default function Card(props) {
    return (
        <div id="game-img" className="container">
            {/* Iterate through the json object and render card images */}
            {props.pokemons.map(pokemon => (
                <div
                    id={`card_${pokemon.id}`}
                    key={pokemon.id}
                    className="card btn"
                >
                    <img
                        src={pokemon.img}
                        alt={pokemon.name}
                        className="img-fluid"
                    />
                </div>
            ))}
        </div>
    );
}
