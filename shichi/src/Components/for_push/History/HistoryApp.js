import React from 'react'

import NavHistory from './NavHistory'
import Navbar from '../HomePage/NavBar'
import History from './History'
import Footer from '../HomePage/Footer'
const HistoryApp = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <NavHistory/>
        
        <History/>
      <Footer/>
    </div>
  )
}

export default HistoryApp

