import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { HeaderLocal } from '../../components/locales/headerLocal/HeaderLocal';
import { FormLocal } from '../../components/locales/formLocal/FormLocal';

export const Local = ({match}) => {
    const [dataMatch, setDataMatch] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/local/'+match.params.id)
            .then(res => {
                setDataMatch(res.data);
            })
    }, [match])
    return (
        <>
            <HeaderLocal data={dataMatch}/>
            <FormLocal data={dataMatch}/>
        </>
    )
}
