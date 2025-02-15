import React from 'react'
import styled from 'styled-components'
import MarketInstruments from '../../../markets/components/sections/_market_instruments'
import { SwapFreePairs } from '../../../markets/instruments/_submarkets'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import { Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { TMarketContent } from 'pages/markets/static/content/_types'
import { TString } from 'types/generics'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 30px;
    }
`

const TryButton = styled(LinkButton)`
    @media ${device.mobileL} {
        white-space: nowrap;
        margin-bottom: 2rem;
    }
    @media ${device.mobileL} {
        margin-top: 24px 0 40px;
    }
`

type TablebtnProps = {
    btnlabel: TString
    text: TString
}

const swap_free_pairs: TMarketContent = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'swap-free-pairs',
            title: '_t_Swap-free pairs_t_',
            component: <SwapFreePairs />,
        },
    ],
}

const Tablebtn = ({ btnlabel, text }: TablebtnProps) => {
    return (
        <StyledSection background="var(--color-grey-30)" padding="3rem 0">
            <StyledContainer direction="column">
                <StyledText width="100%" size="1.7rem">
                    <Localize translate_text={text} />
                </StyledText>
                <MarketInstruments market_content={swap_free_pairs} />
                <TryButton
                    secondary
                    m="4.2rem 0 40px"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    type="submit"
                    to="/signup/"
                >
                    <Localize translate_text={btnlabel} />
                </TryButton>
            </StyledContainer>
        </StyledSection>
    )
}

export default Tablebtn
