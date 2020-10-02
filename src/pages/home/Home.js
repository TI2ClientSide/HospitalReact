import React from 'react';
import homelogo from '../../assets/homelogo.png';
import Image from "../../components/image/Image";
import './Home.css';
import { Button, Table, Alert } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHospitalAlt } from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../../configs/authContext";
import infetadosService from '../../services/infetados';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// Página Inicial disponivel a qualquer utilizador com dados gerais
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infetados: [],
      error: undefined,
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.thick(), 1000);
    this.getList();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  thick = () => {
    this.setState({ date: new Date() });
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
    const { infetados, error } = this.state;
    const { user } = this.context;
    return (
      <div className="div">

        <h2>Página Inicial</h2> {this.state.date.toLocaleTimeString()}
        <div className="div">
          <table className="table">
            <tbody>
            <tr>
              <th>{< Image logo={homelogo} titulo="Bem-vindo ao Hospital React " descricao="Local de programação" />}<FontAwesomeIcon icon={faHospitalAlt} /></th>
            </tr>
            </tbody>
          </table>

        </div>
        <div className="div">

          {
            user ? <table className="table">
              <tbody>
              <tr>
                <td>
                  <Button variant="link" onClick={() => this.props.history.push(`/Urgencias`)} >
                    Urgências
                </Button>
                </td>

                <td>
                  <Button variant="link" onClick={() => this.props.history.push(`/Pediatria`)} >
                    Pediatria
                </Button>
                </td>

                <td>
                  <Button variant="link" onClick={() => this.props.history.push(`/UCI`)} >
                    UCI
                </Button>
                </td>

                <td>
                  <Button variant="link" onClick={() => this.props.history.push(`/Maternidade`)} >
                    Maternidade
                </Button>
                </td>
              </tr>
              </tbody>
            </table>
              : <p className="Imagem"> Aqui se encontram os dados gerais do Hospital React relativamente à pandemia atual de covid-19 </p>
          }


        </div>


        {
          user ? <div className="div">
            <div className="divEsquerdo"><tr><th>Dados</th></tr></div>
            <div className="divDireita">
              <table>
                <tr>
                  <th> <FontAwesomeIcon icon={faPhone} /> Contacto telefónico: 92949596X </th>
                </tr>
                <tr>
                  <th>
                    Casos totais: {infetados.length}
                  </th>
                </tr>

              </table>
            </div>
            <br className="break" />
            <Table responsive>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Local Atual</th>
                </tr>
              </thead>
              <tbody>

                {error !== undefined &&
                  <Alert variant="danger">{error}</Alert>
                }
                {infetados.map((infetado, index) => (
                  <tr key={`infetado${index}`}>
                    <td>{infetado.Nome}</td>
                    <td>{infetado.Local}</td>
                  </tr>))}
              </tbody>
            </Table>
          </div>

            :
            <div className="BackgroundInicial">
            </div>
        }
        
      </div>
    );
  }
}
