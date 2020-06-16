import React, {useContext, useReducer} from 'react';
import ValueContext from "./ValueContext";
import numberReducer from "./numberReducer";

function Child(props) {
    let value = useContext(ValueContext);
    let [number, action] = useReducer(numberReducer, 50);
    return (
        <div>
            Child Component : {number}
            <button onClick={ () => {action({type:'INCREMENT'}); }}>Increment</button>
            <button onClick={ () => {action({type:'DECREMENT'}); }}>DECREMENT</button>
        </div>
    );
}

export default Child;
