import React from 'react';
import './AgregarCarta.css';

export const AgregarCarta = () => {
    return (
        <div>
            <h1>Creá tu carta</h1>
            <form action="">
                <div className="cont-input">
                    <label className="ml-0" htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                </div>
                <div className="cont-input">
                    <label className="ml-0" htmlFor="nombre">Modalidad</label>
                    <div className="cont-btn-opciones">
                        <button className="btn-primario opciones">Take Away</button>
                        <button className="btn-secundario opciones">Delivery</button>
                        <button className="btn-secundario opciones">Consumo en local</button>
                    </div>
                </div>
                <div className="cont-input">
                    <label className="ml-0" htmlFor="publicar-en">Publicar en</label>
                    <input type="text" name="publicar-en" placeholder="Escribe el nombre del local" autoComplete="off"/>
                    <div className="cont-btn-selecciones">
                        <button className="btn-seleccionado"> <img src="/img/icon-sacar.svg" alt="" /> Martínez</button>
                        <button className="btn-seleccionado"> <img src="/img/icon-sacar.svg" alt="" /> Recoleta</button>
                    </div>
                </div>
                <div className="cont-input">
                    <div className="btn-acciones-modal">
                        <button className="btn-secundario">DESHACER</button>
                        <button className="btn-primario disabled">CREAR CARTA</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
