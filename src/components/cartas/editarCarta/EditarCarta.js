import React, { useState } from 'react';
import './EditarCarta.css';
import { RespuetaSubmitEditar } from './RespuetaSubmitEditar';

export const EditarCarta = ({carta}) => {
    const initialState = {
        nombre: carta.nombre,
    };
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const deshacer = () => {
        setValues(initialState);
    };

    const [takeAway, setTakeAway] = useState(false)
    const [delivery, setDelivery] = useState(false)
    const [consumoLocal, setConsumoLocal] = useState(false)
    const [activo, setActivo] = useState(false)
    const [pp, setPp] = useState(true)


    const [save, setSave] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSave(true);
    };

    const toggleClass = () => {
        setActivo(!activo);
    }; 
    
    return save === false ? 
    ( 
        <div>
        <h1>Editá tu carta</h1>
        <form onSubmit={handleSubmit}>
            <div className="contenedor-input">
                <label htmlFor="nombre" className="label">Nombre</label>
                <input onChange={handleChange} className="cinput mt-17" type="text" name="nombre" placeholder="Escribe el nombre de tu carta" autoComplete="off" value={values.nombre} />
            </div>
            <div className="contenedor-input mt-28">
                <label htmlFor="nombre"> Modalidad</label>
                <div className="cont-btn-opciones mt-13">
                    <button type='button' className={takeAway ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setTakeAway(!takeAway)}}>Take Away</button>
                    <button type='button' className={delivery ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setDelivery(!delivery)}} >Delivery</button>
                    <button type='button' className={consumoLocal ? 'btn-opciones seleccionado': "btn-opciones"} onClick={ () => {setConsumoLocal(!consumoLocal)}}>Consumo en local</button>
                </div>
            </div>
            <div className="contenedor-input mt-28">
                <label htmlFor="publicar-en">Publicar en</label>
                <input className="cinput mt-13 mb-23" type="text" name="publicar-en" placeholder="Escribe el nombre del local" autoComplete="off"/>
                <div className="contenedor-items-seleccionados">
                    <button type="button" className={pp ? 'btn-items-seleccionados': "dinone"} > <img src="/img/icon-sacar.svg" alt="" onClick={ () => {setPp(!pp)}}/> Martínez</button>
                    <button type="button" className="btn-items-seleccionados"> <img src="/img/icon-sacar.svg" alt="" /> Recoleta</button>
                </div>
            </div>
            <div className="contenedor-input mt-26">
                <div className="btn-acciones-modal">
                    <button type="button" className="btn-principales btn-secundario" onClick={ () => {deshacer()}} >DESHACER</button>
                    <button className="btn-principales btn-primario btn-disabled" type="submit">CREAR CARTA</button>
                </div>
            </div>
        </form>
    </div>
    ) : ( <RespuetaSubmitEditar/> )
}
