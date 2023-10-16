//import logo from './logo.svg';
import './App.css';
import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/for_push/Landing/LandingApp'


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Landing />} />





      </Routes>
    </Router>
  );
}

export default App;