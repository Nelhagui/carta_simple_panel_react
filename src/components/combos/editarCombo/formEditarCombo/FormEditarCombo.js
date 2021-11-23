import React, { useState } from 'react';
import { FormEditarComboPaso1 } from './FormEditarComboPaso1';
import { FormEditarComboPaso2 } from './FormEditarComboPaso2';

export const FormEditarCombo = ({close}) => {
    const [siguiente, setSiguiente] = useState(false)
    return siguiente === false ? <FormEditarComboPaso1 siguiente={()=>setSiguiente(true)} close={close}/> : <FormEditarComboPaso2 close={close} volver={()=>setSiguiente(false)}/>
}
