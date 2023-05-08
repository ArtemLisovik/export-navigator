import { H3, H4, Img, P } from 'ui'
import { SectionPromo } from 'containers'

import poster from 'assets/img/about_decor.webp'
import promo from 'assets/img/about_promo.webp'

import './AboutCompany.scss'
import { useTranslation } from 'react-i18next'

export const AboutCompany = () => {
    const { t } = useTranslation()
    return (
        <>

            <section className="aboutCompany">
                <SectionPromo title={t("main.pages.about.title")} img={promo} />
                <div className="aboutCompany__container container">
                    <div className="aboutCompany__descr">
                        <H3>
                            {t("main.pages.about.section1.subtitle")}
                        </H3>
                        <P className="aboutCompany__text">
                            {t("main.pages.about.section1.text1")}
                        </P>
                        <P className="aboutCompany__text">
                            {t("main.pages.about.section1.text2")}
                        </P>
                        <P className="aboutCompany__text">
                            {t("main.pages.about.section1.text3")}
                        </P>
                        <P className="aboutCompany__text">
                            {t("main.pages.about.section1.text4")}
                        </P>
                        <P className="aboutCompany__text">
                            {t("main.pages.about.section1.text5")}
                        </P>
                    </div>
                    <div className="aboutCompany__poster">
                        <Img src={poster} alt="poster" className="aboutCompany__poster-img" />
                    </div>

                </div>
            </section>

            <section className="advantages">
                <div className="advantages__container container">
                    <H3>
                        {t("main.pages.about.section2.subtitle")}
                    </H3>
                    <P className="aboutCompany__text">
                        {t("main.pages.about.section2.text1")}
                    </P>
                    <P className="aboutCompany__text">
                        {t("main.pages.about.section2.text2")}
                    </P>
                    <P className="aboutCompany__text">
                        {t("main.pages.about.section2.text3")}
                    </P>

                </div>
            </section>

            <section className="benefits">
                <div className="benefits__container container">
                    <H3>
                        {t("main.pages.about.section3.subtitle")}
                    </H3>
                    <H4>{t("main.pages.about.section3.subtitle2")}</H4>
                    <P className="aboutCompany__text">
                        {t("main.pages.about.section3.text1")}
                    </P>
                    <P className="aboutCompany__text">
                        {t("main.pages.about.section3.text2")}
                    </P>
                    <P className="aboutCompany__text">
                        {t("main.pages.about.section3.text3")}
                    </P>

                </div>
            </section>
        </>
    )
}
