/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import api from 'src/api'
import { Layout, Section, SectionTitle } from 'src/components'
import Placeholder from './components/Placeholder'
import Problem from './components/Problem'

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
                <Placeholder />
                {/* <Problem key={problem.id} seq={index + 1} {...problem} /> */}
            </Section>
        </Layout>
    )
}

export default App
