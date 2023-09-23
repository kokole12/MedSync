import React, { useState, useEffect} from 'react';
import axios from "axios";
import './styles/Register.css';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/signup", {
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
            <h2 className='account'>Create an Account</h2>
            <p className='enter'>Enter your personal details to create account</p>
            <form action='' method='POST'>

                <label>Your Name</label>
                <input className='Input' type='text' ></input>

                <label>Email</label>
                <input className='Input' type='email' onChange={(e) =>{setEmail(e.target.value)} } ></input>

                <label>username</label>
                <input className='Input' type='text' ></input>

                <label>Password</label>
                <input className='Input' type='password' onChange={(e) =>{setPassword(e.target.value)} } />
                
                <label className='checkbox' >
                <input className='checkboxInput' type='checkbox' />
                Remember me
                </label>
                <button onClick={submit}>Register</button>
            </form>
            <p>Already have an account? <Link to='/Login'>Log in</Link></p>
        </div>
    </div>
    </div>
  )
}

export default Register;
