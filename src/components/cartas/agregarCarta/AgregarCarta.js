import React, { useState } from 'react';
import './AgregarCarta.css';
import { FormAgregarCarta } from './FormAgregarCarta';
import { RespuetaSubmit } from './RespuetaSubmit';

export const AgregarCarta = () => {
    const [save, setSave] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSave(true);
    };
    
    return save === false ? ( <FormAgregarCarta handleSubmit={handleSubmit}/> ) : ( <RespuetaSubmit/> )

}
