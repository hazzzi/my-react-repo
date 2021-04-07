import React, { useEffect, useState } from 'react'
import api from 'src/api'
import { Button, Layout, Section, SectionSubtitle, SectionTitle } from 'src/components'
import styled from 'styled-components'
import Placeholder from './components/Placeholder'
import ProblemCard from './components/ProblemCard'

function App() {
    const [problems, setProblems] = useState([])
    const [similars, setSimilars] = useState([])

    const [selectedProblem, setSelectedProblem] = useState()

    const reloadData = async () => {
        try {
            const { data: problems } = await api.problems()
            setProblems(problems)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        reloadData()
    }, [])

    const _handleSimilarClick = async ({ id, unitName }) => {
        try {
            const { data: similars } = await api.similars()
            setSelectedProblem({ id, unitName })
            setSimilars(similars)
        } catch (err) {
            console.log(err.message)
        }
    }

    const _handleRemoveClick = id => {
        const { id: selectedID } = selectedProblem || {}

        const index = problems.findIndex(problem => problem.id === id)
        const newProblems = [...problems]
        newProblems.splice(index, 1)
        setProblems(newProblems)

        if (selectedID === id) {
            setSelectedProblem()
            setSimilars([])
        }
    }

    return (
        <Layout>
            <Section>
                <SectionTitle>학습지 상세 편집</SectionTitle>
                {problems.length === 0 && <Placeholder>학습문항이 존재하지 않습니다.</Placeholder>}
                {problems.map((problem, index) => (
                    <ProblemCard
                        key={problem.id}
                        seq={index + 1}
                        selected={selectedProblem?.id === problem.id}
                        problem={problem}
                        onSimilarClick={_handleSimilarClick}
                        onRemoveClick={_handleRemoveClick}
                    />
                ))}
            </Section>
            <Section>
                <SectionTitle align="center">문항 교체/추가</SectionTitle>
                {selectedProblem && <SectionSubtitle as="p">{selectedProblem.unitName}</SectionSubtitle>}
                {similars.length === 0 && (
                    <Placeholder>
                        <PlaceholderButton>유사문항</PlaceholderButton> 버튼을 누르면 <br />
                        해당 문제의 유사 문항을 볼 수 있습니다.
                    </Placeholder>
                )}
                {similars.map((similar, index) => (
                    <ProblemCard key={similar.id} seq={index + 1} isSimilar={true} problem={similar} />
                ))}
            </Section>
        </Layout>
    )
}

const PlaceholderButton = styled(Button)`
    width: 70px;
    height: 24px;
    font-size: 12px;
`

export default App
