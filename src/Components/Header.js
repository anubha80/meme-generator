import React from "react";


export default function Header(){
    return (
        <header className="header">
            <img className="header-image" src={require('../Images/troll-face.png')} alt="troll-face" />
            <h2 className="header-title">Meme Generator</h2>
        </header>
    );
}