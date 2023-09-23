import React, { useState, useEffect} from 'react';
import axios from "axios";
import './styles/Login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/", {
        email,password
      })
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className='RegisterForm'>
    
    <h2 className='head'>MedSync</h2>
    <div className='innerForm'>
        <div className='InputForm'>
            <h2 className='account'>Login to Your Account</h2>
            <p className='enter'>Enter your username & password to login</p>
            <form action='' method='POST'>

                <label>Email</label>
                <input className='Input' type='email' onChange={(e) =>{setEmail(e.target.value)} } ></input>

                <label>Password</label>
                <input className='Input' type='password' onChange={(e) =>{setPassword(e.target.value)} } />
                
                <label className='checkbox' >
                <input className='checkboxInput' type='checkbox' />
                Remember me
                </label>
                <button onClick={submit}>Login</button>
            </form>
            <p>Don't have account? <Link to='/Register'>Create an account</Link></p>
        </div>
    </div>

    </div>
  )
}

export default Login;