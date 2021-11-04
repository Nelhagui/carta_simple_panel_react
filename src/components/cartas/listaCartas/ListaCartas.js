import React from 'react';
import './ListaCartas.css';

export const ListaCartas = () => {
    return (
        <>
            <div className="cont-nombre-columnas">
                <p>Nombre</p>
                <p>Modalidad</p>
                <p>Publicado en</p>
                <p>Acciones</p>
            </div>
            <div className="cont-lista-items">
                <div className="item-lista">
                    <div className="col-4">
                        <p className="item-lista-col-1">Carta 1</p>
                    </div>
                    <div className="col-4">
                        <ul className="lista-modalidad">
                            <li>Take away</li>
                            <li>Delivery</li>
                            <li>En el local</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <p className="item-lista-col-3">12 Locales</p>
                    </div>
                    <div className="col-4">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>

                <div className="item-lista">
                    <div className="col-4">
                        <p className="item-lista-col-1">Carta 1</p>
                    </div>
                    <div className="col-4">
                        <ul className="lista-modalidad">
                            <li>Take away</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <p className="item-lista-col-3">4 Locales</p>
                    </div>
                    <div className="col-4">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>

                <div className="item-lista">
                    <div className="col-4">
                        <p className="item-lista-col-1">Carta 1</p>
                    </div>
                    <div className="col-4">
                        <ul className="lista-modalidad">
                            <li>En el local</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <p className="item-lista-col-3">2 Locales</p>
                    </div>
                    <div className="col-4">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
            </div>
        </>
    )
}
