import React from 'react';

export const FormAgregarCarta = ({handleSubmit}) => {
    return (
        <div>
            <h1>Creá tu carta</h1>
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <label htmlFor="nombre" className="label">Nombre</label>
                    <input className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                </div>
                <div className="contenedor-input mt-28">
                    <label htmlFor="nombre"> Modalidad</label>
                    <div className="cont-btn-opciones mt-13">
                        <button type='button' className="btn-opciones seleccionado">Take Away</button>
                        <button type='button' className="btn-opciones" >Delivery</button>
                        <button type='button' className="btn-opciones">Consumo en local</button>
                    </div>
                </div>
                <div className="contenedor-input mt-28">
                    <label htmlFor="publicar-en">Publicar en</label>
                    <input className="cinput mt-13 mb-23" type="text" name="publicar-en" placeholder="Escribe el nombre del local" autoComplete="off"/>
                    <div className="contenedor-items-seleccionados">
                        <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Martínez</button>
                        <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Recoleta</button>
                    </div>
                </div>
                <div className="contenedor-input mt-26">
                    <div className="btn-acciones-modal">
                        <button className="btn-principales btn-secundario">DESHACER</button>
                        <button className="btn-principales btn-primario btn-disabled" type="submit">CREAR CARTA</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
