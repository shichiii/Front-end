import React from 'react'
import User from './User'
import Navbar from './NavBar'
import Hero from './Hero'
import Banner from './Banner'
import Footer from './Footer'
import Search from './Search'

const HomePageApp = () => {
  return (
    <div >
        
        <Navbar/> 
       
        <Hero/> 
        <Banner/>
        {/* <Analys/> */}
      <Search/>
        <Footer/>
      
      
    </div>
  )
}

export default HomePageApp
