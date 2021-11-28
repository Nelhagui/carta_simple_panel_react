import React, { useEffect } from 'react';
import { useState } from 'react';

export const FormEditarComboPaso1 = ({ values, close, siguiente}) => {
    const [celiaco, setCeliaco] = useState(false)
    const [vegano, setVegano] = useState(false)
    const [vegetariano, setVegetariano] = useState(false)

    useEffect(() => {
        setCeliaco((values.apto.split(',')).includes("1") ? true : false)
        setVegano((values.apto.split(',')).includes("2") ? true : false)
        setVegetariano((values.apto.split(',')).includes("3") ? true : false)
    }, [values])
    
    return (
        <div> 
            <h1>Editá tu combo</h1>
            <form>
                <div className='fila'>
                    <div className='col-6 fd-c'>
                        <div className="contenedor-input">
                            <label htmlFor="nombre" className="label">Nombre</label>
                            <input value={values.nombre} className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                        </div>
                        <div className="fila">
                            <div className='col-6'>
                                <div className="contenedor-input">
                                    <label htmlFor="codigo" className="label">Código</label>
                                    <input value={values.codigo} className="cinput mt-17" type="text" name="codigo" placeholder="Escribe el código de la categoría" autoComplete="off"/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="contenedor-input">
                                    <label htmlFor="precio_final" className="label">Precio</label>
                                    <input value={values.precio_final} className="cinput mt-17" type="text" name="precio_final" autoComplete="off"/>
                                </div>
                            </div>
                        </div>
                        {/* DESCRIPCION */}
                        <div className="contenedor-input">
                            <label htmlFor="descripcion" className="label">Descripción</label>
                            <textarea value={values.descripcion} name="descripcion" id="" cols="30" rows="10" />
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
                        <input type="checkbox" id='celiaco' name='apto[]' checked={celiaco} value='1'/>
                        <input type="checkbox" id='vegano' name='apto[]' checked={vegano} value='2' />
                        <input type="checkbox" id='vegetariano' name='apto[]' checked={vegetariano} value='3'/>
                        <label type='button' htmlFor="celiaco" className={celiaco ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setCeliaco(!celiaco)}}>Celíaco</label>
                        <label type='button' htmlFor="vegano" className={vegano ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setVegano(!vegano)}} >Vegano</label>
                        <label type='button' htmlFor="vegetariano" className={vegetariano ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setVegetariano(!vegetariano)}}>Vegetariano</label>
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
                    <div className="btn-acciones-modal">
                        <button className="btn-secundario" type='button' onClick={close}>CANCELAR</button>
                        <button className="btn-primario" type="button" onClick={siguiente}>SIGUIENTE</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
