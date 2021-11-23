import React, { useState } from 'react';
import { FormCrearComboPaso1 } from './FormCrearComboPaso1';
import { FormCrearComboPaso2 } from './FormCrearComboPaso2';

export const FormCrearCombo = ({close}) => {
    const [siguiente, setSiguiente] = useState(false)
    return siguiente === false ? <FormCrearComboPaso1 siguiente={()=>setSiguiente(true)} close={close} /> : <FormCrearComboPaso2 volver={()=>setSiguiente(false)} close={close} />
}
