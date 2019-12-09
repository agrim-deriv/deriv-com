import React, { Component } from 'react'
import { Tutorial } from './_tutorial'
import DBotAnimation from './dbot-animation.json'
import { TradeWithDbot } from './_trade-with-dbot'
import Banner from './_banner'
import HowItWorks from './_how-it-works'
import DHero from 'components/custom/_dhero.js'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import dbot_logo from 'images/svg/dbot-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'

class Dbot extends Component {
    render() {
        return (
            <Layout>
                <SEO title={localize('DBot')} />
                <DHero
                    title={localize('DBot')}
                    content={localize('Automate your trading ideas without writing code')}
                    start_automating
                    go_to_live_demo
                    Logo={dbot_logo}
                    animation={DBotAnimation}
                />
                <Banner />
                <HowItWorks />
                <Tutorial />
                <TradeWithDbot />
                <OtherPlatform exclude="dbot" />
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
