import React, { useState } from "react";

export const ValidaUrl = () => {
    const [disponible, setDisponible] = useState(0);
    const validaUrl = (e) => {
        if (e.target.value.length > 1) {
            fetch(
                "http://localhost/reiatsu/clientes/nelson/proyectos/CartaSimle_All_New_Coder_House/carta_simple_api/public/api/pl/url/valida/" +
                    e.target.value
            )
                .then((response) => response.json())
                .then((res) => setDisponible(res));
        } else {
            setDisponible(false);
        }
    };
    return (
        <div>
            <input
                type="text"
                name="url"
                onKeyUp={(e) => {
                    validaUrl(e);
                }}
                className="urlDisponible"
            />
            <span>
                {disponible
                    ? "Diponible"
                    : disponible === false
                    ? "No disponible"
                    : ""}
            </span>
        </div>
    );
};
