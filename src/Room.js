import React, {useState} from 'react';
import ValueContext from './ValueContext';

function Room() {
    const [isLit, setLit] = React.useState(true);
    let [counter, setCounter] = React.useState(0);
    let value = 80;
    return (
        <ValueContext.Provider value={value}>
            <div className="roomName">
                <div>The Room is {isLit ? 'LIT': 'DARK'}</div>
                <div>Counter for clicks: {counter}</div>
                <button className="roomLightBtn" onClick={function () {
                    setLit(!isLit);
                    setCounter(++counter);
                }}>Switch State</button>
            </div>
        </ValueContext.Provider>
    );
}

export default Room;
