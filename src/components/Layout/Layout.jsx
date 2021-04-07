import styled from 'styled-components'

const Layout = styled.main`
    display: flex;
    justify-content: center;

    // border: 1px solid red;
    background-color: ${({ theme }) => theme.palette.background};

    height: 100vh;
    overflow: hidden;
`

export default Layout
