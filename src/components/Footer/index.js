import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
    return (
        <>
            <footer className={"footer_secondary"}>
                <ul>
                    <a href="https://disneytermsofuse.com/" target="_blank">
                        <li>Term of Use</li>
                    </a>
                    <a
                        href="https://privacy.thewaltdisneycompany.com/en/"
                        target="_blank"
                    >
                        <li>Privacy Policy</li>
                    </a>
                    <a
                        href="https://www.marvel.com/corporate/license_tou"
                        target="_blank"
                    >
                        <li>License</li>
                    </a>
                    <a href="https://developer.marvel.com/" target="_blank">
                        <li>Marvel Comics API </li>
                    </a>
                </ul>
            </footer>
            <footer className={"footer_primary"}>
                <p>Desenvolvido por Hebert Montarroyos</p>
                <p className={"licence"}>©2021 MARVEL</p>
            </footer>
        </>
    );
}

export default Footer;
