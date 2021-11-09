import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ListaLocales } from '../../components/locales/listaLocales/ListaLocales';
import { HeaderLocales } from '../../components/locales/headerLocales/HeaderLocales';
import { Buscador } from '../../components/buscador/Buscador';

export const Locales = () => {

    const [rutaBusquedaCartas] = useState("http://127.0.0.1:8000/api/locales/busqueda/")
    const initialStateUrl = ('http://127.0.0.1:8000/api/locales');
    const [url, setUrl] = useState(initialStateUrl);
    if(!url){setUrl(initialStateUrl)}
    const [locales, setLocales] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setLocales(res.data);
            })
    }, [url])
    return (
        <>
            <HeaderLocales/>
            <Buscador setUrl={setUrl} urlBusqueda={rutaBusquedaCartas}/>
            <ListaLocales locales={locales}/>
        </>
    )
}
