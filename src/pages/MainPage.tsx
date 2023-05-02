
import { Promo, About, Services, Business } from "containers"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Reviews } from "containers/Reviews/Reviews"
import { Helmet } from "react-helmet"

export const MainPage = () => {
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
