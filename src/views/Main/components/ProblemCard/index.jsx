import PropTypes from 'prop-types'
import React from 'react'
import { useRecoilState } from 'recoil'
import api from 'src/api'
import { Button, Typography } from 'src/components'
import { firstLoadState, problemsState, selectedProblemState, similarsState } from 'src/recoil/store'
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

const ProblemCard = ({ seq, isSimilar, problem }) => {
    const theme = useTheme()
    const { id, problemType, problemURL, unitName } = problem

    const [selectedProblem, setSelectedProblem] = useRecoilState(selectedProblemState)
    const [problems, setProblems] = useRecoilState(problemsState)
    const [similars, setSimilars] = useRecoilState(similarsState)

    const [firstLoad, setFirstLoad] = useRecoilState(firstLoadState)

    // 유사문항 버튼 클릭
    const _handleSimilarClick = async problem => {
        try {
            if (firstLoad.similar) {
                const { data: similars } = await api.similars()
                setSimilars(similars)
                setFirstLoad({ ...firstLoad, similar: false })
            }

            setSelectedProblem(problem)
        } catch (err) {
            console.log(err.message)
        }
    }

    // 삭제 버튼 클릭
    const _handleRemoveClick = id => {
        const newProblems = [...problems]

        const index = problems.findIndex(problem => problem.id === id)
        newProblems.splice(index, 1)

        setProblems(newProblems)

        if (selectedProblem?.id === id) {
            setSelectedProblem()
            setSimilars([])
        }
    }

    // 추가 버튼 클릭
    const _handleAddClick = problem => {
        const existed = problems.every(({ id }) => id !== problem.id)

        const newProblems = [...problems]
        const newSimilars = [...similars]

        if (existed) {
            const index = problems.findIndex(problem => problem.id === selectedProblem?.id)
            newProblems.splice(index + 1, 0, problem)
        }

        const sIndex = similars.findIndex(similar => similar.id === problem.id)
        newSimilars.splice(sIndex, 1)

        setProblems(newProblems)
        setSimilars(newSimilars)
    }

    // 변경 버튼 클릭
    const _handleChangeClick = problem => {
        const existed = problems.every(({ id }) => id !== problem.id)

        const newProblems = [...problems]
        const newSimilars = [...similars]

        if (existed) {
            const index = problems.findIndex(problem => problem.id === selectedProblem?.id)
            newProblems.splice(index, 1, problem)
        }

        const sIndex = similars.findIndex(similar => similar.id === problem.id)
        newSimilars.splice(sIndex, 1)

        setProblems(newProblems)
        setSimilars(newSimilars)
        setSelectedProblem(problem)
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
                        <Button variant="outlined" onClick={() => _handleAddClick(problem)}>
                            추가
                        </Button>
                        <Button variant="outlined" onClick={() => _handleChangeClick(problem)}>
                            교체
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            variant={selected ? 'contains' : 'outlined'}
                            onClick={() => _handleSimilarClick(problem)}
                        >
                            유사문항
                        </Button>
                        <Button variant="outlined" onClick={() => _handleRemoveClick(id)}>
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
    problem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        problemType: PropTypes.string,
        problemURL: PropTypes.string,
        unitName: PropTypes.string,
    }),
}

export default ProblemCard
