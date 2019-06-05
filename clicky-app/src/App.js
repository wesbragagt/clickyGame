import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

// JSON file
import pokemonList from "./components/json/pokemons.json";
import "./app.css";

class App extends React.Component {
    state = {
        pokemonArr: pokemonList,
        previewsClick: ""
    };

    // shuffling method
    shuffleArr = arr => {
        let newPosition, temp;
        for (let i = arr.length - 1; i > 0; i--) {
            newPosition = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[newPosition];
            arr[newPosition] = temp;
        }
        return arr;
    };

    // when page loads shuffle through the pokemons
    componentDidMount() {
        const newPokemonArr = this.shuffleArr(this.state.pokemonArr);
        this.setState({
            pokemonArr: newPokemonArr
        });
    }

    // LOGIC FOR HANDLING CLICKS ON A PARTICULAR ELEMENT
    handleClick = (event) => {
        event.preventDefault();
        
        console.log(event.target.alt);
        const newPokemonArr = this.shuffleArr(this.state.pokemonArr);
        this.setState({
            pokemonArr: newPokemonArr
        });
    }
    render() {
        return [
            <Header />,

            <main id="game-img" className="container">
                {this.state.pokemonArr.map((pokemon, index) => (
                    <Card
                        id={pokemon.id}
                        key={index}
                        src={pokemon.img}
                        name={pokemon.name}
                        img={pokemon.img}
                        handleClick = {this.handleClick}
                    />
                ))}
            </main>
        ];
    }
}

export default App;
