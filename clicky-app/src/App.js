import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

// JSON file
import pokemonList from "./components/json/pokemons.json";
import "./app.css";

class App extends React.Component {
    state = {
        pokemonArr: pokemonList,
        Score: 0,
        TopScore: 0
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

    handleClick = (event, id) => {
        event.preventDefault();
        console.log(id);
    };

    // when page loads shuffle through the pokemons
    componentDidMount() {
        const newPokemonArr = this.shuffleArr(this.state.pokemonArr);
        this.setState({
            pokemonArr: newPokemonArr
        });
    }
    render() {
        return [
            <Header />,

            <main>
                <Card pokemons={this.state.pokemonArr} />
            </main>
        ];
    }
}

export default App;
