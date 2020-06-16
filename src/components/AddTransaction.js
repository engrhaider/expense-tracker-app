import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const submitHandler = e => {
        e.preventDefault();

        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        // call addTransaction action
        addTransaction(transaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                        (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}}placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
}