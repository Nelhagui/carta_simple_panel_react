import {React, useEffect, useState} from 'react';
import { Buscador } from '../../../../buscador/Buscador';
import { Modal } from '../../../../modal/Modal';
import { FormCrearProducto } from '../../../../producto/crearProducto/formCrearProducto/FormCrearProducto';
import { FormEditarProducto } from '../../../../producto/editarProducto/formEditarProducto/FormEditarProducto';
import { useContext } from 'react';
import { DataCartaContext } from '../../../../context/DataCartaContext';

export const TabProductos = () => {
    const {data} = useContext(DataCartaContext);
    const [open, setOpen] = useState(false);
    const close = ()=>{setOpen(false)};
    const [content, setContent] = useState(false);

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
                    <img className='icon-acciones' src="/img/activo.svg" alt="" />
                    <img className='icon-acciones' src="/img/icon-duplicar.svg" alt="" />
                    <img className='icon-acciones' src="/img/editar-base.svg" alt="" onClick={()=>{setContent(<FormEditarProducto id={producto.id} close={close}/>); setOpen(true)}}/>
                    <img className='icon-acciones' src="/img/borrar.svg" alt="" />
                </div>
            </div>
        </div>
        )
    return (
        <>
            <Modal children={content} open={open} close={close}/>
            <div className="fila jc-fe">
                <button className='btn-secundario btn-disabled'>ELIMINAR</button>
                <button className='btn-primario' onClick={ ()=>{setContent(<FormCrearProducto close={close}/>); setOpen(true)} } >CREAR PRODUCTO</button>
            </div> 
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
