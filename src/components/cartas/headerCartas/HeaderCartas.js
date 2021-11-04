import React from 'react'

export const HeaderCartas = ({openModal}) => {
    return (
        <div className="header-seccion">
            <div className="content-header">
                <h1>Cartas</h1>
                <div>
                    <button className="btn-principales btn-secundario">ELIMINAR</button>
                    <button className="btn-principales btn-primario" onClick = {() => openModal(true)}>CREAR CARTA</button>
                </div>
            </div>
        </div>
    )
}
