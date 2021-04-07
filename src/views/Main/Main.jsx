import React from 'react'
import { Layout, Section, Typography } from '../../components'
import Problem from './components/Problem'

function App() {
    return (
        <Layout>
            <Section>
                <article>
                    <h4>학습지 상세 편집</h4>
                </article>
                <Problem />
                <Problem />
                <Problem />
                <Problem />
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
