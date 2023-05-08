
import { PrimaryLayout } from "layouts/PrimaryLayout"
import { H2, H3 } from "ui"

import './ServicesPage.scss'
import { SectionPromo } from "containers"

import promo from 'assets/img/promo_services.webp'
import { ServicesList } from "containers/ServicesList"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

export const ServicesPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>Our services</title>
      </Helmet>
      <PrimaryLayout>
        <section className="company-services">
          <SectionPromo title={t("main.pages.services.title")} img={promo} />
          <div className="company-services__container container">
            <H3>
              {t("main.pages.services.subtitle")}
            </H3>
            <ServicesList />
          </div>

        </section>
      </PrimaryLayout>
    </>

  )
}
