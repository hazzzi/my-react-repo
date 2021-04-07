import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import api from 'src/api'
import { Button, Layout, Section, SectionSubtitle, SectionTitle } from 'src/components'
import { firstLoadState, problemsState, selectedProblemState, similarsState } from 'src/recoil/store'
import styled from 'styled-components'
import Placeholder from './components/Placeholder'
import ProblemCard from './components/ProblemCard'

const PlaceholderButton = styled(Button)`
    width: 70px;
    height: 24px;
    font-size: 12px;
`

function App() {
    const [problems, setProblems] = useRecoilState(problemsState)
    const [firstLoad, setFirstLoad] = useRecoilState(firstLoadState)

    const similars = useRecoilValue(similarsState)
    const selectedProblem = useRecoilValue(selectedProblemState)

    const reloadData = async () => {
        try {
            if (!firstLoad.problem) return

            const { data: problems } = await api.problems()
            setProblems(problems)
            setFirstLoad({ ...firstLoad, problem: true })
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
                {problems.length === 0 && <Placeholder>학습문항이 존재하지 않습니다.</Placeholder>}
                {problems.map((problem, index) => (
                    <ProblemCard key={problem.id} seq={index + 1} problem={problem} />
                ))}
            </Section>
            <Section>
                <SectionTitle align="center">문항 교체/추가</SectionTitle>
                {selectedProblem && similars.length > 0 && (
                    <SectionSubtitle as="p">{selectedProblem.unitName}</SectionSubtitle>
                )}
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

export default App
