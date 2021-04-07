/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import api from 'src/api'
import { Layout, Section, SectionTitle } from 'src/components'
import Placeholder from './components/Placeholder'
import Problem from './components/Problem'

function App() {
    const [problems, setProblems] = useState([])
    const [similars, setSimilars] = useState([])
    const reloadData = async () => {
        try {
            const { data: problems } = await api.problems()
            const { data: similars } = await api.similars()
            setProblems(problems)
            setSimilars(similars)
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
                {similars.length === 0 && <Placeholder />}
                {similars.map((similar, index) => (
                    <Problem key={similar.id} seq={index + 1} similar {...similar} />
                ))}
            </Section>
        </Layout>
    )
}

export default App
