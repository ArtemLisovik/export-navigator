import React from 'react'
import { Footer, Header } from '../containers'

type PrimaryLayoutProps = {
    children: React.ReactNode
}

export const PrimaryLayout = ({children}:PrimaryLayoutProps) => {
  return (
    <>
     <Header/>
        <main className="main">
            {children}
        </main>
    <Footer/>
    </>
   
  )
}
