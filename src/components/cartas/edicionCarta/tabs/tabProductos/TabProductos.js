import {React, useEffect, useState} from 'react';
import { Buscador } from '../../../../buscador/Buscador';

export const TabProductos = ({data}) => {
    const [prodTabProductos, setProdTabProductos] = useState([])
    
    useEffect(() => {
        const productoss = data.filter((item) => {
            return (item.productos.length > 0)
        });
        const _new = productoss.map((item) => {
            return item.productos
        });
    
        const arr = [];
        for (let i = 0; i < _new.length; i++)
            for (let ii = 0; ii < _new[i].length; ii++)
                arr.push(_new[i][ii]);
        setProdTabProductos(arr);
    }, [data])

    const itemsProductos = prodTabProductos.map( (producto, index) =>         
        <div className='item-lista-tabs' key={index}>
            <div className="fila mb-17">
                <div className="col-3 jc-fs">
                    <img src="" alt="" />
                    {producto.nombre} {index}
                </div>
                <div className="col-3 jc-fs">{producto.codigo}</div>
                <div className="col-3 jc-fs">{producto.precio_final}</div>
                <div className="col-3 jc-sa">
                    <img src="/img/activo.svg" alt="" />
                    <img src="/img/icon-duplicar.svg" alt="" />
                    <img src="/img/editar-base.svg" alt="" />
                    <img src="/img/borrar.svg" alt="" />
                </div>
            </div>
        </div>
        )
    return (
        <>
            <Buscador/>
            <div className="fila">
                <div className='col-4'> Categoría </div>
                <div className='col-4'> Descripción </div>
                <div className='col-4 jc-fe'> Acciones </div>
            </div>
                {itemsProductos}
        </>
    )
}
