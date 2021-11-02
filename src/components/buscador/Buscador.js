import React from 'react';
import './Buscador.css';

export const Buscador = () => {
    return (
        <div className="cont-buscador">
            <input type="text" className="buscador" placeholder="Buscador"/>
            <span>Filtrar</span>
            <div className="cont-ordenar-por">
                <select name="ordenar-por" id="ordenar-por">
                    <option value="0">Ordenar por más reciente</option>
                    <option value="1">Más reciente</option>
                    <option value="2">Más antiguo</option>
                    <option value="3">A-Z</option>
                    <option value="4">Z-A</option>
                </select>
            </div>
        </div>
    )
}
