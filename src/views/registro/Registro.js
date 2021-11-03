import React from 'react';
import { LogoLema } from '../../components/loginRegistro/logoLema/LogoLema';
import { Link } from 'react-router-dom';
import './Registro.css';
export const Registro = () => {
    return (
        <div className="cont-general-iniciar registro" style={{ backgroundImage: `url("/img/inicio-sesion/fondo-registro.png")` }}>
            <div className="cont-form">
                <div className="cont-titulo-ingresar">
                    <h1>Creá tu carga digital y hacé <br /> que tu negocio crezca</h1>
                </div>
                <form action="">
                    <div className="cont-input">
                        <label htmlFor="nombre-apellido">Nombre y apellido</label>
                        <input type="text" name="nombre-apellido" placeholder="Escribe tu nombre completo"/>
                    </div>
                    <div className="cont-input">
                        <label htmlFor="nombre-negocio">Nombre del negocio</label>
                        <input type="text" name="nombre-negocio" placeholder="Nombre de tu negocio/emprendimiento"/>
                    </div>
                    <div className="cont-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="cont-input">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="cont-input">
                        <label htmlFor="repetir-password">Repetir contraseña</label>
                        <input type="password" name="repetir-password" />
                    </div>
                    <div className="cont-input-accion-registro">
                        <div>
                            <button className="btn-primario">REGISTRARME</button>
                        </div>
                        <Link to="/ingresar">
                            <p>Iniciar sesión</p>
                        </Link>
                    </div>
                </form>
            </div>
            <LogoLema/>
        </div>
    )
}
