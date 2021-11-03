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
                <div className="item-conten">
                    <p className="item-nombre-local">Carta 1</p>
                    <ul>
                        <li>Take away</li>
                        <li>Delivery</li>
                        <li>En el local</li>
                    </ul>
                    <p className="cant-locales">12 Locales</p>
                    <div className="btn-acctiones-items">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
                <div className="item-conten">
                    <p className="item-nombre-local">Carta 2</p>
                    <ul>
                        <li>Take away</li>
                    </ul>
                    <p className="cant-locales">4 Locales</p>
                    <div className="btn-acctiones-items">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
                <div className="item-conten">
                    <p className="item-nombre-local">Carta 3</p>
                    <ul>
                        <li>Take away</li>
                    </ul>
                    <p className="cant-locales">3 Locales</p>
                    <div className="btn-acctiones-items">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
                <div className="item-conten">
                    <p className="item-nombre-local">Carta 4</p>
                    <ul>
                        <li>Take away</li>
                        <li>Delivery</li>
                    </ul>
                    <p className="cant-locales">1 Locales</p>
                    <div className="btn-acctiones-items">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
                <div className="item-conten">
                    <p className="item-nombre-local">Carta 5</p>
                    <ul>
                        <li>Delivery</li>
                    </ul>
                    <p className="cant-locales">1 Locales</p>
                    <div className="btn-acctiones-items">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
                <div className="item-conten">
                    <p className="item-nombre-local">Carta 6</p>
                    <ul>
                        <li>Take away</li>
                    </ul>
                    <p className="cant-locales">2 Locales</p>
                    <div className="btn-acctiones-items">
                        <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" />
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
            </div>
        </>
    )
}
