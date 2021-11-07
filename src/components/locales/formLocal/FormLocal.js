import React from 'react';
import { InformacionLocal } from './informacionLocal/InformacionLocal';
import { DiasHorarios } from './diasHorarios/DiasHorarios';
import { RedesSociales } from './redesSociales/RedesSociales';
import { CartasDelLocal } from './cartasDelLocal/CartasDelLocal';

export const FormLocal = ({data}) => {
    return (
        <>
            <InformacionLocal data={data}/>
            <DiasHorarios data={data}/>
            <RedesSociales data={data}/>
            <CartasDelLocal/>
        </>
    )
}
