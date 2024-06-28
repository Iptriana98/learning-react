import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <h1>Counter App</h1>
            <p>{counter}</p>

            <button onClick={handleAdd}>
                Add +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}