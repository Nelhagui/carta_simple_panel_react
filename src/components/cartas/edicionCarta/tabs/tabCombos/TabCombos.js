import {React, useState, useEffect} from 'react'
import { Buscador } from '../../../../buscador/Buscador';
import { ModalCrearCombo } from './modalCrearCombo/ModalCrearCombo';

export const TabCombos = ({data}) => {
    const [isOpenAdd, setIsOpenAdd] = useState(false); 
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
            <ModalCrearCombo open={isOpenAdd} close={()=>setIsOpenAdd(false)} />
            <div className="fila jc-fe">
                <button className='btn-secundario btn-disabled'>ELIMINAR</button>
                <button className='btn-primario' onClick={() => setIsOpenAdd(true)} >CREAR COMBOß</button>
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
