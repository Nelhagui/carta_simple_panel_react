import React from 'react';
import { Link } from 'react-router-dom';

export const ItemLocales = ({local}) => {
    return (
        <div className="item-lista">
            <Link to={`/locales/${local.id}`} className="col-12" data={local}>
                <div className="col-4 jc-fs">
                    <p>{local.nombre}</p>
                </div>
                <div className="col-4">
                    <p >{local.direccion} {local.numeracion}, {local.localidad}</p>
                </div>
                <div className="col-4 jc-fe">
                    <div>
                        <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                        <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
