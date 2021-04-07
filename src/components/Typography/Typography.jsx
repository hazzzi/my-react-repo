import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({ children }) => {
    return <span>{children}</span>
}

Typography.propTypes = {
    children: PropTypes.node,
}

export default Typography
