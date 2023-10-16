//import logo from './logo.svg';
import './App.css';
import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/for_push/Landing/LandingApp'
import Home from './Components/for_push/HomePage/HomePageApp'
import History from './Components/for_push/History/HistoryApp'

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/history' element={<History />} />





      </Routes>
    </Router>
  );
}

export default App;