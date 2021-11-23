import React, { useState } from 'react';

export const CrearInformacionLocal = () => {
    
    const initialStateInformacionLocal = {
        nombre: '',
        email: '',
        url: '',
        celular: '',
        logo: '',
        direccion: '',
        numeracion: '',
        codigo_postal: '',
        localidad: '',
        descripcion: '',
    };

    const [values, setValues] = useState(initialStateInformacionLocal);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <>
            <div className='cont-informacion-del-local'>
                <div className='fila fd-c'>
                    <h1>Información del local</h1>
                    <hr className='mt-18 mb-18'/>
                </div>  
                <div className='fila'>
                    <div className='col-6 fd-c'>
                        {/* NOMBRE */}
                        <div className="contenedor-input">
                            <label htmlFor="nombre" className="label">Nombre *</label>
                            <input className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" onChange={handleChange} value={values.nombre}  />
                        </div>

                        {/* URL */}
                        <div className="contenedor-input">
                            <label htmlFor="url" className="label">Alias para el link *</label>
                            <input onChange={handleChange} value={values.url} className="cinput mt-17" type="text" name="url" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                        </div>

                        {/* EMAIL */}
                        <div className="contenedor-input">
                            <label htmlFor="email" className="label">Email</label>
                            <input onChange={handleChange} value={values.email} className="cinput mt-17" type="email" name="email" placeholder="Escribe el nombre de tu carta" />
                        </div>

                        {/* CELULAR */}
                        <div className="contenedor-input">
                            <label htmlFor="celular" className="label">Celular</label>
                            <input onChange={handleChange} value={values.celular} className="cinput mt-17" type="number" name="celular" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
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
                        {/* DIRECCION */}
                        <div className="contenedor-input">
                            <label htmlFor="direccion" className="label">Dirección *</label>
                            <input onChange={handleChange} value={values.direccion} className="cinput mt-17" type="text" name="direccion" placeholder="Escribe la dirección de tu local" />
                        </div>
                    </div>
                    <div className='col-6'>
                        {/* NUMERACION */}
                        <div className="contenedor-input">
                            <label htmlFor="numeracion" className="label">Número *</label>
                            <input onChange={handleChange} value={values.numeracion} className="cinput mt-17" type="number" name="numeracion" placeholder="Escribe la numeración del local" />
                        </div>
                        {/* CODIGO POSTAL */}
                        <div className="contenedor-input">
                            <label htmlFor="codigo_postal" className="label">CP *</label>
                            <input onChange={handleChange} value={values.codigo_postal} className="cinput mt-17" type="text" name="codigo_postal" placeholder="Ingrese el código postal" />
                        </div>
                    </div>
                </div>
                <div className="fila">
                    <div className="col-6">
                        {/* DESCRIPCION */}
                        <div className="contenedor-input">
                            <label htmlFor="descripcion" className="label">Descripción</label> <br/>
                            <textarea value={values.descripcion} onChange={handleChange} name='descripcion'/>
                        </div>
                    </div>
                    <div className='col-6'>
                        {/* LOCALIDAD */}
                        <div className="contenedor-input">
                            <label htmlFor="localidad" className="label">Localidad *</label> 
                            <input onChange={handleChange} value={values.localidad} className="cinput mt-17" type="text" name="localidad" placeholder="Escribe la localidad del local" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
