import PropTypes from "prop-types"

export const Button = ({ text, handleClick, type = "button", rounded = true, backgroundColor = "#0d6efd", color = "#fff", size = "md" }) => {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
        backgroundColor,
        borderRadius: rounded ? '5px' : null,
        color,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    }
    return <button type={type} onClick={handleClick} style={style}>
        {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
    type: PropTypes.string,
    rounded: PropTypes.bool,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
}