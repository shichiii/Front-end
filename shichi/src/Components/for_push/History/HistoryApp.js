import React from 'react'
import HistoryMainPage from './HistoryMainPage'
import NavHistory from './NavHistory'
import Navbar from '../HomePage/NavBar'
const HistoryApp = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <NavHistory/>
        <HistoryMainPage/>
      
    </div>
  )
}

export default HistoryApp
