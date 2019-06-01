import React from "react";

const header = () => (
    <header>
        <nav className="navbar purple darken-3 text-success">
            <ul className="container">
                <li className="col-sm-4 nav-link">Clicky Game</li>
                <li className="col-sm-4 nav-link">Click an Image to begin</li>
                <li className="col-sm-4 nav-link">Score: 0 | Top Score: 0</li>
            </ul>
        </nav>

        <div className="jumbotron jumbotron-fluid text-center p-5">
            <h1 className="display-3">Clicky Game</h1>
            <p className="lead">
                A game where you are not suppose to click on the same character
            </p>
        </div>
    </header>
);

export default header;
