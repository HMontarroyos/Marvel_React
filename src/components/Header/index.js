import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Img from "../../assets/marvel.gif";

function Header() {
    return (
        <>
            <header className={"header_primary"}>
                <span>
                    <Link to="/">
                        <img src={Img} alt={"logo_marvel"} className={"logo"} />
                    </Link>
                </span>
            </header>
            <header className={"header_secondary"}>
                <ul>
                    <Link to="/characters">
                        <li>Characters</li>
                    </Link>
                    <Link to="/comics">
                        <li>Comics</li>
                    </Link>
                    <Link to="/creators">
                        <li>Creators</li>
                    </Link>
                    <Link to="/events">
                        <li>Events</li>
                    </Link>
                    <Link to="/series">
                        <li>Series</li>
                    </Link>
                    <Link to="/stories">
                        <li>Stories</li>
                    </Link>
                </ul>
            </header>
        </>
    );
}

export default Header;
