//import logo from './logo.svg';
import "./App.css";
import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './Components/login';
import Signup from './Components/signup';

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/for_push/Landing/LandingApp";
import Home from "./Components/for_push/HomePage/HomePageApp";
import History from "./Components/for_push/History/HistoryApp";
import CarInfoPage from "./page/CarInfoPage";
import ProfilePage from "./page/ProfilePage";
import Wallet  from "./Components/Wallet/WalletApp";


import Advertisement from './Components/Advertisement_selection/AdvertisementApp'


import ForgotApp from "./Components/for_push/ForgotPass/ForgotApp";
import Addacr from './Components/addcar/Img'

function App() {
  return (
    <Router>
      <Routes>


      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/car/:id" element={<CarInfoPage />} />
        <Route exact path="/profile/:id" element={<ProfilePage />} />


      <Route exact path='/Advertisement' element={<Advertisement/>} />
      <Route exact path='/forgot' element={<ForgotApp/>} />
      <Route exact path='/advertise' element={<Addacr/>} />
    
      

      <Route exact path='/wallet' element={<Wallet />} />





      </Routes>
    </Router>
  );
}

export default App;
