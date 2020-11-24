import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component{
    render() {
        return (
            <header style={headerStyle}>
                <h1 style={titleStyle}>Pokemon</h1>
                <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link>
            </header>
        )
    }
}


const headerStyle = {
    background: "#00ffff",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}


const titleStyle = {
    color: "#00008b"
}

export default Header;