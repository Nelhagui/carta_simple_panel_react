import React from "react";
import { CargaProducto } from "../../components/producto/cargaProducto/CargaProducto";
import { ListaProductos } from "../../components/producto/listaProductos/ListaProductos";

export const Producto = () => {
    return (
        <div>
            <h1>Carga producto</h1>
            <CargaProducto />
            <h1>Lista de productos</h1>
            <ListaProductos />
        </div>
    );
};
