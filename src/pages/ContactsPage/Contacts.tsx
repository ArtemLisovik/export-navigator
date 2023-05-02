import { Contacts } from "containers"
import { PrimaryLayout } from "layouts/PrimaryLayout"
import { Helmet } from "react-helmet"


export const ContactsPage = () => {
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
