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

const ProtectedRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? element : <Navigate to="/" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect to check the user's authentication status, adjust accordingly
  useEffect(() => {
    // Your authentication logic here to set isLoggedIn
    // For example, you might check if the user has a valid token
    // Set setIsLoggedIn(true) if the user is authenticated
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forgot' element={<ForgotApp />} />
        <Route path='/' element={<Landing />} />


        <Route
          path="/home"
          element={<ProtectedRoute element={<Home />} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/history"
          element={<ProtectedRoute element={<History />} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/car/:id"
          element={<ProtectedRoute element={<CarInfoPage />} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/profile/:id"
          element={<ProtectedRoute element={<ProfilePage />} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path='/Advertisement'
          element={<ProtectedRoute element={<Advertisement />} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path='/wallet'
          element={<ProtectedRoute element={<Wallet />} isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
