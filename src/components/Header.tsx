import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Rick and Morty Characters" />
        </header>
    );
}
