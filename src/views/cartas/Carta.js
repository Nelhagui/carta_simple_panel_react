import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Carta = ({match}) => {
    const [dataMatch, setDataMatch] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/carta/'+match.params.id)
            .then(res => {
                setDataMatch(res.data);
            })
    }, [match])
    return (
        <div>
           {dataMatch.nombre}
        </div>
    )
}
