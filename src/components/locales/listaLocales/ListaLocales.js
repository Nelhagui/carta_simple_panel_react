import React from 'react';
import './ListaLocales.css';

export const ListaLocales = () => {
    return (
        <>
            <div className="cont-nombre-columnas">
                <p>Locales</p>
                <p>Dirección</p>
                <p>Acciones</p>
            </div>
            <div className="cont-lista-items">
                <div className="item-lista">
                    <div className="col-4 jc-c">
                        <p>Local 1</p>
                    </div>
                    <div className="col-4">
                        <p >Avenida Maipú 2100, Vte Lopez</p>
                    </div>
                    <div className="col-4">
                        <div>
                            <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                            <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
