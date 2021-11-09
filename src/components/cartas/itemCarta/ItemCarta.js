import React from 'react'

export const ItemCarta = ({setCarta, carta}) => {

    const modalidadItems = carta.modalidades.map((modalidad, index) =>
        <li key={index}>
            {modalidad.nombre}
        </li>
    );
    return (
        <div className="item-lista">
            <div className="col-4">
                <p className="item-lista-col-1">{carta.nombre}</p>
            </div>
            <div className="col-4">
                <ul className="lista-modalidad">
                    {modalidadItems}
                </ul>
            </div>
            <div className="col-4">
                <p className="item-lista-col-3">4</p>
            </div>
            <div className="col-4">
                <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" onClick={()=>{setCarta(carta)}}/>
                <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
            </div>
        </div>
    )
}
