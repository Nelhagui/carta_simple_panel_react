import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal2doNivel } from "../../../modal/Modal2doNivel";
import { ResultadoPeticion } from "../../../resultadoPeticion/ResultadoPeticion";

export const FormEditarProducto = ({id, close, data, setData}) => {
    const [estadoPeticion, setEstadoPeticion] = useState(false);
    const [openResPeticion, setOpenResPeticion] = useState(false);

    const [celiaco, setCeliaco] = useState(false)
    const [vegano, setVegano] = useState(false)
    const [vegetariano, setVegetariano] = useState(false)

    const initialState = {
        nombre: "",
        codigo: "",
        precio_final: "",
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/producto/'+id, values)
        .then( function (res) {
            setEstadoPeticion(res.data);
            if(res.data)
            {
                const dataUpdateP = data;
                for (let i = 0; i < dataUpdateP.length; i++)
                    if(dataUpdateP[i].productos.length > 0)
                        for (let ii = 0; ii < dataUpdateP[i].productos.length; ii++)
                            if(dataUpdateP[i].productos[ii].id === id)
                                dataUpdateP[i].productos[ii] = { ...dataUpdateP[i].productos[ii], ...values }
                setData(dataUpdateP);
                setOpenResPeticion(true)
            }
        }) 
    };

    return (
        <div>
            <Modal2doNivel children={<ResultadoPeticion respuesta={estadoPeticion}/>} closee={()=>setOpenResPeticion(false)} openn={openResPeticion}/>
            <h1>Editá tu producto</h1>
            <form onSubmit={handleOnSubmit}>
                <div className='fila'>
                    <div className='col-6 fd-c'>
                        <div className="contenedor-input">
                            <label htmlFor="nombre" className="label">Nombre</label>
                            <input onChange={handleChange} value={values.nombre} className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off" />
                        </div>
                        <div className="fila">
                            <div className='col-6'>
                                <div className="contenedor-input">
                                    <label htmlFor="codigo" className="label">Código</label>
                                    <input onChange={handleChange} value={values.codigo} className="cinput mt-17" type="text" name="codigo" placeholder="Escribe el código de la categoría" autoComplete="off"/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="contenedor-input">
                                    <label htmlFor="codigo" className="label">Precio</label>
                                    <input onChange={handleChange} value={values.precio_final} className="cinput mt-17" type="text" name="precio_final" placeholder="Escribe el código de la categoría" autoComplete="off"/>
                                </div>
                            </div>
                        </div>
                        {/* DESCRIPCION */}
                        <div className="contenedor-input">
                            <label htmlFor="descripcion" className="label">Descripción</label>
                            <textarea onChange={handleChange} value={values.descripcion} name="descripcion" id="" cols="30" rows="10" />
                        </div>
                    </div>
                    <div className='col-6 fd-c ai-c jc-c'>
                        <p>Foto</p>
                        <div className='foto-informacion-local'>
                            <img src='' alt="" name='logo'/>
                        </div>
                    </div>
                </div>
                <div className="contenedor-input mt-28">
                    <label htmlFor="nombre"> Apto</label>
                    <div className="cont-btn-opciones mt-13">
                        <button type='button' className={celiaco ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setCeliaco(!celiaco)}}>Celíaco</button>
                        <button type='button' className={vegano ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setVegano(!vegano)}} >Vegano</button>
                        <button type='button' className={vegetariano ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setVegetariano(!vegetariano)}}>Vegetariano</button>
                    </div>
                </div>
                <div className="contenedor-input mt-28">
                    <label htmlFor="categorias">Categoria</label>
                    <input className="cinput mt-13 mb-23" type="text" name="categorias" placeholder="Escribe el nombre de la categoría" autoComplete="off"/>
                    <div className="contenedor-items-seleccionados">
                        <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt=""/> Desayuno</button>
                        <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Merienda</button>
                    </div>
                </div>

                <div className='fila'>
                    <div className="contenedor-input mt-26">
                        <div className="btn-acciones-modal">
                            <button className="btn-secundario" type='button' onClick={close}>CANCELAR</button>
                            <button className="btn-primario btn-disabled" type="submit">CREAR PRODUCTO</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
