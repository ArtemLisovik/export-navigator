import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { ContactsPage } from "pages/ContactsPage/Contacts"
import { AboutPage } from "pages/AboutPage/AboutPage"
import { ServicesPage } from "pages/ServicesPage/ServicesPage"

export const Routings = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
      </Routes>
    </>
  )
}
