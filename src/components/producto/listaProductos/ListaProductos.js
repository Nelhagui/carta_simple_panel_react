import React, { useState, useEffect } from "react";

export const ListaProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(
            "http://localhost/reiatsu/clientes/nelson/proyectos/CartaSimle_All_New_Coder_House/carta_simple_api/public/api/pl/productos"
        )
            .then((response) => response.json())
            .then((res) => setProductos(res));
    }, []);
    return (
        <>
            <ul>
                {productos.map((producto) => {
                    return <li key={producto.id}>{producto.nombre}</li>;
                })}
            </ul>
        </>
    );
};
