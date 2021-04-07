import PropTypes from 'prop-types'
import styled from 'styled-components'

const Typography = styled.span`
    font-size: ${({ fontSize }) => fontSize ?? '14px'};
    font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
    color: ${({ theme, color }) => color ?? theme.palette.text.main};
    text-align: ${({ align }) => align};
`

Typography.propTypes = {
    type: PropTypes.oneOf(['span', 'p']),
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.oneOf(['center', 'left', 'right']),
}

export default Typography
