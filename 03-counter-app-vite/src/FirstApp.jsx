import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

// Default props will be deprecated soon, use defaultProps instead
FirstApp.defaultProps = {
    title: 'There is no title',
    subtitle: 'There is no subtitle',
    name: 'Ibrahin Perez'
}