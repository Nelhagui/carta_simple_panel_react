import React from "react";
import './Login.css';
import { LogoLema } from "../../components/loginRegistro/logoLema/LogoLema";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="cont-general-iniciar" style={{ backgroundImage: `url("/img/inicio-sesion/fondo-inicio.png")` }}>
            <div className="cont-form">
                <div className="cont-titulo-ingresar">
                    <h1>Gestioná tus pedidos <br /> y carta digital </h1>
                </div>
                <form action="">
                    <div className="cont-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="cont-input">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" />
                        <span>Olvidaste tu contraseña? Hacé click <a href="/ingresar">aquí</a></span>
                    </div>
                    <div className="cont-input-accion">
                        <div>
                            <button className="btn-primario">INICIAR SESIÓN</button>
                        </div>
                        <p> Iniciar sesión con </p>
                        <div className="cont-icon-login">
                            <a href="/ingresar"><img src="/img/facebook.svg" alt="" /></a>
                            <a href="/ingresar"><img src="/img/google.svg" alt="" /></a>
                        </div>
                        <p> Si aún no tenés una cuenta </p>
                        <div>
                            <Link to="/registro">
                                <button className="btn-secundario">REGISTRARME</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <LogoLema/>
        </div>
    );
};
