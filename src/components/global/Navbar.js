import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import './nav.css';

// Componente navbar para fazer o deslocamento entre os diversos links da nossa App
export default class NavbarComponent extends React.Component {
    static contextType = AuthContext;
    render() {
        const { user, logout } = this.context;
        return (
            <Navbar bg="primary" expand="sm" sticky="top" >
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link as={NavLink} className="rainbow" exact to="/" >Página Inicial</Nav.Link>
                            <Nav.Link as={NavLink} className="rainbow" to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} className="rainbow" to="/infetados/list">Lista de Infetados</Nav.Link>
                            {user && <Nav.Link as={NavLink} className="rainbow" to="/user/utilizadores">Lista de Utilizadores</Nav.Link>}
                        </Nav>
                        <Nav> 
                            {user ?
                                <NavDropdown title={user.username} alignRight>
                                    <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                                </NavDropdown> :
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
