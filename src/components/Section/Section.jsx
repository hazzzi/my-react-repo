import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 16px 4px 4px 4px;
    border-right: 2px solid ${({ theme }) => theme.palette.border};
    background-color: ${({ theme }) => theme.palette.white};
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`
export default Section
