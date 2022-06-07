import React, { useState } from "react";
import {
  Card,
  Form,
  ButtonToolbar,
  Button,
  ButtonGroup,
  Row,
  Col,
  Modal
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import { MdEdit } from "react-icons/md";



const ModalUpdate = ({ transactions, updateTransaction }) => {
  const [show, setShow] = useState(false);
  const [transactionNew, setTransactionNew] = useState(transactions);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  
  const handleNameInputChange = (e) => {
    setTransactionNew({
      ...transactions,
      name: e.target.value,
    });
  };

  const handleMoneyInputChange = (e) => {
    setTransactionNew({
      ...transactions,
      money: e.target.value,
    });
  };

  const handleTypeSelectChange = (e) => {
    setTransactionNew({ ...transactions, tipo: e.target.value });
  };

  const handleChange = () => {
    updateTransaction(transactions.id, transactionNew.name);
    setShow(false);
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <MdEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card border="info" style={{ width: "19rem" }}>
            <Card.Header>{"Insert"}</Card.Header>
            <Card.Body>
              <Form>
                <Form.Label>Tipo Movimiento: </Form.Label>
                <Form.Group
                  as="select"
                  name="tipo"
                  onChange={handleTypeSelectChange}
                  
                >
                  <option>Seleccionar..</option>
                  <option>Ingreaaaso</option>
                  <option>Gasto</option>
                </Form.Group>

                <br />
              </Form>
              <Form inline>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="nombre"
                  onChange={handleNameInputChange}
                  
                />
              </Form>
              <br />
              <Form inline>
                <Form.Label>Cantidad: </Form.Label>
                <NumberFormat
                  name="money"
                  placeholder="valor"
                  thousandSeparator={true}
                  onChange={handleMoneyInputChange}
                  
                />
              </Form>

              <br />

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                      <Button onClick={handleClose}>Cancelar</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
                      <Button type="submit" onClick={handleChange}>
                        Confirmar
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalUpdate;
