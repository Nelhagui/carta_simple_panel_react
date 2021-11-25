import React from 'react';
// import { useEffect} from 'react';
import { EdicionCarta } from '../../components/cartas/edicionCarta/EdicionCarta';
// import axios from 'axios';
import { HeaderEdicionCarta } from '../../components/cartas/edicionCarta/headerEdiconCarta/HeaderEdicionCarta';
// import { useContext } from 'react';
// import { DataCartaContext } from '../../components/context/DataCartaContext';


export const Carta = ({match}) => {
    return (
        <>
          <HeaderEdicionCarta/>  
           <EdicionCarta match={match}/>
        </>
    )
}
