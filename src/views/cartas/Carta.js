import React from 'react';
import { useEffect} from 'react';
import { EdicionCarta } from '../../components/cartas/edicionCarta/EdicionCarta';
import axios from 'axios';
import { HeaderEdicionCarta } from '../../components/cartas/edicionCarta/headerEdiconCarta/HeaderEdicionCarta';
import { useContext } from 'react';
import { DataCartaContext } from '../../components/context/DataCartaContext';


export const Carta = ({match}) => {
    const { setData} = useContext(DataCartaContext);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/carta/'+match.params.id)
            .then(res => {
                setData(res.data);
            })
    }, [match])
    return (
        <>
          <HeaderEdicionCarta/>  
           <EdicionCarta/>
        </>
    )
}
