import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { SideBarMenu } from "./components/sidebarMenu/SideBarMenu";

function App() {
    return (
        <Router>
            <>
                <Nav />
                <div className="containerBoby">
                    <SideBarMenu />
                    <div className="dynamicContent">
                        <Switch>
                            <Route path="/" />
                            <Route path="/entradas" />
                            <Route path="/entrada/editar/:id" exact />
                            <Route path="/categorias" exact />
                        </Switch>
                    </div>
                </div>
            </>
        </Router>
    );
}

export default App;
