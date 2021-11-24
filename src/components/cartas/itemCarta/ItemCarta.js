import React from 'react';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { DataCartaContext } from '../../context/DataCartaContext';

export const ItemCarta = ({setCarta, carta}) => {
    // const {setIdCarta} = useContext(DataCartaContext);

    const modalidadItems = carta.modalidades.map((modalidad, index) =>
        <li key={index}>
            {modalidad.nombre}
        </li>
    );
    return (
        <Link to={`/carta/${carta.id}`} className="item-lista">
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
                <img className="icon-acciones" src="/img/inicio-sesion/editar.svg" alt="editar" onClick={(e)=>{e.preventDefault(); setCarta(carta)}}/>
                <img className="icon-acciones" src="/img/inicio-sesion/activo.svg" alt="activo" />
                <img className="icon-acciones" src="/img/inicio-sesion/seleccion.svg" alt="detalle" />
            </div>
        </Link>
    )
}
