import React from 'react';
import './HeaderLocales.css';

export const HeaderLocales = () => {
    return (
        <div className="header-seccion">
            <div className="content-header">
                <h1>Locales</h1>
                <div>
                    <button className="btn-secundario">ELIMINAR</button>
                    <button className="btn-primario">AGREGAR LOCAL</button>
                </div>
            </div>
        </div>
    )
}
