
import React from 'react'
import About from '../pages/About'
import Main from '../pages/Main'
import Services from '../pages/Servies'
import Contact from '../pages/Contact'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function page() {
  return (
    <div>
       
        <Navbar/>
            <Main/>
            <About/>
            <Services/>
            <Contact/>
        <Footer/>
    </div>
  )
}

export default page