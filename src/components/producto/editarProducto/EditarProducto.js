import React, { useState, useEffect } from "react";
import axios from "axios";

export const EditarProducto = ({id}) => {
    const initialState = {
        nombre: "",
        codigo: "",
        precio: "",
        estado: "",
        descripcion: "",
        imagen: "",
    };
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/producto/'+id)
            .then(res => {
                setValues(res.data);
            })
    }, [id])

    const validaCampos = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setValues(initialState);
    };

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
                    value={values.nombre}
                />
                <input
                    type="text"
                    placeholder="codigo"
                    name="codigo"
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                    value={values.codigo}
                />
                <input
                    type="number"
                    placeholder="precio"
                    name="precio"
                    onKeyUp={(e) => {
                        validaCampos(e);
                    }}
                    value={values.precio_final}
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

                    value={values.descripcion}
                ></textarea>
                <label htmlFor="imagen">Imagen:</label>
                <input type="file" name="imagen" />
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
};
