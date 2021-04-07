import PropTypes from 'prop-types'
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import api from 'src/api'
import { Button, Typography } from 'src/components'
import { selectedProblemState, similarsState } from 'src/recoil/store'
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

const ProblemCard = ({ seq, isSimilar, problem, onRemoveClick, onAddClick, onChangeClick }) => {
    const theme = useTheme()
    const { id, problemType, problemURL, unitName } = problem

    const [selectedProblem, setSelectedProblem] = useRecoilState(selectedProblemState)
    // const [problems, setProblems] = useRecoilState(problemsState)
    const setSimilars = useSetRecoilState(similarsState)

    const _handleSimilarClick = async problem => {
        try {
            const { data: similars } = await api.similars()
            setSelectedProblem(problem)
            setSimilars(similars)
        } catch (err) {
            console.log(err.message)
        }
    }

    const selected = selectedProblem?.id === id

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
                        <Button variant="outlined" onClick={() => onChangeClick(problem)}>
                            교체
                        </Button>
                    </>
                ) : (
                    <>
                        {/* <Button variant={selected ? 'contains' : 'outlined'} onClick={() => onSimilarClick(problem)}> */}
                        <Button
                            variant={selected ? 'contains' : 'outlined'}
                            onClick={() => _handleSimilarClick(problem)}
                        >
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
    isSimilar: PropTypes.bool,
    id: PropTypes.number.isRequired,
    problem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        problemType: PropTypes.string,
        problemURL: PropTypes.string,
        unitName: PropTypes.string,
    }),
    onSimilarClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
    onAddClick: PropTypes.func,
    onChangeClick: PropTypes.func,
}

export default ProblemCard
