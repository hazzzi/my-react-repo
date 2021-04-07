import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-direction: column;

    margin: 4px;
    margin-top: 16px;
    border-right: 2px solid ${({ theme }) => theme.palette.border};
    background-color: ${({ theme }) => theme.palette.white};

    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`
export default Section
