import React from 'react';
import './FiltrosPedidos.css';

export const FiltrosPedidos = () => {
    return (
        <>
            <div className='fila jc-fe'>
                <select name="" >
                    <option value="24">Últimas 24 hs</option>
                </select>
            </div>
            <div className='fila'>
                <div className='col-12'>
                    <p>Filtros</p>
                </div>
                <div className='col-4'>
                    <div className='contenedor-input'>
                        <label htmlFor="">Número de orden</label>
                        <input type="text" className='cinput' />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='contenedor-input'>
                        <label htmlFor="">Local</label>
                        <input type="text" className='cinput' />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='contenedor-input'>
                        <label htmlFor="">Modalidad</label>
                        <select name="modalidad" className='cinput'>
                            <option value="0">Take Away</option>
                            <option value="1">Delivery</option>
                            <option value="2">En el local</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='fila'>
                <div className='col-3'>
                    <p>10 Resultados filtrados por:</p>
                </div>
                <div className='col-9'>
                    <button className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Martínez</button>
                    <button className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Recoleta</button>
                </div>
            </div>
        </>
    )
}
