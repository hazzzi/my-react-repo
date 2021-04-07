import PropTypes from 'prop-types'
import React from 'react'
import { Typography } from 'src/components'
import styled, { useTheme } from 'styled-components'

const PlaceholderWrapper = styled.article`
    width: 646px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1280px) {
        width: 450px;
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

function Placeholder({ children }) {
    const theme = useTheme()
    return (
        <PlaceholderWrapper>
            <Typography color={theme.palette.text.light} align="center">
                {children}
            </Typography>
        </PlaceholderWrapper>
    )
}

Placeholder.propTypes = {
    children: PropTypes.node,
}

export default Placeholder
