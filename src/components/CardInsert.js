import { React, useState } from "react";
import {
  Card,
  Form,
  ButtonToolbar,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import { uuid } from "uuidv4";
 

const CardInsert = ({ salary, updateSalary, addTransaction }) => {
  const [transaction, setTran] = useState({
    id: "",
    tipo: "",
    name: "",
    money: 0,
  });

  const handleNameInputChange = (e) => {
    setTran({
      ...transaction,
      name: e.target.value,
    });
  };

  const handleMoneyInputChange = (e) => {
    setTran({
      ...transaction,
      money: e.target.value,
    });
  };

  const handleTypeSelectChange = (e) => {
    setTran({ ...transaction, tipo: e.target.value });
  };

  const handleSubmitCardInsert = (e) => {
    e.preventDefault();
    console.log(transaction.tipo);

    var salaryQuantity1 = salary.map((dato) => dato.quantity)[0];
    console.log('quantity: ' +salaryQuantity1);

    var moneyTransactionString = transaction.money;

    console.log('money tran'+ moneyTransactionString)

    var salaryQuantityString = new String(salaryQuantity1);
    console.log('quantity dos: '+ salaryQuantity1);
    console.log('salary: '+ salaryQuantityString);
    
    if (salaryQuantityString.includes(",")) {
      salaryQuantityString = salaryQuantity1.replaceAll(",", "");
      console.log(salaryQuantityString);
    }
    const salaryQuantityNumber = parseInt(salaryQuantityString);
    console.log(salaryQuantityNumber);

    if (moneyTransactionString.includes(",")) {
      moneyTransactionString = transaction.money.replaceAll(",", "");
    }
    const moneyTransactionNumber = parseInt(moneyTransactionString);
    console.log(moneyTransactionNumber);

    if (transaction.tipo === "Gasto") {
      const newSalaryCalculated = salaryQuantityNumber - moneyTransactionNumber;
      console.log(newSalaryCalculated);
      if (newSalaryCalculated > 0) {
        updateSalary(salary.id, newSalaryCalculated);
        if (transaction.name.trim()) {
          addTransaction({ ...transaction, id: uuid() });
        }
      } else {
        alert("No se pudo, no hay capital");
      }
    } else if (transaction.tipo === "Ingreso") {
      const newSalaryCalculated2 =
        salaryQuantityNumber + moneyTransactionNumber;
      console.log(newSalaryCalculated2);
      if (newSalaryCalculated2 > 0) {
        console.log("sirvió");
        updateSalary(salary.id, newSalaryCalculated2);
        if (transaction.name.trim()) {
          addTransaction({ ...transaction, id: uuid() });
        }
      } else {
        alert("No se pudo, no hay capital");
      }
    }


  };

  return (
    <Card border="info" style={{ width: "19rem" }}>
      <Card.Header>{"INSERCION DE DATOS"}</Card.Header>
      <Card.Body>
        <Form>
          <Form.Label>Tipo Movimiento: </Form.Label>
          <Form.Group as="select" name="tipo" onChange={handleTypeSelectChange}>
            <option>Seleccionar..</option>
            <option>Ingreso</option>
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
                <Button>Cancelar</Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button type="submit" onClick={handleSubmitCardInsert}>
                  Confirmar
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default CardInsert;
