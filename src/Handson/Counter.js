import React from 'react'
import HigherOrder from './HigherOrder'

const Counter = ({ count, increment }) => {
    return (
        <div className='main'>
            <h2>Counter Button created using Higher Order component</h2>
            <h3>Count: {count} Times</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default HigherOrder(Counter)