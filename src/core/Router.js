import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Urgencias from '../pages/urgencias/Urgencias';
import UCI from '../pages/uci/UCI';
import Pediatria from '../pages/pediatria/Pediatria';
import Maternidade from '../pages/maternidade/Maternidade';
import InfetadosListPage from '../pages/infetados/List';
import About from '../pages/about/About';
import Home from '../pages/home/Home.js';
import InfetadosDetailsPage from '../pages/infetados/Details';
import NavbarComponent from "../components/global/Navbar";
import PrivateRoute from "../components/global/PrivateRoute";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import UtilizadoresPage from "../pages/utilizadores/Utilizadores";

// Onde vamos definir as rotas e que páginas a apresentar em cada uma das rotas
export default class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <NavbarComponent />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/infetados/list" component={InfetadosListPage} />
                    <PrivateRoute roles={[1]} exact path="/user/utilizadores" component={UtilizadoresPage} />
                    <PrivateRoute roles={[1, 2]} exact path="/infetados/details/:id" component={InfetadosDetailsPage} />
                    <PrivateRoute roles={[1, 2]} exact path="/Urgencias" component={Urgencias} />
                    <PrivateRoute roles={[1, 2]} exact path="/UCI" component={UCI} />
                    <PrivateRoute roles={[1, 2]} exact path="/Pediatria" component={Pediatria} />
                    <PrivateRoute roles={[1, 2]} exact path="/Maternidade" component={Maternidade} />
                </Switch>
            </Router>
        );
    }
}