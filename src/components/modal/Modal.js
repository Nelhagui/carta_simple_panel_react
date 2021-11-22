import React from 'react';
import './Modal.css';

export const Modal = ({children, open, close}) => {
    if(!open) return null
    return (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className='btn-cerrar-modal'>
                        <img onClick={close} src="/img/cerrar-modal.svg" alt="" />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
