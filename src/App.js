import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBarMenu } from "./components/sidebarMenu/SideBarMenu";
import { Home } from "./views/home/Home";
import { Cartas } from "./views/cartas/Cartas";
import { Locales } from "./views/locales/Locales";
import { Login } from "./views/login/Login";
import { Registro } from "./views/registro/Registro";
import { Local } from "./views/locales/Local";
import { Pedidos } from "./views/pedidos/Pedidos";

function App() {
    const [IngresaUsuario] = useState(0);
    if(IngresaUsuario === 0)
    {
        return (
            <Router>
                <>
                    <div className="containerBoby">
                        <SideBarMenu />
                        <div className="dynamicContent">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/locales" exact component={Locales} />
                                <Route path="/locales/:id" exact component={Local} />
                                <Route path="/cartas" exact component={Cartas} />
                                <Route path="/categorias" exact />
                                <Route path="/pedidos" exact component={Pedidos} />
                            </Switch>
                        </div>
                    </div>
                </>
            </Router>
        );
    } else {
        return (
            <>
            <Router>
                <Route path="/ingresar" exact component={Login} />
                <Route path="/registro" exact component={Registro} />
            </Router>
            </>
        )
    }
}

export default App;
