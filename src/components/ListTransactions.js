import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Income from './Income';



const ListTransactions = ({transactions, removeTransaction, updateTransaction}) => {
    return (
        <ListGroup>
            {transactions.map(transaction=>(<Income 
                transaction={transaction} 
                removeTransaction={removeTransaction}
                updateTransaction={updateTransaction}
                />))}
        </ListGroup>
    )
}

export default ListTransactions;