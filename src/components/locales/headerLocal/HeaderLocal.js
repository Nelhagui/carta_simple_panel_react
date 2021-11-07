import React from 'react';
import './HeaderLocal.css';

export const HeaderLocal = ({data}) => {
    return (
        <div className="header-seccion">
            <div className="content-header">
                <div className='fila  ai-c'>
                    <div className='col-4  ai-c'>
                        <div className="conte-title-img-detalle ">
                            <img src="" alt="" />
                        </div>
                        <h1 className='ml-30'>{data.nombre}</h1>
                    </div>
                    <div className='col-3 jc-e'>
                        <p>Habilitado</p>
                        <img src="/img/activo.svg" alt="" />
                        <img src="/img/borrar.svg" alt="" />
                    </div>
                    <div className='col-5'>
                        <button className="btn-secundario btn-disabled mr-10">CANCELAR</button>
                        <button className="btn-primario btn-disabled ml-10">GUARDAR CAMBIOS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
