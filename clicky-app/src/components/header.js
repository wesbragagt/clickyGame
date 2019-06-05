import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="navbar purple darken-3 text-success sticky-top">
                <ul className="container text-center">
                    <li className="nav-link">Clicky Game</li>
                    <li className="nav-link">Click an Image to begin</li>
                    <li className="nav-link">Score: 0 | Top Score: 0</li>
                </ul>
            </nav>

            <div className="jumbotron-fluid text-center p-2 clearfix">
                <h1 className="display-3">Clicky Game</h1>
                <p className="lead">
                    A game where you are not suppose to click on the same
                    character
                </p>
            </div>
        </header>
    );
}
