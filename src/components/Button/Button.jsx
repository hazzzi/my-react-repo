import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
    width: 80px;
    height: 36px;
    margin: 4px;
    background-color: ${({ theme, variant }) =>
        variant === 'contains' ? theme.palette.primary.main : theme.palette.white};
    color: ${({ theme, variant }) => (variant === 'contains' ? theme.palette.white : theme.palette.primary.main)};
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 2px;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
`

Button.propTypes = {
    variant: PropTypes.oneOf(['contains', 'outlined']),
}

Button.defaultProps = {
    variant: 'outlined',
}

export default Button
