import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const IncomeExpenses = () => {
    // get global context
    const {transactions} = useContext(GlobalContext);

    // get all amounts in an array
    const amounts =  transactions.map(transaction => (transaction.amount));

    // calculate income
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    // calculate expense
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>

    );
}