import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: left;
        ${(props) =>
            props.as === 'h4' ? 'font-size: var(--text-size-sm);' : 'font-size: var(--text-size-l)'}
    }
`

const DHowItWorks = ({ Video, title }) => {
    return (
        <SectionContainer>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" align="center" weight="500">
                    {localize('How it works')}
                </StyledHeader>
                <StyledHeader as="h2" align="center" size="var(--text-size-header-1)" mt="0.8rem">
                    {title}
                </StyledHeader>
                <Video />
            </Container>
        </SectionContainer>
    )
}

DHowItWorks.propTypes = {
    title: PropTypes.string,
    Video: PropTypes.func,
}
export default DHowItWorks
