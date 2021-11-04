import React from "react";
import { useState } from "react";
import { HeaderCartas } from "../../components/cartas/headerCartas/HeaderCartas";
import { Buscador } from '../../components/buscador/Buscador';
import { ListaCartas } from "../../components/cartas/listaCartas/ListaCartas";
import { Modal } from "../../components/modal/Modal";
import { AgregarCarta } from "../../components/cartas/agregarCarta/AgregarCarta";

export const Cartas = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal open = {isOpen} close = { () => setIsOpen(false)} >
                <AgregarCarta/>
            </Modal>
            <HeaderCartas openModal = {setIsOpen}/>
            <Buscador/>
            <ListaCartas/>
        </>
    );
};
