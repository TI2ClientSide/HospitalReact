import React from "react"
import { Container, Table, Button, Alert } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScroll, faPlus } from "@fortawesome/free-solid-svg-icons"
import SubmitDialogComponent from "../../components/infetados/SubmitDialog"
import infetadosService from '../../services/infetados';
import infetadoslogo from '../../assets/infetadoslogo.png';
import Image from "../../components/image/Image";
import AuthContext from "../../configs/authContext";
import SearchFormComponent from "../../components/infetados/SearchForm"


// Página que lista todos os infetados na nossa aplicação bem como os seus dados gerais
export default class InfetadosListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infetados: [],
      error: undefined,
      toCreate: false,
    };
  }

  // Sempre que carregar a página coloca os respetivos valores
  componentDidMount() {
    this.getList();
  }

  getList(searchText) {
    infetadosService
      .getAll(searchText)
      .then(values => { this.setState({ infetados: values }); console.log(values) })
      .catch(err => this.setState({ error: err }));
    console.log(this.state);
  }

  static contextType = AuthContext;
  render() {
    const { infetados, error, toCreate } = this.state;
    const { user } = this.context;

    return <Container>
      <h2> Casos: {infetados.length}</h2>
      <div className="Imagem">
        {< Image logo={infetadoslogo} titulo="Bem-vindo à zona de registo do seu paciente" descricao="Zona de infetados" />}
      </div>

      {error !== undefined &&
        <Alert variant="danger">{error}</Alert>
      }

      {
        user ? <div className="Pesquisa">
          <Button style={{ margin: '10px 0' }} variant="outline-primary" onClick={() => this.setState({ toCreate: true })}> <FontAwesomeIcon icon={faPlus} /> Add New Infetado</Button>

          {<SearchFormComponent className="Pesquisa" search={(text) => this.getList(text)} ></SearchFormComponent>}
        </div> : <div></div>
      }

      <SubmitDialogComponent
        submited={(value) => this.setState({ infetados: [...infetados, value], toCreate: false })} //onde está value o stor mais uma vez em ambos tem createdBook
        show={toCreate}
        handleClose={() => this.setState({ toCreate: false })}
      />

      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>Local Atual</th>
          </tr>
        </thead>
        <tbody>

          {infetados.reverse().map((infetado, index) => (
            <tr key={`infetado${index}`}>
              <td>{infetado.Nome}</td>
              <td>{infetado.Idade}</td>
              <td>{infetado.Sexo}</td>
              <td>{infetado.Local}</td>
              <td>
                {
                  user ? <Button variant="outline-primary" onClick={() => this.props.history.push(`/infetados/details/${infetado._id}`)} >
                    <FontAwesomeIcon icon={faScroll} />
                  </Button> : ""
                }
              </td>
            </tr>))}
        </tbody>
      </Table>
    </Container>
  }
}