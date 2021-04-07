import React, { useEffect, useState } from 'react'
import api from 'src/api'
import { Layout, Section, Typography } from '../../components'
import Problem from './components/Problem'

function App() {
    const [data, setData] = useState()
    const reloadData = async () => {
        try {
            const response = await api.problems()
            setData(response)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        reloadData()
    }, [])

    console.log(data)

    return (
        <Layout>
            <Section>
                <h4>학습지 상세 편집</h4>
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
