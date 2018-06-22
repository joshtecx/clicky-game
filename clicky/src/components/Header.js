import React from "react";

const Header = props => (
    <header className="header">
        <h1>Atlanta Icons</h1>
        <h3> Count: {props.count} </h3>
        <h3> Score: {props.score} </h3>
    </header>
);

export default Header;