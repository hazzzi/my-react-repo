import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => {
    return <button>{children}</button>
}

Button.propTypes = {
    children: PropTypes.node,
}

export default Button
