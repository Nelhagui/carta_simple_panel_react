import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { SideBarMenu } from "./components/sidebarMenu/SideBarMenu";
import { Home } from "./views/home/Home";
import { Producto } from "./views/producto/Producto";
import { Ordenes } from "./views/ordenes/Ordenes";
import { Cartas } from "./views/cartas/Cartas";

function App() {
    return (
        <Router>
            <>
                <Nav />
                <div className="containerBoby">
                    <SideBarMenu />
                    <div className="dynamicContent">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route
                                path="/productos"
                                exact
                                component={Producto}
                            />
                            <Route path="/cartas" exact component={Cartas} />
                            <Route path="/categorias" exact />
                            <Route path="/ordenes" exact component={Ordenes} />
                        </Switch>
                    </div>
                </div>
            </>
        </Router>
    );
}

export default App;
