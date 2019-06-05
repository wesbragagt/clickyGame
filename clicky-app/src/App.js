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
        score: 0,
        topScore: 0,
        isPlaying: false,
        wrongClick: false,
        message: "Click on a pokemon to start"
    };

    // shuffling algorithm method
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
        // set the state of the game to playing
        this.setState({
            isPlaying: true,
            message: "Playing..."
        });
        // destructuring the event object from the alt attribute in the image click
        const { alt } = event.target;
        // store current click
        const currentClick = alt;

        // handle game logic conditions

        // if user clicks on a card that hasn't been clicked then add a point to the current score
        if (currentClick !== this.state.previewsClick) {
            const newPokemonArr = this.shuffleArr(this.state.pokemonArr);
            this.setState({
                pokemonArr: newPokemonArr,
                previewsClick: currentClick,
                score: this.state.score + 1,
                wrongClick: false
            });
        }
        // now when the user clicks on a card that has been selected on the previews round then add the current score to the top score if its greater than the previews top score and reset the current score
        else {
            // saving current score on a variable
            const saveScore = this.state.score;
            const newPokemonArr = this.shuffleArr(this.state.pokemonArr);

            // if current score is greater than top score, store that current score to top score
            if (saveScore > this.state.topScore) {
                this.setState({
                    pokemonArr: newPokemonArr,
                    previewsClick: currentClick,
                    score: 0,
                    topScore: saveScore,
                    wrongClick: true,
                    message: "oooh no, you can do better than this"
                });
            }
            // else just reset the current score and keep playing the game
            this.setState({
                pokemonArr: newPokemonArr,
                previewsClick: currentClick,
                score: 0,
                wrongClick: true,
                message: "oooh no, you can do better than this"
            });
        }
    };
    render() {
        return [
            <Header
                score={this.state.score}
                topScore={this.state.topScore}
                message={this.state.message}
            />,

            <main
                id="game-img"
                className={
                    this.state.wrongClick ? "container shake" : "container"
                }
            >
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
