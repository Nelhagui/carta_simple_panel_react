import React from "react";
import "./CargaProducto.css";

export const CargaProducto = () => {
    const validaCampos = (e) => {
        console.log(e.target.value, e.target.name);
        console.log(e.key);
    };
    return (
        <div>
            <form action="" className="formProducto">
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
            </form>
        </div>
    );
};
