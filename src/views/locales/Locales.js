import React from 'react';
import { ListaLocales } from '../../components/locales/listaLocales/ListaLocales';
import { HeaderLocales } from '../../components/locales/headerLocales/HeaderLocales';
import { Buscador } from '../../components/buscador/Buscador';

export const Locales = () => {
    return (
        <>
            <HeaderLocales/>
            <Buscador/>
            <ListaLocales/>
        </>
    )
}
