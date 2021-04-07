import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
    background-color: ${({ theme, varient }) =>
        varient === 'contains' ? theme.palette.primary.main : theme.palette.white};
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 2px;
    cursor: pointer;
    width: 80px;
    height: 36px;

    font-weight: bold;
    font-size: ${({ theme }) => theme.pixelToRem(14)};
    line-height: ${({ theme }) => theme.pixelToRem(14)};
    color: ${({ theme, varient }) => (varient === 'contains' ? theme.palette.white : theme.palette.primary.main)};
`

Button.propTypes = {
    varient: PropTypes.oneOf(['contains', 'outlined']),
}

Button.defaultProps = {
    varient: 'outlined',
}

export default Button
