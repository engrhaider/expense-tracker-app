import React, {useState} from 'react';
import logo from './logo.svg';

function Room() {
    const [isLit, setLit] = React.useState(true);
    let [counter, setCounter] = React.useState(0);
    return (
        <div className="roomName">
            <div>The Room is {isLit ? 'LIT': 'DARK'}</div>
            <div>Counter for clicks: {counter}</div>
            <button className="roomLightBtn" onClick={function () {
                setLit(!isLit);
                setCounter(++counter);
            }}>Switch State</button>
        </div>
    );
}

export default Room;
