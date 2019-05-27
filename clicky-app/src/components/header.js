import React from "react";

const header = () => (
    <header className="container-fluid">
        <div className="navbar purple darken-3 text-success mb-1">
            <ul className="row d-flex flex-row justify-content-between">
                <li className="nav-link col">Clicky Game</li>
                <li className="nav-link col">Click an Image to begin</li>
                <li className="nav-link col">Score: 0 | Top Score: 0</li>
            </ul>
        </div>

        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-3">Clicky Game</h1>
            <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
            </p>
        </div>
    </header>
);

export default header;
