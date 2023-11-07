import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Components/for_push/Landing/LandingApp";
import Home from "./Components/for_push/HomePage/HomePageApp";
import History from "./Components/for_push/History/HistoryApp";
import CarInfoPage from "./page/CarInfoPage";
import ProfilePage from "./page/ProfilePage";
import Wallet from "./Components/Wallet/WalletApp";
import Advertisement from './Components/Advertisement_selection/AdvertisementApp'
import ForgotApp from "./Components/for_push/ForgotPass/ForgotApp";
import Login from './Components/login';
import Signup from './Components/signup';
import ForgotApp from "./Components/for_push/ForgotPass/ForgotApp";
import Addacr from './Components/addcar/Img'

const ProtectedRoute = ({ element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  // useEffect to check the user's authentication status, adjust accordingly
  useEffect(() => {
    // Your authentication logic here to set isLoggedIn
    // For example, you might check if the user has a valid token
    // Set setIsLoggedIn(true) if the user is authenticated
    const accessToken = localStorage.getItem("token");
    setIsLoggedIn(accessToken !== null);
  }, []);

  return isLoggedIn ? element : <Navigate to="/" />;
};


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






        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forgot' element={<ForgotApp />} />
        <Route path='/' element={<Landing />} />

        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/history" element={<ProtectedRoute element={<History />} />} />
        <Route path="/car/:id" element={<ProtectedRoute element={<CarInfoPage />} />} />
        <Route path="/profile/:id" element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path='/Advertisement' element={<ProtectedRoute element={<Advertisement />} />} />
        <Route path='/wallet' element={<ProtectedRoute element={<Wallet />} />} />

      </Routes>
    </Router>
  );
}

export default App;