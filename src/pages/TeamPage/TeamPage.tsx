import { Promo, SectionPromo } from "containers"
import { PrimaryLayout } from "layouts/PrimaryLayout"

import promo from 'assets/img/promo.webp'

import './TeamPage.scss'
import { Helmet } from "react-helmet"

export const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our team</title>
      </Helmet>
      <PrimaryLayout>
        <section className="team">
          <SectionPromo title='Our team' img={promo} />
          <div className="team__container">

          </div>
        </section>
      </PrimaryLayout>
    </>

  )
}
