import React from 'react';
import { useState } from 'react';
import { ItemCarta } from '../itemCarta/ItemCarta';
import './ListaCartas.css';
import { ModalEdicionRapidaCarta } from '../edicionRapidaCarta/ModalEdicionRapidaCarta';

export const ListaCartas = ({cartas}) => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [dataCarta, setDataCarta] = useState(false)
    const funcinoSetCarta = (data) => { setDataCarta(data); setIsOpenEdit(true)}
    return (
        <>
            <ModalEdicionRapidaCarta open = {isOpenEdit} close = { () => setIsOpenEdit(false)} data={dataCarta}/>
            <div className="cont-nombre-columnas">
                <p>Nombre</p>
                <p>Modalidad</p>
                <p>Publicado en</p>
                <p>Acciones</p>
            </div>
            <div className="cont-lista-items">
                { cartas.map((item, index) => {
                    return <ItemCarta setCarta={funcinoSetCarta} carta={item} key={index}/>
                })}
            </div>
        </>
    )
}
