
import { Promo, About, Services, Business } from "containers"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Reviews } from "containers/Reviews/components/Reviews"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

export const MainPage = () => {
  const {t} = useTranslation()
  return (
    <>
    <Helmet>
        <title>Export Navigator</title>
      </Helmet>
    <PrimaryLayout>
      <Promo/>
      <About/>
      <Services/>
      <Business/>
      <Reviews/>
    </PrimaryLayout>
    </>
  )
}
