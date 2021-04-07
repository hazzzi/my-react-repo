import PropTypes from 'prop-types'
import React from 'react'
import { Button, Typography } from 'src/components'
import styled, { useTheme } from 'styled-components'

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

const ProblemCard = ({ seq, selected, isSimilar, problem, onSimilarClick, onRemoveClick, onAddClick }) => {
    const theme = useTheme()
    const { id, unitName, problemType, problemURL } = problem

    return (
        <ProblemWrapper>
            <ProblemHeader>
                <Typography as="span" fontWeight="bold" color={theme.palette.text.light}>
                    {problemType}
                </Typography>
                <UnitName as="p">{unitName}</UnitName>
                {isSimilar ? (
                    <>
                        <Button variant="outlined" onClick={() => onAddClick(problem)}>
                            추가
                        </Button>
                        <Button variant="outlined">교체</Button>
                    </>
                ) : (
                    <>
                        <Button variant={selected ? 'contains' : 'outlined'} onClick={() => onSimilarClick(problem)}>
                            유사문항
                        </Button>
                        <Button variant="outlined" onClick={() => onRemoveClick(id)}>
                            삭제
                        </Button>
                    </>
                )}
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

ProblemCard.propTypes = {
    seq: PropTypes.number.isRequired,
    selected: PropTypes.number.isRequired,
    isSimilar: PropTypes.bool,
    problem: PropTypes.objectOf({
        id: PropTypes.number.isRequired,
        problemType: PropTypes.string,
        problemURL: PropTypes.string,
        unitName: PropTypes.string,
    }),
    onSimilarClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
    onAddClick: PropTypes.func,
}

export default ProblemCard
