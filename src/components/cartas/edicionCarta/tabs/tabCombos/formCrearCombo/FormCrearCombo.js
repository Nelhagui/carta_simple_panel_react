import React, { useState } from 'react';
import { FormCrearComboPaso1 } from './FormCrearComboPaso1';
import { FormCrearComboPaso2 } from './FormCrearComboPaso2';

export const FormCrearCombo = ({close}) => {
    const [siguiente, setSiguiente] = useState(false)
    return siguiente === false ? <FormCrearComboPaso1 close={close} siguiente={()=>setSiguiente(true)}/> : <FormCrearComboPaso2 close={close} volver={()=>setSiguiente(false)}/>
}
