import React from 'react'
import { Button, Typography } from 'src/components'
import styled, { useTheme } from 'styled-components'

const Article = styled.article``

const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    padding-left: 47px;
`

const ImageWrapper = styled.div`
    text-align: center;
    margin-left: 37px;

    img {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 0;
    }
`

const ProblemHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    padding: 0 16px;
    padding-left: 38px;
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

const Problem = () => {
    const theme = useTheme()
    return (
        <Article>
            <ProblemHeader>
                <Typography as="span" fontWeight="bold" color={theme.palette.text.light}>
                    객관식
                </Typography>
                <UnitName as="p">
                    집합의 표현방법 집합의 표현방법 집합의 표현방법집합의 표현방법 집합의 표현방법 집합의 표현방법집합의
                    표현방법 집합의 표현방법 집합의 표현방법집합의 표현방법 집합의 표현방법 집합의 표현방법
                </UnitName>
                <Button varient="outlined">유사문항</Button>
                <Button varient="outlined">삭제</Button>
            </ProblemHeader>
            <Box>
                <Typography fontSize={'24px'} fontWeight="bold" color={theme.palette.primary.light}>
                    1
                </Typography>
                <ImageWrapper>
                    <img
                        alt="문제 이미지"
                        src="https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01118/9_31101118_SVrl8_OBN_p.png"
                    />
                </ImageWrapper>
            </Box>
        </Article>
    )
}

Problem.propTypes = {}

export default Problem
