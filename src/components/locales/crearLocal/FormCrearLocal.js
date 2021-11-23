import React from 'react';
import { CrearInformacionLocal } from './crearInformacionLocal/CrearInformacionLocal';
import { CrearDiasHorarios } from './crearDiasHorarios/CrearDiasHorarios';
import { CrearRedesSociales } from './crearRedesSociales/CrearRedesSociales';
import { CrearCartasDelLocal } from './crearCartasDelLocal/CrearCartasDelLocal';
import { LinksFormCrearLocal } from './linksFormCrearLocal/LinksFormCrearLocal';

export const FormCrearLocal = () => {
    return (
        <>
            <LinksFormCrearLocal/>
            <CrearInformacionLocal/>
            <CrearDiasHorarios/>
            <CrearRedesSociales/>
            <CrearCartasDelLocal/>
        </>
    )
}
