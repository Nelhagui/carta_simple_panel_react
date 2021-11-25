import {React, useState} from 'react';
import { Buscador } from '../../../../buscador/Buscador';
import { Modal } from '../../../../modal/Modal';
import { FormCrearProducto } from '../../../../producto/crearProducto/formCrearProducto/FormCrearProducto';
import { FormEditarProducto } from '../../../../producto/editarProducto/formEditarProducto/FormEditarProducto';


export const TabProductos = ({data, setData}) => {

    const [open, setOpen] = useState(false);
    const close = ()=>{setOpen(false)};
    const [content, setContent] = useState(false);
    const itemsProductos = [];

    for (let i = 0; i < data.length; i++) 
    {
        if(data[i].productos.length > 0)
        {
            const productos = data[i].productos.map( (producto, index) => 
            <div className="fila" key={index}>
                <div className='item-lista-tabs'>
                    <div className="fila mb-17">
                        <div className="col-3 jc-fs">
                            <img src="" alt="" />
                            {producto.nombre}
                        </div>
                        <div className="col-3 jc-fs">{producto.codigo}</div>
                        <div className="col-3 jc-fs">${producto.precio_final}</div>
                        <div className="col-3 jc-sa">
                            <img className='icon-acciones' src="/img/activo.svg" alt="" />
                            <img className='icon-acciones' src="/img/icon-duplicar.svg" alt="" />
                            <img className='icon-acciones' src="/img/editar-base.svg" alt="" onClick={()=>{setContent(<FormEditarProducto id={producto.id} close={close} data={data} setData={setData}/>); setOpen(true)}}/>
                            <img className='icon-acciones' src="/img/borrar.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            )
            itemsProductos.push(productos);
        }
        
    }

    return (
        <>
            <Modal children={content} open={open} close={close}/>
            <div className="fila jc-fe">
                <button className='btn-secundario btn-disabled'>ELIMINAR</button>
                <button className='btn-primario' onClick={ ()=>{setContent(<FormCrearProducto close={close}/>); setOpen(true)} } >CREAR PRODUCTO</button>
            </div> 
            <Buscador/>
            <div className="fila">
                <div className='col-3'> Nombre </div>
                <div className='col-3'> Codigo </div>
                <div className='col-3'> Precio </div>
                <div className='col-3 jc-c'> Acciones </div>
            </div>
            {itemsProductos}
        </>
    )
}
