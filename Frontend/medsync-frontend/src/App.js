import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
import Doctors from './Components/Doctors/Doctors';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
   <Router> 
   	<div className="App">
	  <Switch>
	  	<Route path="/">
	  		<Landing />
	  	</Route>
	  </Switch>
      	  {/* <Landing /> */}
	  {/* <Doctors /> */}
      	  {/* <Register /> */}
      	  {/* <Login /> */}
    	</div>
    </Router>
  );
}

export default App;
