import PropTypes from 'prop-types'
import styled from 'styled-components'

const Typography = styled.span`
    font-size: ${({ fontSize }) => fontSize ?? '14px'};
    font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
    color: ${({ theme, color }) => color ?? theme.palette.text.main};
`

Typography.propTypes = {
    type: PropTypes.oneOf(['span', 'p']),
}

export default Typography
