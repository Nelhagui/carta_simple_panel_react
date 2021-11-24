import React from 'react'

export const ResultadoPeticion = ({respuesta}) => {
    return respuesta ? (
        <>
            <div className='col-12 jc-c mb-46'>
                <img src="/img/img-save.svg" alt="" />
            </div>
            <div className='col-12'>
                <h1>!Cambios guardados con éxito!</h1>
            </div>
        </>
    ) : (
        <div>
            Todo mal
        </div>
    )
}
