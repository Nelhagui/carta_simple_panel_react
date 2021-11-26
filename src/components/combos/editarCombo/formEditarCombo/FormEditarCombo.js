import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormEditarComboPaso1 } from './FormEditarComboPaso1';
import { FormEditarComboPaso2 } from './FormEditarComboPaso2';

export const FormEditarCombo = ({id, close}) => {
    const [siguiente, setSiguiente] = useState(false)

    const initialState = {
        nombre: "",
        codigo: "",
        precio_base: "",
        markup_porcentaje: "",
        markup_precio_fijo: "",
        precio_final: "",
        descripcion: "",
        imagen: "",
        icono: "",
        apto: "",
        habilitado: "",
    };
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/combo/'+id)
            .then(res => {
                setValues(res.data);
            })
    }, [id])

    return siguiente === false ? <FormEditarComboPaso1 siguiente={()=>setSiguiente(true)} close={close} values={values}/> : <FormEditarComboPaso2 values={values} close={close} volver={()=>setSiguiente(false)}/>
}
