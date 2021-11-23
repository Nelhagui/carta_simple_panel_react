import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const FormEditarCategoria = ({close, id}) => {
    
    const [imgHabilitado, setImgHabilitado] = useState('/img/radio/habilitado-selected.svg');
    const [classHabilitado, setClassHabilitado] = useState('text-selected');
    const [imgDeshabilitado, setImgDeshabilitado] = useState('/img/radio/deshabilitado.svg');
    const [classDeshabilitado, setClassDeshabilitado] = useState('text-disabled');
    
    const initialState = {
        nombre: "",
        codigo: "",
        habilitado: "",
        descripcion: "",
        imagen: "",
    };
    const [values, setValues] = useState(initialState)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categoria/'+id)
        .then( res => {
            setValues(res.data)
        });
    }, [id])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        if(Number(e.target.value) === 1)
        {
            setImgHabilitado('/img/radio/habilitado-selected.svg');
            setImgDeshabilitado('/img/radio/deshabilitado.svg');

            setClassDeshabilitado('text-disabled');
            setClassHabilitado('text-selected');
        }
        else
        {
            setImgHabilitado('/img/radio/habilitado.svg');
            setImgDeshabilitado('/img/radio/deshabilitado-selected.svg')

            setClassDeshabilitado('text-selected');
            setClassHabilitado('text-disabled');
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Authorization", "bearer");

        // var formdata = new FormData();
        // formdata.append("codigo", "7654");
        // formdata.append("id", "1");

        // var requestOptions = {
        // method: 'POST',
        // headers: myHeaders,
        // body: formdata,
        // redirect: 'follow'
        // };
        // var data = new FormData();
        // data.append('nombre', 'BEBIditas');

        // var config = {
        //   method: 'post',
        //   url: 'http://127.0.0.1:8000/api/categoria/'+id,
        //   headers: { 
        //     'Content-Type': 'application/x-www-form-urlencoded', 
        //     'Authorization': 'bearer',
        //   },
        //   body : values
        // };

        // axios(config)
        // .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        // console.log(error);
        // });

        axios.post('http://127.0.0.1:8000/api/categoria/'+id, values) 

    };

    return (
        <div>
        <h1>Editá tu categoría</h1>
        <form onSubmit={(e) => { handleOnSubmit(e); }}>
            <div className='fila'>
                <div className='col-6 fd-c'>
                    <div className="contenedor-input">
                        <label htmlFor="nombre" className="label">Nombre</label>
                        <input onChange={handleChange} value={values.nombre} className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off"/>
                    </div>
                    <div className="contenedor-input">
                        <label htmlFor="codigo" className="label">Código (opcional)</label>
                        <input onChange={handleChange} value={values.codigo} className="cinput mt-17" type="text" name="codigo" placeholder="Escribe el código de la categoría" autoComplete="off"/>
                    </div>
                </div>
                <div className='col-6 fd-c ai-c jc-c'>
                    <p>Foto</p>
                    <div className='foto-informacion-local'>
                        <img src="" alt="" name='logo' />
                    </div>
                </div>
            </div>
            <div className='fila'>
                <div className='col-6'>
                    {/* DESCRIPCION */}
                    <div className="contenedor-input">
                        <label htmlFor="descripcion" className="label">Descripción</label> <br/>
                        <textarea onChange={handleChange} value={values.descripcion} name="descripcion" id="" cols="30" rows="10" />
                    </div>
                </div>
            </div>
            <div className='fila'>
                {/* HABILITADO */}
                <div className='col-6'>
                    <input type="radio" id='estadoHabilitado' name='habilitado' className='dinone' value='1' onChange={handleChange2}/>
                    <input type="radio" id='estadoNoHabilitado' name='habilitado'className='dinone' value='0' onChange={handleChange2}/>
                    <label htmlFor="estadoHabilitado" className={'btn-estado-habilitado'}> <span className={classHabilitado}> <img src={imgHabilitado} alt="habilitado" htmlFor="estadoHabilitado"/> Habilitado</span></label>
                    <label htmlFor="estadoNoHabilitado" className={'btn-estado-habilitado'}><span className={classDeshabilitado}> <img src={imgDeshabilitado} alt="no habilitado" /> Deshabilitado</span></label>
                    
                </div>
            </div>

            <div className='fila'>
                <div className="contenedor-input mt-26">
                    <div className="btn-acciones-modal">
                        <button className="btn-secundario" type='button' onClick={close}>CANCELAR</button>
                        <button className="btn-primario btn-disabled" type="submit">GUARDAR CAMBIOS</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}
