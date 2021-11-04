import React from 'react'

export const Filtros = () => {
    return (
        <div>
            <h1>Filtros</h1>
            <form action="">
                <div className="cont-input">
                    <label className="ml-0" htmlFor="nombre">Modalidad</label>
                    <div className="cont-btn-opciones">
                        <button className="btn-primario opciones">Take Away</button>
                        <button className="btn-secundario opciones">Delivery</button>
                        <button className="btn-secundario opciones">Consumo en local</button>
                    </div>
                </div>
                <div className="cont-input">
                    <label className="ml-0" htmlFor="filtros-locales">Locales</label>
                    <input type="text" name="filtros-locales" placeholder="Escribe el nombre del local" autoComplete="off"/>
                    <div className="cont-btn-selecciones">
                        <button className="btn-seleccionado"> <img src="/img/icon-sacar.svg" alt="" /> Martínez</button>
                        <button className="btn-seleccionado"> <img src="/img/icon-sacar.svg" alt="" /> Recoleta</button>
                    </div>
                </div>
                <div className="cont-input">
                    <div className="btn-acciones-modal">
                        <button className="btn-secundario">BORRAR FILTROS</button>
                        <button className="btn-primario disabled">APLICAR FILTROS</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
