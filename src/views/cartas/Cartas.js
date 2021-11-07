import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import { HeaderCartas } from "../../components/cartas/headerCartas/HeaderCartas";
import { Buscador } from '../../components/buscador/Buscador';
import { ListaCartas } from "../../components/cartas/listaCartas/ListaCartas";
import { ModalAgregarCarta } from "../../components/cartas/agregarCarta/ModalAgregarCarta";

export const Cartas = () => {
    const [isOpenAdd, setIsOpenAdd] = useState(false); 
    const [cartas, setCartas] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cartas')
            .then(res => {
                setCartas(res.data);
                console.log(res.data)
            })
    }, [])
    return (
        <>
            <ModalAgregarCarta open = {isOpenAdd} close = { () => setIsOpenAdd(false)} />
            <HeaderCartas openModal = {setIsOpenAdd}/>
            <Buscador/>
            <ListaCartas cartas={cartas}/>
        </>
    );
};