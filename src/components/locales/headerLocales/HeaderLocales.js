import React from 'react';
import './HeaderLocales.css';

export const HeaderLocales = () => {
    return (
        <div className="header-seccion">
            <div className="content-header">
                <h1>Locales</h1>
                <div>
                    <button className="btn-principales btn-secundario btn-disabled mr-10">ELIMINAR</button>
                    <button className="btn-principales btn-primario ml-10">AGREGAR LOCAL</button>
                </div>
            </div>
        </div>
    )
}
