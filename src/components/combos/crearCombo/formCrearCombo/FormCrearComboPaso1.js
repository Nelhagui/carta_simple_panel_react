import React from 'react';
import { useState } from 'react';
import { SelectBuscador } from '../../../selectSearch/SelectBuscador';

export const FormCrearComboPaso1 = (
    {
        close, 
        siguiente, 
        resultado, 
        setResultado,
        celiaco, 
        setCeliaco,
        vegano, 
        setVegano,
        vegetariano, 
        setVegetariano
    }) => {


    const initialState = {
        nombre: "",
        codigo: "",
        precio_final: "",
        descripcion: "",
        imagen: "",
        icono: "",
        apto: "",
        habilitado: "",
    };
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <div> 
            <h1>Creá tu combo</h1>
            <form>
                <div className='fila'>
                    <div className='col-6 fd-c'>
                        <div className="contenedor-input">
                            <label htmlFor="nombre" className="label">Nombre</label>
                            <input onChange={handleChange} value={values.nombre} className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
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
                            <textarea onChange={handleChange} value={values.descripcion} name="descripcion" id="" cols="30" rows="10"/>
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
                        <input type="checkbox" id='celiaco' name='apto[]' onChange={ () => {setCeliaco(!celiaco)}} checked={celiaco} value='1'/>
                        <input type="checkbox" id='vegano' name='apto[]' onChange={ () => {setVegano(!vegano)}} checked={vegano} value='2' />
                        <input type="checkbox" id='vegetariano' name='apto[]' onChange={ () => {setVegetariano(!vegetariano)}} checked={vegetariano} value='3'/>
                        <label type='button' htmlFor="celiaco" className={celiaco ? 'btn-opciones seleccionado': "btn-opciones"} >Celíaco</label>
                        <label type='button' htmlFor="vegano" className={vegano ? 'btn-opciones seleccionado': "btn-opciones"}  >Vegano</label>
                        <label type='button' htmlFor="vegetariano" className={vegetariano ? 'btn-opciones seleccionado': "btn-opciones"} >Vegetariano</label>
                    </div>
                </div>
                <div className="contenedor-input mt-28">
                    <label htmlFor="categorias">Categoria</label>
                    {/* <input className="cinput mt-13 mb-23" type="text" name="categorias" placeholder="Escribe el nombre de la categoría" autoComplete="off"/> */}
                    {/* <div className="contenedor-items-seleccionados">
                        <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt=""/> Desayuno</button>
                        <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Merienda</button>
                    </div> */}
                    <SelectBuscador resultado={resultado} setResultado={setResultado}/>
                </div>

                <div className='fila'>
                    <div className="btn-acciones-modal">
                        <button className="btn-secundario" type='button' onClick={close}>CANCELAR</button>
                        <button className="btn-primario" type="button" onClick={siguiente}>SIGUIENTE</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
