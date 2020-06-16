import React from 'react';
import Child from './Child';
import ValueContext from './ValueContext';


function Parent(props) {
    return (
        <ValueContext.Provider value="80">
            <div>
                <div>Parent Component: {props.num}</div>
                <Child></Child>
            </div>
        </ValueContext.Provider>
    );
}

export default Parent;
