import React from 'react';
import { Media } from 'react-bootstrap';

// Componente Imagem utilizada para obter um Titulo, descrição e logo da respetiva página. Utilizado na maioria das páginas para identificação da mesma.
export default class ImageComponent extends React.Component {

    render() {
        return (
            <Media>
                <Media.Body>
                    <h5>{this.props.titulo}</h5>
                    <p>{this.props.descricao}</p>
                </Media.Body>
                <img
                    width={64}
                    height={64}
                    className="ml-3"
                    src={this.props.logo}
                    alt="Generic placeholder"
                />
            </Media>
        );
    }
}