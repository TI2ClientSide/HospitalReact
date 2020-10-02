import React from "react"
import pediatrialogo from '../../assets/pediatrialogo.png';
import './Pediatria.css';
import Image from "../../components/image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button, Alert, Table } from "react-bootstrap"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import infetadosService from '../../services/infetados';

// Página para infetados na Pediatria
export default class PediatriaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infetados: [],
            error: undefined,
        };
    }

    // Sempre que carregar a página coloca os respetivos valores
    componentDidMount() {
        this.getList();
    }

    getList(searchText) {
        infetadosService
            .getLocal("Pediatria")
            .then(values => { this.setState({ infetados: values }); })
            .catch(err => this.setState({ error: err }));
    }

    render() {
        const { infetados, error } = this.state;
        return (


            <div className="div">
                <Button style={{ margin: '10px 0' }} variant="outline-primary" onClick={() => this.props.history.push("/")}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />&nbsp;Back to Home</Button><h2> Pediatria </h2>
                <div className="div">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>{< Image logo={pediatrialogo} titulo="Bem-vindo à Pediatria" descricao="Local para crianças" />}</th>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="div">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td style={{ textAlign: "center" }}>
                                    Pediatria
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="div">
                    <div className="divEsquerdo"><tr><th>Dados </th></tr></div>
                    <div className="divDireita">
                        <table>
                            <tbody>
                                <tr>
                                    <th> <FontAwesomeIcon icon={faPhone} /> Contacto telefónico: 92949596X </th>
                                </tr>
                                <tr>
                                    <th>
                                        Casos: {infetados.length}
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <br className="break" />
                    <Table responsive>

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Estado</th>
                            </tr>
                        </thead>

                        <tbody>
                            {error !== undefined &&
                                <Alert variant="danger">{error}</Alert>
                            }
                            {infetados.reverse().map((infetado, index) => (
                                <tr key={`infetado${index}`}>
                                    <td>{infetado.Nome}</td>
                                    <td>{infetado.Estado}</td>
                                </tr>))}
                        </tbody>
                    </Table>
                </div>

            </div>
        );
    }
}





