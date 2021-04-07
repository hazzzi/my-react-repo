import styled from 'styled-components'

const Layout = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: ${({ theme }) => theme.palette.background};
`

export default Layout
