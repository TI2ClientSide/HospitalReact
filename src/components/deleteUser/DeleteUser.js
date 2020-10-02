import React from "react"
import { Modal, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import authService from "../../services/auth"

// Componente para remover utilizadores do mesmo genero do removeDialog
export default class DeleteUserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proceed: false,
    };
  }

 handleRemove() {
    authService.deleteUser(this.props.userId).then(() => this.props.removed());
  }

  render() {
    const { show, handleClose } = this.props;
    const { proceed } = this.state;


    return (
    <Modal show={show} onHide={handleClose}>

      <Modal.Header closeButton>
        <Modal.Title>Remover utilizador</Modal.Title> 
      </Modal.Header>

      <Modal.Body>This user will be completely removed from your system, do you want to proceed?&nbsp;
            {' '}
        <FontAwesomeIcon icon={proceed ? faCheckSquare : faSquare}
          onClick={() => this.setState ({ proceed: !proceed })} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={()=>this.handleRemove()} disabled={!proceed}>
          Remove
          </Button>
      </Modal.Footer>

    </Modal>
    );
  }
}