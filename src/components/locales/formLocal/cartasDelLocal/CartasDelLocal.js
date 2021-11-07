import React from 'react'

export const CartasDelLocal = () => {
    return (
        <div className='cont-cartas-local'>
            <div className='fila fd-c'>
                <h1>Cartas</h1>
                <hr className='mt-18 mb-18'/>
            </div>  
            <div className='fila fd-c'>
                <div className="contenedor-input">
                    <h2 htmlFor="label" className="label">Delivery</h2>
                    <label htmlFor="carta_delivery" className="label">Carta a mostrar</label>
                    <input className="cinput mt-17" type="text" name="carta_delivery" placeholder="Escribe la carta" autoComplete="off"/>
                </div>
                <div className="contenedor-input">
                    <h2 htmlFor="label" className="label">Take away</h2>
                    <label htmlFor="carta_take_away" className="label">Carta a mostrar</label>
                    <input className="cinput mt-17" type="text" name="carta_take_away" placeholder="Escribe la carta" autoComplete="off"/>
                </div>
                <div className="contenedor-input">
                    <h2 className="label">En el local</h2>
                    <label htmlFor="carta_en_local" className="label">Carta a mostrar</label>
                    <input className="cinput mt-17" type="text" name="carta_en_local" placeholder="Escribe la carta" autoComplete="off"/>
                </div>
            </div>
        </div>
    )
}
