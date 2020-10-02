import { faEraser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Alert, Table, Button } from "react-bootstrap";
import utilizadoresService from '../../services/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DeleteUserComponent from "../../components/deleteUser/DeleteUser"

// Página para Utilizadores
export default class UtilizadoresPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilizadores: [],
            error: undefined,
            toRemove: false,
        };
    }

    // Sempre que carregar a página coloca os respetivos valores
    componentDidMount() {
        this.getList();
    }

    getList() {
        utilizadoresService
            .getUsers()
            .then(values => { this.setState({ utilizadores: values }); })
            .catch(err => this.setState({ error: err }));
    }

    render() {
        const { error, toRemove, utilizadores } = this.state;

        return (
            <Container>

                {error !== undefined &&
                    <Alert variant="danger">{error}</Alert>
                }

                <Table responsive style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Utilizador</th>
                            <th>Role</th>
                        </tr>
                        {utilizadores.map((utilizador, index) => (
                            <tr key={`utilizador${index}`}>
                                <td>{utilizador._id}</td>
                                <td>{utilizador.username}</td>
                                <td>{utilizador.role}</td>
                                <td>
                                    <Button style={{ margin: '10px 0' }} variant="danger" onClick={() => this.setState({ toRemove: true })}><FontAwesomeIcon icon={faEraser} /></Button>
                                </td>
                                <td>
                                    <DeleteUserComponent
                                        userId={utilizador._id}
                                        show={toRemove}
                                        onHide={() => this.setState({ toRemove: false })}
                                        removed={() => this.props.history.push('/')}
                                        handleClose={() => this.setState({ toRemove: false })}
                                    />
                                </td>
                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Container>
        );
    }
}

