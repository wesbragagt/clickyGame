import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

// JSON file
import pokemonList from "./components/json/pokemons.json";
import "./app.css";

class App extends React.Component {
    state = {
        pokemonArr: pokemonList,
        previewsClick: "",
        score: 0
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
    handleClick = event => {
        event.preventDefault();
        const { alt } = event.target;
        const currentClick = alt;
        console.log("you clicked on", alt);

        if (currentClick !== this.state.previewsClick) {
            const newPokemonArr = this.shuffleArr(this.state.pokemonArr);
            this.setState({
                pokemonArr: newPokemonArr,
                previewsClick: currentClick,
                score: this.state.score + 1
            });
        }
    };
    render() {
        return [
            <Header score={this.state.score} />,

            <main id="game-img" className="container">
                {this.state.pokemonArr.map((pokemon, index) => (
                    <Card
                        id={pokemon.id}
                        key={index}
                        src={pokemon.img}
                        name={pokemon.name}
                        img={pokemon.img}
                        handleClick={this.handleClick}
                    />
                ))}
            </main>
        ];
    }
}

export default App;
