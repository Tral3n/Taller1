import { React, useState } from "react";
import { Navbar, Form, InputGroup, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { uuid } from "uuidv4";
import InputSalary from "./InputSalary";


const Navbars = ({addSalary, salary}) => {
  const [money, setMoney] = useState({
      id_money:"",
      quantity: 0,
  });

  const [dis, setDis] = useState(false);

  const onSubmit = async()=>{ 
    setDis(true);
  }



  const handleSalaryInputChange = (e) => {
    setMoney({
      ...money,
      quantity: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (money.quantity.trim()) {
      addSalary({ ...money, id_money: uuid()});
      
    }
  };

  



  return (
    <Navbar bg="dark" variant="dark" onSubmit={handleSubmit}>
     
      
        Taller 1
    
      <Navbar.Collapse className="justify-content-end">
        <Form inline>
          <InputGroup className="mb-3">
            <Navbar.Text className="px-3">Saldo inicial:{` `}</Navbar.Text>
            <NumberFormat
              name="quantity"
              placeholder="saldo inicial"
              thousandSeparator={true}
              onChange={handleSalaryInputChange}
              value={money.money}
              disabled={dis}
            />
            <Button variant="secondary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
          </InputGroup>
          
        </Form>
        <Form inline>
          <InputGroup className="mb-3">
            <Navbar.Text className="px-3">Saldo final:{` `}</Navbar.Text>
            <InputSalary salary={salary}/>
          </InputGroup>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
