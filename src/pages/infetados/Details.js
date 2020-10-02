import React from "react"
import { Container, Button, Jumbotron, Row, Col, Spinner, Alert, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import infetadosService from "../../services/infetados"
import RemoveDialogComponent from "../../components/infetados/RemoveDialog"
import SubmitDialogComponent from "../../components/infetados/SubmitDialog"

// Página de detalhes de cada infetado que se encontra na lista
export default class InfetadosDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infetado: undefined,
      error: undefined,
      toRemove: false,
      toUpdate: false,
    }
  }

  componentDidMount() {
    infetadosService.getOne(this.props.match.params.id)
    .then (value => this.setState({ infetado: value }))
    .catch (err => this.setState({error: err}));
  } 

  render() {
    const { infetado, toRemove, toUpdate, error } = this.state;
    return (
    <Container>

        {error !== undefined && 
        <Alert variant="danger">{error}</Alert>
        }

      <Button style={{margin: '10px 0'}} variant="outline-primary" onClick={() => this.props.history.push("/infetados/list")}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />&nbsp;Back to list</Button>




      {infetado !== undefined ?
        <div>
          
          <Jumbotron style={{width: 400}}>
            <h1>{infetado.Nome}</h1>
            <h5>{infetado._id}</h5>
            <Row>
              <Col xs={10} md={10} lg={6}><Badge variant = "info">Nome</Badge></Col>
              <Col xs={20} md={22} lg={24}>{infetado.Nome}</Col>
            </Row>

            <Row>
              <Col xs={10} md={10} lg={6}><Badge variant = "info">Idade</Badge></Col>
              <Col xs={20} md={22} lg={24}>{infetado.Idade}</Col>
            </Row>

            <Row>
              <Col xs={10} md={10} lg={6}><Badge variant = "info">Sexo</Badge></Col>
              <Col xs={20} md={22} lg={24}>{infetado.Sexo}</Col>
            </Row>

            <Row>
              <Col xs={10} md={10} lg={6}><Badge variant = "info">Local Atual</Badge></Col>
              <Col xs={20} md={22} lg={24}>{infetado.Local}</Col>
            </Row>

            <Row>
              <Col xs={10} md={10} lg={6}><Badge variant = "info">Estado Atual</Badge></Col>
              <Col xs={20} md={22} lg={24}>{infetado.Estado}</Col>
            </Row>

            <Row>
              <Col xs={10} md={10} lg={6}><Badge variant = "info">Primeiros Sintomas</Badge></Col>
              <Col xs={20} md={22} lg={24}>{infetado.Sintomas}</Col>
            </Row>
            <br />
            <p>
              <Button style={{margin: '10px 0'}} variant="dark" onClick={() => this.setState({ toUpdate: true })}>Update</Button>&nbsp;
              <Button style={{margin: '10px 0'}} variant="danger" onClick={() => this.setState({ toRemove: true })}>Remove</Button>
            </p>
              
          </Jumbotron>
          <RemoveDialogComponent 
            infetadoId={infetado._id}
            show={toRemove}
            onHide={() => this.setState({toRemove: false})}
            removed={() => this.props.history.push('/infetados/list')}
            handleClose={() => this.setState({ toRemove: false })}
          />
 
          <SubmitDialogComponent
            infetado={infetado}
            submited={(value) => this.setState({ infetado: value, toUpdate: false })}
            show={toUpdate}
            handleClose={() => this.setState({ toUpdate: false })} 
          />

        </div>


        // Caso não exista infetado mostra o spinner, desde que se introduziu a base de dados do mongo isto deixou de mostrar e passou a ser apenas a página de erro
        : <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}

    </Container>
        );
  }
} 