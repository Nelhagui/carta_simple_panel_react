import React from 'react';
import { useState } from 'react';
import './Buscador.css';
import { Modal } from '../modal/Modal';
import { Filtros } from './filtros/Filtros';

export const Buscador = ({setUrl, urlBusqueda}) => {
    const [isOpen, setIsOpen] = useState(false);

    const busqueda = (e) => {
        if (e.target.value.trim().length < 1) {
            setUrl(false);
        }
        if (e.keyCode === 13) {
            e.preventDefault();
            setUrl(urlBusqueda+e.target.value.trim());
        }
    };
    return (
        <>
            <Modal open = {isOpen} close = { () => setIsOpen(false)}>
                <Filtros/>
            </Modal>
            <div className="cont-buscador">
                <div className="col-52_61">
                    <input type="text" className="cinput icon-buscar"  placeholder="Buscador" onKeyUp={(e)=>{busqueda(e)}} autoComplete='off'/>
                </div>
                <div className="col-5">
                    <div className="col-2">
                        <span onClick={()=> setIsOpen(true)} className="btn-filtrar hps">Filtrar</span>
                    </div>
                    <div className="col-10 cont-ordenar-por">
                        <select name="ordenar-por" id="ordenar-por">
                            <option value="0">Ordenar por más reciente</option>
                            <option value="1">Más reciente</option>
                            <option value="2">Más antiguo</option>
                            <option value="3">A-Z</option>
                            <option value="4">Z-A</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="fila cont-filtros mb-48">
                <p> 4 resultados filtrando por:</p>
                <div>
                    <button className='btn-items-seleccionados'> <img src="/img/icon-sacar.svg" alt="" /> Take away</button>
                    <button className='btn-items-seleccionados'> <img src="/img/icon-sacar.svg" alt="" /> Martínez</button>
                    <button className='btn-items-seleccionados'> <img src="/img/icon-sacar.svg" alt="" /> Recolete</button>
                </div>
            </div>
        </>
    )
}
