export const FirstApp = ({title, subtitle}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}