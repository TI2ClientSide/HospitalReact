import React from "react"
import {Modal,Button,Form} from "react-bootstrap"
import infetadosService from "../../services/infetados"

// Componente para dar submit e/ou atualizar infetados dando um novo submit
export default class SubmitDialogComponent extends React.Component{
    toUpdate=false;

constructor(props){
    super(props);
    this.toUpdate=props.infetado!== undefined
    // Conforme o modelo de dados da api
    // Se não for para atualizar, significa que é para criar um novo
    this.state=this.toUpdate 
    ? props.infetado
    :{
        Nome: '',
        Idade: 0,
        Sexo: '',
        Local: '',
        Estado: '',
        Sintomas: '',
    }
}


handleSubmit(evt){
    // Para evitar submits de bots...
    evt.preventDefault();

    // O this.state é o body do nosso infetado
    if(this.toUpdate){
         infetadosService
        .update(this.props.infetado._id,this.state)
        .then(()=>this.props.submited(this.state));
    }else{
        infetadosService
        .create(this.state)
        .then(infetadoId => {this.props.submited({...this.state, _id: infetadoId})});
    }
}

    render(){
        const {show,handleClose}=this.props;
        // Conforme o modelo de dados da api
        const {Nome,Idade,Sexo,Local,Estado,Sintomas}=this.state;

        return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>{this.toUpdate ? 'Edit infetado' : 'Create infetado'}</Modal.Title>
            </Modal.Header>
        
            <Form onSubmit={evt => this.handleSubmit (evt)}>

                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                        value={Nome}
                        onChange={evt => this.setState ({Nome: evt.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                        value={Idade}
                        onChange={evt => this.setState ({Idade: evt.target.value})}
                        type="number"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control
                        value={Sexo}
                        onChange={evt => this.setState ({Sexo: evt.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Local</Form.Label>
                        <Form.Control
                        value={Local}
                        onChange={evt => this.setState ({Local: evt.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                        value={Estado}
                        onChange={evt => this.setState ({Estado: evt.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Sintomas</Form.Label>
                        <Form.Control
                        value={Sintomas}
                        onChange={evt => this.setState ({Sintomas: evt.target.value})}
                        />
                    </Form.Group>


                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" type="submit">Save</Button>
                </Modal.Footer>

            </Form>
        </Modal>);
    }
}