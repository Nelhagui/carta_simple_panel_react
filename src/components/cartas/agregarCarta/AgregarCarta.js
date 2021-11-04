import React from 'react';
import './AgregarCarta.css';

export const AgregarCarta = () => {
    return (
        <div>
            <h1>Creá tu carta</h1>
            <form action="">
                <div className="contenedor-input">
                    <label htmlFor="nombre">Nombre</label>
                    <input className="cinput mt-12" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                </div>
                <div className="contenedor-input mt-6">
                    <label htmlFor="nombre">Modalidad</label>
                    <div className="cont-btn-opciones mt-12">
                        <button className="btn-opciones seleccionado">Take Away</button>
                        <button className="btn-opciones">Delivery</button>
                        <button className="btn-opciones">Consumo en local</button>
                    </div>
                </div>
                <div className="contenedor-input mt-26">
                    <label htmlFor="publicar-en">Publicar en</label>
                    <input className="cinput mt-12" type="text" name="publicar-en" placeholder="Escribe el nombre del local" autoComplete="off"/>
                    <div>
                        <button type="button" className="btn-items-seleccionados hover-t"> <img src="/img/icon-sacar.svg" alt="" /> Martínez</button>
                        <button type="button" className="btn-items-seleccionados hover-t"> <img src="/img/icon-sacar.svg" alt="" /> Recoleta</button>
                    </div>
                </div>
                <div className="contenedor-input mt-26">
                    <div className="btn-acciones-modal">
                        <button className="btn-principales btn-secundario">DESHACER</button>
                        <button className="btn-principales btn-primario disabled">CREAR CARTA</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
