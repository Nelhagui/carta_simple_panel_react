import React, { useState } from "react";
import "./CargaProducto.css";

export const CargaProducto = () => {
    const [estadoCarga, setEstadoCarga] = useState(false);
    const initialState = {
        nombre: "",
        codigo: "",
        precio: "",
        estado: "",
        descripcion: "",
        imagen: "",
    };
    const [values, setValues] = useState(initialState);
    const validaCampos = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "React Hooks POST Request Example" }),
        };
        fetch(
            "http://localhost/reiatsu/clientes/nelson/proyectos/CartaSimle_All_New_Coder_House/carta_simple_api/public/api/pl/producto/carga",
            requestOptions
        )
            .then((response) => response.json())
            .then((res) => setEstadoCarga(res));
        setValues(initialState);
    };
    console.log(estadoCarga);

    return (
        <div>
            <form
                className="formProducto"
                onSubmit={(e) => {
                    handleOnSubmit(e);
                }}
            >
                <input
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                />
                <input
                    type="text"
                    placeholder="codigo"
                    name="codigo"
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                />
                <input
                    type="number"
                    placeholder="precio"
                    name="precio"
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                />
                <input
                    type="radio"
                    name="estado"
                    value="1"
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                />{" "}
                Activo
                <input
                    type="radio"
                    name="estado"
                    value="0"
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                />{" "}
                Inactivo
                <textarea
                    name="descripcion"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="descripcion..."
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                ></textarea>
                <label htmlFor="imagen">Imagen:</label>
                <input type="file" name="imagen" />
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
};
