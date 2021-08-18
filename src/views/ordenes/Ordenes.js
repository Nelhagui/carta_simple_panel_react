import React, { useEffect, useState } from "react";

export const Ordenes = () => {
    const [ordenes, setOrdenes] = useState([]);
    useEffect(() => {
        fetch(
            "http://localhost/reiatsu/clientes/nelson/proyectos/CartaSimle_All_New_Coder_House/carta_simple_api/public/api/pl/productos"
        )
            .then((response) => response.json())
            .then((res) => setOrdenes(res));
    }, []);
    return (
        <div>
            <ul>
                {ordenes.map((orden) => {
                    return <li key={orden.id}>orden</li>;
                })}
            </ul>
        </div>
    );
};
