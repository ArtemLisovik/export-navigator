import { AboutCompany } from "containers"
import { PrimaryLayout } from "layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"


export const AboutPage = () => {
  const {t} = useTranslation()
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
