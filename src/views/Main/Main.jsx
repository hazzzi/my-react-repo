/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import api from 'src/api'
import { SectionTitle } from 'src/components'
import styled from 'styled-components'
import { Layout, Section, Typography } from '../../components'
import Problem from './components/Problem'
import Similar from './components/Similar'

const Box = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.palette.border};
    padding-left: 25px;
`

const Box2 = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.palette.border};
    text-align: center;
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
                <SectionTitle>학습지 상세 편집</SectionTitle>
                {problems.map((problem, index) => (
                    <Problem key={problem.id} seq={index + 1} {...problem} />
                ))}
            </Section>
            <Section>
                <SectionTitle align="center">문항 교체/추가</SectionTitle>
                <Similar />
            </Section>
        </Layout>
    )
}

export default App
