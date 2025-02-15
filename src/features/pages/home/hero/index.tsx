import React, { ReactNode } from 'react'
import { FluidContainer, Heading, Section } from '@deriv/quill-design'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import {
    hero_container,
    hero_content,
    hero_content_rtl,
    hero_content_gradient,
    hero_content_btn,
} from './styles.module.scss'
import HeroAwardImages from './award-images'
import HeroImage from './hero-image'
import FloatingCta from './floating-cta'
import Description from './description'
import { Localize, get_lang_direction } from 'components/localization'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

export interface HomeHeroProps {
    children?: ReactNode
    className?: string
}

const HomeHero: React.FC<HomeHeroProps> = () => {
    const [is_mounted] = usePageLoaded()
    const { ctaBottom, visibilityPercentage, entryRef } = useFloatingCtaContext()

    return (
        <>
            <Section className="h-[calc(100vh-136px)] min-h-[587px] relative isolate overflow-hidden">
                <StaticImage
                    src="../../../../images/migration/home/home_hero_bg.jpg"
                    alt="hero bg image"
                    className="w-full -z-10"
                    placeholder="none"
                    formats={['auto', 'webp']}
                    loading="eager"
                    style={{ position: 'absolute', inset: 0 }}
                />
                <FluidContainer className={clsx('h-full flex flex-col relative', hero_container)}>
                    <div
                        className={clsx(
                            'flex flex-col mb-general-2xl',
                            hero_content,
                            hero_content_rtl,
                        )}
                        dir={get_lang_direction()}
                    >
                        <Heading.H1 className="text-solid-slate-50 text-[34px] lg:text-heading-h1">
                            <Localize translate_text="_t_Trading for anyone. Anywhere. Anytime._t_" />
                        </Heading.H1>
                        {is_mounted && <Description />}
                        <TradersHubCtaButton
                            className={clsx('mt-general-2xl', hero_content_btn)}
                            variant="primary"
                            colorStyle="coral"
                            ref={entryRef}
                        />
                    </div>
                    {is_mounted && <HeroAwardImages />}
                    <HeroImage />
                </FluidContainer>
                <div className={clsx('absolute -z-10 inset-50', hero_content_gradient)}></div>
            </Section>
            <FloatingCta
                style={{
                    transform: `translateY(${visibilityPercentage - 100}%)`,
                    bottom: `${-68 + ctaBottom}px`,
                }}
            />
        </>
    )
}

export default HomeHero
