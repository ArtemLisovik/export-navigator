
import { PrimaryLayout } from "layouts/PrimaryLayout"
import { H2, H3 } from "ui"

import './ServicesPage.scss'
import { SectionPromo } from "containers"

import promo from 'assets/img/promo_services.webp'
import { ServicesList } from "containers/ServicesList"
import { Helmet } from "react-helmet"

export const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our team</title>
      </Helmet>
      <PrimaryLayout>
        <section className="company-services">
          <SectionPromo title='Our services' img={promo} />
          <div className="company-services__container container">
            <H3>We help businesses redefine their goals, vision, and mission to create growth-driven strategic plans.
            </H3>
            <ServicesList />
          </div>

        </section>
      </PrimaryLayout>
    </>

  )
}
