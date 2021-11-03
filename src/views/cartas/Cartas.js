import React from "react";
import { HeaderCartas } from "../../components/cartas/headerCartas/HeaderCartas";
import { Buscador } from '../../components/buscador/Buscador';
import { ListaCartas } from "../../components/cartas/listaCartas/ListaCartas";
import { Modal } from "../../components/modal/Modal";
import { AgregarCarta } from "../../components/cartas/agregarCarta/AgregarCarta";

export const Cartas = () => {
    return (
        <>
            <Modal>
                <AgregarCarta/>
            </Modal>
            <HeaderCartas/>
            <Buscador/>
            <ListaCartas/>
        </>
    );
};
