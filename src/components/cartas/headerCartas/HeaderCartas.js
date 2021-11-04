import React from 'react'

export const HeaderCartas = ({openModal}) => {
    return (
        <div className="header-seccion">
            <div className="content-header">
                <h1>Cartas</h1>
                <div>
                    <button className="btn-principales btn-secundario btn-disabled mr-10">ELIMINAR</button>
                    <button className="btn-principales btn-primario ml-10" onClick = {() => openModal(true)}>CREAR CARTA</button>
                </div>
            </div>
        </div>
    )
}
