import { Contacts } from "containers"
import { PrimaryLayout } from "layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"


export const ContactsPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>Contacts us</title>
      </Helmet>
      <PrimaryLayout>
        <Contacts />
      </PrimaryLayout>
    </>

  )
}
