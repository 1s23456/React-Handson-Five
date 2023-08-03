
import React, { useState } from 'react';

const PureCompo = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className='pureCompo'>
            <h2>Counter In Pure Component</h2>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default PureCompo;