import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ListaLocales } from '../../components/locales/listaLocales/ListaLocales';
import { HeaderLocales } from '../../components/locales/headerLocales/HeaderLocales';
import { Buscador } from '../../components/buscador/Buscador';

export const Locales = () => {
    const [locales, setLocales] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/locales')
            .then(res => {
                setLocales(res.data);
            })
    }, [])
    return (
        <>
            <HeaderLocales/>
            <Buscador/>
            <ListaLocales locales={locales}/>
        </>
    )
}
