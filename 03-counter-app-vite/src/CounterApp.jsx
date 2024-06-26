import PropTypes from 'prop-types';

const handleAdd = () => {
    console.log(event);
}

export const CounterApp = ({ value }) => {

    return (
        <>
            <h1>Counter App</h1>
            <p>{value}</p>

            <button onClick={handleAdd}>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}