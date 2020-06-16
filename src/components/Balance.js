import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const Balance = () => {
    // get GlobalContext that we have created for the app
    const {transactions} = useContext(GlobalContext);
    // get all amounts in an array
    const amounts =  transactions.map(transaction => (transaction.amount));
    // calculate total
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>Rs{total}</h1>
        </div>
    );
}