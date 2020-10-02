import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

// Componente Card para ser utilizado no About e na página de login/registo
export default class CardComponent extends React.Component { // O extends faz com que o nosso construtor por defeito já adquira o super e tenho assim tambem os seus props.

    // Construtor alterado com estado novo para definir novas variáveis
    constructor(props) {
        super(props);
        this.state = {
            caracteristicas: ["Nome:", "Idade:", "Curso:"],
        };
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.logo} />
                <Card.Body>
                    <Card.Title>{this.props.titulo}</Card.Title>
                    <Card.Subtitle>{this.props.info.profissao}</Card.Subtitle>

                    <Card.Text>
                    </Card.Text>

                    <ListGroup>

                        <Card.Text>
                            <h4 class="p-50 mb-22 text-info text-sm-left text-nowrap">{this.state.caracteristicas[0]} {this.props.descricao.Nome}</h4>
                        </Card.Text>

                        <Card.Text>
                            <h4 class="p-50 mb-22 text-info text-sm-left text-nowrap">{this.state.caracteristicas[1]}  {this.props.descricao.Idade}</h4>
                        </Card.Text>

                        <Card.Text>
                            <h4 class="p-50 mb-299 text-info text-sm-left text-nowrap">{this.state.caracteristicas[2]}  {this.props.descricao.Curso}</h4>
                        </Card.Text>

                    </ListGroup>

                </Card.Body>
            </Card >
        );
    }
}