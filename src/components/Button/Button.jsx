import styled from 'styled-components'

const Button = styled.button`
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 2px;
    cursor: pointer;
    width: 80px;
    height: 36px;

    font-weight: bold;
    font-size: ${({ theme }) => theme.pixelToRem(14)};
    line-height: ${({ theme }) => theme.pixelToRem(14)};
    color: ${({ theme }) => theme.palette.primary.main};
`

export default Button
