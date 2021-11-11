import React from 'react';
import './ListaPedidos.css';

export const ListaPedidos = ({openModal}) => {
    return (
        <>
            <div className='fila cont-columnas-pedidos'>
                <div className='col-4'>
                    <div className='fila'>
                        <div className='resumen-columna-pedido'>
                            <p>40</p>
                            <p>Recibidos</p>
                        </div>
                        <div className='columna-pedido'>
                            <div className='item-pedido' onClick={()=>{openModal(true)}}>
                                <div className='fila'>
                                    <div className='col-8'>
                                        <div className='fila'>
                                            <p>15436 * 15:20 30/10</p>
                                            <p>Take Away</p>
                                        </div>            
                                    </div>
                                    <div className='col-4'>
                                        <div className='fila'>
                                            <p>$1250</p>
                                            <p>Efectivo</p>
                                            <div>
                                                <img src="./img/whatsapp.svg" alt="" />
                                                <img src="./img/imprimir.svg" alt="" />
                                                <img src="./img/check-ok.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='fila'>
                        <div className='resumen-columna-pedido'>
                            <p>40</p>
                            <p>Recibidos</p>
                        </div>
                        <div className='columna-pedido'>
                            {/* aca va item */}
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='fila'>
                        <div className='resumen-columna-pedido'>
                            <p>40</p>
                            <p>Recibidos</p>
                        </div>
                        <div className='columna-pedido'>
                            {/* aca va item */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
