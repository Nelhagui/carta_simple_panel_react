import React from 'react';
import { useState } from 'react';

export const FormCrearComboPaso1 = ({close, siguiente}) => {
    const [celiaco, setCeliaco] = useState(false)
    const [vegano, setVegano] = useState(false)
    const [vegetariano, setVegetariano] = useState(false)
    return (
        <div> 
            <h1>Creá tu combo</h1>
            <form>
                <div className='fila'>
                    <div className='col-6 fd-c'>
                        <div className="contenedor-input">
                            <label htmlFor="nombre" className="label">Nombre</label>
                            <input className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                        </div>
                        <div className="fila">
                            <div className='col-6'>
                                <div className="contenedor-input">
                                    <label htmlFor="codigo" className="label">Código</label>
                                    <input className="cinput mt-17" type="text" name="codigo" placeholder="Escribe el código de la categoría" autoComplete="off"/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="contenedor-input">
                                    <label htmlFor="codigo" className="label">Precio</label>
                                    <input className="cinput mt-17" type="text" name="codigo" placeholder="Escribe el código de la categoría" autoComplete="off"/>
                                </div>
                            </div>
                        </div>
                        {/* DESCRIPCION */}
                        <div className="contenedor-input">
                            <label htmlFor="descripcion" className="label">Descripción</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
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
                    <div className="btn-acciones-modal">
                        <button className="btn-secundario" type='button' onClick={close}>CANCELAR</button>
                        <button className="btn-primario" type="button" onClick={siguiente}>SIGUIENTE</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
