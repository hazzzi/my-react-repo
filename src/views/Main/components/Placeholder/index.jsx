import React from 'react'
import { Button } from 'src/components'
import { Typography } from 'src/components'
import styled, { useTheme } from 'styled-components'

const PlaceholderWrapper = styled.article`
    width: 646px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const PlaceholderButton = styled(Button)`
    width: 70px;
    height: 24px;
    font-size: 12px;
`

function Placeholder() {
    const theme = useTheme()
    return (
        <PlaceholderWrapper>
            <Typography color={theme.palette.text.light} align="center">
                <PlaceholderButton>유사문항</PlaceholderButton>
                버튼을 누르면 <br /> 해당 문제의 유사 문항을 볼 수 있습니다.
            </Typography>
        </PlaceholderWrapper>
    )
}

Placeholder.propTypes = {}

export default Placeholder
