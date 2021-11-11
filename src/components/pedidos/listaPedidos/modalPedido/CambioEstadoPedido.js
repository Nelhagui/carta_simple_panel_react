import React from 'react'
import './CambioEstadoPedido.css'

export const CambioEstadoPedido = () => {
    return (
        <>
            <form>
                <div className='fila'>
                    <div className='col-9'>
                        <h1>PEDIDO 1241</h1>
                        <button className='btn-detalle-pedido'>Recibido</button>
                        <p> 15:31 30/10</p>
                    </div>
                    <div className='col-3 icon-modal-pedido'>
                        <img src="./img/whatsapp.svg" alt="" />
                        <img src="./img/imprimir.svg" alt="" />
                    </div>
                </div>
                <div className='fila-nowrap resumen-pedido'>
                    <div className='col-4'>
                        <div className='fila card-resumen-item-pedido'>
                            <p className='card-titulo'>Nombre</p>
                            <p>Nelson</p>
                        </div>
                    </div>
                    <div className='col-4 ml-20 mr-20'>
                        <div className='fila card-resumen-item-pedido'>
                            <p className='card-titulo'>Modalidad</p>
                            <p>Take Away</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='fila card-resumen-item-pedido'>
                            <p className='card-titulo'>Medio de pago</p>
                            <p>Efectivo</p>
                        </div>
                    </div>
                </div>
                <div className='fila detalle-items-pedido'>
                    <div className='contenedor-detalle-item'>
                        <p className='p-item'>
                            <span className='span-descripcion'>Papas con cheddar</span>
                            <span className='span-precio'>56´72</span>
                        </p>
                        <p className='p-item'>
                            <span className='span-descripcion'>Coca-Cola</span>
                            <span className='span-precio'>56´72</span>
                        </p>
                    </div>
                </div>
                <div className='fila jc-fe'>
                    <p>TOTAL $1250</p>
                </div>
                <div className='fila jc-c'>
                    <button className='btn-secundario' >RECHAZAR</button>
                    <button className='btn-primario' >ACEPTAR PEDIDO</button>
                </div>
            </form>
        </>
    )
}
