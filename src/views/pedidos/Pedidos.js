import React from 'react'
import { useState } from 'react';
import { HeaderPedido } from '../../components/pedidos/headerPedido/HeaderPedido';
import { FiltrosPedidos } from '../../components/pedidos/filtrosPedidos/FiltrosPedidos';
import { ListaPedidos } from '../../components/pedidos/listaPedidos/ListaPedidos';
import { ModalPedido } from '../../components/pedidos/listaPedidos/modalPedido/ModalPedido';

export const Pedidos = () => {
    const [isOpenChange, setIsOpenChange] = useState(false); 
    return (
        <>
            <ModalPedido open = {isOpenChange} close = { () => setIsOpenChange(false)}/>
            <HeaderPedido/>
            <FiltrosPedidos/>
            <ListaPedidos openModal={setIsOpenChange} />
        </>
    )
}
