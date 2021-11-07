import React from 'react';
import './ModalEditarCarta.css';
import { EditarCarta } from './EditarCarta';

const DIV_MODAL_STYLE = {
    position : 'fixed',
    top: '50%',
    left: '50%',
    width: 'auto',
    transform : 'translate(-50%,-50%)',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    padding: '70px 100px',
    zIndex: 1000
}
const DIV_OVERLAY_STYLE = {
    position : 'fixed',
    top : 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor : 'rgba(196, 196, 196, 0.52)',
    zIndex : 1000
}

export const ModalEditarCarta = ({open, close, data}) => {
    if(!open) return null
    return (
        <>
            <div style = {DIV_OVERLAY_STYLE}/>
            <div style={DIV_MODAL_STYLE} className='conte-modal'>
                <div className='btn-cerrar-modal'>
                    <img onClick={close} src="/img/cerrar-modal.svg" alt="" />
                </div>
                <EditarCarta carta={data}/>
            </div>
        </>
    )
}
