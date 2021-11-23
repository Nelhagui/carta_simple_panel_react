import React from 'react';
import './HeaderLocales.css';
import { Link } from 'react-router-dom';

export const HeaderLocales = () => {
    return (
        <div className="header-seccion">
            <div className="content-header">
                <h1>Locales</h1>
                <div>
                    <button className="btn-principales btn-secundario btn-disabled mr-10">ELIMINAR</button>
                    <Link to={`/locales/agregar`}>
                        <button className="btn-principales btn-primario ml-10">AGREGAR LOCAL</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
