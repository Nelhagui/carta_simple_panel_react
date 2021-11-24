import {React, useState, useEffect} from 'react'
import { Buscador } from '../../../../buscador/Buscador';
import { FormCrearCombo } from '../../../../combos/crearCombo/formCrearCombo/FormCrearCombo';
import { FormEditarCombo } from '../../../../combos/editarCombo/formEditarCombo/FormEditarCombo';
import { Modal } from '../../../../modal/Modal';
import { useContext } from "react";
import { DataCartaContext } from "../../../../context/DataCartaContext";

export const TabCombos = () => {

    const {data} = useContext(DataCartaContext);

    const [open, setOpen] = useState(false);
    const close = ()=>{setOpen(false)};
    const [content, setContent] = useState(false);

    const [prodTabCombos, setProdTabCombos] = useState([])
    useEffect(() => {
        const combos = data.filter((item) => {
            return (item.combos.length > 0)
        });
        const combosMap = combos.map((item) => {
            return item.combos
        });
    
        const arrCombos = [];
        for (let i = 0; i < combosMap.length; i++)
            for (let ii = 0; ii < combosMap[i].length; ii++)
                arrCombos.push(combosMap[i][ii]);
        setProdTabCombos(arrCombos);
    }, [data])

    const itemsCombos = prodTabCombos.map( (combo, index) =>         
        <div className='item-lista-tabs' key={index}>
            <div className="fila mb-17">
                <div className="col-3 jc-fs">
                    <img src="" alt="" />
                    {combo.nombre} {index}
                </div>
                <div className="col-3 jc-fs">{combo.codigo}</div>
                <div className="col-3 jc-fs">{combo.precio_final}</div>
                <div className="col-3 jc-sa">
                    <img className='icon-acciones' src="/img/activo.svg" alt="" />
                    <img className='icon-acciones' src="/img/icon-duplicar.svg" alt="" />
                    <img className='icon-acciones' src="/img/editar-base.svg" alt="" onClick={()=>{setContent(<FormEditarCombo close={close}/>); setOpen(true)} } />
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
                <button className='btn-primario' onClick={ ()=>{setContent(<FormCrearCombo close={close}/>); setOpen(true)} } >CREAR COMBO</button>
            </div> 
            <Buscador/>
            <div className="fila">
                <div className='col-4'> Categoría </div>
                <div className='col-4'> Descripción </div>
                <div className='col-4 jc-fe'> Acciones </div>
            </div>
                {itemsCombos}
        </>
    )
}
