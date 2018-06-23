import React from "react";
import "./Header.css";

const Header = props => (
    <header className="header row">
        <h1 className="header-content">Atlanta Icons</h1>
        <h1 className="header-content"> Count: {props.count} </h1>
        <h1 className="header-content"> Score: {props.score} </h1>
    </header>
);

export default Header;