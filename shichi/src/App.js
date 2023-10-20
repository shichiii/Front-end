//import logo from './logo.svg';
//import './App.css';
import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './Components/login';
import Signup from './Components/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;