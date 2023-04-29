
import { Promo, About, Services, Business } from "containers"
import { PrimaryLayout } from "../layouts/PrimaryLayout"

export const MainPage = () => {
  return (
    <PrimaryLayout>
      <Promo/>
      <About/>
      <Services/>
      <Business/>
    </PrimaryLayout>
  )
}
