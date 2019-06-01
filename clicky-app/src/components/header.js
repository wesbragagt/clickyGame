import React from "react";

const header = () => (
    <header>
        <nav className="navbar purple darken-3 text-success fixed-top">
            <ul className="container text-center">
                <li className="nav-link">Clicky Game</li>
                <li className="nav-link">Click an Image to begin</li>
                <li className="nav-link">Score: 0 | Top Score: 0</li>
            </ul>
        </nav>

        <div className="jumbotron jumbotron-fluid text-center p-5 mt-5">
            <h1 className="display-3">Clicky Game</h1>
            <p className="lead">
                A game where you are not suppose to click on the same character
            </p>
        </div>
    </header>
);

export default header;
