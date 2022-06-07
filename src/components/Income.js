import {React} from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import ModalUpdate from "./ModalUpdate";

function Income({transaction, removeTransaction, updateTransaction}) {
  

  const handleButton=()=>{
    removeTransaction(transaction.id);
  }

  const badgeVariant =(tipo)=>{
    if(tipo==="Gasto"){
      return "danger  "
    }else{
      return "success"
    }
  }
  return (
    
    <div style={{ display: "flex" }}>
      <Card>
        <Card.Body>
        <Button onClick={handleButton}>
        <AiOutlineClose/>
        </Button>
        {` `}
        <ModalUpdate transaction={transaction} updateTransaction={updateTransaction}/>
        {` `}{transaction.name}{` `}
        <Badge variant={badgeVariant(transaction.tipo)}>{transaction.money}</Badge>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default Income;
