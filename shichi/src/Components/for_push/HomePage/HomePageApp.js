import React from 'react'
import User from './User'
import Navbar from './NavBar'
import Hero from './Hero'
import Banner from './Banner'
import Footer from './Footer'
import Search from './newsearch'
import Process from './progressnew'
import BannerCategory2 from './BannerCategory2'
import BannerCategory from './BannerCategory'
import BannerCategory1 from './BannerCategory1'

const HomePageApp = () => {
  return (
    <div >
        
        <Navbar/> 
     
        <Hero/>   <Process/><Search/> 
        <Banner/>
       
        
        {/* <BannerCategory2/>
        <BannerCategory/>
        <BannerCategory1/> */}
         
     
        <Footer/>
      
      
    </div>
  )
}

export default HomePageApp
