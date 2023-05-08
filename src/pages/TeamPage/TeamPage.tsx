import { Promo, SectionPromo, TeamList } from "containers"
import { PrimaryLayout } from "layouts/PrimaryLayout"

import promo from 'assets/img/promo.webp'

import './TeamPage.scss'
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

export const TeamPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>Our team</title>
      </Helmet>
      <PrimaryLayout>
        <section className="team">
          <SectionPromo title={t("main.pages.team.title")} img={promo} />
          <div className="team__container container">
            <TeamList/>
          </div>
        </section>
      </PrimaryLayout>
    </>

  )
}
