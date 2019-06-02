import React from 'react'

export default function pokemonsList(props) {
    return (
        <div id="game-img" className="container">
            {props.pokemons.map(pokemon =>(
                <div className="card">
                <img
                src={pokemon.img}
                alt=""
                className="img-fluid"
            /></div>
            ))}
        </div>
    )
}
