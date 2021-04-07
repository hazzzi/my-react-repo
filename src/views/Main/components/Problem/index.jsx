import React from 'react'
import { Button, Typography } from 'src/components'
import styled from 'styled-components'

const Article = styled.article`
    padding: 16px;
`

const Box = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
`

const UnitName = styled(Typography)`
    width: 340px;
    white-space: nowrap;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 16px;
    margin-right: 16px;
`

const ProblemType = styled(Typography)``

const Problem = () => {
    return (
        <Article>
            <Box>
                <ProblemType as="span" color="">
                    객관식
                </ProblemType>
                <UnitName as="p">
                    집합의 표현방법 집합의 표현방법 집합의 표현방법집합의 표현방법 집합의 표현방법 집합의 표현방법집합의
                    표현방법 집합의 표현방법 집합의 표현방법집합의 표현방법 집합의 표현방법 집합의 표현방법
                </UnitName>
                <Button varient="outlined">유사문항</Button>
                <Button varient="outlined">삭제</Button>
            </Box>
            <div>
                <Typography>1</Typography>
                <img
                    alt="문제 이미지"
                    src="https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01118/9_31101118_SVrl8_OBN_p.png"
                />
            </div>
        </Article>
    )
}

Problem.propTypes = {}

export default Problem
