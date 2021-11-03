import React from 'react'

const DIV_MODAL_STYLE = {
    position : 'fixed',
    top: '50%',
    left: '50%',
    width: '60%',
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
const BTN_CERRAR_MODAL = {
    position : 'absolute',
    top : '22px',
    right : '22px',
    maxWidth:'14px'
}
export const Modal = ({children, open, close}) => {
    if(false) return null
    return (
        <>
            <div style = {DIV_OVERLAY_STYLE} className='conte-modal'/>
            <div style={DIV_MODAL_STYLE}>
                <div style={BTN_CERRAR_MODAL}>
                    <img onClick={close} src="/img/cerrar-modal.svg" alt="" />
                </div>
                {children}
            </div>
        </>
    )
}
