import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
import Doctors from './Components/Doctors/Doctors';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <div className="App">
   <Router> 
   <Routes>
	  	<Route path="/" element={<Landing />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
   </Routes>
    </Router>
    </div>
  );
}

export default App;
