import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography } from '..'

const SubtitleWrapper = styled.div`
    background-color: #fafafa;
    padding-left: 25px;
`

const SectionSubtitle = ({ children }) => {
    return (
        <SubtitleWrapper>
            <Typography as="p">{children}</Typography>
        </SubtitleWrapper>
    )
}

SectionSubtitle.propTypes = {
    children: PropTypes.node,
}

export default SectionSubtitle
