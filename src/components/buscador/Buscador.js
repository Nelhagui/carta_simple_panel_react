import React from 'react';
import { useState } from 'react';
import './Buscador.css';
import { Modal } from '../modal/Modal';
import { Filtros } from './filtros/Filtros';

export const Buscador = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal open = {isOpen} close = { () => setIsOpen(false)}>
                <Filtros/>
            </Modal>
            <div className="cont-buscador">
                <div className="col-52_61">
                    <input type="text" className="cinput icon-buscar"  placeholder="Buscador"/>
                </div>
                <div className="col-5">
                    <div className="cont-ordenar-por">
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
            {/* <div className="cont-buscador">
                <input type="text" className="cinput icon-buscar"  placeholder="Buscador"/>
                <span onClick={()=> setIsOpen(true)} className="btn-filtrar hps">Filtrar</span>
                <div className="cont-ordenar-por">
                    <select name="ordenar-por" id="ordenar-por">
                        <option value="0">Ordenar por más reciente</option>
                        <option value="1">Más reciente</option>
                        <option value="2">Más antiguo</option>
                        <option value="3">A-Z</option>
                        <option value="4">Z-A</option>
                    </select>
                </div>
            </div> */}
        </>
    )
}
