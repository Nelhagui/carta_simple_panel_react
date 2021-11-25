import React from "react";
import "./SideBarMenu.css";
import { NavLink } from 'react-router-dom';

export const SideBarMenu = () => {
    return (
        <div className="content_sidebarnav">
            <nav>
                <img src="/img/logo.png" className="logo-sidebar" alt="" />
                <ul className="nav_items">
                    <NavLink to="/" exact activeClassName="item-active">
                        <li>
                            <div className='cont-icon-menu'><img src="/img/navbar/inicio.svg" alt=""/></div> <span>INICIO</span>
                        </li>
                    </NavLink>
                    <NavLink to="/locales" activeClassName="item-active">
                        <li>
                            <div className='cont-icon-menu'><img src="/img/navbar/locales.svg" alt=""/></div> <span>LOCALES</span>
                        </li>
                    </NavLink>
                    <NavLink to="/cartas" activeClassName="item-active">
                        <li>
                            <div className='cont-icon-menu'><img src="/img/navbar/cartas.svg" alt=""/></div> <span>CARTAS</span>
                        </li>
                    </NavLink>
                    <NavLink to="/pedidos" activeClassName="item-active">
                        <li>
                            <div className='cont-icon-menu'><img src="/img/navbar/pedidos.svg" alt=""/></div> <span>PEDIDOS</span>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};
