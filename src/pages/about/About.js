import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import joaoverissimo from '../../assets/joaoverissimo.jpg';
import Ruben from '../../assets/Ruben.jpg';
import './About.css';
import Card from "../../components/card/Card";

// Página de About para identificar quem fez realizou o trabalho
export default class AboutPage extends React.Component {

    // O render vem do react.component
    render() {
        return (
            <div className="About">
                <header className="Urgencias-header">
                    <h2 className="rainbow">About</h2>
                </header>

                <div>
                    <Button onClick={() => eval("QreditRoll.start()")}>Créditos</Button>
                    <Container className="Card">
                        <Row >
                            <Col md="auto">
                                <Card titulo="Identity Card" logo={joaoverissimo}
                                    info={{ profissao: "Developer" }} descricao={{ Nome: "João Veríssimo", Idade: "23", Curso: "Eng. Informática" }} />
                            </Col>

                            <Col md="auto">
                                <Card titulo="Identity Card" logo={Ruben}
                                    info={{ profissao: "Developer" }} descricao={{ Nome: "Ruben Salgado", Idade: "22", Curso: "Eng. Informática" }} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}