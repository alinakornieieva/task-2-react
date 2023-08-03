import PropTypes from "prop-types"

export const Input = ({ placeholder = "Enter...", borderWidth = '1px', color = '#000', value, onChangeEvent, type = "text", rounded = true, size = "md" }) => {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
        borderColor: color,
        borderWidth,
        borderStyle: 'solid',
        borderRadius: rounded ? '5px' : null,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
    }
    return <input style={style} type={type} placeholder={placeholder} value={value} onChange={onChangeEvent} />
}

Input.propTypes = {
    placeholder: PropTypes.string,
    color: PropTypes.string,
    borderWidth: PropTypes.string,
    value: PropTypes.string,
    onChangeEvent: PropTypes.func,
    type: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
}