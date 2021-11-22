import React from 'react'

export const FormCrearCategoria = ({close}) => {
    return (
        <div>
        <h1>Creá tu categoría</h1>
        <form>
            <div className='fila'>
                <div className='col-6 fd-c'>
                    <div className="contenedor-input">
                        <label htmlFor="nombre" className="label">Nombre</label>
                        <input className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                    </div>
                    <div className="contenedor-input">
                        <label htmlFor="codigo" className="label">Código</label>
                        <input className="cinput mt-17" type="text" name="codigo" placeholder="Escribe el código de la categoría" autoComplete="off"/>
                    </div>
                </div>
                <div className='col-6 fd-c ai-c jc-c'>
                    <p>Foto</p>
                    <div className='foto-informacion-local'>
                        <img src='' alt="" name='logo'/>
                    </div>
                </div>
            </div>
            <div className='fila'>
                <div className='col-6'>
                    {/* DESCRIPCION */}
                    <div className="contenedor-input">
                        <label htmlFor="descripcion" className="label">Descripción</label> <br/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
            <div className='fila'>
                {/* HABILITADO */}
                <div className='col-6'>
                    <span><img src="/img/activo.svg" alt="habilitado" /> Habilitado</span>
                    <span><img src="/img/no-activo.svg" alt="no habilitado" /> Deshabilitado</span>
                </div>
            </div>

            <div className='fila'>
                <div className="contenedor-input mt-26">
                    <div className="btn-acciones-modal">
                        <button className="btn-secundario" type='button' onClick={close}>CANCELAR</button>
                        <button className="btn-primario btn-disabled" type="submit">CREAR CATEGORIA</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}
