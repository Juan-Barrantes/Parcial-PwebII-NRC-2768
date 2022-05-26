import React from 'react'
import Footer from './Footer'
import Main from './Main'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer/>
    </div>
  )
}
