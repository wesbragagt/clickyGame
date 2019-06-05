import React from "react";

export default function Header(props) {
    return (
        <header>
            <nav className="navbar purple darken-3 text-success sticky-top">
                <ul className="container text-center">
                    <li className="nav-link">PokeMemory</li>
                    <li className="nav-link">{props.message}</li>
                    <li className="nav-link">Score: {props.score} | Top Score: {props.topScore}</li>
                </ul>
            </nav>

            <div className="jumbotron-fluid text-center p-2 clearfix">
                <h1 className="display-3">PokeMemory</h1>
                <p className="lead">
                    Try not to click on the same pokemon twice in a row, trust me it's a lot more difficult than you think.
                </p>
            </div>
        </header>
    );
}
