import React from 'react'
import { Button, Typography } from 'src/components'
import styled, { useTheme } from 'styled-components'
import PropTypes from 'prop-types'

const ProblemWrapper = styled.article`
    width: 649px;
    border-bottom: 8px solid ${({ theme }) => theme.palette.background};

    @media screen and (max-width: 1280px) {
        width: 100%;
    }
`

const ProblemHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    padding: 4px 16px;
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

const ProblemBody = styled.div`
    display: flex;
    // align-items: center;
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

const Problem = ({ seq, problemType, problemURL, unitName }) => {
    const theme = useTheme()
    return (
        <ProblemWrapper>
            <ProblemHeader>
                <Typography as="span" fontWeight="bold" color={theme.palette.text.light}>
                    {problemType}
                </Typography>
                <UnitName as="p">{unitName}</UnitName>
                <Button varient="outlined">유사문항</Button>
                <Button varient="outlined">삭제</Button>
            </ProblemHeader>
            <ProblemBody>
                <Typography fontSize={'24px'} fontWeight="bold" color={theme.palette.primary.light}>
                    {seq}
                </Typography>
                <ImageWrapper>
                    <img alt="문제 이미지" src={problemURL} />
                </ImageWrapper>
            </ProblemBody>
        </ProblemWrapper>
    )
}

Problem.propTypes = {
    seq: PropTypes.number.isRequired,
    problemType: PropTypes.string,
    problemURL: PropTypes.string,
    unitName: PropTypes.string,
}

export default Problem
