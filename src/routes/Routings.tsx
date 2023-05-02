import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { ContactsPage } from "pages/ContactsPage/Contacts"
import { AboutPage } from "pages/AboutPage/AboutPage"
import { ServicesPage } from "pages/ServicesPage/ServicesPage"
import { TeamPage } from "pages/TeamPage/TeamPage"

export const Routings = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
      </Routes>
    </>
  )
}
