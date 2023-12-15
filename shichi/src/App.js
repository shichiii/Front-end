
//import logo from './logo.svg';
import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Login from "./Components/login";
import Signup from "./Components/signup";
import NotFound from "./Components/for_push/History/404/notfound";
import "./App.css";





import ResetPass from "./Components/for_push/ForgotPass/ResetPass";


import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";


import Landing from "./Components/for_push/Landing/LandingApp";
import Home from "./Components/for_push/HomePage/HomePageApp";
import History from "./Components/for_push/History/HistoryApp";
import CarInfoPage from "./page/CarInfoPage";
import ProfilePage from "./page/ProfilePage";

import Wallet from "./Components/Wallet/WalletApp";

import Advertisement from "./Components/Advertisement_selection/AdvertisementApp";



import Loading from './Components/loading';
import Fail from './Components/fail'

// import  ResetPass from "./Components/for_push/ForgotPass/ResetPass"

//import logo from './logo.svg';
import './App.css';
// import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ForgotApp from "./Components/for_push/ForgotPass/ForgotApp";


import Img from './Components/addcar/Img';

import Addacr from './Components/addcar/Img'
import AuthContext, { AuthProvider } from "./Context/AuthContext";
// import Loading from './Components'


const PrivateRoute = ({ element }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


// <<<<<<< feature/v1.0.0/CarImageSlider
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
// =======
// >>>>>>> Develop

  // useEffect to check the user's authentication status, adjust accordingly
  // useEffect(() => {
  //   // Your authentication logic here to set isLoggedIn
  //   // For example, you might check if the user has a valid token
  //   // Set setIsLoggedIn(true) if the user is authenticated
  //   const accessToken = localStorage.getItem("token");
  //   console.log(accessToken);
  //   setIsLoggedIn(accessToken !== null);
  // }, []);
  const {authTokens, setAuthTokens} = useContext(AuthContext)


  return authTokens ? <Outlet /> : <Navigate to="/" />;
};

// const PrivateRoute = () => {
//   const user = useContext(AuthContext)?.user;
//   return user ? <Outlet /> : <Navigate to="/login" />;
// };



function App() {
  return (
    <Router>
    <AuthProvider>
      <Routes>



        <Route element={<PrivateRoute />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/car/:id" element={<CarInfoPage />} />
          <Route exact path="/profile/:id" element={<ProfilePage />} />


          <Route exact path='/Advertisement' element={<Advertisement />} />
          <Route exact path='/forgot' element={<ForgotApp />} />
          <Route exact path='/advertise' element={<Addacr />} />



          <Route exact path='/wallet' element={<Wallet />} />
                     <Route exact path='/advertise' element={<Img/>} />
                               <Route exact path="*" element={<NotFound />}/>
                               <Route exact path='/fail' element={<Fail />} />
      <Route exact path='/success' element={<Loading />} />
      <Route exact path='/reset/:token' element={<ResetPass />} />
        </Route>
        


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />



        <Route exact path="/" element={<Landing />} />


        {/* <Route exact path='/Advertisement' element={<Advertisement />} />
        <Route exact path="/" element={<Landing />} />

        <Route exact path="/home" element={<Home />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/car/:id" element={<CarInfoPage />} />
        <Route exact path="/profile/:id" element={<ProfilePage />} />

      <Route exact path='/Advertisement' element={<Advertisement/>} />
      <Route exact path='/forgot' element={<ForgotApp/>} />

      <Route exact path='/advertise' element={<Img/>} />
    
      


      <Route exact path='/wallet' element={<Wallet />} />
      <Route exact path='/fail' element={<Fail />} />
      <Route exact path='/success' element={<Loading />} />
      <Route exact path='/reset/:token' element={<ResetPass />} />

      <Route exact path='/home' element={<Home />} /> */}







        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forgot' element={<ForgotApp />} />
      <Route path='/' element={<Landing />} /> */}

        {/* <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/history" element={<ProtectedRoute element={<History />} />} />
        <Route path="/car/:id" element={<ProtectedRoute element={<CarInfoPage />} />} />
        <Route path="/profile/:id" element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path='/Advertisement' element={<ProtectedRoute element={<Advertisement />} />} />
      <Route path='/wallet' element={<ProtectedRoute element={<Wallet />} />} /> */}



      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;



