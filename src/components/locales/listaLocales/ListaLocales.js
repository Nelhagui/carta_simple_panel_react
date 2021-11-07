import React from 'react';
import './ListaLocales.css';
import { ItemLocales } from '../itemLocales/ItemLocales';

export const ListaLocales = ({locales}) => {
    return (
        <>
            <div className="cont-nombre-columnas">
                <p>Locales</p>
                <p>Dirección</p>
                <p>Acciones</p>
            </div>
            <div className="cont-lista-items">
                {locales.map((item) => {
                    return <ItemLocales key={item.id} local={item}/>
                })}
            </div>
        </>
    )
}
