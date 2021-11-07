import React from 'react'

export const RedesSociales = ({data}) => {
    return (
        <div className='cont-redes-del-local'>
            <div className='fila fd-c'>
                <h1>Redes sociales</h1>
                <hr className='mt-18 mb-18'/>
            </div>  
            <div className='fila fd-c'>
                <div className="contenedor-input">
                    <label htmlFor="nombre" className="label">Facebook</label>
                    <input className="cinput mt-17" type="text" name="facebook" placeholder="/cartasimple" autoComplete="off"/>
                </div>
                <div className="contenedor-input">
                    <label htmlFor="nombre" className="label">Instagram</label>
                    <input className="cinput mt-17" type="text" name="instagram" placeholder="@cartasiimple" autoComplete="off"/>
                </div>
                <div className="contenedor-input">
                    <label htmlFor="nombre" className="label">Twitter</label>
                    <input className="cinput mt-17" type="text" name="twitter" placeholder="@cartasimple" autoComplete="off"/>
                </div>
                <div className="contenedor-input">
                    <label htmlFor="nombre" className="label">Otro</label>
                    <input className="cinput mt-17" type="text" name="otra_red" placeholder="Ingrese la url" autoComplete="off"/>
                </div>
            </div>
        </div>
    )
}
