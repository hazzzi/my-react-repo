import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
    background-color: ${({ theme, variant }) =>
        variant === 'contains' ? theme.palette.primary.main : theme.palette.white};
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 2px;
    cursor: pointer;
    width: 80px;
    height: 36px;
    margin: 4px;

    font-weight: bold;
    font-size: ${({ theme }) => theme.pixelToRem(14)};
    line-height: ${({ theme }) => theme.pixelToRem(14)};
    color: ${({ theme, variant }) => (variant === 'contains' ? theme.palette.white : theme.palette.primary.main)};
`

Button.propTypes = {
    variant: PropTypes.oneOf(['contains', 'outlined']),
}

Button.defaultProps = {
    variant: 'outlined',
}

export default Button
