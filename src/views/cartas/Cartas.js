import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import { HeaderCartas } from "../../components/cartas/headerCartas/HeaderCartas";
import { Buscador } from '../../components/buscador/Buscador';
import { ListaCartas } from "../../components/cartas/listaCartas/ListaCartas";
import { ModalAgregarCarta } from "../../components/cartas/agregarCarta/ModalAgregarCarta";

export const Cartas = () => {
    const [rutaBusquedaCartas] = useState("http://127.0.0.1:8000/api/cartas/busqueda/")
    const initialStateUrl = ('http://127.0.0.1:8000/api/cartas');
    const [url, setUrl] = useState(initialStateUrl);
    const [isOpenAdd, setIsOpenAdd] = useState(false); 
    const [cartas, setCartas] = useState([]);
    if(!url){setUrl(initialStateUrl)}
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setCartas(res.data);
            })
    }, [url])
    return (
        <>
            <ModalAgregarCarta open = {isOpenAdd} close = { () => setIsOpenAdd(false)} />
            <HeaderCartas openModal = {setIsOpenAdd}/>
            <Buscador setUrl={setUrl} urlBusqueda={rutaBusquedaCartas}/>
            <ListaCartas cartas={cartas}/>
        </>
    );
};