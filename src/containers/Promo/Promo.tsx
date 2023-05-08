import { H2, LinkButton } from 'ui'
import './Promo.scss'
import { useTranslation } from 'react-i18next'

export const Promo = () => {

    const { t } = useTranslation()

    return (
        <section className="promo">
            <div className="promo__container container">
                <div className="promo__title">
                    <H2>{t("main.pages.home.promo.title")}</H2>
                    <LinkButton to='/contacts'>{t('main.pages.home.promo.button')}</LinkButton>
                </div>
            </div>
        </section>
    )
}
