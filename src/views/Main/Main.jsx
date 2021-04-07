/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import api from 'src/api'
import styled from 'styled-components'
import { Layout, Section, Typography } from '../../components'
import Problem from './components/Problem'

const Box = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.palette.border};
    padding-left: 25px;
`

function App() {
    const [problems, setProblems] = useState([])
    const reloadData = async () => {
        try {
            const { data } = await api.problems()
            setProblems(data)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        reloadData()
    }, [])

    return (
        <Layout>
            <Section>
                <Box>
                    <h4>학습지 상세 편집</h4>
                </Box>
                {problems.map((problem, index) => (
                    <Problem key={problem.id} seq={index + 1} {...problem} />
                ))}
            </Section>
            <Section>
                <article>
                    <h4>문항 교체/추가</h4>
                </article>
                <article>
                    <Typography>유사문항 버튼을 누르면</Typography>
                    <Typography>해당 문제의 유사 문항을 볼 수 있습니다.</Typography>
                </article>
            </Section>
        </Layout>
    )
}

export default App
