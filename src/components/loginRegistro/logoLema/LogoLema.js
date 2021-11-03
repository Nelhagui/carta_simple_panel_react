import React from 'react';
import './LogoLema.css';

export const LogoLema = () => {
    return (
        <div className="cont-identidad">
            <div className="cont-logo-lema">
                <img src="/img/logo.png" alt="" className="logo-identidad"/>
                <p className="lema">Una herramienta, <strong>todas las soluciones.</strong></p>
            </div>
        </div>
    )
}