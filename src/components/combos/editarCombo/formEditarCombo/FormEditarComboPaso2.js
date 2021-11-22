import React from 'react';
import { useState } from 'react';
import { Modal } from '../../../modal/Modal';
import { FormCrearProducto } from '../../../producto/crearProducto/formCrearProducto/FormCrearProducto';

export const FormEditarComboPaso2 = ({volver}) => {
    const [isOpenAddP, setIsOpenAddP] = useState(false); 
    return (
        <div>
            <Modal children={<FormCrearProducto/>} open={isOpenAddP}/>
            <h1>Agregá productos a tu combo</h1>
            <div className="contenedor-input mt-28">
                <label htmlFor="categorias">Productos</label>
                <input className="cinput mt-13 mb-23" type="text" name="categorias" placeholder="Escribe el nombre del producto" autoComplete="off"/>
                <div className="contenedor-items-seleccionados">
                    <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt=""/> Medialuna</button>
                    <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Café con leche</button>
                </div>
            </div>
            <div className='fila mt-28'>
                <span onClick={()=>setIsOpenAddP(true)}>+ Crear producto</span>
            </div>

            <div className='fila'>
                <div className="btn-acciones-modal">
                    <button className="btn-secundario" type='button' onClick={volver}>VOLVER</button>
                    <button className="btn-primario btn-disabled" type="submit">CREAR COMBO</button>
                </div>
            </div>
        </div>
    )
}
