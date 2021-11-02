import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBarMenu } from "./components/sidebarMenu/SideBarMenu";
import { Home } from "./views/home/Home";
import { Ordenes } from "./views/ordenes/Ordenes";
import { Cartas } from "./views/cartas/Cartas";
import { Locales } from "./views/locales/Locales";

function App() {
    return (
        <Router>
            <>
                <div className="containerBoby">
                    <SideBarMenu />
                    <div className="dynamicContent">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route
                                path="/locales"
                                exact
                                component={Locales}
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
