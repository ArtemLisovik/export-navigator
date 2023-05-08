import { LinkButton, H2 } from 'ui'

import './Services.scss'
import { Li } from 'ui/Li/Li'
import { useTranslation } from 'react-i18next'

export const Services = () => {

    const {t} = useTranslation()

  return (
    <section className="services">
        <div className="services__container container">
            <H2 color={{color: 'rgb(17,17,17)'}}>
                {t("main.pages.home.services.title")}
            </H2>
            <ul className="services__list">
                <Li className="services__item">
                    <h3 className="services__title">{t("main.pages.home.services.first.subtitle")}</h3>
                    <p className="services__text">{t("main.pages.home.services.first.text")}</p>
                </Li>
                <Li className="services__item">
                    <h3 className="services__title">{t("main.pages.home.services.second.subtitle")}</h3>
                    <p className="services__text">{t("main.pages.home.services.second.text")}</p>
                </Li>
                <Li className="services__item">
                    <h3 className="services__title">{t("main.pages.home.services.third.subtitle")}</h3>
                    <p className="services__text">{t("main.pages.home.services.third.text")}</p>
                </Li>
            </ul>

            <LinkButton to='/services' type='dark'>{t("main.pages.home.services.button")}</LinkButton>
        </div>
    </section>
  )
}
