import React from "react";
import "./SideBarMenu.css";
import { Link } from "react-router-dom";

export const SideBarMenu = () => {
    return (
        <div className="content_sidebarnav">
            <nav>
                <ul>
                    <Link to="/locales">
                        <li>Locales</li>
                    </Link>
                    <Link to="/cartas">
                        <li>Cartas</li>
                    </Link>
                    <Link to="/categorias">
                        <li>Categorías</li>
                    </Link>
                    <Link to="/productos">
                        <li>Producto</li>
                    </Link>
                    <Link to="/ordenes">
                        <li>Ordenes</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};
