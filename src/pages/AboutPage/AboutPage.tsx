import { AboutCompany } from "containers"
import { PrimaryLayout } from "layouts/PrimaryLayout"
import { Helmet } from "react-helmet"


export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Export Navigator</title>
      </Helmet>
      <PrimaryLayout>
        <AboutCompany />
      </PrimaryLayout>
    </>

  )
}
