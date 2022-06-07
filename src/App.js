import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardInsert from "./components/CardInsert";
import CardTransactions from "./components/CardTransactions";
import Navbar from "./components/Navbars";

const App = () => {
  const [transactions, setTtransactions] = useState([]);
  const [salary, setSalary] = useState([]);
 
  const addTransaction = (transaction) => {
       setTtransactions([...transactions, transaction]);
  };

  const addSalary = (newSalary) => {
    setSalary([...salary, newSalary]);
  }; 
  

  const updateSalary = (id, newSalary) => {
    const newSalaryUpdated = salary.map((salar) => {
      if (salar.id === id) {
        return { ...salar, quantity: newSalary };
      }
      return salar;
    });
    setSalary(newSalaryUpdated);
  };

  const updateTransaction = (id,  name,) => {
    const newTransactionUpdated = transactions.map((tran) => {
      if (tran.id === id) {
        return {
          ...tran,
          
          name: name,
  
        };
      }
      return tran;
    });
    setTtransactions(newTransactionUpdated);
  };

  const removeTransaction = (id) => {
    setTtransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };


  

  return (
    <Container>
      <Navbar addSalary={addSalary} salary={salary}/>
      <br />
      <Row>
        <Col>
          <CardInsert
            salary={salary}
            updateSalary={updateSalary}
            addTransaction={addTransaction}
          />
        </Col>
        <Col>
          <CardTransactions
            transactions={transactions}
            removeTransaction={removeTransaction}
            updateTransaction={updateTransaction}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
