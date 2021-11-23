import React from 'react';
import './Modal.css';

export const Modal2doNivel = ({children, openn, closee}) => {
    if(!openn) return null
    return (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className='btn-cerrar-modal'>
                        <img onClick={closee} src="/img/cerrar-modal.svg" alt="" />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
