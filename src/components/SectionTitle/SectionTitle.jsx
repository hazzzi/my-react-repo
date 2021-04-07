import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleWrapper = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.palette.border};

    ${({ align }) => (align === 'center' ? `text-align: center` : ` padding-left: 25px`)};
`

const SectionTitle = ({ children, align }) => {
    return (
        <TitleWrapper align={align}>
            <h4>{children}</h4>
        </TitleWrapper>
    )
}

SectionTitle.propTypes = {
    children: PropTypes.node,
    align: PropTypes.oneOf(['center']),
}

export default SectionTitle
