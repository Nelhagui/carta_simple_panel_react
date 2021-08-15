import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/salir">
                        <li>Cerrar sesion</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
};
