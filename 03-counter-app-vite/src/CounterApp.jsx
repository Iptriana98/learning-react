import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'; // Import the CSS file

// Define the CounterApp component and destructure the 'value' prop
export const CounterApp = ({ value }) => {
    // Declare a local state 'counter' and a function 'setCounter' to update it
    const [counter, setCounter] = useState(value);

    // Function to increment the counter by 1
    const handleAdd = () => {
        setCounter(counter + 1);
    };

    // Function to decrement the counter by 1
    const handleSubtract = () => {
        setCounter(counter - 1);
    };

    // Function to reset the counter to the initial value
    const handleReset = () => {
        setCounter(value);
    };

    // Render the component
    return (
        <div className="counter-app">
            {/* App title */}
            <h1 className="title">Counter App</h1>

            {/* Display the current counter value */}
            <p className="counter">{counter}</p>

            {/* Container for the buttons */}
            <div className="button-container">
                {/* Button to increment the counter */}
                <button className="button" onClick={handleAdd}>+1</button>
                {/* Button to decrement the counter */}
                <button className="button" onClick={handleSubtract}>-1</button>
                {/* Button to reset the counter */}
                <button className="button" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

// Define the prop types and mark 'value' as required
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};