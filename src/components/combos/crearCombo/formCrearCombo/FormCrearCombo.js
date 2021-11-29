import React, { useState } from 'react';
import { FormCrearComboPaso1 } from './FormCrearComboPaso1';
import { FormCrearComboPaso2 } from './FormCrearComboPaso2';

export const FormCrearCombo = ({close}) => {
    const [siguiente, setSiguiente] = useState(false)
    const [resultado, setResultado] = useState([]);
    const [celiaco, setCeliaco] = useState(false)
    const [vegano, setVegano] = useState(false)
    const [vegetariano, setVegetariano] = useState(false)
    
    return siguiente === false ? <FormCrearComboPaso1 siguiente={()=>setSiguiente(true)} close={close} resultado={resultado} setResultado={setResultado} celiaco={celiaco} setCeliaco={setCeliaco} vegano={vegano} setVegano={setVegano} vegetariano={vegetariano} setVegetariano={setVegetariano}/> : <FormCrearComboPaso2 volver={()=>setSiguiente(false)} close={close} />
}
