import { LinkButton, H2 } from 'ui'

import './About.scss'
import { useTranslation } from 'react-i18next'

export const About = () => {

    const {t} = useTranslation()
    return (
        <section className="about">
            <div className="about__container container">
                <H2>
                    {t("main.pages.home.about.title")}
                </H2>
                <LinkButton to='/about'>{t("main.pages.home.about.button")}</LinkButton>
            </div>
        </section>
    )
}